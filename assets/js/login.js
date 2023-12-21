const emailLogin = document.getElementById('email');
const password = document.getElementById('password');
const btnLogin= document.getElementById('btnLogin');
const btnLogout = document.getElementById('logoutButton');
const apiLogin = `https://cms.istad.co/api/auth/local`

    function setCookie(name, value, daysToLive){
        const date = new Date();
        date.setTime(date.getTime() +  (daysToLive * 24 * 60 * 60 * 1000));
        let expires = "expires=" + date.toUTCString();
        document.cookie = `${name}=${value}; ${expires}; path=/`
    }

    function deleteCookie(name){
        setCookie(name, null, null);
    }

    btnLogin.addEventListener('click' , async (e)=> {
        e.preventDefault();
        if(email.value == '' || password.value == ''){
            alert('Please Enter Username or Password')
        }
        else{
            try{
                const res = await fetch(apiLogin, {
                    method:"POST",
                    body: JSON.stringify((
                        {
                            "identifier": emailLogin.value,
                            "password": password.value
                        }
                    )),
                    headers:{
                        "Content-Type": "application/json"
                    }
                })
                setCookie("token", await ( await res.json() ).jwt, 365)
                setCookie("username", emailLogin.value, 365)
                window.location.replace("/public")
            }
            catch(e){
                console.log(e)
                alert("Invalid credentials. Please try again.")
            }
        }  
    })
    function getCookie(name){
        const cDecoded = decodeURIComponent(document.cookie);
        const cArray = cDecoded.split("; ");
        let result = null;
    
        cArray.forEach(element => {
            if(element.indexOf(name) == 0){
                result = element.substring(name.length + 1)
            }
        })
        return result;
    }

    //logout 
    btnLogout.addEventListener('click', (e)=> {
        e.preventDefault
        alert(1)
        // deleteCookie("token");
        // window.location.replace("/public/index.html");
    });
  