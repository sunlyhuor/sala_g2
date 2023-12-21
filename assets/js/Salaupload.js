const school =document.querySelector('#school');
const output =[ ];
const url=" ";
const renderSala=(posts)=>{
    posts.forEach(post=>{
        output+=`
        <div href="#" class="flex flex-col items-center bg-white rounded-lg lg:flex-row lg:max-w-2xl hover:bg-gray-100">
                <img class="object-cover w-full h-full rounded-t-lg md:h-full md:w-full lg:h-full lg:w-48 lg:rounded-none lg:rounded-s-lg" src="https://3.bp.blogspot.com/_oN2ovDH18dI/TNKOkWSZeVI/AAAAAAAAAJU/BMk5LbwR9a8/s1600/rupp.jpg" alt="">
                <div class="flex flex-col justify-between p-4 leading-normal">
                    <a href="/public/profile.html">
                        <h5 class="mb-2 text-black text-2xl tracking-tight">${post.name}</h5>
                    </a>
                    <div class="flex justify-start items-center gap-3 mb-3">
                        <i class="fa-solid fa-location-dot"></i>
                        <span>${post.location}</span>
                    </div>
                    <div class="flex justify-start items-center gap-3 mb-3">
                        <i class="fa-regular fa-envelope"></i>
                        <span>${post.email}</span>
                    </div>
                    <div class="flex justify-start items-center gap-3 mb-3">
                        <i class="fa-solid fa-phone"></i>
                        <span>${post.phone}</span>
                    </div>   
                    <div class="flex justify-start items-center gap-3 mb-3">
                        <span class="text-des">ប្រព័ន្ធទំនាក់ទំនងផ្សេងៗ</span>
                    </div>  
                    <div class="flex justify-start items-center gap-3 mb-3 ">
                        <a href="#" class="text-gray-400 hover:text-gray-900">
                            <i class="fa-brands fa-facebook"></i>
                        </a>
                        <a href="#" class="text-gray-400 hover:text-gray-900">
                            <i class="fa-brands fa-linkedin"></i>
                        </a>
                        <a href="#" class="text-gray-400 hover:text-gray-900">
                            <i class="fa-brands fa-telegram"></i>
                        </a>
                        <a href="#" class="text-gray-400 hover:text-gray-900">
                            <i class="fa-brands fa-youtube"></i>
                        </a>

                    </div>
                </div>
            </div>
        `
    })
    school.innerHTML=output;
}
fetch(url).then(res=>res.json())
.then(data=>renderSala(data));