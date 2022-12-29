
function loadAccount(){
    if(localStorage.getItem("name")==''||localStorage.getItem("name")=='null'){
        console.log("ciao");
        window.location.replace("../ecommerce/sign_in.html");
    }

    console.log(localStorage.getItem("name"));
    document.getElementById("greetings").innerHTML="HELLO<br><i>"+localStorage.getItem("name")+"</i>";
}
