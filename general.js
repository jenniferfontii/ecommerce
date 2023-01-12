function loadPage(){
    if(localStorage.getItem("hsize") !== null || localStorage.getItem("hcolor") !== null){

        set_header();
    }

}
function set_header(){
    let header =  document.getElementById("header");
    console.log(header)
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
