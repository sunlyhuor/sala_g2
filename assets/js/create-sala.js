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
const Email=document.querySelector("#email");
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
  const email=Email.value;
  const phone = phoneEle.value;
  const address = locationEle.value;
  const message = messageEle.value;
  const school = {
      name: name,
      description: message,
      e: email,
      address: address,
      phoneNumber: phone,
      view: 0,
      facebookUrl: "",
      linkedInUrl: "",
      telegramUrl: "",
      youtubeUrl: "",
    
  };

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
        result.data;
        window.location.reload();
      })
      .catch((error) => console.log("error", error));
  })
  .catch((error) => console.log("error", error));


});

