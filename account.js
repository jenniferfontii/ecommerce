// check if the user is actually logged in and set up their space
function loadAccount(){
    // check if they are logged in, searching for their session in the local storage
    // if their record doesnt exist it redirect to sign in
    if(localStorage.getItem("name") === null){
        window.location.replace("../ecommerce/sign_in.html");
    }else{
        // if the record exist greet user
        document.getElementById("greetings").innerHTML="HELLO<br><i>"+localStorage.getItem("name")+"</i>";
    }
    if(localStorage.getItem("hsize") !== null || localStorage.getItem("hcolor") !== null){
        // if it finds record of personalized header calls set_header
        set_header();
    }

}
// update header according to user preferences
function update_header(){
    // save values of preferences
    let size = document.getElementById("hsize").value;
    let color = document.getElementById("hcolor").value;

    // validation form on the parameters
    if(size != 0){
        if(size<1 || size>5){
            // return error
            alert("size must be >0 and <6");
            return false;
        }else{
            // store informations
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
// set the color and size record to the original ones.
function back_original(){
    localStorage.setItem('hcolor','#e6e6e6');
    localStorage.setItem('hsize','2');
    set_header();
}
function set_header(){

    let header =  document.getElementById("header");

    // if values are stored it update the header
    // if it doesn't found any record gives a console error
    if(localStorage.getItem("hcolor") === null){
        console.log("size not found")
    }else{
        header.style.backgroundColor = localStorage.getItem('hcolor');
    }
    
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
// clears all the local storage
function logout(){
    localStorage.clear();
    window.location.replace("../ecommerce/sign_in.html");
}