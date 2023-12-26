const url3='https://cms.istad.co/api/sala-blogs?populate=thumbnail%2Ctag';
const tabs3=document.getElementById('tabs3');
let blog=' ';
//GET tab3
const renderTable3=(dis)=>{
    dis.map((display)=>{
        blog+=`
        <tr>
            <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                    <div class="flex-shrink-0 w-64 h-64">
                         <img class="" src="https://cms.istad.co${display.attributes.thumbnail?.data?.attributes?.url}" alt="">
                    </div>
                </div>
            </td>
            <td class="px-6 py-4 whitespace-wrap">
                <div class="text-sm text-gray-900">${display.attributes?.title}</div>
            </td>
            <td class="px-6 py-4 whitespace-wrap">
                <div class="text-sm text-gray-900">${display.attributes?.content}</div>
             </td>
            <td class="px-6 py-4 whitespace-nowrap">
                 <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        ${new Date(display.attributes.createdAt).toDateString()}
                    </span>
            </td>
            <td class="px-6 py-4 whitespace-nowrap  text-sm font-medium">
                 <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit</a>
                <a href="#" class="ml-2 text-red-600 hover:text-red-900" onclick="deleteBlog(${display.id})">Delete</a>
            </td>
        </tr>
        `
    });

    tabs3.innerHTML=blog;
}
// Function to delete a blog
const deleteBlog = (blogId) => {
    // Display a confirmation dialog
    const isConfirmed = confirm('Are you sure you want to delete this blog?');
    
    if (isConfirmed) {
        // Make a DELETE request to the API with the specific blog ID
        fetch(`https://cms.istad.co/api/sala-blogs/${blogId}`, {
            method: 'DELETE',
        })
        .then(res => res.json())
        .then((resp) => {
            // Handle the response or update the UI as needed
            console.log('Blog deleted successfully:', resp);
            // You may want to re-fetch the data and render the updated table
           renderTable3(resp) // Add this function to re-fetch and render the updated data
        })
        .catch((error) => {
            console.error('Error deleting blog:', error);
        });
    }
};


    fetch(url3)
    .then(res=>res.json())
    .then((resp)=>{
        let results=resp.data;
        renderTable3(results)
    })

