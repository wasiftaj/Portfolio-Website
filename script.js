/*function htmlProgressBar(percentage, duration) {
    const progressBar = document.getElementById("htmlprogress");
    let width = 0;
    const intervalTime = 10; // Speed of animation in milliseconds
    const increment = percentage / (duration / intervalTime);

    const interval = setInterval(() => {
        width += increment;
        if (width >= percentage) {
            width = percentage;
            clearInterval(interval);
        }
        htmlprogress.style.width = width + '%';
    }, intervalTime);
}

// Example: Animate the loading bar to 70% over 3 seconds
htmlProgressBar(90, 3000);


function animateProgressBar(percentage, duration) {
    const progressBar = document.getElementById("gitprogress");
    let width = 0;
    const intervalTime = 10; // Speed of animation in milliseconds
    const increment = percentage / (duration / intervalTime);

    const interval = setInterval(() => {
        width += increment;
        if (width >= percentage) {
            width = percentage;
            clearInterval(interval);
        }
        gitprogress.style.width = width + '%';
    }, intervalTime);
}

// Example: Animate the loading bar to 70% over 3 seconds
animateProgressBar(80, 3000);


function pythonProgressBar(percentage, duration) {
    const progressBar = document.getElementById("pythonprogress");
    let width = 0;
    const intervalTime = 10; // Speed of animation in milliseconds
    const increment = percentage / (duration / intervalTime);

    const interval = setInterval(() => {
        width += increment;
        if (width >= percentage) {
            width = percentage;
            clearInterval(interval);
        }
        pythonprogress.style.width = width + '%';
    }, intervalTime);
}

// Example: Animate the loading bar to 70% over 3 seconds
pythonProgressBar(30, 3000);*/
// Function to animate a progress bar
function animateProgressBar(elementId, targetWidth, duration) {
    const progressBar = document.getElementById(elementId);
    let width = 0; // Start from 0% width
    const intervalTime = 10; // The speed of the updates (in milliseconds)
    const increment = targetWidth / (duration / intervalTime); // Calculate how much the width should increase on each step

    const interval = setInterval(() => {
        width += increment; // Increment the width
        if (width >= targetWidth) {
            width = targetWidth; // If we've reached the target width, stop at the target
            clearInterval(interval); // Stop the interval once the target is reached
        }
        progressBar.style.width = width + '%'; // Update the progress bar's width
    }, intervalTime);
}

// Create an Intersection Observer to trigger animations when elements come into view
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Animate the progress bars when they are in view
            const elementId = entry.target.id; // Get the id of the element that is in view
            const targetWidth = parseInt(entry.target.getAttribute('data-target-width'), 10); // Get the target width from data attribute
            const duration = 3000; // Animation duration in milliseconds
            animateProgressBar(elementId, targetWidth, duration);
            // Optionally unobserve the element to avoid multiple animations
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 }); // Trigger when at least 10% of the element is visible

// Observe the progress bar elements
const progressBars = document.querySelectorAll('.htmlprogress, .gitprogress, .pythonprogress, .cssprogress, .javaprogress, .djangoprogress, .cprogress');
progressBars.forEach(bar => {
    observer.observe(bar);
});
