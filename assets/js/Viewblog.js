
const url = "https://cms.istad.co/api/sala-blogs/31";
const view =document.getElementById('viewBlog');

console.log(url)

fetch(url).
then(res=>res.json())
.then(result=>console.log(result.data.attributes))


