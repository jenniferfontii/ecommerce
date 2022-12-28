function clear_forms(){
    document.getElementById('name').value='';
    document.getElementById('surname').value='';
    document.getElementById('age').value='';
    document.getElementById('phone').value='';
    document.getElementById('email').value='';
    document.getElementById('psw').value='';
    document.getElementById('psw-repeat').value='';
}

function get_values(){
    let name = document.getElementById('name');
    let surname =document.getElementById('surname');
    let age =document.getElementById('age');
    let phone =document.getElementById('phone');
    let email =document.getElementById('email');
    let psw =document.getElementById('psw');
    let psw_repeat =document.getElementById('psw-repeat');

    check_forms(name,surname,age,phone,email,psw,psw_repeat);
}

function check_forms(name,surname,age,phone,email,psw,psw_repeat){
    let ok = false;
    let nameRegex = /^[a-z][a-z '-.,]{0,31}$|^$/i;
    let surnameRegex = /^[a-z][a-z '-.,]{0,31}$|^$/i;
    let pswRegex = /^[a-z][a-z '-.,]{0,31}$|^$/i;
    let emailRegex = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
    let phoneRegex = /^(((\+44\s?\d{4}|\(?0\d{4}\)?)\s?\d{3}\s?\d{3})|((\+44\s?\d{3}|\(?0\d{3}\)?)\s?\d{3}\s?\d{4})|((\+44\s?\d{2}|\(?0\d{2}\)?)\s?\d{4}\s?\d{4}))(\s?\#(\d{4}|\d{3}))?$/
}