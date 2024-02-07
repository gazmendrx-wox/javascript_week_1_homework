const shoppingCart = {
    items: []
}; //IF THIS IS A BOX; What do we have access to?

document.addEventListener("DOMContentLoaded", () => {

    //items = BOX; Object, Array, Single value, ose Function
    // Object1 = { id: 1, name: 'Article #1', price: 150 }
    // Object2 = { id: 2, name: 'Article #2', price: 250 }
    // Object3 = { id: 3, name: 'Article #3', price: 350 }
    // Array = [Object1, Object2, Object3 ... Object30]

    function handleAddItemToCart(id, name, price) {
        console.log('adding item to cart');
        //1.3 
        const object = {
            id: id ,
            name: name,
            price: price
        }

        shoppingCart.items.push(object)

    }

        
    /**
     * document.querySelectorAll
     * document.querySelector
     * document.getElementById
     * 
     */
    const articles = document.querySelectorAll(".article"); //returns array;
    for(const article of articles) {
        const name = article.dataset.name;
        const price = article.dataset.price;
        const id = article.dataset.id; 

        article.addEventListener("click", () => handleAddItemToCart(id, name, price));
    }
});