function loadPage(){
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