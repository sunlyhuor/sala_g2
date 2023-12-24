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
const url =
  "https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=UU1VDpWpOf36CuP9fowyDZtQ&key=AIzaSyD5vvPK3F3OnV3z9x0alk2HtTi8UdknbXM";
const Blockrender = (posts) => {
  posts.map((post) => {
    if (post.id == getQueryParams().id) {
      output += `
      <iframe class="w-full mb-5" height="400" src= "https://www.youtube.com/embed/${post.snippet.resourceId.videoId}"  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          `;
      return;
    }
  });
  blog.innerHTML = output;
};

const relateLesson = document.querySelector("#relateCard");
let outputLesson = " ";
const renderCard = (itemLesson) => {
  const firstFiveItems = itemLesson.slice(0, 5);
  firstFiveItems.map((item) => {
    if (item.id != getQueryParams().id) {
      outputLesson += `
        <div class="p-3">
          <a href="/public/course/view.html?id=${item.id}"
            class="flex bg-white rounded-lg md:flex-row md:max-w-xl hover:bg-gray-100 ease-in duration-300 shadow-sm">
            <img class="object-cover w-[9rem] md:w-[10rem] rounded-xl"
              src="${item.snippet.thumbnails.default.url}" alt="">
            <div class="flex flex-col p-2">
              <h1 class="text-xl w-72 desc"> ${item.snippet.title}</h1>
              <span class="text-body mt-2 text-des w-72 desc">${
                item.snippet.description
              } </span>
              <div class="flex text-des">
                <i class="fa-regular fa-calendar mt-2"></i>
                <p class="mt-1 ps-2">${new Date(
                  item.snippet.publishedAt
                ).toDateString()}</p>
              </div>
            </div>
          </a>
        </div>
          `;
    }
  });
  relateLesson.innerHTML = outputLesson;
};
const course = document.querySelector("#aboutCourse");
let result = " ";
const renderAboutCourse = (courseItem) => {
  courseItem.map((items) => {
    if (items.id == getQueryParams().id) {
      result += `
      <p class="text-des pt-5"><strong>ការពិពណ៌នា</strong></p>
      <p class="text-sm text-des">${items.snippet.description}</p>
      <p class="text-sm pt-5 text-des"><br>
        ${new Date (items.snippet.publishedAt).toDateString()} <br>
        <strong>${items.snippet.videoOwnerChannelTitle}</strong> <br>
         <br>
        Telegram: <span><a href="#">t.me/phearinhay</a></span>
      </p>
          `;
     }
    
  });
  course.innerHTML = result;
};

fetch(url)
  .then((res) => res.json())
  .then((jsonResult) => {
    let result = jsonResult.items;
    Blockrender(result);
  });

fetch(url)
  .then((res) => res.json())
  .then((jsonResult) => {
    let result = jsonResult.items;
    renderCard(result);
  });
fetch(url)
  .then((res) => res.json())
  .then((jsonResult) => {
    let result = jsonResult.items;
    renderAboutCourse(result);
  });
