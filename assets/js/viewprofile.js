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
    const url = "https://cms.istad.co/api/sala-schools/"
    const recentUrl = "https://cms.istad.co/api/sala-schools?populate=profile%2Ccover"
    // Example usage
    const params = getQueryParams();
  
    // Access individual parameters
    const id = params.id; // Single value or array of value

    $.ajax({
        type: "GET",
        url: url + id + "?populate=profile",
        // data: "data",
        dataType: "json",
        success: function (response) {
            // console.log(response)
            $("#textName").text( response.data.attributes.name )
            $("#txtDes").text( response.data.attributes.description )
            $("#textThumbnail").attr("src", "https://cms.istad.co" + response.data.attributes.profile.data.attributes.url )
        }
    });

    function recentBlog( { id, name, address,e, phoneNumber,facebookUrl,profile} ){
        return `
       
    
    `
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
                        name: data.attributes.name,
                        profile: data.attributes.profile.data?.attributes?.url 
                    } )
                }
                
            })
            $("#profile").html( con )
        }
    });


