$("#btnHamberger").on("click", ()=> {
    $("#hambergerLists").toggleClass("hidden flex absolute top-[78px] flex-col w-10/12 left-1/2 transform -translate-x-1/2 gap-[16px] p-2")
} )


$("#btnSearch").on("click", ()=> {
    $("#mainHamberger").toggleClass("hidden")
    $("#default-search").toggleClass("hidden")
    $("#default-search").toggleClass("w-1/3")
} )