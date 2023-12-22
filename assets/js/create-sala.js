"use strict";

let imageProfile;

// photoName = $refs.photo.files[0].name;
//                   const reader = new FileReader();
//                   reader.onload = (e) => {
//                       photoPreview = e.target.result;
//                   };
//                   reader.readAsDataURL($refs.photo.files[0]);

function uploadImage(event) {
  const file = event.target.files[0];
  const reader = new FileReader();
  imageProfile = file;

  reader.onload = function (e) {
    const img = document.getElementById("image");
    img.src = e.target.result;
  };

  reader.readAsDataURL(file);
}

function uploadImageCover(event) {
  const file = event.target.files[0];
  const reader = new FileReader();
  // console.log(file);

  reader.onload = function (e) {
    $("#img-view").css("background-image", "url(" + e.target.result + ")");
    $("#img-view i").css("display", "none");
    $("#img-view p").css("display", "none");
  };

  reader.readAsDataURL(file);
}

//Create sala
const fileInput = document.getElementById("file");
const nameEle = document.querySelector("#name");
const phoneEle = document.querySelector("#numbers");
const locationEle = document.querySelector("#location");
const messageEle = document.querySelector("#message");
const btnSubmit = document.getElementById("btnSubmit");
let getFile;

btnSubmit.addEventListener("click", async function (e) {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  e.preventDefault();
  const name = nameEle.value;
  const phone = phoneEle.value;
  //const imageUrl = await uplodeImage(imageProfile);
  // console.log(imageUrl)
  const address = locationEle.value;
  const message = messageEle.value;
  const school = {
      name: name,
      description: message,
      e: "string",
      address: address,
      phoneNumber: phone,
      // profile: imageUrl,
      // cover: imageUrl,
      view: 0,
      facebookUrl: "",
      linkedInUrl: "",
      telegramUrl: "",
      youtubeUrl: "",
    
  };

  // let formdata = new FormData();
  // formdata.append("data.name", name);
  // formdata.append("data.description", message);
  // formdata.append("data.address", address);
  // formdata.append("data.phoneNumber", phone);
  // formdata.append("data.profile", imageUrl);
  // formdata.append("data.view", 0);


  // async function uplodeImage(file) {
  //   const formData = new FormData();
  //   formData.append("files", file);
  
  //   // sent request ot server
  //   const res = await fetch("https://cms.istad.co/api/upload", {
  //     method: "POST",
  //     body: formData,
  //   });
  //   const jsonRepso = await res.json();
  //  jsonRepso[0].id;
  //  return  fetch("https://cms.istad.co/api/sala-schools", {
  //   method: "POST",
  //   body: JSON.stringify(school),
  // })
  //   .then((res) => console.log(res))
  // }

  // const formdata = new FormData();
  // formdata.append("files", imageElement.files[0], "/path/to/file");

  // const requestOptions = {
  //   method: "POST",
  //   body: formdata,
  const formdata = new FormData();
  formdata.append("files", fileInput.files[0], "/path/to/file");
  const requestOptions = {
    method: 'POST',
    body: formdata,
    redirect: 'follow'
  };
  

fetch("https://cms.istad.co/api/upload", requestOptions)
.then((response) => response.json())
.then((result) => {
  const imageId = result[0].id; // Assuming the image ID is in the first element of the array
  // Add image ID to the product data
  school.profile = imageId;

  // Create product after uploading the image
  fetch("https://cms.istad.co/api/sala-schools?populate=profile%2Ccover", {
    method: "POST",
    headers: myHeaders,
    body: JSON.stringify({ data: school }),
  })
    .then((response) => response.json())
    .then((result) => {
      result.data
    })
    .catch((error) => console.log("error", error));
})
.catch((error) => console.log("error", error));


});

