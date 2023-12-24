const url2='https://cms.istad.co/api/sala-lessons?populate=thumbnail';
const tab2=document.getElementById('tabs2');
let display=' ';
//GET tab2
const renderTable2=(dis)=>{
    dis.map((table)=>{
        console.log(table);
        display+=`
        <tr>
            <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                    <div class="flex-shrink-0 w-[100px] h-[100px]">
                         <img class="w-[100px] " src="https://cms.istad.co${table.attributes.thumbnail.data.attributes.formats.medium.url}" alt="">
                    </div>
                </div>
            </td>
            <td class="px-6 py-4 whitespace-wrap">
                <div class="text-sm text-gray-900">${table.attributes.title}</div>
            </td>
            <td class="px-6 py-4 whitespace-wrap">
                <div class="text-sm text-gray-900">${table.attributes.about}</div>
             </td>
            <td class="px-6 py-4 whitespace-nowrap">
                 <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        ${table.attributes.publishedAt}
                    </span>
            </td>
            <td class="px-6 py-4 whitespace-nowrap  text-sm font-medium">
                 <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit</a>
                <a href="#" class="ml-2 text-red-600 hover:text-red-900">Delete</a>
            </td>
        </tr>
        `
    });

    tab2.innerHTML=display;
}
fetch(url2)
.then(res=>res.json())
.then((resp)=>{
    let results=resp.data;

    renderTable2(results)
})
