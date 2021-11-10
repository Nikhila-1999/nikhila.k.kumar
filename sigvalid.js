function validate(){
    
    
    const email=document.getElementById('email');
    const mobile=document.getElementById('mob');
    const pass1=document.getElementById('pass1');
    const pass2=document.getElementById('pass2');
    const erro=document.getElementById('msg');
    const erroph=document.getElementById('msgph');
    const erropass1=document.getElementById('msgpass1');
    const erropass2=document.getElementById('msgpass2');

    
    

    if(emvalid(email,erro)){
        if(phvalid(mobile,erroph)){
            if(passvalidate(pass1,erropass1)){
                if(passvalidate2(pass2,pass1,erropass2)){

                }
            }

        }
    }
    return valid;

}


// ############ Email #############

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
                   erro.innerHTML="email invalid";
                   erro.style.color="red";
                   valid= false;
 
              }
              return valid;
        }
               


// ############# Mobile #######################
             function phvalid(mobile,erroph){
                let regExpMobile = /^(\d{3})(\.|-)?(\d{3})(\.|-)?(\d{4})$/;
                if(mobile.value.trim() === '') {
  
                    erroph.innerHTML="phone no cannot blank";
                    erroph.style.color="red";
                    valid=false;
                }else if (mobile.value.trim().match(regExpMobile)) {
                    erroph.innerHTML="";
                    erroph.style.color="green";
                    valid= true;
                 } else {
                   erroph.innerHTML="phone invalid";
                   erroph.style.color="red";
                   valid =false;
                 }
                 return valid;
             }
               


// ########## Main Pass ################
          function passvalidate(pass1,erropass1){
              let regExpWeak1 = /[a-zA-Z]/;
              let regExpMedium2 = /\d+/;
              let regExpStrong3 = /.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/;

              if(pass1.value.trim() === '') {
                        erropass1.innerHTML="password not empty";
                        erropass1.style.color="red";
                        valid = false;
              } else if(pass1.value.trim().length >= 10 && pass1.value.match(regExpWeak1) && pass1.value.match(regExpMedium2) && pass1.value.match(regExpStrong3)){
                    erropass1.innerHTML="";
                    valid=true;
              } else{
                        erropass1.innerHTML="week password";
                        erropass1.style.color="red";
                        valid = false;
              }
                
              return valid;
        }
// 

// ############## Retype pass ##################
        function passvalidate2(pass2,pass1,erropass2){
           if(pass2.value.trim() === '') {
                erropass2.innerHTML="password not empty"
                erropass2.style.color="red";
                valid = false;
            } else if(pass1.value !== pass2.value) {
                erropass2.innerHTML="password no match";
                erropass2.style.color="red";
                valid = false;
            } else{
                erropass2.innerHTML="";
                valid=true;
               
            }
            return valid;

    }


function myFunction() {
    var x = document.getElementById("pass1");
    var y=document.getElementById("pass2")
    if (x.type === "password" && y.type==="password") {
      x.type = "text";
      y.type="text";
    } else {
      x.type = "password";
      y.type="password";
    }
  } 
  
  function getpasswordstrength(pass1){
      let s=0;
      if(pass1.length>6){
          s++;
      }
      if(pass1.length>10){
          s++;
      }
      if(/[A-Z]/.test(pass1)){
          s++;
      }
      if(/[0-9]/.test(pass1)){
          s++;
      }
      if(/[^A-Za-z0-9]/.test(pass1)){
          s++;
      }
      return s;
  }
  document.querySelector(" .pw-meter #pass1").addEventListener("focus",function(){
      document.querySelector(" .pw-meter .pw-strength").style.display="block";
  });
  document.querySelector(" .pw-meter #pass1").addEventListener("keyup", function(e){
      let pass1=e.target.value;
      let strength=getpasswordstrength(pass1);
      let passwordstrengthspans=document.querySelectorAll(" .pw-meter .pw-strength span");
      strength-Math.max(strength,1);
      passwordstrengthspans[1].style.width=strength*20 + "%";
      if(strength<2){
        passwordstrengthspans[0].innerText="week";
        passwordstrengthspans[1].style.color="#111";
        passwordstrengthspans[1].style.background="#d13636";
      }else if(strength>=2 && strength<4){
        passwordstrengthspans[0].innerText="medium";
        passwordstrengthspans[1].style.color="#111";
        passwordstrengthspans[1].style.background="orange";

      }else{
        passwordstrengthspans[0].innerText="strong";
        passwordstrengthspans[1].style.color="#111";
        passwordstrengthspans[1].style.background="#20a820";

      }
  });
    










      
         
