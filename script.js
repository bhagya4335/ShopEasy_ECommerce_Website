const products = [
    { id: 1, name: 'Lymio', price: 379, description: 'Men T-Shirt || Regular Fit T-Shirt for Men || Printed T Shirt', image: 'https://m.media-amazon.com/images/I/61RY4G0j5XL._AC_SR405%2C405_.jpg' },
    { id: 2, name: 'Ritravi', price: 399, description: 'Lifestyle Mens Regular Fit Casual Solid 100% Organic Cotton Short Sleeve', image: 'https://m.media-amazon.com/images/I/41lqCX0b8PL._AC_UF480,600_SR480,600_.jpg' },
    { id: 3, name: 'Scott International', price: 549, description: 'Mens Regular Fit T-Shirt - Cotton Blend, Half Sleeve, Round Neck, Stylish', image: 'https://m.media-amazon.com/images/I/31UXFfz1B+L._AC_UF480,600_SR480,600_.jpg' },
    { id: 4, name: 'Istyle Can', price: 349, description: 'Plain Round Neck Rib Knit Regular Top for Women', image: 'https://m.media-amazon.com/images/I/61BBlDNERFL._AC_UL480_FMwebp_QL65_.jpg' },
    { id: 5, name: 'Leriya Fashion', price: 379, description: 'Oversized Shirt for Women | Shirt for Women Stylish', image: 'https://m.media-amazon.com/images/I/71NR4MwqkjL._AC_UL480_FMwebp_QL65_.jpg' },
    { id: 6, name: 'rytras', price: 499, description: 'Womens Embroidered Regular Top Women Stylish', image: 'https://m.media-amazon.com/images/I/71pTz502KlL._AC_UL480_FMwebp_QL65_.jpg' },
    { id: 7, name: 'Campus', price: 1099, description: 'North Plus Sports Running Walking Gym Shoes for Men', image: 'https://m.media-amazon.com/images/I/71UZLYpHA9L._AC_UL480_QL65_.jpg' },
    { id: 8, name: 'ODDSTOE', price: 2999, description: 'Mens Leather Hand Crafted Lace Up Formal Shoes - Brown', image: 'https://m.media-amazon.com/images/I/510BlOflQGL._AC_UL480_QL65_.jpg' },
    { id: 9, name: 'ASIAN', price: 1299, description: 'Mens Wonder-13 Sports Running Shoes - Blue & neon ', image: 'https://m.media-amazon.com/images/I/81xcLHSFSCL._AC_UL480_QL65_.jpg' },
    { id: 10, name: 'Shoetopia', price: 699, description: 'Embellished Rhinestones Strap Heels', image: 'https://m.media-amazon.com/images/I/61Vyd8GzN-L._AC_UL480_FMwebp_QL65_.jpg' },
    { id: 11, name: 'Smart & Sleek', price: 699, description: 'Womens Comfortable Block Heels Sandal', image: 'https://m.media-amazon.com/images/I/51oWI8b1ibL._AC_UL480_FMwebp_QL65_.jpg' },
    { id: 12, name: 'Mochi', price: 1163, description: 'Womens Faux Leather Fashion Sandals', image: 'https://m.media-amazon.com/images/I/51qaPwEYXaL._AC_UL480_FMwebp_QL65_.jpg' },
    { id: 13, name: 'ZENEME', price: 150, description: 'ZENEME Rhodium Plated Silver Toned White American', image: 'https://m.media-amazon.com/images/I/71ooQyvpGCL._AC_UL480_FMwebp_QL65_.jpg' },
    { id: 14, name: 'Shining Diva', price: 693, description: 'Valentine Gift By Shining Diva Italian Designer Platinum', image: 'https://m.media-amazon.com/images/I/51HTyfRbS9L._AC_UL480_FMwebp_QL65_.jpg' },
    { id: 15, name: 'Okos', price: 499, description: 'Gold Plated Traditional Ethnic Green Beads Set of 2', image: 'https://m.media-amazon.com/images/I/81zp-QDjEoL._AC_UL480_QL65_.jpg' },
    { id: 16, name: 'LOUIS DEVIN', price: 299, description: 'LOUIS DEVIN WT030 Leather Strap Analog Wrist Watch for Men', image: 'https://m.media-amazon.com/images/I/410Oa9TRyfL.AC_SX250.jpg' },
    { id: 17, name: 'SWISSTYLE', price: 189, description: 'SWISSTYLE Analog Mens Watch (Multicolour Dial Multi Colored Strap)', image: 'https://m.media-amazon.com/images/I/41-zwu0hVaL.AC_SX250.jpg' },
    { id: 18, name: 'Acnos', price: 325, description: 'Premium White Dial Diamond Pink Analog Watch Love Heart Diamond', image: 'https://m.media-amazon.com/images/I/61uvM-Uix+L._AC_UL480_QL65_.jpg' },
    { id: 19, name: 'Lil Tomatoes', price: 389, description: 'Boys Floral Fit Polo Shirt', image: 'https://m.media-amazon.com/images/I/71susVMQimL._AC_UL480_FMwebp_QL65_.jpg' },
    { id: 20, name: 'Pro-Ethic Style Developer', price: 1125, description: 'Boys 5 Piece Suit Set', image: 'https://m.media-amazon.com/images/I/81jscVEbAzL._AC_UL480_FMwebp_QL65_.jpg' },
    { id: 21, name: 'Allen Solly', price: 150, description: 'Boys Regular Fit Trousers', image: 'https://m.media-amazon.com/images/I/61vW0WGXRvL._AC_UL480_FMwebp_QL65_.jpg' },
]

