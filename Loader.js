document.addEventListener("DOMContentLoaded", function () {
    const startButton = document.getElementById("startButton");
    const loader = document.getElementById("loader");

    startButton.addEventListener("click", function () {
        loader.style.display = "block"; // Show loader

        // Simulate a loading process for a few seconds
        setTimeout(() => {
            loader.style.display = "none"; // Hide loader
            // Redirect to another website after 3 seconds (adjust the URL and delay as needed)
            setTimeout(() => {
                window.location.href = "https://github.com/SultanBaniAli/Exercise"; 
            }, 3000);
        }, 3000); // Adjust the time as needed
    });
});
