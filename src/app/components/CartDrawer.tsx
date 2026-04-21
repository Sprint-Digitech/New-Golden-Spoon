import { motion, AnimatePresence } from "motion/react";
import { X, Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import { MenuItem } from "../data/menuData";

export interface CartItem {
  item: MenuItem;
  variant: string;
  price: number;
  quantity: number;
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (index: number, newQuantity: number) => void;
  onRemoveItem: (index: number) => void;
  onCheckout: () => void;
}

export function CartDrawer({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onCheckout,
}: CartDrawerProps) {
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const deliveryFee = total >= 199 ? 0 : 30;
  const finalTotal = total + deliveryFee;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full sm:w-96 bg-background border-l border-border z-50 shadow-2xl flex flex-col"
          >
            <div className="p-6 border-b border-border flex items-center justify-between">
              <div className="flex items-center gap-3">
                <ShoppingBag className="w-6 h-6 text-primary" />
                <h2 className="text-2xl text-primary">Your Cart</h2>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-muted rounded-lg transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {cartItems.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <ShoppingBag className="w-16 h-16 text-muted-foreground mb-4" />
                  <p className="text-muted-foreground text-lg">Your cart is empty</p>
                  <p className="text-sm text-muted-foreground mt-2">Add some delicious items!</p>
                </div>
              ) : (
                cartItems.map((cartItem, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-card/50 backdrop-blur-sm rounded-lg p-4 border border-border"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex-1">
                        <h3 className="text-foreground mb-1">{cartItem.item.name}</h3>
                        {cartItem.variant && (
                          <p className="text-sm text-muted-foreground">{cartItem.variant}</p>
                        )}
                      </div>
                      <button
                        onClick={() => onRemoveItem(index)}
                        className="p-1.5 hover:bg-destructive/20 rounded-lg transition-colors"
                      >
                        <Trash2 className="w-4 h-4 text-destructive" />
                      </button>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 bg-muted rounded-lg p-1">
                        <button
                          onClick={() => onUpdateQuantity(index, cartItem.quantity - 1)}
                          className="p-1.5 hover:bg-background rounded transition-colors"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-8 text-center">{cartItem.quantity}</span>
                        <button
                          onClick={() => onUpdateQuantity(index, cartItem.quantity + 1)}
                          className="p-1.5 hover:bg-background rounded transition-colors"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                      <span className="text-primary">₹{cartItem.price * cartItem.quantity}</span>
                    </div>
                  </motion.div>
                ))
              )}
            </div>

            {cartItems.length > 0 && (
              <div className="border-t border-border p-6 space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="text-foreground">₹{total}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Delivery Fee</span>
                    <span className={deliveryFee === 0 ? "text-green-500" : "text-foreground"}>
                      {deliveryFee === 0 ? "FREE" : `₹${deliveryFee}`}
                    </span>
                  </div>
                  {total < 199 && (
                    <p className="text-xs text-primary">
                      Add ₹{199 - total} more for free delivery!
                    </p>
                  )}
                  <div className="flex justify-between pt-2 border-t border-border">
                    <span className="text-foreground">Total</span>
                    <span className="text-xl text-primary">₹{finalTotal}</span>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={onCheckout}
                  className="w-full py-4 bg-gradient-to-r from-primary to-secondary text-primary-foreground rounded-lg hover:opacity-90 transition-all shadow-lg shadow-primary/30"
                >
                  Proceed to Checkout
                </motion.button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
