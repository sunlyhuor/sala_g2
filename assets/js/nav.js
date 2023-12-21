$("#btnHamberger").on("click", ()=> {
    $("#hambergerLists").toggleClass("hidden flex absolute top-[78px] flex-col w-10/12 left-1/2 transform -translate-x-1/2 gap-[16px] p-2")
} )
const btnLogout = document.getElementById('logoutButton');
const user = document.getElementById('username')
const email = document.getElementById('email')
// const userNameSetting = document.getElementById('userNameSetting')
// const emailSetting = document.getElementById('emailSetting')

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

if( getCookie("token")){
    user.textContent = getCookie("username")
    email.textContent = getCookie("email")
    // userNameSetting.textContent = getCookie("username")
    // emailSetting.textContent = getCookie("email")
}

if(getCookie("token") != null){
    if (window.innerWidth <= 600) {
        // Small screen
        document.getElementById('btnProfile2').style.display = "none";
        document.getElementById('btnNoProfile2').style.display = "none";
        document.getElementById('btnProfile1').style.display = "block";
        document.getElementById('btnNoProfile1').style.display = "none";
      } else if (window.innerWidth <= 1200) {
        // Medium screen
        document.getElementById('btnProfile2').style.display = "none";
        document.getElementById('btnNoProfile2').style.display = "none";
        document.getElementById('btnProfile1').style.display = "block";
        document.getElementById('btnNoProfile1').style.display = "none";
      } else {
        // Large screen
        document.getElementById('btnProfile2').style.display = "block";
        document.getElementById('btnNoProfile2').style.display = "none";
        document.getElementById('btnProfile1').style.display = "none";
        document.getElementById('btnNoProfile1').style.display = "none";
      }
}

 //logout 
 btnLogout.addEventListener('click', (e)=> {
    e.preventDefault
    deleteCookie("token");
    deleteCookie("username");
    deleteCookie("email");
    window.location.replace("/public/index.html");
});

$("#btnSearch").on("click", ()=> {
    $("#mainHamberger").toggleClass("hidden")
    $("#default-search").toggleClass("hidden")
    $("#default-search").toggleClass("w-1/3")
} )