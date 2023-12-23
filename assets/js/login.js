"use strict";
const usernameLogin = $('#usernameLogin');
const passwordLogin = $('#passwordLogin');
const btnLogin = $('#btnLogin');
// const apiLogin = `https://cms.istad.co/api/auth/local`

    function setCookie(name, value, daysToLive){
        const date = new Date();
        date.setTime(date.getTime() +  (daysToLive * 24 * 60 * 60 * 1000));
        let expires = "expires=" + date.toUTCString();
        document.cookie = `${name}=${value}; ${expires}; path=/`
    }

    function deleteCookie(name){
        setCookie(name, null, null);
    }
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
    btnLogin.on("click", (e)=> {    
        e.preventDefault();
        if(usernameLogin.val() == ''){
            alert('Please Enter Username')
        }
        else if(passwordLogin.val() == ''){
            alert('Please Enter Password')
        }
        else{
            $.ajax({
                type: "POST",
                url: "https://cms.istad.co/api/auth/local",
                data: JSON.stringify({
                    "identifier": usernameLogin.val(),
                    "password": passwordLogin.val()
                  }),
                dataType: "json",
                success: function (response) {
                    console.log(response)
                    if( !response ){
                        alert("Invalid credentials")
                    }
                    else{
                        console.log(response)
                        // setCookie("token", response.jwt, 1)
                        // setCookie("username", response.user.username, 1)    
                        // setCookie("email", response.user.email, 1)
                        // window.location.replace("/public")  
                    }
                },
                error: function (xhr, ajaxOptions, thrownError) {
                    console.log( thrownError)
                }
            });
            // try{
            //     const res = await fetch(apiLogin, {
            //         method:"POST",
            //         body: JSON.stringify(
            //             {
            //                 "identifier": emailLogin.value,
            //                 "password": passwordLogin.value
            //             }
            //         ),
            //         headers:{
            //             "Content-Type": "application/json",
            //             "Accept": "application/json",
            //         }
            //     })
            //     const respo = await res.json()
            //     if( !respo.ok ){
            //         alert("Invalid credentials")
            //     }
            //     else{
            //         // console.log(res)
            //         setCookie("token", respo.jwt, 365)
            //         setCookie("username", respo.user.username , 365)    
            //         setCookie("email", respo.user.email , 365)
            //         window.location.replace("/public")  
            //     }
            // }
            // catch(e){
            //     console.log(e)
            //     alert("Invalid credentials. Please try again.")
            // }
        }  
    })
    

   
  