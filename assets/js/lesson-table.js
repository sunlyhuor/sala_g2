
const url1='https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=UU1VDpWpOf36CuP9fowyDZtQ&key=AIzaSyD5vvPK3F3OnV3z9x0alk2HtTi8UdknbXM';
const url3=' ';
const tab1=document.getElementById('tabs1');
const tab3=document.getElementById('tab3');
let output =' ';
const recderTable=(posts)=>{
    posts.map((post)=>{
        let thumbnailUrl = `${post.snippet.thumbnails.medium.url}`;
        output+=`
        <tr >
        <td class="px-6 py-4 whitespace-wrap">
            <div class="flex items-center">
                <div class="flex-shrink-0 w-[100px] h-[100px]">
                    <img class="w-[100px] h-[100px]" src="${thumbnailUrl}" alt="">
                </div>
            </div>
        </td>
        <td class="px-6 py-4 whitespace-wrap">
            <div class="text-sm text-gray-900">${post.snippet.title}</div>
        </td>
        <td class="px-6 py-4 whitespace-wrap">
            <div class="text-sm text-gray-900"> ${post.snippet.description}</div>
        </td>
        <td class="px-6 py-4 whitespace-nowrap">
            <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                ${post.snippet.publishedAt}
            </span>
        </td>
        <td class="px-6 py-4 whitespace-nowrap  text-sm font-medium">
            <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit</a>
            <a href="#" class="ml-2 text-red-600 hover:text-red-900">Delete</a>
        </td>
        </tr>
        `
    });
    tab1.innerHTML=output;
};
fetch(url1)
.then((res)=>res.json())
.then((jsonresults)=>{
    let results=jsonresults.items;
   recderTable(results);
})


