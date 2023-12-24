
'use strict'
const blog = document.getElementById("book");
const output = "";
const url = "https://cms.istad.co/api/sala-lessons?populate=thumbnail%2Cprofile";

const blockRender = (posts) => {
 
  posts.map((post) => {
    const timeStamp = post.attributes.createdAt;
    const dateOnly = timeStamp.slice(0, 10);
  let thumbnailUrl = `https://cms.istad.co${post.attributes.thumbnail?.data?.attributes?.formats?.small?.url}`;
  let profileurl = `https://cms.istad.co${post.attributes.profile.data.attributes.formats.small.url}`; 
  output += 
  `
  <div class="max-w-sm bg-white rounded-lg">
   <div class = "h-40"> 
   <a href="/public/book/view.html">
   <img class="rounded-t-lg h-full w-full object-contain" src="${thumbnailUrl}" alt="" id="imagesBook">
 </a>
   </div>
    <div class="p-5">
      <a href="/public/book/view.html">
        <h5 class="mb-2 text-black text-2xl tracking-tight" id="title">${post.attributes.title}</h5>
      </a>
      <p class="mb-3 text-black text-base tracking-tight text-des desc" id="about">${post.attributes.about}</p>
      <div class="flex items-center">
        <img class="rounded-full w-9 h-9" src="${profileurl}" alt="profile picture" id="imageProfile">
        <div class="w-full flex justify-between items-center">
          <div class=" text-start text-black text-sm font-medium font-['Noto Serif Khmer'] tracking-tight">
            <div class="ps-3" id="name">${post.attributes.name}</div>
            <div class="text-center text-black text-xs font-light font-['Noto Serif Khmer'] tracking-tight ps-3"> <span id="follower">${post.attributes.follower} 
            </span>ពាន់នាក់ <span id="dateOnly">${dateOnly}</span> </div>
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
  });
  blog.innerHTML = output;
};
fetch(url)
  .then((res) => res.json())
  .then((jsonResult) => {
    let result = jsonResult.data;
    blockRender(result);
  });




  // add to favourtite in localStorage 
  $(document).on("click", "#addtoFav", function () {
    console.log("Add to fav clicked");
  
    // Toggle the 'active' class
    // $(this).toggleClass("active");
  
    if ($(this).hasClass("active")) {
      // Code to execute when the button is active (favorited)
      $(this).html(`
        <svg class="w-6 h-6 text-red-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
          <path d="M17.947 2.053a5.209 5.209 0 0 0-3.793-1.53A6.414 6.414 0 0 0 10 2.311 6.482 6.482 0 0 0 5.824.5a5.2 5.2 0 0 0-3.8 1.521c-1.915 1.916-2.315 5.392.625 8.333l7 7a.5.5 0 0 0 .708 0l7-7a6.6 6.6 0 0 0 2.123-4.508 5.179 5.179 0 0 0-1.533-3.793Z"/>
        </svg>
      `);
  
      // Find the parent card element
      const cardElement = $(this).closest('.max-w-sm');
  
      // Extract data from the card
      const title= cardElement.find('#title').text().trim();
      const imagePf = cardElement.find('#imageProfile').attr('src').trim();
      const imageBook = cardElement.find('#imagesBook').attr('src').trim();
      const about = cardElement.find('#about').text().trim();
      const name = cardElement.find('#name').text().trim();
      const follower = cardElement.find('#follower').text().trim();
      const dateOnly = cardElement.find('#dateOnly').text().trim();
     
  
      // Prepare the data to be stored in localStorage
      const storeData = {
        title,
        imagePf,
        imageBook,
        about,
        name,
        follower,
        dateOnly
      };
      console.log("Extracted Data:", storeData);
  
      // Store data in localStorage
      const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
      favorites.push(storeData);
      localStorage.setItem("favorites", JSON.stringify(favorites));
  
    } else {
      // Code to execute when the button is not active (not favorited)
      $(this).html(`
        <svg class="w-6 h-6 text-gray-800 dark:text-black  md:mt-0" aria-hidden="true" xmlns="http:www.w3.org/2000/svg"
          fill="none" viewBox="0 0 21 19">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.8"
            d="M11 4C5.5-1.5-1.5 5.5 4 11l7 7 7-7c5.458-5.458-1.542-12.458-7-7Z" />
        </svg>
      `);
  
      // Code to execute when the button is not active (not favorited)
      try {
        // Attempt to store data in localStorage
        localStorage.setItem("favorites", JSON.stringify(favorites));
      } catch (e) {
        // Handle the error (e.g., show a message to the user)
        console.error("Error storing data in localStorage:", e);
      }
    }
  });