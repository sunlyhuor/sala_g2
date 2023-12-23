'use strict'
const blog = document.getElementById("lesson");
let output = "";
const url = "https://cms.istad.co/api/sala-lessons?populate=profile%2Cthumbnail";
let date= new Date().getDate    ;
const blockRender = (posts) => {
  posts.map((post) => {
  let thumbnailUrl = `https://cms.istad.co${post.attributes.thumbnail?.data?.attributes?.formats?.small?.url}`;
  let profileurl = `https://cms.istad.co${post.attributes.profile.data.attributes.formats.small.url}`; 
  output += `
    <div class="max-w-sm bg-white rounded-lg relative">
    <div class ="h-40" >
    <a href="/public/course/view.html">
      <img class="rounded-t-lg object-contain h-full w-full " src=" ${thumbnailUrl}" alt="thumbnail"> 
    </a>
    </div>
    <div class="relUtube">
      <i class="fa-solid fa-play w-9 h-9 bg-red-600 flex justify-center items-center rounded-full" style="color: #ffffff;"></i>
    </div>
    <div class="container flex items-end justify-between text-xs rel px-3">
      <p class="py-1 px-2 bg-background rounded-lg bg-opacity-75">10 នាទី</p>
      <p class="py-1 px-2 bg-background rounded-lg bg-opacity-75">អ្នកមើល ${post.attributes.viewer}ពាន់ នាក់</p>
    </div>
    <div class="p-5"> 
      <!-- profile -->
      <div class="flex items-center">
        <div class="flex-shrink-0">
            <img class="rounded-full w-9 h-9"
                src="${profileurl }"
                alt="profile picture">
        </div>
          <div class="flex-1 ms-4">
            <p class="text-sm font-medium text-Onsecondary truncate">
                ${post.attributes.name}
            </p>
            <p class="text-xs text-des truncate">
                ${post.attributes.follower}ពាន់ នាក់ 11/20/2023
            </p>
        </div>
    </div>
      <!-- end of profile -->
      <a href="/public/course/view.html">
        <h5 class="my-2 text-black text-xl tracking-tight">${post.attributes.title}</h5>
      </a>
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