const womensClothing =[
    { id: 1, name: 'rytras', price: 449, description: 'Womens Floral Printed Regular Top', image: 'https://m.media-amazon.com/images/I/61lpDQXSf0L._AC_UL480_FMwebp_QL65_.jpg' },
    { id: 2, name: 'Allen Solly', price: 399, description: 'Womens Regular Fit T-Shirt', image: 'https://m.media-amazon.com/images/I/31zdTiiIQnL._AC_UF480,600_SR480,600_.jpg' },
    { id: 3, name: 'FUNDAY FASHION', price: 549, description: 'Women Cotton Half Sleeve Oversized', image: 'https://m.media-amazon.com/images/I/61wyqbtIdIL._AC_UL480_FMwebp_QL65_.jpg' },
    { id: 4, name: 'Aahwan', price: 50.00, description: 'Womens Slim Fit Crop Tank Top', image: 'https://m.media-amazon.com/images/I/61VhKKAtq3L._AC_UL480_FMwebp_QL65_.jpg' },
    { id: 5, name: 'Eagle House', price: 299, description: 'Combo of 3 tshits oversized fit', image: 'https://m.media-amazon.com/images/I/61FVEqUK9qL._AC_UL480_FMwebp_QL65_.jpg' },
    { id: 6, name: 'Leriya Fashion', price: 289, description: 'Oversized Crop Shirt for Women', image: 'https://m.media-amazon.com/images/I/71ZqIMS9USL._AC_UL480_FMwebp_QL65_.jpg' },
    { id: 7, name: 'Leriya Fashion', price: 389, description: 'Womens Embroidered Regular Fit Top', image: 'https://m.media-amazon.com/images/I/61w8emIT-qL._AC_UL480_FMwebp_QL65_.jpg' },
    { id: 8, name: 'rytras', price: 469, description: 'Womens Embroidered Regular Fit Top', image: 'https://m.media-amazon.com/images/I/71wXvu+f0IL._AC_UL480_FMwebp_QL65_.jpg' },
    { id: 9, name: 'Stylum', price: 549, description: 'Womens Floral Printed Cotton Top ', image: 'https://m.media-amazon.com/images/I/81eySIbuzUL._AC_UL480_FMwebp_QL65_.jpg' },
    { id: 10, name: 'KERI PERRY', price: 560, description: 'Womens Georgette Floral Flared Western Top ', image: 'https://m.media-amazon.com/images/I/61Z7exPHZeL._AC_UL480_FMwebp_QL65_.jpg' },
    { id: 11, name: 'Aahwan', price: 369, description: 'Womens Printed & Girls Puff Sleeve Tie Front Ditsy Floral', image: 'https://m.media-amazon.com/images/I/61N8bSe1qzL._AC_UL480_FMwebp_QL65_.jpg' },
    { id: 12, name: 'HSR', price: 399, description: 'Women Stylish Sleeveless High Mock Neck Stretchable ', image: 'https://m.media-amazon.com/images/I/51SG+9SguQL._AC_UL480_FMwebp_QL65_.jpg' },
    { id: 13, name: 'FUNDAY FASHION', price: 459, description: 'Women Casual Sleevesless Shirt', image: 'https://m.media-amazon.com/images/I/619GA3E5tiL._AC_UL480_FMwebp_QL65_.jpg' },
    { id: 14, name: 'rytras', price: 359, description: 'Womens Regular Fit Tunic Shirt', image: 'https://m.media-amazon.com/images/I/71pS6mmMQdL._AC_UL480_FMwebp_QL65_.jpg' },
    { id: 15, name: 'FAB STAR- LOOK GREAT FEE', price: 399, description: 'Womens Solid Rayon Regular Top', image: 'https://m.media-amazon.com/images/I/71bkNx1X4JL._AC_UL480_FMwebp_QL65_.jpg' },
    // Add more women's clothing products
]
const mensClothing = [
    { id: 1, name: 'Leriya Fashion',price: 449, description: 'Textured Shirts for Men || Casual Shirt for Men', image: 'https://m.media-amazon.com/images/I/611zHsFaFIL._AC_UL480_FMwebp_QL65_.jpg' },
    { id: 2, name: 'Symbol Premium',price: 1599, description: 'Mens All day Fresh Buttondown Oxford Shirt' , image: 'https://m.media-amazon.com/images/I/71NCBXev2YL._AC_UL480_FMwebp_QL65_.jpg' },
    { id: 3, name: 'CB-COLEBROOK', price: 499, description:'Mens Casual Button Down Shirts Long Sleeve Linen Shirt', image: 'https://m.media-amazon.com/images/I/51-pLhPHoBL._AC_UL480_FMwebp_QL65_.jpg' },
    { id: 4, name: 'Leriya Fashion', price: 359, description: 'T-Shirt for Men || black Men T-Shirt || || Men Polo T-Shirt', image: 'https://m.media-amazon.com/images/I/71W+kOgr4aL._AC_UL480_FMwebp_QL65_.jpg' },
    { id: 5, name: 'Lymio', price: 449, description: 'Track Pant for Men || Track Pants || Plain Track Pant ', image: 'https://m.media-amazon.com/images/I/610IIi6wHuL._AC_UL480_FMwebp_QL65_.jpg' },
    { id: 6, name: 'LEOTUDE', price: 699, description: 'Men Half Sleeve Oversized Tshirt, Round Neck Longline', image: 'https://m.media-amazon.com/images/I/81yy1eVTggL._AC_UL480_FMwebp_QL65_.jpg' },
    { id: 7, name: 'POSHAX', price: 409, description: 'Men Shirt|| Casual Shirt for Men (Bubble)', image: 'https://m.media-amazon.com/images/I/71l6J5SwZVL._AC_UL480_FMwebp_QL65_.jpg' },
    { id: 8, name: 'Lymio', price: 449, description: 'Men Regular Fit Pants', image: 'https://m.media-amazon.com/images/I/61JweMWswjL._AC_UL480_FMwebp_QL65_.jpg' },
    { id: 9, name: 'Leriya Fashion', price: 449, description: 'Textured Shirts for Men ', image: 'https://m.media-amazon.com/images/I/616OgZa32qL._AC_UL480_FMwebp_QL65_.jpg' },
    { id: 10, name: 'DHRUVI TRENDZ', price: 449, description: 'Men Pajama Set', image: 'https://m.media-amazon.com/images/I/61k-h8Q2C1L._AC_UL480_FMwebp_QL65_.jpg' },
    { id: 11, name: 'Leriya Fashion', price: 419, description: 'Textured Shirts for Men', image: 'https://m.media-amazon.com/images/I/81CPcoWbLaL._AC_UL480_FMwebp_QL65_.jpg' },
    { id: 12, name: 'Leriya Fashion', price: 499, description: 'Track Pant for Men', image: 'https://m.media-amazon.com/images/I/61IEeJb0zsL._AC_UL480_FMwebp_QL65_.jpg' },
    { id: 13, name: 'LEOTUDE', price: 399, description: 'Men shorts|| Mens trendy Shorts|| Cotton Shorts ', image: 'https://m.media-amazon.com/images/I/61Z4Q9K3bqL._AC_UL480_FMwebp_QL65_.jpg' },
    { id: 14, name: 'BULLMER', price: 999, description: 'Trendy Clothing Set with Shirt & Pants Co-ords for Men', image: 'https://m.media-amazon.com/images/I/61JxTwwj-5L._AC_UL480_FMwebp_QL65_.jpg' },
    { id: 15, name: 'EYEBOGLER', price: 325, description: 'Polo Neck Half Sleeve Striped Print Casual Men Tshirt', image: 'https://m.media-amazon.com/images/I/51byp5tQ86L._AC_UL480_FMwebp_QL65_.jpg' },
    // Add more men's clothing products
]
const footwear = [
    { id: 1, name: 'DRUNKEN', price: 735, description: 'Slippers For Women Men Winter Sandals ', image: 'https://m.media-amazon.com/images/I/41zFus622LL._AC_UL480_FMwebp_QL65_.jpg' },
    { id: 2, name: 'YOHO', price: 529, description: 'Slippers For Women Men Winter Sandals ', image: 'https://m.media-amazon.com/images/I/51h9WE-QubL._AC_UL480_FMwebp_QL65_.jpg' },
    { id: 3, name: 'SVAAR', price: 529, description: 'Mens Lightweight Classic Clogs', image: 'https://m.media-amazon.com/images/I/41J-sx10DmL._AC_UL480_FMwebp_QL65_.jpg' },
    { id: 4, name: 'SPARX', price: 664, description: 'Mens Sc0162g Sneakers', image: 'https://m.media-amazon.com/images/I/61VzAAvV6RL._AC_UL480_FMwebp_QL65_.jpg' },
    { id: 5, name: 'Campus', price: 569, description: 'OG-D4 White Sneakers for Men', image: 'https://m.media-amazon.com/images/I/71V4GGv1edL._AC_UL480_FMwebp_QL65_.jpg' },
    { id: 6, name: 'Cruiser', price: 1569, description: 'Mens Benedict Casual Shoes', image: 'https://m.media-amazon.com/images/I/51RlJ6iAWgL._AC_UL480_FMwebp_QL65_.jpg' },
    { id: 7, name: 'BELLA', price: 1099, description: 'by bella Women Fashion Heel with Back Strap Sandal', image: 'https://m.media-amazon.com/images/I/71wblWg86pL._AC_UL480_FMwebp_QL65_.jpg' },
    { id: 8, name: 'Denill', price: 479, description: 'Womens Comfortable Wedge Heel Fashion Sandal', image: 'https://m.media-amazon.com/images/I/716A8rD0LwL._AC_UL480_FMwebp_QL65_.jpg' },
    { id: 9, name: 'Shoetopia', price: 455, description: 'Womens Comfortable Aerial Sandal Heels Fashion', image: 'https://m.media-amazon.com/images/I/61h9DGKCChL._AC_UL480_FMwebp_QL65_.jpg' },
    { id: 10, name: 'SVAAR', price: 499, description: 'Womens Aerial Sandal Heels', image: 'https://m.media-amazon.com/images/I/61ExnkEVaxS._AC_UL480_FMwebp_QL65_.jpg' },
    { id: 11, name: 'Metro', price: 998, description: 'Womens Casual Comfy Fashion Flat Sandals', image: 'https://m.media-amazon.com/images/I/41YzIbgB-8L._AC_UL480_FMwebp_QL65_.jpg' },
    { id: 12, name: 'SVYA', price: 359, description: 'Comfortable Fashion Casual Flat Sandal', image: 'https://m.media-amazon.com/images/I/71sKTBdUkbL._AC_UL480_FMwebp_QL65_.jpg' },
    { id: 13, name: 'Bata', price: 1090, description: 'Mens MAX Formal', image: 'https://m.media-amazon.com/images/I/713vu2B9meL._AC_UL480_FMwebp_QL65_.jpg' },
    { id: 14, name: 'Woodland', price: 2991, description: 'Mens OGC 3503119 Sneaker', image: 'https://m.media-amazon.com/images/I/81vRRFZtI-L._AC_UL480_FMwebp_QL65_.jpg' },
    { id: 15, name: 'ORTHO JOY', price: 389, description: 'Doctor Orthopedic Soft Slippers', image: 'https://m.media-amazon.com/images/I/51cs3hYvfPL._AC_UL480_FMwebp_QL65_.jpg' },

    // Add more footwear products
]


