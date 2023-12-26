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

const sala = document.querySelector("#salaprofile");
let output = " ";
const url =
  "https://cms.istad.co/api/sala-school/";
const Blockrender = (posts) => {
  posts.map((post) => {
    if (post.id == getQueryParams().id) {
      output += `
      <img class="w-5/6 mx-auto rounded-lg relative" src="https://cms.istad.co/${post.attributes.profile.data ?.attributes.url}">
      <img id="#textThumbnail" class="mx-32 top-12 absolute w-[130px] h-[130px] rounded-[140px] lg:mx-60 lg:mt-72 md:mt-36 " src="https://cms.istad.co/${post.attributes.profile.data ?.attributes.url}" alt="">
          `;
      return;
    }
  });
  sala.innerHTML = output;
};
