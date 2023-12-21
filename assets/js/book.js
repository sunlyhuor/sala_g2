

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
  
  async function fetchDataLibrary(){
    const url = 'http://127.0.0.1:5501/api/library.json';
    const response = await fetch(url);
    const data = await response.json();
    data.map((item) => {
      cardContainer.insertAdjacentHTML('beforeend', render(item))
    })
  }
  fetchDataLibrary();
  function render(item) {
    const { Thumbnail, title, description, profile, username, fellower, post_date } = item
    return `
      <div class="max-w-sm bg-white rounded-lg">
        <a href="/public/book/view.html">
          <img class="rounded-t-lg" src="${Thumbnail}" alt="">
        </a>
        <div class="p-5">
          <a href="/public/book/view.html">
            <h5 class="mb-2 text-black text-2xl tracking-tight">${title}</h5>
          </a>
          <p class="mb-3 text-black text-base tracking-tight text-des desc">${description}</p>
          <div class="flex items-center">
            <img class="rounded-full w-9 h-9" src="${profile}" alt="profile picture">
            <div class="w-full flex justify-between items-center">
              <div class="text-center text-black text-sm font-medium font-['Noto Serif Khmer'] tracking-tight">
                <div>${username}</div>
                <div class="text-center text-black text-xs font-light font-['Noto Serif Khmer'] tracking-tight ps-3">${fellower} ${post_date}</div>
              </div>
              <a href="#">
                <button id="addtoFav">
                  <i class="fa-regular fa-heart text-2xl"></i>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    `;
  }
  const cardContainer = document.querySelector('#display')