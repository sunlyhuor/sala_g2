const btnSubmit = document.getElementById("btnSubmit")
const textUsername = document.getElementById("textUsername")
const textEmail = document.getElementById("textEmail")
const textPassword = document.getElementById("textPassword")
const apiSigup = `https://cms.istad.co/api/auth/local/register`


function setCookie(name, value, daysToLive){
    const date = new Date();
    date.setTime(date.getTime() +  (daysToLive * 24 * 60 * 60 * 1000));
    let expires = "expires=" + date.toUTCString();
    document.cookie = `${name}=${value}; ${expires}; path=/`
}


btnSubmit.addEventListener("click", async (e)=> {
    e.preventDefault()
    
    try{
        const res = await fetch(apiSigup, {
            method:"POST",
            body: JSON.stringify((
                {
                    "username": textUsername.value, 
                    "email": textEmail.value,
                    "password": textPassword.value
                }
            )),
            headers:{
                "Content-Type": "application/json"
            }
        })
        setCookie("token", await ( await res.json() ).jwt, 365 )
        setCookie("username", textUsername.value, 365 )
        setCookie("email", textEmail.value, 365 )
        window.location.replace("/public")
    }catch(e){
        console.log(e)
        alert("Signup faied")
    }
})