let cart = [];

// Function to load products based on category
function loadProducts(category) {
    const productList = document.getElementById('product-list');
    let productsArray;

    switch (category) {
        case 'products':
            productsArray = products;
            break;
        case 'mensClothing':
            productsArray = mensClothing;
            break;
        case 'womensClothing':
            productsArray = womensClothing;
            break;
        case 'footwear':
            productsArray = footwear;
            break;
        default:
            console.error('Invalid category');
            return;
    }

    productList.innerHTML = ''; // Clear existing content

    productsArray.forEach(product => {
        const productCard = `
            <div class="col-md-4">
                <div class="card">
                    <img src="${product.image}" class="card-img-top" alt="${product.name}">
                    <div class="card-body">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text">${product.description ? product.description : ''}</p>
                        <p class="card-text">₹${product.price}</p>
                        <button class="btn btn-primary" onclick="addToCart('${category}', ${product.id})">Add to Cart</button>
                    </div>
                </div>
            </div>
        `;
        productList.insertAdjacentHTML('beforeend', productCard);
    });
}

// Function to add a product to the cart
function addToCart(category, productId) {
    let product;

    // Find the product in the appropriate category array
    switch (category) {
        case 'products':
            product = products.find(p => p.id === productId);
            break;
        case 'mensClothing':
            product = mensClothing.find(p => p.id === productId);
            break;
        case 'womensClothing':
            product = womensClothing.find(p => p.id === productId);
            break;
        case 'footwear':
            product = footwear.find(p => p.id === productId);
            break;
        default:
            console.error('Invalid category');
            return;
    }

    if (!product) {
        console.error('Product not found');
        return;
    }

    const cartItem = cart.find(item => item.id === productId);

    if (cartItem) {
        cartItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    renderCart(); // Update cart display
}

// Function to remove a product from the cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    renderCart();
}

