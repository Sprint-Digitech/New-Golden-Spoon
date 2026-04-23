import { useEffect, useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, CreditCard, MapPin, Smartphone, ShoppingBag, X } from "lucide-react";
import { CartItem } from "./CartDrawer";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

export interface SavedAddress {
  fullName: string;
  phone: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  pincode: string;
}

export type PaymentMethod = "cash" | "upi";

interface CheckoutAddressDrawerProps {
  isOpen: boolean;
  cartItems: CartItem[];
  savedAddress: SavedAddress | null;
  onClose: () => void;
  onBackToCart: () => void;
  onPlaceOrder: (address: SavedAddress, paymentMethod: PaymentMethod) => void;
}

const emptyAddress: SavedAddress = {
  fullName: "",
  phone: "",
  addressLine1: "",
  addressLine2: "",
  city: "",
  state: "",
  pincode: "",
};

export function CheckoutAddressDrawer({
  isOpen,
  cartItems,
  savedAddress,
  onClose,
  onBackToCart,
  onPlaceOrder,
}: CheckoutAddressDrawerProps) {
  const [form, setForm] = useState<SavedAddress>(savedAddress ?? emptyAddress);
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("cash");
  const [upiPaymentOpened, setUpiPaymentOpened] = useState(false);
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const deliveryFee = total >= 199 ? 0 : 30;
  const finalTotal = total + deliveryFee;
  const merchantName = import.meta.env.VITE_MERCHANT_NAME ?? "Golden Spoon";
  const merchantUpiId = import.meta.env.VITE_MERCHANT_UPI_ID ?? "";

  useEffect(() => {
    if (isOpen) {
      setForm(savedAddress ?? emptyAddress);
      setPaymentMethod("cash");
      setUpiPaymentOpened(false);
    }
  }, [isOpen, savedAddress]);

  const updateField = (field: keyof SavedAddress, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (paymentMethod === "upi" && !upiPaymentOpened) {
      handleOpenUpiPayment();
      return;
    }

    onPlaceOrder(form, paymentMethod);
  };

  const handleOpenUpiPayment = () => {
    if (!merchantUpiId) {
      alert("Online payment setup missing. Please add your merchant UPI ID to enable this option.");
      return;
    }

    const params = new URLSearchParams({
      pa: merchantUpiId,
      pn: merchantName,
      am: finalTotal.toFixed(2),
      cu: "INR",
      tn: `Order from Golden Spoon - ${form.fullName || "Customer"}`,
    });

    const upiUrl = `upi://pay?${params.toString()}`;
    window.open(upiUrl, "_blank", "noopener,noreferrer");
    setUpiPaymentOpened(true);
  };

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
            className="fixed right-0 top-0 h-full w-full sm:w-[30rem] md:w-[32rem] bg-background border-l border-border z-50 shadow-2xl flex flex-col"
          >
            <div className="p-6 border-b border-border flex items-center justify-between">
              <div className="flex items-center gap-3">
                <MapPin className="w-6 h-6 text-primary" />
                <div>
                  <h2 className="text-2xl text-primary">Save Address</h2>
                  <p className="text-xs text-muted-foreground">Add delivery details before checkout</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-muted rounded-lg transition-colors"
                aria-label="Close address form"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              <div className="rounded-2xl border border-border bg-card/50 backdrop-blur-sm p-4">
                <div className="flex items-center gap-3">
                  <ShoppingBag className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Order summary</p>
                    <p className="text-foreground">{cartItems.length} item(s) ready for delivery</p>
                  </div>
                </div>
                <div className="mt-4 space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="text-foreground">₹{total}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Delivery Fee</span>
                    <span className={deliveryFee === 0 ? "text-green-500" : "text-foreground"}>
                      {deliveryFee === 0 ? "FREE" : `₹${deliveryFee}`}
                    </span>
                  </div>
                  <div className="flex justify-between pt-2 border-t border-border">
                    <span className="text-foreground">Total</span>
                    <span className="text-xl text-primary">₹{finalTotal}</span>
                  </div>
                </div>
              </div>

              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="space-y-4 rounded-2xl border border-border bg-card/50 backdrop-blur-sm p-4">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name</Label>
                    <div className="rounded-xl border border-border bg-background/40 p-3">
                      <Input
                        id="fullName"
                        value={form.fullName}
                        onChange={(e) => updateField("fullName", e.target.value)}
                        placeholder="Customer name"
                        required
                        className="border-0 bg-transparent p-0 shadow-none focus-visible:ring-0"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <div className="rounded-xl border border-border bg-background/40 p-3">
                      <Input
                        id="phone"
                        type="tel"
                        value={form.phone}
                        onChange={(e) => updateField("phone", e.target.value)}
                        placeholder="10-digit mobile number"
                        required
                        className="border-0 bg-transparent p-0 shadow-none focus-visible:ring-0"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="addressLine1">Address Line 1</Label>
                    <div className="rounded-xl border border-border bg-background/40 p-3">
                      <Textarea
                        id="addressLine1"
                        value={form.addressLine1}
                        onChange={(e) => updateField("addressLine1", e.target.value)}
                        placeholder="House no, street, area"
                        required
                        className="min-h-24 border-0 bg-transparent p-0 shadow-none focus-visible:ring-0"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="addressLine2">Address Line 2</Label>
                    <div className="rounded-xl border border-border bg-background/40 p-3">
                      <Input
                        id="addressLine2"
                        value={form.addressLine2}
                        onChange={(e) => updateField("addressLine2", e.target.value)}
                        placeholder="Landmark, apartment, notes"
                        className="border-0 bg-transparent p-0 shadow-none focus-visible:ring-0"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                    <div className="space-y-2">
                      <Label htmlFor="city">City</Label>
                      <div className="rounded-xl border border-border bg-background/40 p-3">
                        <Input
                          id="city"
                          value={form.city}
                          onChange={(e) => updateField("city", e.target.value)}
                          placeholder="City"
                          required
                          className="border-0 bg-transparent p-0 shadow-none focus-visible:ring-0"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="state">State</Label>
                      <div className="rounded-xl border border-border bg-background/40 p-3">
                        <Input
                          id="state"
                          value={form.state}
                          onChange={(e) => updateField("state", e.target.value)}
                          placeholder="State"
                          required
                          className="border-0 bg-transparent p-0 shadow-none focus-visible:ring-0"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="pincode">Pincode</Label>
                      <div className="rounded-xl border border-border bg-background/40 p-3">
                        <Input
                          id="pincode"
                          value={form.pincode}
                          onChange={(e) => updateField("pincode", e.target.value)}
                          placeholder="Pincode"
                          required
                          className="border-0 bg-transparent p-0 shadow-none focus-visible:ring-0"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 rounded-2xl border border-border bg-card/50 backdrop-blur-sm p-4">
                  <div className="flex items-center gap-3">
                    <CreditCard className="w-5 h-5 text-primary" />
                    <div>
                      <p className="text-foreground">Payment method</p>
                      <p className="text-xs text-muted-foreground">Choose how customer wants to pay</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <button
                      type="button"
                      onClick={() => {
                        setPaymentMethod("cash");
                        setUpiPaymentOpened(false);
                      }}
                      className={`rounded-xl border p-4 text-left transition-all ${
                        paymentMethod === "cash"
                          ? "border-primary bg-primary/10"
                          : "border-border bg-background/40 hover:border-primary/60"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className="grid h-10 w-10 place-items-center rounded-full bg-primary/10 text-primary">
                          <span className="text-sm font-semibold">₹</span>
                        </div>
                        <div>
                          <p className="text-foreground">Cash on Delivery</p>
                          <p className="text-xs text-muted-foreground">Pay when order arrives</p>
                        </div>
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => setPaymentMethod("upi")}
                      className={`rounded-xl border p-4 text-left transition-all ${
                        paymentMethod === "upi"
                          ? "border-primary bg-primary/10"
                          : "border-border bg-background/40 hover:border-primary/60"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className="grid h-10 w-10 place-items-center rounded-full bg-primary/10 text-primary">
                          <Smartphone className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-foreground">UPI / Online</p>
                          <p className="text-xs text-muted-foreground">Pay instantly from any UPI app</p>
                        </div>
                      </div>
                    </button>
                  </div>

                  {paymentMethod === "upi" && (
                    <div className="rounded-xl border border-dashed border-primary/40 bg-background/50 p-4 space-y-2">
                      <p className="text-sm text-foreground">Online payment</p>
                      {merchantUpiId ? (
                        <>
                          <p className="text-sm text-muted-foreground">
                            Click the button below to open your UPI app and pay ₹{finalTotal}.
                          </p>
                          <p className="text-xs text-muted-foreground">
                            Merchant UPI: {merchantUpiId}
                          </p>
                          {upiPaymentOpened && (
                            <p className="text-xs text-green-500">
                              UPI link opened. Complete the payment, then place the order.
                            </p>
                          )}
                        </>
                      ) : (
                        <p className="text-sm text-amber-500">
                          Add <span className="font-medium">VITE_MERCHANT_UPI_ID</span> in your environment to enable online payment.
                        </p>
                      )}
                    </div>
                  )}
                </div>

                <div className="flex gap-3 pt-2">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={onBackToCart}
                    className="flex-1"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Back to Cart
                  </Button>
                  <Button
                    type="submit"
                    className="flex-1 bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:opacity-90"
                  >
                    {paymentMethod === "upi" && !upiPaymentOpened
                      ? "Pay Online"
                      : paymentMethod === "upi"
                        ? "I Have Paid & Place Order"
                        : "Save Address & Place Order"}
                  </Button>
                </div>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
