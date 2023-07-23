// click event
function click_fn(){
    let f_name = document.getElementById("f_name").value;
    let m_name = document.getElementById("m_name").value;
    let l_name = document.getElementById("l_name").value;
    let ress = document.getElementById("add").value;
    let dob = document.getElementById("dob").value;
    if(f_name == "" || f_name == null){
        document.getElementById("msg_1").innerText ="Enter First Name";
        return false;
    }else if(m_name == "" || m_name == null){
        document.getElementById("msg_2").innerText = "Enter Middle Name";
        return false;
    }else if(l_name == "" || l_name == null){
        document.getElementById("msg_3").innerText = "Enter Last Name";
        return false;
    }else if(ress == "" || ress == null){
        document.getElementById("msg_4").innerText = "Enter Address";
        return false;
    }else if(dob == "" || dob == null){
        document.getElementById("msg_5").innerText = "Enter Date";
        return false;
    }
    else{
        document.getElementById("msg_1").innerText = "";
        document.getElementById("msg_2").innerText = "";
        document.getElementById("msg_3").innerText = "";
        document.getElementById("msg_4").innerText = "";
        document.getElementById("msg_5").innerText = "";
    }

    // radio click event
    let male = document.getElementById("male").checked;
    let female = document.getElementById("female").checked;
    if(male == false && female == false){
        document.getElementById("msg_6").innerText = "Select Gender";
        return false;
    }else{
        document.getElementById("msg_6").innerText = "";
    }

    // select click event
    let ct = document.getElementById("ct").value;
    if(ct == "-1"){
        document.getElementById("msg_7").innerText = "Select City";
        return false;
    }else{
        document.getElementById("msg_7").innerText = "";
    }

    // mobile click event
    let mob = document.getElementById("mob").value;
    if(mob == "" || mob == null){
        document.getElementById("msg_8").innerText = "Enter Mobile No.";
        return false; 
    }else{
        document.getElementById("msg_8").innerText = "";
    }

    // email click event
    let mail = document.getElementById("mail").value;
    if(mail == "" || mail == null){
        document.getElementById("msg_9").innerText = "Enter mail";
        return false;
    }else{
        document.getElementById("msg_9").innerText = "";
    }

    // password click event
    let pass = document.getElementById("pass").value;
    if(pass == "" || pass == null){
        document.getElementById("msg_10").innerText = "Enter Password";
        return false;
    }else{
        document.getElementById("msg_10").innerText = "";
    }

    // confirm password event
    let c_pass = document.getElementById("c_pass").value;
    if(c_pass == "" || c_pass == null){
        document.getElementById("msg_11").innerText = "Enter Confirm Password";
        return false;
    }else{
        document.getElementById("msg_11").innerText = "";
        return false;
    }
}

// onbuler event
function click_blan(blnk, span_id){
    if(blnk.value == "" || blnk.value == null || blnk.value == "-1"){
        document.getElementById(span_id).innerText = "Please Fill This Field !!!";
        return false;
    }else{
        document.getElementById(span_id).innerText = "";
        return false;
    }
}

function gend_check(blnk, span_id){
    if(blnk.checked == false){
        document.getElementById(span_id).innerText = "Please Fill This Field !!!";
        return false;
    }else{
        document.getElementById(span_id).innerText = "";
        return false;
    }
}

// keybord event
// name validation
function name_fn(blnk,span_id){
    let regex = /^[a-zA-Z]*$/;
    if(!(regex.test(blnk.value)) || (blnk.value.length < 2)){
        document.getElementById(span_id).innerText = "Enter Only Alphabat";
        return false;
    }else{
        document.getElementById(span_id).innerText = "";
        return false;
    }
}

// address validation
 function adde_fn(){
    let add = document.getElementById("add").value;
    if(add.length <= 50){
        document.getElementById("msg_4").innerText = "Address Must be More Than 50 Character";
        return false;
    }else{
        document.getElementById("msg_4").innerText = "";
        return false;
    }
 }

//  mobile no. validation
function mob_fn(blnk,span_id){
    let regex = /^[0-9]+$/;
    let start = /^[6-9]/;
    if(!(regex.test(blnk.value) && start.test(blnk.value))){
        document.getElementById(span_id).innerText = "Enter Valid Number";
        return false;
    }else if(blnk.value.length < 10){
        document.getElementById(span_id).innerText = "Enter 10 Digits";
        return false;
    }else{
        document.getElementById(span_id).innerText = "";
        return false;
    }
}

// email validation
function mail_fn(){
    let mail = document.getElementById("mail").value;
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/;
    if(regex.test(mail)){
        document.getElementById("msg_9").innerText = "";
        return false;
    }else{
        document.getElementById("msg_9").innerText = "Enter Valid Mail";
        return false;
    }
}

// password validation
function pass_fn(){
    let pass = document.getElementById("pass").value;
    let regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    if(regex.test(pass)){
        document.getElementById("msg_10").innerText = "";
        return false;
    }else{
        document.getElementById("msg_10").innerText = "Password Must be 8 to 15 Character";
        return false;
    }
}

// compare password validation
function pass_compare(){
    let pass = document.getElementById("pass").value;
    let c_pass = document.getElementById("c_pass").value;
    if(c_pass != pass){
        document.getElementById("msg_11").innerText = "Password and Confirm Password does not match";
        return false;
    }else{
        document.getElementById("msg_11").innerText = "";
        return false;
    }
}

// show password validation
function show_pass(){
    let pass = document.getElementById("pass");
    let icon_1 = document.getElementById("icon_1");
    if(pass.type == "password" && icon_1.classList.contains("fa-eye") == true){
        pass.type = "text";
        icon_1.classList.remove("fa-eye");
        icon_1.classList.add("fa-eye-slash");
    }else{
        pass.type = "password";
        icon_1.classList.remove("fa-eye-slash");
        icon_1.classList.add("fa-eye")
    }
}

function c_pass(){
    let c_pass = document.getElementById("c_pass");
    let icon_2 = document.getElementById("icon_2");
    if(c_pass.type == "password" && icon_2.classList.contains("fa-eye") == true){
        c_pass.type = "text";
        icon_2.classList.remove("fa-eye");
        icon_2.classList.add("fa-eye-slash");
    }else{
        c_pass.type = "password";
        icon_2.classList.remove("fa-eye-slash");
        icon_2.classList.add("fa-eye");
    }
}