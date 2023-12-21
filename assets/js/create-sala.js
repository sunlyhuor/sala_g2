function uploadImage(event) {
  const file = event.target.files[0];
  const reader = new FileReader();

  reader.onload = function (e) {
    const img = document.getElementById("photo");
    img.src = e.target.result;
  };

  reader.readAsDataURL(file);
}

function uploadImageCover(event) {
  const file = event.target.files[0];
  const reader = new FileReader();

  reader.onload = function (e) {
    $('#img-view').css('background-image', 'url(' + e.target.result + ')');
    $("#img-view i").css( 'display', 'none' );
    $("#img-view p").css( 'display', 'none' );
  };

  reader.readAsDataURL(file);
}

//Create sala
const url='https://cms.istad.co/api/sala-schools?populate=profile%2Ccover';
const fileEle=document.querySelector('#file');
const nameEle=document.querySelector('#name');
const phoneEle=document.querySelector('#numbers')
const locationEle=document.querySelector('#location');
const messageEle=document.querySelector('#message');
async function addSchool(){
  const name=nameEle.value;
  const phone=Number(phoneEle.value);
  const file=fileEle.files[0];
  const imageUrl=await uplodeImage(file);
  const address=locationEle.value;
  const message=messageEle.value;
  const school={
    name,
    phone,
    fileUrl:[imageUrl,location],
    address,
    message
  }
  fetch(url,{
    method:'POST',
    headers:{
      'Content-type':'application/json'
    },
    body:JSON.stringify(school)
  })
  .then(res=>res.json)
  .then(data=>{
    addSchool(data)
  })
}

//uplode image 
async function uplodeImage(file){
  const formData = new FormData()
  formData.append('file', file)

  // sent request ot server
  const res = await fetch('https://cms.istad.co/api/upload',{
      method:'POST',
      body :formData
  })
  return res.json()
}