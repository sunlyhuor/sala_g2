
const url1='https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=UU1VDpWpOf36CuP9fowyDZtQ&key=AIzaSyD5vvPK3F3OnV3z9x0alk2HtTi8UdknbXM';
const tab1=document.getElementById('tabs1');
let output =' ';
const recderTable=(posts)=>{
    posts.map((post)=>{
        let thumbnailUrl = `${post.snippet.thumbnails.medium.url}`;
        output+=`
        <tr>
        <td class="px-6 py-4 whitespace-nowrap">
            <div class="flex items-center">
                <div class="flex-shrink-0 h-64   w-64">
                    <img class="h-[100px] w-[100px] " src="${thumbnailUrl}" alt="">
                </div>
            </div>
        </td>
        <td class="px-6 py-4 whitespace-wrap">
            <div class="text-sm text-gray-900">${post.snippet.title}</div>
            <div class="text-sm text-gray-500">Optimization</div>
        </td>
        <td class="px-6 py-4 whitespace-wrap">
            <div class="text-sm text-gray-900"> ${post.snippet.description}div>
        </td>
        <td class="px-6 py-4 whitespace-nowrap">
            <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
            ${new Date(post.snippet.publishedAt).toDateString()}
            </span>
        </td>
        <td class="px-6 py-4 whitespace-nowrap  text-sm font-medium">
            <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit</a>
            <a href="#" class="ml-2 text-red-600 hover:text-red-900" onclick="deletelesson(${post.id})">Delete</a>
        </td>
    </tr>
        `
    });
    tab1.innerHTML=output;
};
const deletelesson = (lessonId) => {
    // Display a confirmation dialog
    const isConfirmed = confirm('Are you sure you want to delete this blog?');
    
    if (isConfirmed) {
        // Make a DELETE request to the API with the specific blog ID
        fetch(`https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=UU1VDpWpOf36CuP9fowyDZtQ&key=AIzaSyD5vvPK3F3OnV3z9x0alk2HtTi8UdknbXM/${lessonId}`, {
            method: 'DELETE',
        })
        .then(res => res.json())
        .then((result) => {
            // Handle the response or update the UI as needed
            console.log('lesson deleted successfully:', result);
            // You may want to re-fetch the data and render the updated table
           renderTable(resp) // Add this function to re-fetch and render the updated data
        })
        .catch((error) => {
            console.error('Error deleting lesson:', error);
        });
    }
};
fetch(url1)
.then((res)=>res.json())
.then((jsonresults)=>{
    let results=jsonresults.items;
   recderTable(results);
})


