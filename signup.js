function clear_forms(){
    document.getElementById('name').value='';
    document.getElementById('surname').value='';
    document.getElementById('age').value='';
    document.getElementById('phone').value='';
    document.getElementById('email').value='';
    document.getElementById('psw').value='';
    document.getElementById('psw-repeat').value='';
    console.log("chiamata clear")
}

function get_values(){
    let name = document.getElementById('name').value;
    let surname =document.getElementById('surname').value;
    let age =document.getElementById('age').value;
    let phone =document.getElementById('phone').value;
    let email =document.getElementById('email').value;
    let psw =document.getElementById('psw').value;
    let psw_repeat =document.getElementById('psw-repeat').value;

    
    return check_forms(name,surname,age,phone,email,psw,psw_repeat);

}

function check_forms(name,surname,age,phone,email,psw,psw_repeat){
    let ok = false;
    let nameRegex = /^[a-z][a-z '-.,]{0,31}$|^$/i;
    let pswRegex = /^[a-z][a-z '-.,]{0,31}$|^$/i;
    let emailRegex = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
    let phoneRegex = /^(((\+44\s?\d{4}|\(?0\d{4}\)?)\s?\d{3}\s?\d{3})|((\+44\s?\d{3}|\(?0\d{3}\)?)\s?\d{3}\s?\d{4})|((\+44\s?\d{2}|\(?0\d{2}\)?)\s?\d{4}\s?\d{4}))(\s?\#(\d{4}|\d{3}))?$/;

    if (nameRegex.test(name) == false){
        alert("insert a valid name");
        document.getElementById('name').focus();
        return false;
    }else if(nameRegex.test(surname) == false){
        alert("insert a valid  last name");
        document.getElementById('surname').focus();
        return false;
    }else if(pswRegex.test(psw) == false){
        alert("insert a valid  password");
        document.getElementById('psw').focus();
        return false;
    }else if(psw != psw_repeat){
        alert("the password must be the same");
        document.getElementById('psw-repeat').focus();
        return false;
    }else if(emailRegex.test(email) == false){
        alert("insert a valid  email");
        document.getElementById('email').focus();
        return false;
    }else if(phoneRegex.test(phone) == false){
        alert("insert a valid  phone");
        document.getElementById('phone').focus();
        return false;
    }else if(age<15 || age>100){
        alert("insert a valid  age");
        document.getElementById('age').focus();
        return false;
    }else{
        save_data(name, email);
        return true;
    }

}
function save_data(name,email){
    localStorage.setItem('name',name);
    localStorage.setItem('email',email);
}