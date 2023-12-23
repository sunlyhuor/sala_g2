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
    //Url
    const url = "https://cms.istad.co/api/sala-blogs/"
    const recentUrl = "https://cms.istad.co/api/sala-blogs?pagination%5Blimit%5D=4&populate=thumbnail%2C%20tag"
    // Example usage
    const params = getQueryParams();
  
    // Access individual parameters
    const id = params.id; // Single value or array of value

    $.ajax({
        type: "GET",
        url: url + id + "?populate=thumbnail",
        // data: "data",
        dataType: "json",
        success: function (response) {
            // console.log(response)
            $("#textContent").text( response.data.attributes.content )
            $("#textTitle").text( response.data.attributes.title )
            $("#textDate").text( new Date( response.data.attributes.createdAt).toDateString() )
            $("#textThumbnail").attr("src", "https://cms.istad.co" + response.data.attributes.thumbnail.data.attributes.url )
        }
    });

    function recentBlog( { id, title, thumbnail, view, created } ){
        return ` <div class="p-3">
        <a href="/public/blog/view.html?id=${id}" class="flex bg-white rounded-lg md:flex-row md:max-w-xl hover:bg-gray-100 ease-in duration-300 shadow-sm">
        <img class="object-cover w-[8rem] h-[10rem] md:h-[8rem] md:w-[10rem] md:rounded-none rounded-s-lg md:rounded-s-lg" src="https://cms.istad.co${thumbnail}" alt="${thumbnail}">
        <div class="flex flex-col p-2">
            <h1 class="text-xl">${title}</h1>
            <span class="text-body text-gray-400 mt-2"> ${created} - ចំនួនដង៖ ${view}</span>
        </div>
        </a>
    </div>`
    }

    $.ajax({
        type: "GET",
        url: recentUrl,
        // data: "data",   
        dataType: "json",
        success: function (response) {
            let con = "";
            response.data.map(data => {
                if( data.id != id ){
                    con += recentBlog( { 
                        id: data.id,
                        title: data.attributes.title,
                        view: data.attributes.view,
                        created: new Date(data.attributes.createdAt).toDateString(),
                        thumbnail: data.attributes.thumbnail.data?.attributes?.url 
                    } )
                }
                
            })
            $("#listRecentBlog").html( con )
        }
    });


