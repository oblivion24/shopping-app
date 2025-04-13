
const Cart = (props) => {
    return(
        <div>
            <h3>Hello from cart section</h3>
            <h2>Your Cart</h2>
            {/* map items from a cart array , where items should be added on click to add to cart option */}
            <hr />
            <h4>Subtotal {props.price}</h4>
            <h4>Tax</h4>
            <h3>Total</h3>
            <button>Go To Checkout</button>
        </div>
    )
}
export default Cart 