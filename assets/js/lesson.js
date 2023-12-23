'use strict'
const blog = document.getElementById("lesson");
let output = "";
const url = "https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=UU1VDpWpOf36CuP9fowyDZtQ&key=AIzaSyD5vvPK3F3OnV3z9x0alk2HtTi8UdknbXM";
let date= new Date().getDate    ;
const blockRender = (posts) => {
  posts.map((post) => {
  let thumbnailUrl = `${post.snippet.thumbnails.medium.url}`;
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
    <div class="container flex items-end justify-between  text-xs rel px-3">
      <p class="py-1 px-2 bg-background rounded-lg bg-opacity-75 ">10 នាទី</p>
      <p class="py-1 px-2  bg-background rounded-lg bg-opacity-75">អ្នកមើល ​១០ពាន់ នាក់</p>
    </div>
    <div class="p-5 mt-10"> 
      <!-- profile -->
      <div class="flex items-center">
        <div class="flex-shrink-0">
            <img class="rounded-full w-9 h-9"
                src="https://images.unsplash.com/photo-1703027817355-e78fa9cbc1f5?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="profile picture">
        </div>
          <div class="flex-1 ms-4">
            <p class="text-sm font-medium text-Onsecondary truncate">
                ${post.snippet.channelTitle}
            </p>
            <p class="text-xs text-des truncate">
                ១០០ពាន់ នាក់ ${post.snippet.publishedAt}
            </p>
        </div>
    </div>
      <!-- end of profile -->
      <a href="/public/course/view.html">
        <h5 class="my-2 text-black text-xl tracking-tight">${post.snippet.title}</h5>
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
    let result = jsonResult.items;
   blockRender(result);
  });