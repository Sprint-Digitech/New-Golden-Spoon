const fs = require('fs');
const path = require('path');

const downloadsDir = 'd:\\Downloads';
const publicMenuDir = path.join(__dirname, 'public', 'menu');
const menuDataPath = path.join(__dirname, 'src', 'app', 'data', 'menuData.ts');

if (!fs.existsSync(publicMenuDir)) {
    fs.mkdirSync(publicMenuDir, { recursive: true });
}

const files = fs.readdirSync(downloadsDir);
const imageFiles = files.filter(f => f.match(/\.(jpg|jpeg|png)$/i));

// Some words to ignore while matching
const ignoreWords = ['photorealistic', 'rich', 'modern', 'premium', 'indian', 'cafe', 'style', 'dish', 'with', 'and', 'close', 'up', 'in', 'a', 'bowl', 'on', 'the', 'of', 'for', 'menu', 'restaurant', 'website'];

function normalizeString(str) {
    let s = str.toLowerCase().replace(/[^a-z0-9]/g, ' ');
    ignoreWords.forEach(w => {
        s = s.replace(new RegExp('\\b' + w + '\\b', 'g'), ' ');
    });
    return s.split(' ').filter(x => x).join(' ');
}

let menuDataContent = fs.readFileSync(menuDataPath, 'utf8');

// We will find all item names in menuDataContent
// Match: "name": "Item Name"
const nameRegex = /"name":\s*"([^"]+)"/g;
let match;
const itemNames = new Set();
while ((match = nameRegex.exec(menuDataContent)) !== null) {
    itemNames.add(match[1]);
}

console.log(`Found ${itemNames.size} unique item names in menuData.ts`);

const mapping = {};

itemNames.forEach(itemName => {
    const normItem = normalizeString(itemName);
    let bestMatch = null;
    let bestScore = 0;

    const itemTokens = normItem.split(' ');

    imageFiles.forEach(img => {
        const normImg = normalizeString(img);
        const imgTokens = normImg.split(' ');
        
        let score = 0;
        itemTokens.forEach(token => {
            if (imgTokens.includes(token)) score += 2;
            else if (normImg.includes(token)) score += 1;
        });

        // Penalize if image has many extra words not related to item
        score -= (imgTokens.length - itemTokens.length) * 0.1;

        if (score > bestScore) {
            bestScore = score;
            bestMatch = img;
        }
    });

    if (bestMatch && bestScore > 0) {
        mapping[itemName] = bestMatch;
        console.log(`Mapped "${itemName}" to "${bestMatch}" (score: ${bestScore})`);
        
        // Copy file
        const srcPath = path.join(downloadsDir, bestMatch);
        // clean up the filename for public use
        const ext = path.extname(bestMatch);
        const safeName = itemName.toLowerCase().replace(/[^a-z0-9]/g, '-') + ext;
        const destPath = path.join(publicMenuDir, safeName);
        fs.copyFileSync(srcPath, destPath);
        
        // Update menuDataContent
        // Find the block for this item and replace its image
        // It looks like:
        // "name": "Item Name",
        // "price": 180,
        // "image": "..."
        // We'll use a regex that matches "name": "Item Name" and the following "image": "..."
        
        // Construct a safe regex for the item name
        const safeItemName = itemName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        
        // This regex looks for the name, followed by any characters until "image": "...", and replaces the URL
        const itemRegex = new RegExp(`("name"\\s*:\\s*"${safeItemName}"[\\s\\S]*?"image"\\s*:\\s*)"[^"]*"`, 'g');
        menuDataContent = menuDataContent.replace(itemRegex, `$1"/menu/${safeName}"`);
    } else {
        console.log(`No match found for "${itemName}"`);
    }
});

fs.writeFileSync(menuDataPath, menuDataContent, 'utf8');
console.log('menuData.ts updated successfully.');
