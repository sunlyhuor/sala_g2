
'use strict'
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
  
const blog = document.getElementById("book");
let output = "";
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
   <img class="rounded-t-lg h-full w-full object-contain" src="${thumbnailUrl}" alt="">
 </a>
   </div>
    <div class="p-5">
      <a href="/public/book/view.html">
        <h5 class="mb-2 text-black text-2xl tracking-tight">${post.attributes.title}</h5>
      </a>
      <p class="mb-3 text-black text-base tracking-tight text-des desc">${post.attributes.about}</p>
      <div class="flex items-center">
        <img class="rounded-full w-9 h-9" src="${profileurl}" alt="profile picture">
        <div class="w-full flex justify-between items-center">
          <div class=" text-start text-black text-sm font-medium font-['Noto Serif Khmer'] tracking-tight">
            <div class="ps-3">${post.attributes.name}</div>
            <div class="text-center text-black text-xs font-light font-['Noto Serif Khmer'] tracking-tight ps-3">${post.attributes.follower} ពាន់នាក់ ${dateOnly}</div>
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