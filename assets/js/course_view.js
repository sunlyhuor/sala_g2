"use strict";

// Function to parse query parameters from the URL
function getQueryParams() {
  var queryParams = {};
  var queryString = window.location.search.substring(1);
  var queryParamsArray = queryString.split("&");

  for (var i = 0; i < queryParamsArray.length; i++) {
    var pair = queryParamsArray[i].split("=");
    var key = decodeURIComponent(pair[0]);
    var value = decodeURIComponent(pair[1]);

    // Handle cases where a parameter may appear more than once
    if (queryParams[key]) {
      if (Array.isArray(queryParams[key])) {
        queryParams[key].push(value);
      } else {
        queryParams[key] = [queryParams[key], value];
      }
    } else {
      queryParams[key] = value;
    }
  }

  return queryParams;
}  
const blog = document.querySelector("#lesson");
let output = " ";
const url = "https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=UU1VDpWpOf36CuP9fowyDZtQ&key=AIzaSyD5vvPK3F3OnV3z9x0alk2HtTi8UdknbXM";
const Blockrender = (posts) => {
  posts=(post) => {
    output += `
    <iframe class="w-full mb-5" height="400" src= "https://www.youtube.com/watch?v= ${post.snippet.resourceId.videoId}"  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        `;
  };
  cons
  blog.innerHTML = output;
};

fetch(url)
  .then((res) => res.json())
  .then((jsonResult) => {
    let result = jsonResult.items;
    Blockrender(result);
  });

//   //Url
//   const url = "https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=UU1VDpWpOf36CuP9fowyDZtQ&key=AIzaSyD5vvPK3F3OnV3z9x0alk2HtTi8UdknbXM/"
//   const recentUrl = "https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=UU1VDpWpOf36CuP9fowyDZtQ&key=AIzaSyD5vvPK3F3OnV3z9x0alk2HtTi8UdknbXM"
//   // Example usage
//   const params = getQueryParams();
//   console.log(params)

//   // Access individual parameters
//   const id = params.id; // Single value or array of value
//   console.log(id)

//   $.ajax({
//       type: "GET",
//       url: url + id + "?part=snippet",
//       // data: "data",
//       dataType: "json",
//       success: function (response) {
//           console.log(response)
//           $("#lesson").attr("src", "https://youtube.googleapis.com/" + response.items.snippet.channelId )
//           $("#textName").text( response.data.attributes.title )
//           $("#textTitle").text( response.items.snippet.title )
//           $("#textDate").text( new Date( response.items.snippet.publishedAt).toDateString() )
//       }
//   });

//   function recentBlog( { id,channelTitle,publishedAt,title } ){
//       return `
//       <div class="max-w-sm bg-white rounded-lg relative">
//       <div class ="h-40" >
//       <a href="/public/course/view.html?id${id}">
//         <img class="rounded-t-lg object-contain h-full w-full " src=" ${thumbnailUrl}" alt="thumbnail"> 
//       </a>
//       </div>
//       <div class="relUtube">
//         <i class="fa-solid fa-play w-9 h-9 bg-red-600 flex justify-center items-center rounded-full" style="color: #ffffff;"></i>
//       </div>
//       <div class="container flex items-end justify-between  text-xs rel px-3">
//         <p class="py-1 px-2 bg-background rounded-lg bg-opacity-75 ">10 នាទី</p>
//         <p class="py-1 px-2  bg-background rounded-lg bg-opacity-75">អ្នកមើល ​១០ពាន់ នាក់</p>
//       </div>
//       <div class="p-5 mt-10"> 
//         <!-- profile -->
//         <div class="flex items-center">
//           <div class="flex-shrink-0">
//               <img class="rounded-full w-9 h-9"
//                   src="https://images.unsplash.com/photo-1703027817355-e78fa9cbc1f5?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//                   alt="profile picture">
//           </div>
//             <div class="flex-1 ms-4">
//               <p class="text-sm font-medium text-Onsecondary truncate">
//                   ${channelTitle}
//               </p>
//               <p class="text-xs text-des truncate">
//                   ១០០ពាន់ នាក់ ${publishedAt}
//               </p>
//           </div>
//       </div>
//         <!-- end of profile -->
//         <a href="/public/course/view.html">
//           <h5 class="my-2 text-black text-xl tracking-tight">${title}</h5>
//         </a>
//       </div>
//     </div>
//       `
//   }

//   $.ajax({
//       type: "GET",
//       url: recentUrl,
//       // data: "data",   
//       dataType: "json",
//       success: function (response) {
//           let con = "";
//           response.data.map(data => {
//               if( data.id != id ){
//                   con += recentBlog( { 
//                       id: data.id,
//                       title: data.attributes.title,
//                       view: data.attributes.view,
//                       created: new Date(data.attributes.createdAt).toDateString(),
//                       thumbnail: data.attributes.thumbnail.data?.attributes?.url 
//                   } )
//               }
              
//           })
//           $("#listRecentBlog").html( con )
//       }
//   });