// Function to update quantity of a product in the cart
function updateQuantity(productId, quantity) {
    const cartItem = cart.find(item => item.id === productId);
    if (cartItem) {
        cartItem.quantity = quantity;
    }
    renderCart();
}

// Function to render the cart
function renderCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';

    cart.forEach(item => {
        const cartRow = `
            <tr>
                <td>
                    <div class="d-flex align-items-center">
                        <img src="${item.image}" class="img-thumbnail mr-3" alt="${item.name}" style="width: 100px;">
                        <span>${item.name}</span>
                    </div>
                </td>
                <td class="text-center align-middle">
                    <div class="quantity-control">
                        <button class="btn btn-sm btn-secondary" onclick="updateQuantity(${item.id}, ${item.quantity - 1})" ${item.quantity === 1 ? 'disabled' : ''}>-</button>
                        <span class="mx-2">${item.quantity}</span>
                        <button class="btn btn-sm btn-secondary" onclick="updateQuantity(${item.id}, ${item.quantity + 1})">+</button>
                    </div>
                </td>
                <td class="align-middle">$${item.price}</td>
                <td class="align-middle">$${item.price * item.quantity}</td>
                <td class="align-middle"><button class="btn btn-sm btn-danger" onclick="removeFromCart(${item.id})">Remove</button></td>
            </tr>
        `;
        cartItems.insertAdjacentHTML('beforeend', cartRow);
    });
}


