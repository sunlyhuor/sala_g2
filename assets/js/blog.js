"use strict";
const blog = document.getElementById("blog");
let output = " ";
const url = "https://cms.istad.co/api/sala-blogs?populate=thumbnail%2Ctag";

const Blockrender = (posts) => {
  posts.forEach((post) => {
    output += `
        <div class="p-3 max-w-full flex shadow-sm">
        <a href="/public/blog/view.html"
            class="flex bg-white rounded-lg flex-col md:flex-row md:max-w-2xl hover:bg-gray-100 ease-in duration-300 shadow-sm">
            <img class="object-cover w-full h-[12rem] lg:w-[12rem] lg:h-[10rem] md:h-[10rem] md:w-[12rem] md:rounded-none md:rounded-s-lg rounded"
                src="https://cms.istad.co${post.attributes.thumbnail.data.attributes.url}" alt="https://cms.istad.co${post.attributes.thumbnail}">
            <div class="flex flex-col p-3 leading-relaxed">
                <p class="w-24 overflow-hidden rounded-full text-primary bg-secondary text-center px-2 py-1 md:px-4 md:py-2"> LifeStyle </p>
                <h1 class="text-xl mt-3 w-full desc">${post.attributes.title}</h1>
                <h2 class="minititle desc">${post.attributes.content}</h2>
                <span class="text-body text-gray-400"><i class="fa-regular fa-calendar-days"></i>${post.attributes.createdAt} - ចំនួនដង៖ ${post.attributes.view}​​</span>
            </div>
        </a>
    </div>
        `;
  });
  blog.innerHTML = output;
};
fetch(url)
  .then((res) => res.json())
  .then((jsonResult) => {
    Blockrender(jsonResult.data);
    jsonResult.data.map((d) => {
      console.log(d.attributes);
    });
  });
