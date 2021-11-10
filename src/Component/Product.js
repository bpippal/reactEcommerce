import {useState} from "react";
import Cart from "./Cart";
import ProductItem from "./ProductItem";

function Product(props){

    //Array that store's the Product objects
    const [prodArr, setProAdd] = useState([]);

    //Used to check if "Add a Product" button is pressed
    const [isAddProduct, setAddProduct] = useState(false);

    //Cart items are stored in Cart array
    const [cartArr, setCartArr] = useState([]);

    //Product name and cost    
    const [inpName, setInpName] = useState("");
    const [inpCost, setInpCost] = useState("");


    //Open the modal
    function handleAddProduct(){
        setAddProduct(true);
    }

    //Close the modal
    function closeModal(){
        setAddProduct(false);
    }

    //Add product to prodArray
    function handleAddToList(){

        const newObj = {
            name:inpName,
            cost:inpCost
        }

        setProAdd([...prodArr, newObj]);

        setInpCost("");
        setInpName("");

        setAddProduct(false);
    }

    //Function to add items to cart
    function handleAddToCart(eachVal){
        setCartArr([...cartArr, eachVal]);
    }

    //Function to delete Item
    function handleDeleteItem(itemName){

        let i=0;

        while (i < cartArr.length) {
            if (cartArr[i].name === itemName) {
              cartArr.splice(i, 1);
            } else {
              ++i;
            }
        }
        
        setCartArr([...cartArr]);
    }

    function deleteItemByOne(itemName){

        for(let i=0; i<cartArr.length; i++){
            if(cartArr[i].name === itemName){
                cartArr.splice(i,1);
                break;
            }
        }

        setCartArr([...cartArr]);
    }

    return(
        <div className="box first-product">
            
            <div className="product-container">
            <div className="product-add box">
    
            <div className="add-button">
                <img src="https://booster.io/wp-content/uploads/product-add-to-cart-e1438362099361.png" alt=""/>            
                <button onClick={handleAddProduct} className="product-add">Add a Product</button>
                <ul>
                    <li>Product name should be unique</li>
                    <li>Product cost should be a number</li>
                </ul>
            </div>
            

            {/* Conditional Rendering */}
            {
                isAddProduct ? <div className={`modal-bg ${isAddProduct ? "bg-active" : ""} `}>
                <div className="modal box">
                    <div className="modal-item">
                        
                    <label>Product name</label>
                    <input value={inpName} onChange={(event) => setInpName(event.target.value)} id="name" className="name" placeholder="Enter Product name"/>
                    </div>

                    <div className="modal-item">
                    <label>Product cost</label>
                    <input value={inpCost} onChange={(event) => setInpCost(event.target.value)} id="cost" className="cost" placeholder="Enter Product cost"/>
                    </div>

                    <div className="modal-button">
                        <button onClick={handleAddToList} >Add to List</button>
                        <button onClick={closeModal}>Close</button>
                    </div>
                </div>

            </div>

            : <div className={`modal-bg ${isAddProduct ? "bg-active" : ""} `}>
            

        </div>
        }

            

            </div>

            <div className="product-list box">
            Product List-

                <div className="item-container">
                {
                    prodArr.length > 0 ? (prodArr.map((eachVal,index) => (<ProductItem key={index} eachVal={eachVal} handleAddToCart={handleAddToCart} />))) : (<h3>Product List is Empty. Click on "Add a Product" to add Product's</h3>)
                }
                </div>
            </div>    
            </div>

            <Cart cartArr={cartArr} handleDeleteItem={handleDeleteItem} deleteItemByOne={deleteItemByOne} handleAddToCart={handleAddToCart}/>
        </div>
    )
}

export default Product;