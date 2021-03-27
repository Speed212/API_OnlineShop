const products = [{
        _id: '1',
        name: 'Airpods Wireless Bluetooth Headphones',
        image: '/images/airpods.jpg',
        description: 'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
        brand: 'Apple',
        category: 'Electronics',
        price: 89.99,
        countInStock: 0,
        rating: 4.5,
        numReviews: 12,
    },
    {
        _id: '2',
        name: 'iPhone 11 Pro 256GB Memory',
        image: '/images/phone.jpg',
        description: 'Introducing the iPhone 11 Pro. A transformative triple-camera system that adds tons of capability without complexity. An unprecedented leap in battery life',
        brand: 'Apple',
        category: 'Electronics',
        price: 599.99,
        countInStock: 7,
        rating: 4.0,
        numReviews: 8,
    },
    {
        _id: '3',
        name: 'Cannon EOS 80D DSLR Camera',
        image: '/images/camera.jpg',
        description: 'Characterized by versatile imaging specs, the Canon EOS 80D further clarifies itself using a pair of robust focusing systems and an intuitive design',
        brand: 'Cannon',
        category: 'Electronics',
        price: 929.99,
        countInStock: 5,
        rating: 3,
        numReviews: 12,
    },
    {
        _id: '4',
        name: 'Sony Playstation 4 Pro White Version',
        image: '/images/playstation.jpg',
        description: 'The ultimate home entertainment center starts with PlayStation. Whether you are into gaming, HD movies, television, music',
        brand: 'Sony',
        category: 'Electronics',
        price: 399.99,
        countInStock: 11,
        rating: 5,
        numReviews: 12,
    },
    {
        _id: '5',
        name: 'Logitech G-Series Gaming Mouse',
        image: '/images/mouse.jpg',
        description: 'Get a better handle on your games with this Logitech LIGHTSYNC gaming mouse. The six programmable buttons allow customization for a smooth playing experience',
        brand: 'Logitech',
        category: 'Electronics',
        price: 49.99,
        countInStock: 7,
        rating: 3.5,
        numReviews: 10,
    },
    {
        _id: '6',
        name: 'Amazon Echo Dot 3rd Generation',
        image: '/images/alexa.jpg',
        description: 'Meet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small space',
        brand: 'Amazon',
        category: 'Electronics',
        price: 29.99,
        countInStock: 0,
        rating: 4,
        numReviews: 12,
    },
]


let sortByBrand = document.getElementById('sortByBrand')
let text = document.querySelector('.demo')
let tape = document.querySelector('.linkbar')
let none = document.querySelector('.d-none')
let hover = document.querySelector('.mouseOver')
let buttonResulted = document.querySelector('.resulted')
let inputFirst = document.querySelector('#input1')
let inputSecond = document.querySelector('#input2')
let inputThird = document.querySelector('#input3')
let inputResult = document.querySelector('.input-result')
let inputItem = document.querySelector('.search-input')
console.log(inputItem);
let pHtml = ` `















inputItem.addEventListener('keyup', () => {
    let sa = inputItem.value.toLowerCase();
    let filteredData = products.filter(filtered => {
        return filtered.brand.toLowerCase().includes(sa) || filtered.name.toLowerCase().includes(sa)
    })
    console.log(filteredData)
    res(filteredData)
})


function res(products) {
    let html = ` `
    products.map(el => {
        html += `<div class='demo-inner'>
        <img  style = 'width: 420px; height: 334.69px;box-shadow: 1px 10px 8px -3px rgba(0,0,0,0.3);'  src='${el.image}'></img>
        <div class = 'block'>
        <p><span class = 'otd'>Brand:</span> ${el.brand}</p>
        <p><span class = 'otd'>Name:</span> ${el.name}</p>
        <p><span class = 'otd'>Stock:</span> ${el.countInStock}</p>
        <p><span class = 'otd'>Price:</span>  ${el.price}</p>
        <div class = 'mouseOver'>
            <i class = "${el.rating}>= 1 ? <i class = ''fas fa-star></i>"></i>
            <i  class="${el.rating >= 1 ? "fas fa-star" : el.rating >= 0 && el.rating <= 1  ? "fas fa-star-half" : "far fa-star"}" ></i>
            <i class="${el.rating >= 2 ? "fas fa-star" : el.rating >= 1 && el.rating <= 2  ? "fas fa-star-half" : "far fa-star"}"></i>
            <i class="${el.rating >= 3 ? "fas fa-star" : el.rating >= 2 && el.rating <= 3  ? "fas fa-star-half" : "far fa-star"}"></i>
            <i class="${el.rating >= 4 ? "fas fa-star" : el.rating >= 3 && el.rating <= 4  ? "fas fa-star-half" : "far fa-star"}"></i>
            <i class="${el.rating >= 5 ? "fas fa-star" : el.rating >= 4 && el.rating <= 5  ? "fas fa-star-half" : "far fa-star"}"></i>
        </div>
        <div class = 'down'>
            <button class = 'btn ${el.countInStock == 0 ? 'disabled' : 'btn'}'>Buy</button>
        </div>
        </div>
    </div>`
        text.innerHTML = html
    })
}
res(products)
buttonResulted.addEventListener('click', () => {
    pHtml += ` 
    <span class = 'otd' > FirstName: </span><span class = 'ots'> ${inputFirst.value}</span> <br> <br>
            
    <span class = 'otd' > SecondName: </span><span class = 'ots'> ${inputSecond.value}</span> <br> <br>
            
    <span class = 'otd' > Password: </span><span class = 'ots'> ${inputThird.value}</span>
            `
    inputResult.innerHTML = pHtml
})

tape.addEventListener('click', () => {
    none.classList.toggle('d-none')
})