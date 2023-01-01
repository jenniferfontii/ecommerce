const queryString = window.location.search;
console.log(queryString)

const urlParams = new URLSearchParams(queryString);

const title = urlParams.get('title')
console.log(title);

const img = urlParams.get('img')
console.log(img);

const price = urlParams.get('price')
console.log(price);

function pageOnLoad(){
    document.getElementById('prod_title').innerHTML='FIAMMETTA GIANFANTI <br><i>'+title+'</i>';
    document.getElementById('prod_image').src='img/'+img;
    document.getElementById('prod_price').innerHTML='£'+price;
    if(localStorage.getItem("hsize") !== null || localStorage.getItem("hcolor") !== null){
        set_header();
    }
}
function set_header(){
    let header =  document.getElementById("header");
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
    localStorage.setItem(img, price);
}