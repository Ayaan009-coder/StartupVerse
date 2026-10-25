import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "./Cart.css";

function Cart() {
  const {
    cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    cartTotal,
  } = useCart();

  return (
    <main className="cart-page">
      <div className="cart-container">
        <Link to="/resources" className="cart-back-link">
          ← Continue exploring resources
        </Link>

        <p className="cart-eyebrow">YOUR STARTUP TOOLKIT</p>

        <h1 className="cart-title">Your Cart<span>.</span></h1>

        <p className="cart-subtitle">
          Everything you need to take your startup forward.
        </p>

        {cartItems.length === 0 ? (
          <section className="cart-empty">
            <div className="cart-empty-icon">🛒</div>

            <h2>Your cart is waiting for an idea.</h2>

            <p>
              Explore our founder resources and find the tools
              that fit your startup journey.
            </p>

            <Link to="/resources" className="cart-continue-btn">
              Explore Resources →
            </Link>
          </section>
        ) : (
          <div className="cart-layout">
            <section className="cart-items">
              {cartItems.map((item) => (
                <article className="cart-item" key={item.id}>
                  <div className="cart-item-info">
                    <p className="cart-item-label">FOUNDER RESOURCE</p>

                    <h2>{item.name}</h2>

                    <p className="cart-item-price">
                      ₹{item.price} per item
                    </p>

                    <button
                      type="button"
                      className="cart-remove-btn"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </div>

                  <div className="cart-item-actions">
                    <div className="cart-quantity">
                      <button
                        type="button"
                        aria-label={`Decrease ${item.name} quantity`}
                        onClick={() => decreaseQuantity(item.id)}
                      >
                        −
                      </button>

                      <span>{item.quantity}</span>

                      <button
                        type="button"
                        aria-label={`Increase ${item.name} quantity`}
                        onClick={() => increaseQuantity(item.id)}
                      >
                        +
                      </button>
                    </div>

                    <strong className="cart-price">
                      ₹{item.price * item.quantity}
                    </strong>
                  </div>
                </article>
              ))}
            </section>

            <aside className="cart-summary">
              <p className="cart-summary-label">ORDER SUMMARY</p>

              <h2>Investment in your idea.</h2>

              <div className="cart-summary-row">
                <span>Items</span>
                <span>
                  {cartItems.reduce(
                    (total, item) => total + item.quantity,
                    0
                  )}
                </span>
              </div>

              <div className="cart-summary-row">
                <span>Subtotal</span>
                <span>₹{cartTotal}</span>
              </div>

              <div className="cart-total">
                <span>Total</span>
                <strong>₹{cartTotal}</strong>
              </div>

              <button
                type="button"
                className="cart-btn"
                onClick={() =>
                  alert("Checkout is a demo. No payment was made.")
                }
              >
                Proceed to Checkout →
              </button>

              <p className="cart-demo-note">
                Demo checkout · No real payment
              </p>
            </aside>
          </div>
        )}
      </div>
    </main>
  );
}

export default Cart;
