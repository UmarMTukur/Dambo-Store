const product = [
    {
        id: 0,
        image: 'image/image44.jpg',
        title: 'Z flip fordable Mobile',
        price: 120,
    },
    {
        id: 1,
        image: 'image/image44.jpg',
        title: 'Air bods pro',
        price: 60,
    },
    {
        id: 2,
        image: 'image/image44.jpg',
        title: '250D DSLR Camera',
        price: 230,
    },
    {
        id: 3,
        image: 'image/image44.jpg',
        title: 'Head Phone',
        price: 100,
    }

];

const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price} = item;
    return(
        `div class='box'>
            <div class='img-box'>
                <img class='images' src${image}></img>
        </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>$ ${price}.00</h2>`+
        "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
        `</div>
        </div>`
    )
}).join('')