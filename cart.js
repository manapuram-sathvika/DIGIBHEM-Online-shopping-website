const product = [
    {
        id: 0,
        image: 'images/aa-1.jpeg',
        title: 'White Shirt',
        price: 150,
    },
    {
        id: 1,
        image: 'images/aa-2.jpeg',
        title: 'Crushed Top',
        price: 250,
    },
    {
        id: 2,
        image: 'images/bb-1.jpeg',
        title: 'Brown Pant',
        price: 200,
    },
    {
        id: 3,
        image: 'images/bb-2.jpeg',
        title: 'Yellow Pant',
        price: 300,
    },
    {
        id: 4,
        image: 'images/aa-3.jpeg',
        title: 'Red Top',
        price: 300,
    },
    {
        id: 5,
        image: 'images/aa-4.jpeg',
        title: 'Formal T-shirt',
        price: 250,
    },
    {
        id: 6,
        image: 'images/bb-3.jpeg',
        title: 'Night ware',
        price: 140,
    },
    {
        id: 7,
        image: 'images/bb-4.jpeg',
        title: 'Black Pant',
        price: 100.50,
    }
];
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>$ ${price}.00</h2>`+
        "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
        `</div>
        </div>`
    )
}).join('')

var cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "$ "+0+".00";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "$ "+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>$ ${price}.00</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }

    
}