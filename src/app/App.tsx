import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { PopularItems } from "./components/PopularItems";
import { MenuSection } from "./components/MenuSection";
import { ComboSection } from "./components/ComboSection";
import { Testimonials } from "./components/Testimonials";
import { Footer } from "./components/Footer";
import { CartDrawer, CartItem } from "./components/CartDrawer";
import { BookingModal } from "./components/BookingModal";
import { CheckoutAddressDrawer, SavedAddress, PaymentMethod } from "./components/CheckoutAddressDrawer";

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isAddressOpen, setIsAddressOpen] = useState(false);
  const [savedAddress, setSavedAddress] = useState<SavedAddress | null>(null);

  const handleAddToCart = (newItem: CartItem) => {
    setCartItems((prev) => {
      const existingIndex = prev.findIndex(
        (item) =>
          item.item.name === newItem.item.name &&
          item.variant === newItem.variant
      );

      if (existingIndex >= 0) {
        const updated = [...prev];
        updated[existingIndex].quantity += newItem.quantity;
        return updated;
      }

      return [...prev, newItem];
    });
  };

  const handleUpdateQuantity = (index: number, newQuantity: number) => {
    if (newQuantity <= 0) {
      handleRemoveItem(index);
      return;
    }

    setCartItems((prev) => {
      const updated = [...prev];
      updated[index].quantity = newQuantity;
      return updated;
    });
  };

  const handleRemoveItem = (index: number) => {
    setCartItems((prev) => prev.filter((_, i) => i !== index));
  };

  const handleProceedToAddress = () => {
    setIsCartOpen(false);
    setIsAddressOpen(true);
  };

  const handlePlaceOrder = (address: SavedAddress, paymentMethod: PaymentMethod) => {
    setSavedAddress(address);
    alert(
      paymentMethod === "upi"
        ? `Payment completed for ${address.fullName}. Your online order is confirmed and we'll deliver soon.`
        : `Address saved for ${address.fullName}. Your cash order is confirmed and we'll deliver soon.`
    );
    setCartItems([]);
    setIsAddressOpen(false);
  };

  const scrollToMenu = () => {
    const element = document.getElementById("menu");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar
        cartCount={cartCount}
        onCartClick={() => setIsCartOpen(true)}
        onBookClick={() => setIsBookingOpen(true)}
      />

      <Hero
        onMenuClick={scrollToMenu}
        onOrderClick={() => {
          scrollToMenu();
          setTimeout(() => setIsCartOpen(true), 500);
        }}
        onBookClick={() => setIsBookingOpen(true)}
      />

      <About />

      <PopularItems />

      <MenuSection onAddToCart={handleAddToCart} />

      <ComboSection onAddToCart={handleAddToCart} />

      <Testimonials />

      <Footer />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onCheckout={handleProceedToAddress}
      />

      <CheckoutAddressDrawer
        isOpen={isAddressOpen}
        cartItems={cartItems}
        savedAddress={savedAddress}
        onClose={() => {
          setIsAddressOpen(false);
          setIsCartOpen(true);
        }}
        onBackToCart={() => {
          setIsAddressOpen(false);
          setIsCartOpen(true);
        }}
        onPlaceOrder={handlePlaceOrder}
      />

      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/919217014763"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg shadow-[#25D366]/30 hover:bg-[#20bd5a] transition-all hover:scale-110 animate-bounce"
        aria-label="Chat on WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M12.031 2C6.516 2 2.051 6.467 2.051 11.984c0 1.758.457 3.486 1.328 5.006L2 22l5.137-1.344c1.459.803 3.094 1.229 4.894 1.229c5.514 0 9.979-4.469 9.979-9.984C22.01 6.467 17.545 2 12.031 2zM17.062 15.688c-.229.641-1.326 1.213-1.838 1.258-.451.039-1.025.137-3.322-.768-2.766-1.088-4.545-3.924-4.682-4.105-.137-.182-1.119-1.492-1.119-2.846 0-1.355.71-2.021.957-2.285.247-.264.536-.33.714-.33s.354-.002.511-.002c.158 0 .37-.061.584.459.228.551.781 1.916.852 2.062s.117.316.026.5c-.09.184-.137.299-.273.463-.137.166-.285.34-.406.463-.131.129-.271.271-.117.535.154.264.686 1.135 1.475 1.838 1.016.906 1.861 1.186 2.125 1.314.264.129.418.105.572-.066s.582-.676.738-.908c.158-.234.314-.193.559-.098.244.096 1.551.73 1.816.861s.443.197.508.309c-.046.155-.046.583-.284 1.224z"
          ></path>
        </svg>
      </a>
    </div>
  );
}
