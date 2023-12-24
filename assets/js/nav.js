$("#btnHamberger").on("click", ()=> {
    $("#hambergerLists").toggleClass("hidden flex absolute top-[78px] flex-col w-10/12 left-1/2 transform -translate-x-1/2 gap-[16px] p-2")
} )
const btnLogout = document.getElementById('logoutButton');
const usernameSidebar = $("#usernameSidebar")
const usernameSidebarLarge = $("#usernameSidebarLarge")
const emailSidebar = $("#emailSidebar")
const emailSidebarLarge = $("#emailSidebarLarge")


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

if( getCookie("token") && getCookie("username") && getCookie("email")){
    usernameSidebar.html(getCookie("username"))
    usernameSidebarLarge.html(getCookie("username"))
    emailSidebar.html(getCookie("email"))
    emailSidebarLarge.html(getCookie("email"))
}
function repsonsivePage(){
    const btnProfile2 = document.getElementById('btnProfile2')
    const btnNoProfile2 = document.getElementById('btnNoProfile2')
    const btnProfile1 = document.getElementById('btnProfile1')
    const btnNoProfile1 = document.getElementById('btnNoProfile1')
    if (window.innerWidth <= 600) {
        // Small screen
        btnProfile2.style.display = "none";
        btnNoProfile2.style.display = "none";
        btnProfile1.style.display = "block";
        btnNoProfile1.style.display = "none";
    } else if (window.innerWidth <= 1200) {
        // Medium screen
        btnProfile2.style.display = "none";
        btnNoProfile2.style.display = "none";
        btnProfile1.style.display = "block";
        btnNoProfile1.style.display = "none";
    } 
    else {
    // Large screen
        btnProfile2.style.display = "block";
        btnNoProfile2.style.display = "none";
        btnProfile1.style.display = "none";
        btnNoProfile1.style.display = "none";
    }
}
if(getCookie("token") != null){
    repsonsivePage()
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