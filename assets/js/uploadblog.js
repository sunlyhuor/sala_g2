const titleEle=document.querySelector('#title');
  const contentEle=document.querySelector('#content');
  const fileInput = document.getElementById("file");
  const btnSubmit=document.getElementById('btnSubmit');

  let getFile;
  btnSubmit.addEventListener("click", async function(e){
    const myHeaders=new Headers();
    myHeaders.append("Content-Type", "application/json");

    e.preventDefault();
    const title= titleEle.value;
    const content=contentEle.value;
    const blog={
        title:title,
        content:content,
        view: 0,
        tag: "string or id"
    }
    
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
      const imageId = result[0].id; 
      console.log(imageId)
      // Assuming the image ID is in the first element of the array
      // Add image ID to the product data
      blog.thumbnail = imageId;
  
      // Create product after uploading the image
      fetch("https://cms.istad.co/api/sala-blogs?populate=thumbnail%2C%20tag", {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify({ data:blog}),
      })
        .then((response) =>response.json())
        .then((result) => {
          result.data;
        })
        .catch((error) => console.log("error", error));
    })
    .catch((error) => console.log("error", error));
  })
