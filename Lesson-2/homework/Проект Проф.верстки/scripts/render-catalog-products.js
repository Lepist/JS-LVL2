const products = [
    {id: 1, title: 'ELLERY X MO CAPSULE', description: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',preview: 'img/cards/card-good-1.jpg', price: 52},
    {id: 2, title: 'ELLERY X MO CAPSULE', description: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',preview: 'img/cards/card-good-2.jpg', price: 78},
    {id: 3, title: 'ELLERY X MO CAPSULE', description: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',preview: 'img/cards/card-good-3.jpg', price: 43},
    {id: 4, title: 'ELLERY X MO CAPSULE', description: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',preview: 'img/cards/card-good-4.jpg', price: 34},
    {id: 5, title: 'ELLERY X MO CAPSULE', description: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',preview: 'img/cards/card-good-5.jpg', price: 50},
    {id: 6, title: 'ELLERY X MO CAPSULE', description: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',preview: 'img/cards/card-good-6.jpg', price: 47},
    {id: 7, title: 'ELLERY X MO CAPSULE', description: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',preview: 'img/cards/card-good-7.jpg', price: 81},
    {id: 8, title: 'ELLERY X MO CAPSULE', description: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',preview: 'img/cards/card-good-8.jpg', price: 29},
    {id: 9, title: 'ELLERY X MO CAPSULE', description: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',preview: 'img/cards/card-good-9.jpg', price: 76}
];
//Функция для формирования верстки каждого товара
const renderProduct = (product) => {
    return `<div class="card">
                <div class="GoodCardImage">
                    <img src="${product.preview}" alt="product">
                    <div class="card-overlay">
                        <button class="card-add">Add to Cart</button>
                     </div>
                </div>
                <div class="cardTextMargin-left">
                    <p class="pCard">${product.title}</p>
                    <h1 class="h1Card">${product.description}</h1>
                    <h1 class="cardPrice">$${product.price}.00</h1>
                </div>
            </div>`
};
const renderPage = list => {
    document.querySelector('.cards').innerHTML = list.map(item => renderProduct(item)).join('');
};
renderPage(products);

// const getFullPriceOfGoods = () => {
//     let sum = 0;
//     products.forEach((product) =>{
//         sum += product.price;
//     });
//     alert(sum);
// }
// getFullPriceOfGoods(products);
