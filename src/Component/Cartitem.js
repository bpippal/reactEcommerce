import React from "react";

    function Cartitem(props){

        const {eachVal, handleDeleteItem, handleAddToCart, deleteItemByOne} = props;
        

        return(
            <div className="cart-item box">
                <p>{eachVal.name}</p>
                <p>{eachVal.count}</p>
                <p>{eachVal.cost}</p>
                <p>{(eachVal.cost * eachVal.count)}</p>
                
                <div className="change-quantity">
                    <button onClick={() => handleDeleteItem(eachVal.name)}><i className="far fa-trash-alt fa-2x"></i></button>
                    <div className="up-down">
                    <button onClick={() => handleAddToCart(eachVal)}><i className="fas fa-sort-up"></i></button>
                    <button onClick={() => deleteItemByOne(eachVal.name)}><i className="fas fa-sort-down"></i></button>
                    </div>
                </div>
            </div>
        )
    }

    export default Cartitem;