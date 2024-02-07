const shoppingCart = {
    items: [],
    totalPrice: 0,
}; //IF THIS IS A BOX; What do we have access to?

document.addEventListener("DOMContentLoaded", () => {

    //items = BOX; Object, Array, Single value, ose Function
    // Object1 = { id: 1, name: 'Article #1', price: 150 }
    // Object2 = { id: 2, name: 'Article #2', price: 250 }
    // Object3 = { id: 3, name: 'Article #3', price: 350 }
    // Array = [Object1, Object2, Object3 ... Object30]

    function handleRemoveItemFromCart(id) {
       const item = shoppingCart.items.find((item) => item.id == id);
       shoppingCart.items = shoppingCart.items.filter((item) => item.id !== id)
       shoppingCart.totalPrice -= item.price
       handleShowItemFromCart()
    }

    function handleShowItemFromCart() {
        //this function needs to display all items from shoppingCart
        /**
         * shoppingCart.items = [->{id:1}<-, ->{id:2}<-, ->{id:3}<-]
         * const item = {id: 1} -> console.log('item', item.id)
         * const item = {id: 2} -> console.log('item', item.id)
         * const item = {id: 3} -> console.log('item', item.id)
         */

        document.getElementById('selected-items').innerHTML = ""; //reset UI;
        document.getElementById('total-price').innerHTML = shoppingCart.totalPrice;
        for(const item of shoppingCart.items) {

            const div = document.createElement('div');
                div.classList.add('col-12', 'border', 'border-5');
                div.addEventListener('click', () => handleRemoveItemFromCart(item.id))
            const pSelected = document.createElement('p');
                pSelected.innerHTML = "SELECTED!";
            const pArticle = document.createElement('p');
                pArticle.innerHTML = item.name;
            const pPrice = document.createElement('p');
                pPrice.innerHTML = '$' + item.price

            div.append(pSelected, pArticle, pPrice);
            document.getElementById('selected-items').append(div);
        }
    }

    function handleAddItemToCart(id, name, price) {
        const object = {
            id: id ,
            name: name,
            price: Number.parseInt(price),
        }

        shoppingCart.items.push(object)
        shoppingCart.totalPrice += Number.parseInt(price);
        handleShowItemFromCart()

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