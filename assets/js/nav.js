// $("#hambergerLists").toggleClass(`top-[${$("#header").height()}px]`)

$("#btnHamberger").on("click", ()=> {
    $("#hambergerLists").toggleClass("hidden flex absolute top-[78px] flex-col w-10/12 left-1/2 transform -translate-x-1/2 gap-[16px] p-2")
    // $("#hambergerLists").toggleClass("flex")
} )