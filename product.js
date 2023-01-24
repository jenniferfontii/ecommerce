// gets infos from the window URL to create a different page for each product
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

// when page loads if infos are present it prints them
function pageOnLoad(){
    if(title != null && img!=null && price != null){
        document.getElementById('prod_title').innerHTML='FIAMMETTA GIANFANTI <br><i>'+title+'</i>';
        document.getElementById('prod_image').src='img/'+img;
        document.getElementById('prod_price').innerHTML='£'+price;
    }else{
        // otherwise the page must be called from the wrong page so it loads cart
        print_cart();
    }
    // any of these cases checks if theres any personalized style on the header and puts it on
    if(localStorage.getItem("hsize") !== null && localStorage.getItem("hcolor") !== null){
        set_header();
    }
}
// update the header
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
// when add to cart button is clicked 
function add_cart(){
    // puts all the info about the product on an array
    let element = new Array(title, img, price);
    // in case the item is not already in the cart it records a key(generated sequentially) and the array in local storage
    if(alreadypresent(element)==false){
        let n = localStorage.length +1;
        localStorage.setItem(n, element);
        products.push(img);
    }else{
        // if the item is already present it gives error (why explained in the report)
        alert("item already present in your cart");
    }    
}

// check if an item is already present in the cart
function alreadypresent(elem){
    let i;
    // check using a loop on all the local storage
    for(i=0; i<localStorage.length; i++){
        // make sure not to check the user infos but just the products (identified by numerical key)
        if(localStorage.key(i)!=='hcolor' && localStorage.key(i)!=='hsize'&&localStorage.key(i)!==null && localStorage.key(i)!=='email'&& localStorage.key(i)!=='name'){
            // checks the first element of the array if it is = returns true
            let el = localStorage.getItem(localStorage.key(i));
            el = el.split(',');
            if(el[0]==elem[0]){
                return true;
            }
        }
    }
    // if not founded return false
    return false;
}

// print cart
function print_cart(){
    let Mystr ='<h1 id="hcart">YOUR CART</h1><br>';
    let i;
    let tot=0;
    // check all the local storage and prints when a product is find(identified by numerical key)
    for(i=0; i<localStorage.length; i++){
    
        if(localStorage.key(i)!=='hcolor' && localStorage.key(i)!=='hsize'&&localStorage.key(i)!==null && localStorage.key(i)!=='email'&& localStorage.key(i)!=='name'){
            // if an item is found its infos are saved on a strings and printed on screen
            let el = localStorage.getItem(localStorage.key(i));
            el = el.split(',');
            // keep on concat the string to have more items!!
            Mystr = Mystr.concat('<div class= "cart_el"><h1>'+el[0]+'<i></i></h1><img onmouseover="tumbnail_img(this)" src=img/'+el[1]+' alt="prduct pic" id="image"> <p>£ '+el[2]+'</p></div><br>');
            tot = tot+parseInt(el[2]);
        }
    }
    // debug
    console.log("THIS IS MY STRING"+Mystr);
    // if the string stays empty means no items have been found so prints some other html code
    if(Mystr=='<h1 id="hcart">YOUR CART</h1><br>'){
        document.getElementById('cart').innerHTML ='<p>YOUR CART IS EMPTY.</p><br><a href="shop_all.html"> Shop All Here</a>';
    }else{
        // if the string has infos print a checkout botton at the end
        document.getElementById('cart').innerHTML = Mystr.concat('<p><i>your total £'+tot+'</i><p><button>CHECK OUT</button>');
        
    }
    
}
// thumbnail imgs
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
