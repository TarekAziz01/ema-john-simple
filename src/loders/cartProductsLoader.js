import { getShoppingCart } from "../utilities/fakedb";
// custom loader 
const cartProductsLoader = async () => {
    const loadedProducts = await fetch('products.json');
    const products = await loadedProducts.json();

    // if cart data is in database,you have to use async await
    const storedCart = getShoppingCart();
    console.log(storedCart)
    const savedCart = [];
    
    for (const id in storedCart) {
        console.log(id)
        const addedProduct = products.find(pd => pd.id === id);
        if (addedProduct) {
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            savedCart.push(addedProduct);
        }
    }
    return savedCart;
}

export default cartProductsLoader;