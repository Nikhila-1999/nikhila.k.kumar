function validate(){
    const email=document.getElementById('email');
    const pass1=document.getElementById('pass1');
    const erro=document.getElementById('msg');
    const erropass1=document.getElementById('msgpass1');


    if(emvalid(email,erro)){
        if(passvalidate(pass1,erropass1)){

        }
    }
    return valid;
}

function emvalid(email,erro){
    let regexp=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(email.value.trim() === '') {
        erro.innerHTML="email cannot blank";
        erro.style.color="red";
        valid= false;
    }else if (email.value.match(regexp)) {
        erro.innerHTML="";
        erro.style.color="green";
          valid=true;


      } 
        else {
           erro.innerHTML=" invalid email";
           erro.style.color="red";
           valid= false;

      }
      return valid;
}
function passvalidate(pass1,erropass1){
    let regExpWeak1 = /[a-zA-Z]/;
    let regExpMedium2 = /\d+/;
    let regExpStrong3 = /.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/;

    if(pass1.value.trim() === '') {
              erropass1.innerHTML="password cannot empty";
              erropass1.style.color="red";
              valid = false;
    } else if(pass1.value.trim().length >= 10 && pass1.value.match(regExpWeak1) && pass1.value.match(regExpMedium2) && pass1.value.match(regExpStrong3)){
          erropass1.innerHTML="";
          valid=true;
    } else{
              erropass1.innerHTML="enter valid password";
              erropass1.style.color="red";
              valid = false;
    }
      
    return valid;
}
function myFunction() {
    var x = document.getElementById("pass1");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }
  