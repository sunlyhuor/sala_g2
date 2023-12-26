"use strict";

const blog = document.querySelector("#blog");
let output = " ";
const url = "https://cms.istad.co/api/sala-blogs?populate=thumbnail%2Ctag";
const Blockrender = (posts) => {
  posts.forEach((post) => {
    output += `
        <div class="p-3 max-w-full flex shadow-sm">
        <a href="/public/blog/view.html?id=${
          post.id
        }" class="flex flex-col items-center bg-white rounded-lg lg:flex-row lg:max-w-2xl hover:bg-gray-100">
        <img class="object-cover w-full h-full rounded-t-lg md:h-full md:w-full lg:h-full lg:w-48 lg:rounded-none lg:rounded-s-lg" src="https://cms.istad.co${
          post.attributes.thumbnail?.data?.attributes?.url
        }" alt="">
        <div class="flex flex-col justify-between p-3 leading-relaxed">
        <p class="w-36 overflow-hidden rounded-full text-primary bg-secondary text-center px-2 py-1 md:px-4 md:py-2"> ${
          post.attributes.tag.data?.attributes?.name
        } </p>
        <h1 class="text-xl mt-3 w-full desTwoLine desc">${
          post.attributes?.title
        }</h1>
        <h2 class="minititle desTwoLine text-des desc">${
          post.attributes?.content
        }</h2>
        <span class="text-body text-gray-400"><i class="fa-regular fa-calendar-days"></i>
            ${new Date(post.attributes.createdAt).toDateString()} - ចំនួនដង៖ ${
      post.attributes.view
    }
        </span>
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
    let result = jsonResult.data;
    Blockrender(result);
  });
