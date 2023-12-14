$(document).ready(function() {
  // Handle form submission when the button is clicked
  $("#submitBtn").click(function() {
      // Get form data
      var formData = {
          username: $("#username").val(),
          email: $("#email").val(),
          password: $("#password").val(),
          // Add more fields as needed
      };
console.log(formData.username)
console.log(formData.email)
console.log(formData.password)
      // Make a POST request to your API
      $.ajax({
          type: "POST",
          url: "https://cms.istad.co/api/auth/local/register",
          data: JSON.stringify(formData),
          contentType: "application/json",
          success: function(response) {
              // Handle the success response
              console.log(response);
          },
          error: function(error) {
              // Handle errors
              console.error("Error:", error);
          }
      });
  });
});