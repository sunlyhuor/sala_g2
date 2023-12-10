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