// Define a mapping of search inputs to categories
const searchCategories = {
    "mens": "mensClothing",
    "mens t-shirts": "mensClothing",  // Add more specific search terms as needed
    "mens shirts": "mensClothing",
    "womens": "womensClothing",
    "womens dresses": "womensClothing",
    "sandals": "footwear",
    "womens sandals": "footwear",
    "heels":"footwear",
    // Add more search terms and categories here
};

// Handle form submission for search bar
document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get the search input value
    const searchInput = document.getElementById('searchInput').value.toLowerCase();

    // Check if the search input matches any category
    if (searchCategories.hasOwnProperty(searchInput)) {
        loadProducts(searchCategories[searchInput]);
    } else {
        alert('Category not found. Please try again.');
    }
});

// Event listener when the DOM content is loaded
document.addEventListener('DOMContentLoaded', function() {
    loadProducts('products'); // Load products initially

    // Event listener for checkout form submission
    document.getElementById('checkoutForm').addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Your order has been successfully placed! Thank you for shopping with us.');
        cart = []; // Clear cart
        renderCart(); // Update cart display
    });
});


// Initial load of products (you can choose which category to load initially)
loadProducts('products'); // Load products initially
loadProducts('mensClothing'); // Load men's clothing initially
loadProducts('womensClothing'); // Load women's clothing initially
loadProducts('footwear'); // Load footwear initially