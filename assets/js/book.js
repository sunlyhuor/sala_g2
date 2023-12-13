

$(document).on("click", "#addtoFav", function () {
    console.log("Add to fav clicked");
    // Toggle the 'active' class
    $(this).toggleClass("active");
  
    if ($(this).hasClass("active")) {
      // Code to execute when the button is active (favorited)
      $(this).html(`
             <i class="fa-solid fa-heart text-2xl text-red-500"></i>
          `);
    
    } else {
      $(this).html(`
            <i class="fa-regular fa-heart text-2xl"></i>
      
          `);
    
    }
  });
  