const metricButton: HTMLInputElement |null = document.getElementById('metric') as HTMLInputElement
const imperialButton: HTMLInputElement | null = document.getElementById('imperial') as HTMLInputElement
const metricContent: Element | null = document.querySelector('.measurement-metric')
const imperialContent:  Element | null = document.querySelector('.measurement-imperial')
const rightLine: HTMLElement | null = document.querySelector('.right-line')





 // Function to show the metric content and hide the imperial content
function showMetricContent(): void {
    if(metricButton) metricButton.checked = true; // Ensure Metric is checked
    if(imperialButton) imperialButton.checked = false; // Uncheck Imperial
    if(metricContent) metricContent.classList.remove("hidden");
    if(imperialContent) imperialContent.classList.add("hidden");
     
    
  
  }

  // Function to show the imperial content and hide the metric content
  function showImperialContent(): void {
    if(imperialButton) imperialButton.checked = true;
    if(metricButton) metricButton.checked = false;
    if(imperialContent)imperialContent.classList.remove("hidden");
    if(metricContent)metricContent.classList.add("hidden");
    if(rightLine)rightLine.style.display = "none";
    
  }

   
    
  
   // Add event listeners to the radio buttons
   if(metricButton) metricButton.addEventListener("click", showMetricContent);
   if(imperialButton) imperialButton.addEventListener("click", showImperialContent);

 // Initially, show the metric content (since it's the default)
 showMetricContent();