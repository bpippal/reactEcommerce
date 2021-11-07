    import Cartitem from "./Cartitem";
    import React from "react";

    function Cart(props){

        const {cartArr, handleDeleteItem, handleAddToCart, deleteItemByOne} = props;

        //Identity the unique elements in the array & their count-
        let unqCartArr;
        unqCartArr = Array.from(new Set(cartArr.map(a => a.name)))
        .map(name => {
        return cartArr.find(a => a.name === name)
        })


        //Finding the count of each Unique cart items-
        unqCartArr.forEach((eachUnq) => {

            eachUnq.count = 0;

            cartArr.forEach((eachCart) => {
                if(eachUnq.name === eachCart.name){
                    eachUnq.count += 1;
                }
            })
        })

        let totCost = 0;
        unqCartArr.forEach((eachUnq) => {
            let cost = parseInt(eachUnq.cost);

            let toAdd = cost * eachUnq.count;
            
            totCost += toAdd;   
        })


        return(
            <div className="box cart">
                <div className="cart-top">
                    <img src="https://thumbs.dreamstime.com/b/shopping-cart-icon-vector-eps-trolley-logo-web-icons-shop-button-182252657.jpg" alt="cart-logo"/>
                    <h2>Shopping Cart</h2>
                </div>

                <div className="heading">
                    <p><strong>Item Name</strong></p>
                    <p><strong>Quantity</strong></p>
                    <p><strong>Unit Cost</strong></p>
                    <p><strong>Cost</strong></p>
                    <p><strong>Change</strong></p>
                </div>
                
                <div className="cart-item-container">
                    {
                        unqCartArr.length > 0 ? (unqCartArr.map((eachVal,index) => (<Cartitem key={index} eachVal={eachVal} deleteItemByOne={deleteItemByOne} handleDeleteItem={handleDeleteItem} handleAddToCart={handleAddToCart} />))) : (<h3>Your cart is empty!</h3>)
                    }
                </div>
                

                <div className="total-cost">
                    <p><strong>Total Cost - {totCost}</strong></p>
                </div>

            </div>
        )
    }

    export default React.memo(Cart);
