class ProductsList{
    constructor(container = '.cards'){
        this.container = container;
        this.goods = [];
        this.fetchProducts();
        this.render();
        this.sumProductsPrice();
    }
    fetchProducts(){ // так и не понял для чего нужен этот метод когда можно сразу в this.goods(4 строчка) записать массив с товарами
        this.goods = [
            {id: 1, title: 'ELLERY X MO CAPSULE', description: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',preview: 'img/cards/card-good-1.jpg', price: 52},
            {id: 2, title: 'ELLERY X MO CAPSULE', description: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',preview: 'img/cards/card-good-2.jpg', price: 78},
            {id: 3, title: 'ELLERY X MO CAPSULE', description: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',preview: 'img/cards/card-good-3.jpg', price: 43},
            {id: 4, title: 'ELLERY X MO CAPSULE', description: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',preview: 'img/cards/card-good-4.jpg', price: 34},
            {id: 5, title: 'ELLERY X MO CAPSULE', description: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',preview: 'img/cards/card-good-5.jpg', price: 50},
            {id: 6, title: 'ELLERY X MO CAPSULE', description: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',preview: 'img/cards/card-good-6.jpg', price: 47}
        ];
    }
    render(){
        const block = document.querySelector('.cards');
        for (let product of this.goods){
            const item = new ProductItem(product);
            block.insertAdjacentHTML('beforeend', item.render());
        }
    }
    sumProductsPrice(){
        let sum = 0;
        for(let product of this.goods){
            sum += product.price;
        }
        console.log(`Сумма всех товаров: ${sum}`);
    }
}
class ProductItem{
    constructor(product){
        this.id = product.id;
        this.title = product.title;
        this.description = product.description;
        this.preview = product.preview;
        this.price = product.price;
    }
    render(){
        return `<div class="card">
            <div class="GoodCardImage">
                <img src="${this.preview}" alt="product">
                <div class="card-overlay">
                    <button class="card-add">Add to Cart</button>
                 </div>
            </div>
            <div class="cardTextMargin-left">
                <p class="pCard">${this.title}</p>
                <h1 class="h1Card">${this.description}</h1>
                <h1 class="cardPrice">$${this.price}.00</h1>
            </div>
        </div>`;
    }
}
class Basket{
    constructor(){
        this.addProductToBasket();
        this.removeProductFromBasket();
    }
    addProductToBasket(){ // добавляем товар в корзину

    }
    removeProductFromBasket(){  // удаляем товар из корзины

    }
}

let list = new ProductsList(); // все запускаем

// ДЗ 1 урока
// const products = [
//     {id: 1, title: 'ELLERY X MO CAPSULE', description: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',preview: 'img/cards/card-good-1.jpg', price: 52},
//     {id: 2, title: 'ELLERY X MO CAPSULE', description: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',preview: 'img/cards/card-good-2.jpg', price: 78},
//     {id: 3, title: 'ELLERY X MO CAPSULE', description: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',preview: 'img/cards/card-good-3.jpg', price: 43},
//     {id: 4, title: 'ELLERY X MO CAPSULE', description: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',preview: 'img/cards/card-good-4.jpg', price: 34},
//     {id: 5, title: 'ELLERY X MO CAPSULE', description: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',preview: 'img/cards/card-good-5.jpg', price: 50},
//     {id: 6, title: 'ELLERY X MO CAPSULE', description: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',preview: 'img/cards/card-good-6.jpg', price: 47}
// ];
// //Функция для формирования верстки каждого товара
// const renderProduct = (product) => {
//     return `<div class="card">
//                 <div class="GoodCardImage">
//                     <img src="${product.preview}" alt="product">
//                     <div class="card-overlay">
//                         <button class="card-add">Add to Cart</button>
//                      </div>
//                 </div>
//                 <div class="cardTextMargin-left">
//                     <p class="pCard">${product.title}</p>
//                     <h1 class="h1Card">${product.description}</h1>
//                     <h1 class="cardPrice">$${product.price}.00</h1>
//                 </div>
//             </div>`
// };
// const renderPage = list => {
//     document.querySelector('.cards').innerHTML = list.map(item => renderProduct(item)).join('');
// };
// renderPage(products);

// // const getFullPriceOfGoods = () => {
// //     let sum = 0;
// //     products.forEach((product) =>{
// //         sum += product.price;
// //     });
// //     alert(sum);
// // }
// // getFullPriceOfGoods(products);
