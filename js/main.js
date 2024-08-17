


let form = document.getElementById("login-form");
let error = document.getElementById("error");


form.onsubmit = function(e)
{
    let passwordinput = document.querySelector("[type='password']").value;
    let emailinput = document.querySelector("[type='email']").value;

    let emailvalid = false;
    let passwordvalid = false;

    let emailpattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    let passwordpattern = /^.{8,}$/

    if(emailpattern.test(emailinput) && emailinput.length >= 12)
    {
        emailvalid = true;
    }

    if(passwordpattern.test(passwordinput))
    {
        passwordvalid = true;
    }

        if(emailvalid === false || passwordvalid === false)
        {
            e.preventDefault();
            error.style.display = "block"
        }else {
            window.alert("Form submitted successfully!");
        }
    };
