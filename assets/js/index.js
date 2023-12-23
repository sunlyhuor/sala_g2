"use strict";
const popularBlog = document.getElementById('popularBlog');
const url = `https://cms.istad.co/api/sala-blogs?pagination%5Blimit%5D=6&populate=thumbnail%2C%20tag`
let display = ""
let date= new Date().getDate;

const popularBlogRender = (cards) =>{
    cards.forEach((card) => {
        console.log(card)
        display += `
            <a href="/public/blog/view.html?id=${card.id}" class="flex flex-col items-center bg-white rounded-lg lg:flex-row lg:max-w-2xl hover:bg-gray-100">
                <img class="object-cover w-full h-full rounded-t-lg md:h-full md:w-full lg:h-full lg:w-48 lg:rounded-none lg:rounded-s-lg" src="https://cms.istad.co${card.attributes.thumbnail?.data?.attributes?.url}" alt="">
                <div class="flex flex-col justify-between p-3 leading-relaxed">
                <p class="w-36 overflow-hidden rounded-full text-primary bg-secondary text-center px-2 py-1 md:px-4 md:py-2"> ${ card.attributes.tag.data.attributes.name } </p>
                <h1 class="text-xl mt-3 w-full desTwoLine">${card.attributes.title}</h1>
                <h2 class="minititle desTwoLine text-des">${card.attributes.content}</h2>
                <span class="text-body text-gray-400"><i class="fa-regular fa-calendar-days"></i>
                    ${ new Date(card.attributes.createdAt).toDateString() } - ចំនួនដង៖ ${card.attributes.view}
                </span>
                </div>
            </a>
        `;
    });
    popularBlog.innerHTML = display;
}

async function getData(){  
    const rep = await fetch(url , {
        method:"GET"
    })
    
    const json = await rep.json()
    popularBlogRender(json.data)
}
getData()
