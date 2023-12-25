document.addEventListener("DOMContentLoaded", function() {
    // Get the follow button and set initial state from localStorage
    const followButton = document.getElementById("followButton");
    const isFollowing = localStorage.getItem("isFollowing") === "true";

    // Set initial button text based on follow state
    updateButtonText();

    // Add click event listener to the button
    followButton.addEventListener("click", function() {
        // Toggle follow state
        const newFollowState = !isFollowing;

        // Update localStorage with the new follow state
        localStorage.setItem("isFollowing", newFollowState);

        // Update button text based on the new follow state
        updateButtonText();

        // Update isFollowing variable
        isFollowing = newFollowState;
    });

    // Function to update button text based on follow state
    function updateButtonText() {
        followButton.textContent = isFollowing ? "បានតាមដាន" : "តាមដាន";
    }
});