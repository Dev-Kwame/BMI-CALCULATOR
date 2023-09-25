const metricButton = document.getElementById('metric');
const imperialButton = document.getElementById('imperial');
const metricContent = document.querySelector('.measurement-metric');
const imperialContent = document.querySelector('.measurement-imperial');
const rightLine = document.querySelector('.right-line');
// Function to show the metric content and hide the imperial content
function showMetricContent() {
  
        metricButton.checked = true; // Ensure Metric is checked
        imperialButton.checked = false; // Uncheck Imperial
        metricContent.classList.remove("hidden");
        imperialContent.classList.add("hidden");
}
// Function to show the imperial content and hide the metric content
function showImperialContent() {
   
        imperialButton.checked = true;
        metricButton.checked = false;
        imperialContent.classList.remove("hidden");
        metricContent.classList.add("hidden");
        rightLine.style.display = "none";
}
// Add event listeners to the radio buttons
    metricButton.addEventListener("click", showMetricContent);
    imperialButton.addEventListener("click", showImperialContent);
// Initially, show the metric content (since it's the default)
showMetricContent();
