//Shop_________________________________________________//

const bd = [{
        id: 0,
        name: 'Puma RS-Z',
        price: 15799,
        imga: '../img/products/1c.jpg',
        imgb: '../img/products/1b.jpg',
        imgc: '../img/products/1a.jpg'
    },
    {
        id: 1,
        name: 'Puma Mirage',
        price: 17299,
        imga: '../img/products/2c.jpg',
        imgb: '../img/products/2b.jpg',
        imgc: '../img/products/2a.jpg'
    },
    {
        id: 2,
        name: 'Nike AM-270',
        price: 33999,
        imga: '../img/products/3c.jpg',
        imgb: '../img/products/3b.jpg',
        imgc: '../img/products/3a.jpg'
    },
    {
        id: 3,
        name: 'Adidas Ozweego',
        price: 21999,
        imga: '../img/products/4c.jpg',
        imgb: '../img/products/4b.jpg',
        imgc: '../img/products/4a.jpg'
    },
    {
        id: 4,
        name: 'Adidas Tourino',
        price: 14999,
        imga: '../img/products/5c.jpg',
        imgb: '../img/products/5b.jpg',
        imgc: '../img/products/5a.jpg'
    },
    {
        id: 5,
        name: 'Adidas USA-84',
        price: 11499,
        imga: '../img/products/6c.jpg',
        imgb: '../img/products/6b.jpg',
        imgc: '../img/products/6a.jpg'
    },
    {
        id: 6,
        name: 'Adidas MULTIX',
        price: 13999,
        imga: '../img/products/7c.jpg',
        imgb: '../img/products/7b.jpg',
        imgc: '../img/products/7a.jpg'
    },
    {
        id: 7,
        name: 'Adidas Flux',
        price: 13869,
        imga: '../img/products/8c.jpg',
        imgb: '../img/products/8b.jpg',
        imgc: '../img/products/8a.jpg'
    },
];

bd.forEach(function(info) {
    document.write('<figure id="shop_section-info-1a"><figcaption itemprop="name" class="shop-p0" id="shop-p0-' + info.id + '" value="' + info.name + '" >' + info.name + '</figcaption><div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel"><div class="carousel-inner"><div class="carousel-item active"><img class="d-block-w-10" src=" ' + info.imga + ' " alt="First slide"></div><div class="carousel-item"><img class="d-block-w-10" src=" ' + info.imgb + ' " alt="Second slide"></div><div class="carousel-item"><img class="d-block-w-10" src=" ' + info.imgc + ' " alt="Third slide"></div></div></div><p class="shop-p1" id="shop-p1-' + info.id + '" value="' + info.price + '">' + info.price + '</p><button class="shop-button">Detalle</button><button class="shop-button" id="shop-button-' + info.id + '">Comprar</button></figure>');
});


//_________________________________________________//