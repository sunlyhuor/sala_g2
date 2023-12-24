"use strict";
const popularBlog = document.getElementById('popularBlog');
const url = `https://cms.istad.co/api/sala-blogs?pagination%5Blimit%5D=6&populate=thumbnail%2C%20tag`
const urlSchool = "https://cms.istad.co/api/sala-schools?pagination%5Blimit%5D=4&populate=profile%2C%20tag"
let display = ""
let date= new Date().getDate;

const popularBlogRender = (cards) =>{
    cards.forEach((card) => {
        // console.log(card)
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

function returnCard({profile,name,email,address,phoneNumber,facebookUrl,linkedInUrl,telegramUrl,youtubeUrl}){
    return `
    <div class="flex bg-white rounded-lg md:flex-row md:max-w-2xl hover:bg-gray-100 ease-in duration-300 shadow-sm">
    <a href="/public/profile.html" class="flex p-3">
      <img class="object-cover w-[8rem] h-full md:h-full md:w-[10rem] md:rounded-none rounded-s-lg md:rounded-s-lg" src="https://cms.istad.co${profile}" alt="${profile}">
      <div class="flex flex-col ps-3" style="width:50%">
          <a href="/public/profile.html" class="mb-2">
            <h1 class="text-xl desTwoLine">${name}</h1>
          </a>
          <div class="flex justify-start items-center gap-3 mb-2">
            <i class="fa-solid fa-location-dot"></i>
            <span class="desTwoLine">${address}</span>
          </div>
          <div class="flex justify-start items-center gap-3 mb-2">
              <i class="fa-regular fa-envelope"></i>
              <span class="desTwoLine">${email}</span>
          </div>
          <div class="flex justify-start items-center gap-3 mb-2">
              <i class="fa-solid fa-phone"></i>
              <span class="desTwoLine">${phoneNumber}</span>
          </div>   
          <div class="flex justify-start items-center gap-3 mb-2">
              <span class="text-des">ប្រព័ន្ធទំនាក់ទំនងផ្សេងៗ</span>
          </div>  
          
          <div class="flex justify-start items-center gap-3 mb-2">
            <a href="${facebookUrl}" class="text-gray-400 hover:text-gray-900">
                <i class="fa-brands fa-facebook"></i>
            </a>
            <a href="${linkedInUrl}" class="text-gray-400 hover:text-gray-900">
                <i class="fa-brands fa-linkedin"></i>
            </a>
            <a href="${telegramUrl}" class="text-gray-400 hover:text-gray-900">
                <i class="fa-brands fa-telegram"></i>
            </a>
            <a href="${youtubeUrl}" class="text-gray-400 hover:text-gray-900">
                <i class="fa-brands fa-youtube"></i>
            </a>
        </div>
      </div>
    </a>
  </div>
    `
}

$.ajax({
    type: "GET",
    url: urlSchool,
    // data: "data",
    dataType: "json",
    success: function (response) {
        let cardDisplay = ""
        response.data.map(data =>{
            cardDisplay += returnCard( { 
                name: data.attributes.name,
                email: data.attributes.e,
                address: data.attributes.address,
                phoneNumber: data.attributes.phoneNumber,
                facebookUrl: data.attributes.facebookUrl,
                telegramUrl: data.attributes.telegramUrl,
                linkedInUrl: data.attributes.linkedInUrl,
                youtubeUrl: data.attributes.youtubeUrl,
                profile: data.attributes.profile?.data?.attributes?.url
            } )
            // console.log(data.attributes.profile?.data?.attributes?.url)
            
        })
        $("#schoolHomepage").html(cardDisplay)
        
    },
    error: ( er, err, error ) => {
        console.log(error)
    }
});
