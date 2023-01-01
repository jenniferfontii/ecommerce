
function loadAccount(){
    if(localStorage.getItem("name") === null){
        console.log("ciao");
        window.location.replace("../ecommerce/sign_in.html");
    }else{
        document.getElementById("greetings").innerHTML="HELLO<br><i>"+localStorage.getItem("name")+"</i>";
    }
    if(localStorage.getItem("hsize") !== null || localStorage.getItem("hcolor") !== null){
        set_header();
    }

}
function update_header(){
    let size = document.getElementById("hsize").value;
    let color = document.getElementById("hcolor").value;

    if(size != 0){
        if(size<1 || size>5){
            alert("size must be >0 and <6");
            return false;
        }else{
            localStorage.setItem('hsize',size);
            localStorage.setItem('hcolor',color);
            set_header();
            return true;
        }
    }else{
        localStorage.setItem('hcolor',color);
        set_header();
        return true;
    }
}
function back_original(){
    localStorage.setItem('hcolor','#e6e6e6');
    localStorage.setItem('hsize','2');
    set_header();
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