
let products = {
    data: [
        {
            id: 1,
            name: "MATRIX 1999 DECK",
            price: "780.000đ - 1.470.000đ",
            image: "images/matrix-1999-1.jpg"
        },
        {
            id: 2,
            name: "RAEDA DECK",
            price: "780.000đ - 1.470.000đ",
            image: "images/Raeda-Deck.jpg"
        },
        {
            id: 3,
            name: "MUSTY DECK",
            price: "780.000đ - 1.470.000đ",
            image: "images/Musty-Deck.jpg"
        },
        {
            id: 4,
            name: "TRISTIQUE DECK",
            price: "780.000đ - 1.470.000đ",
            image: "images/Tristique-deck.jpg"
        },
        {
            id: 5,
            name: "FIELD TRIP DECK",
            price: "780.000đ - 1.470.000đ",
            image: "images/Fied-Trip-deck.jpg"
        },
        {
            id: 6,
            name: "TARO RAINBOW LOGO DECK",
            price: "780.000đ - 1.670.000đ",
            image: "images/web-5.jpg"
        },
        {
            id: 7,
            name: "NEON RAINBOW LOGO DECK",
            price: "780.000đ - 1.670.000đ",
            image: "images/web-1.jpg"
        },
        {
            id: 8,
            name: "ORANAGE RAINBOW LOGO DECK",
            price: "780.000đ - 1.670.000đ",
            image: "images/web-2.jpg"
        },
        {
            id: 9,
            name: "BLUE RAINBOW LOGO DECK",
            price: "780.000đ - 1.670.000đ",
            image: "images/web-3.jpg"
        },
        {
            id: 10,
            name: "WHITE RAINBOW LOGO DECK",
            price: "780.000đ - 1.670.000đ",
            image: "images/web-4.jpg"
        },
        {
            id: 11,
            name: "CUTIS MODEL DECK",
            price: "780.000đ - 1.670.000đ",
            image: "images/cutis.jpg"
        },
        {
            id: 12,
            name: "CAM VU MODEL DECK",
            price: "780.000đ - 1.670.000đ",
            image: "images/cam-vu.jpg"
        },
        {
            id: 13,
            name: "SON NGUYEN MODEL DECK",
            price: "780.000đ - 1.670.000đ",
            image: "images/son-nguyen.jpg"
        },
    ]
};


document.addEventListener("DOMContentLoaded", function() {
    const productsContainer = document.getElementById('products');

    // Render products
    products.data.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');

        const imageElement = document.createElement('img');
        imageElement.src = product.image;
        productElement.appendChild(imageElement);

        const nameElement = document.createElement('p');
        nameElement.textContent = product.name;
        productElement.appendChild(nameElement);

        const priceElement = document.createElement('p');
        priceElement.textContent = product.price;
        productElement.appendChild(priceElement);

        const buttonElement = document.createElement('button');
        buttonElement.textContent = 'Add to Cart';
        buttonElement.addEventListener('click', function() {
            addToCart(product);
        });
        productElement.appendChild(buttonElement);

        productsContainer.appendChild(productElement);
    });

    // Function to add product to cart
    function addToCart(product) {
        // let cart = JSON.parse(localStorage.getItem('cart')) || [];
        // cart.push(product);
        // localStorage.setItem('cart', JSON.stringify(cart));
        // alert('Product added to cart!');

        const userData = JSON.parse(localStorage.getItem('userData'));
        
        if(userData) {
            // Nếu có userData, thực hiện thêm sản phẩm vào giỏ hàng
            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            cart.push(product);
            localStorage.setItem('cart', JSON.stringify(cart));
            alert('Product added to cart!');
        } else {
            // Nếu không có userData, cảnh báo người dùng phải đăng nhập trước khi thêm sản phẩm vào giỏ hàng
            alert('Please log in first to add products to your cart.');
        }
    }
});
