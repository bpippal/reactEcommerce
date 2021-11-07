
function ProductItem(props){
    
    const {eachVal, handleAddToCart} = props;

    return(
        <div className="box product-item">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5mB1OYIkW0teagunRxpunMTLoyJp0pRsbrg&usqp=CAU" alt="product" />
            <p><strong>Name - </strong>{eachVal.name}</p>
            <p><strong>Cost (INR) - </strong>{eachVal.cost}</p>
            <button onClick={() => handleAddToCart(eachVal)}>Add to cart</button>
        </div>
    )
}

//Better to react memo this
export default ProductItem;