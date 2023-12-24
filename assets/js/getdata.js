// Assuming you have an array of card data stored in localStorage

'use strict'
let favorites = JSON.parse(localStorage.getItem("favorites"));
console.log(favorites)

const renderCard = (favorites) => {
  const { title,
    imagePf,
    imageBook,
    about,
    name,
    follower,
    dateOnly,
    id} = favorites
  return `
  <div class="max-w-sm bg-white rounded-lg fav">
  <div class = "h-40"> 
  <a href="/public/book/view.html">
  <img class="rounded-t-lg h-full w-full object-contain" src="${imageBook}" alt="" id="imagesBook">
</a>
  </div>
   <div class="p-5">
     <a href="/public/book/view.html">
       <h5 class="mb-2 text-black text-2xl tracking-tight" id="title">${title}</h5>
     </a>
     <p class="mb-3 text-black text-base tracking-tight text-des desc" id="about">${about}</p>
     <div class="flex items-center">
       <img class="rounded-full w-9 h-9" src="${imagePf}" alt="profile picture" id="imageProfile">
       <div class="w-full flex justify-between items-center">
         <div class=" text-start text-black text-sm font-medium font-['Noto Serif Khmer'] tracking-tight">
           <div class="ps-3" id="name">${name}</div>
           <div class="text-center text-black text-xs font-light font-['Noto Serif Khmer'] tracking-tight ps-3"> <span id="follower">${follower} 
           </span>ពាន់នាក់ <span id="dateOnly">${dateOnly}</span> </div>
         </div>
         <a href="#">
           <button  onclick="removeData(${id},this)">
           <i class="fa-solid fa-heart text-2xl text-red-500"></i>
           </button>
         </a>
       </div>
     </div>
   </div>
 </div>
     
  `;
};

// Function to render all cards and display them on the UI
const renderAllCards = (cards) => {
  // Get the table element where you want to display the cards
  const table = document.querySelector('#addFavBook');

  // Clear existing content in the table
  table.innerHTML = '';

  // Loop through the array of cards and append each card to the table
  cards.forEach((card) => {
    // Use the renderCard function to generate HTML for each card
    const cardHtml = renderCard(card);

    // Append the generated HTML to the table
    table.innerHTML += cardHtml;
  });
};

// Render all cards when the page loads
renderAllCards(favorites);

function removeData(bookId, button) {
  const rowToRemove = button.closest('.fav');
  if (rowToRemove) {
    // Retrieve favorites from local storage
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    // Find the index of the item to remove
    const indexToRemove = favorites.findIndex(item => item.bookId === bookId);

    if (indexToRemove !== -1) {
      // Remove the item from the array
      favorites.splice(indexToRemove, 1);

      // Update local storage with the modified array
      localStorage.setItem("favorites", JSON.stringify(favorites));

      // Remove the row from the UI after successful removal
      rowToRemove.parentNode.removeChild(rowToRemove);
    } else {
      
    }
  }
}