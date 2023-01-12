const queryString = window.location.search;
console.log(queryString)

const urlParams = new URLSearchParams(queryString);

const title = urlParams.get('title')
console.log(title);

const img = urlParams.get('img')
console.log(img);

const price = urlParams.get('price')
console.log(price);
let products = new Array();
let i = 0;

function pageOnLoad(){
    if(title != null && img!=null && price != null){
        document.getElementById('prod_title').innerHTML='FIAMMETTA GIANFANTI <br><i>'+title+'</i>';
        document.getElementById('prod_image').src='img/'+img;
        document.getElementById('prod_price').innerHTML='£'+price;
    }else{
        print_cart();
    }
    
    if(localStorage.getItem("hsize") !== null && localStorage.getItem("hcolor") !== null){
        set_header();
    }
}
function set_header(){
    let header =  document.getElementById("header");
    console.log(document.getElementById("header"));
    header.style.backgroundColor = localStorage.getItem('hcolor');
    
    if(localStorage.getItem("hsize") === null){
        console.log("size not found")
    }else{
        let size = localStorage.getItem('hsize')+"rem";
        console.log(size)
        document.querySelectorAll("div.header > a").forEach((a) => {
            console.log(a);
            a.style.fontSize = size;
        });
    }
}
function add_cart(){
    let element = new Array(title, img, price);
    let n = localStorage.length +1;
    localStorage.setItem(n, element);
    products.push(img);
    
}


function print_cart(){
    let Mystr ='<h1 id="hcart">YOUR CART</h1><br>';
    let i;
    let tot=0;
    for(i=0; i<localStorage.length; i++){
    
        if(localStorage.key(i)!=='hcolor' && localStorage.key(i)!=='hsize'&&localStorage.key(i)!==null && localStorage.key(i)!=='email'&& localStorage.key(i)!=='name'){
            let el = localStorage.getItem(localStorage.key(i));
            el = el.split(',');
            Mystr = Mystr.concat('<div class= "cart_el"><h1>'+el[0]+'<i></i></h1><img onmouseover="tumbnail_img(this)" src=img/'+el[1]+' alt="prduct pic" id="image"> <p>£ '+el[2]+'</p></div><br>');
            tot = tot+parseInt(el[2]);
        }
    }
    console.log("THIS IS MY STRING"+Mystr);
    if(Mystr=='<h1 id="hcart">YOUR CART</h1><br>'){
        document.getElementById('cart').innerHTML ='<p>YOUR CART IS EMPTY.</p><br><a href="shop_all.html"> Shop All Here</a>';
    }else{
        document.getElementById('cart').innerHTML = Mystr.concat('<p><i>your total £'+tot+'</i><p><button>CHECK OUT</button>');
        document.getElementById('cart').innerHTML = Mystr.concat('<p><i>your total £'+tot+'</i><p><button>CHECK OUT</button>');
    }
    
}
function bigImg(img) {
    console.log('big IMAGE');
    //img becomes 1.2 bigger
    img.style.transform = "scale(1.2)";
    // Animation effect
    img.style.transition = "transform 0.20s ease";
}
function normalImg(img){
    console.log('small img');
    img.style.transform = "scale(1)";
    img.style.transition = "transform 0.25s ease";
}
function tumbnail_img(x){
    console.log('tumbnailllll');
    bigImg(x);
    setTimeout(function (){normalImg(x)},800);
}
