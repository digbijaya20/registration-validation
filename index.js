function formValidation()
{
var uname = document.registration.username;
var uphone = document.registration.phone;
var uemail = document.registration.email;
var umsex = document.registration.msex;
var ufsex = document.registration.fsex; 


if(allLetter(uname))
{
   if(phoneFormat(phoneNumber.value))
   { 
     if(ValidateEmail(uemail))
     {
     }
   }
}

   return false;

}

// check validation for Name

function allLetter(uname)
{ 
   var letters = /^[A-Za-z\s]{1,}[\.]{0,1}[A-Za-z\s]{0,}$/;
   var name_len = uname.value.length
   if(uname.value.match(letters) && name_len >=2 )
     {
       return true;
     }
   else
       {
        showError('Username must have alphabet characters only  & minimumm 2 characters');
        uname.focus();
        return false;
       }
}


//Check valid phone Number

function phoneFormat(input){
        // Strip all characters from the input except digits
        input = input.replace(/\D/g,'');

        // Trim the remaining input to ten characters, to preserve phone number format
        input = input.substring(0,10);

        // Based upon the length of the string, we add formatting as necessary
        var size = input.length;
        if(size == 0){
        	showError("Enter a valid Phone no")
                input = input;
        }else if(size < 4){ 
                input = '('+input;

                if(phoneNo.substr(1,3) == "123"){
	                showOperator("hey")

                     }

        }else if(size < 7){
                input = '('+input.substring(0,3)+')- '+input.substring(3,6);
        }else{
                input = '('+input.substring(0,3)+')- '+input.substring(3,6)+' - '+input.substring(6,10);
        }
        return input; 
}

        document.getElementById('phoneNumber').addEventListener('keyup',function(evt){
        var phoneNo = document.getElementById('phoneNumber');
        var charCode = (evt.which) ? evt.which : evt.keyCode;
        phoneNo.value = phoneFormat(phoneNo.value);
});




//check validation for Email
function ValidateEmail(uemail)
{
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(!uemail.value.match(mailformat))
        {
                showError("You have entered an invalid email address!");
                uemail.focus();
                return false;

        }
        else
        {
                alert('Form Succesfully Submitted');
                var x = document.getElementById('name').value;
                console.log(x);
        
                //var y = document.getElementById('phoneNumber').value;
                document.getElementById('veri').innerHTML = "Hey " + x + " plsease Enter opt send to ";
               
        return true;
        }
}


function showError(message) {
  var errorDiv = document.getElementById('error-area')
  errorDiv.innerText = message
  errorDiv.style.display = 'block'

}




function showOperator(message){
	var shwOp = document.getElementById('operator');
	shwOp.innerHTML=message;
	shwOp.style.display = 'block'

}


