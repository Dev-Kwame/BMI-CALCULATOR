const metricButton: HTMLInputElement = document.getElementById('metric') as HTMLInputElement;
const imperialButton: HTMLInputElement  = document.getElementById('imperial') as HTMLInputElement;
const metricContent: Element | null = document.querySelector('.measurement-metric')
const imperialContent:  Element | null = document.querySelector('.measurement-imperial')
const rightLine: HTMLElement | null = document.querySelector('.right-line')
const heightCMInput: HTMLInputElement| null = document.getElementById('heightCM') as HTMLInputElement;
const weightKGInput: HTMLInputElement | null = document.getElementById('weightKG') as HTMLInputElement;
const heightFTInput: HTMLInputElement = document.getElementById('heightFT') as HTMLInputElement;
const heightINInput: HTMLInputElement = document.getElementById('heightIN') as HTMLInputElement;
const weightSTInput: HTMLInputElement = document.getElementById('weightST') as HTMLInputElement;
const weightLBSInput: HTMLInputElement = document.getElementById('weightLBS') as HTMLInputElement;
const welcomeMessage: HTMLElement = document.querySelector('.welcome');
const welcomeInput: HTMLElement = document.getElementById('open')
const result: HTMLElement = document.querySelector('.result')
const resultValue: HTMLElement | null = document.querySelector('.result-value');
const finalResult: HTMLElement | null = document.querySelector('.final_results')






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
   if(metricButton)metricButton.addEventListener("click", showMetricContent)
   if(imperialButton)imperialButton.addEventListener("click", showImperialContent)
    

 // Initially, show the metric content (since it's the default)
 showMetricContent();
 

 function calculateBMI(): void {
   // Get the height in centimeters and weight in kilograms from input fields
   const heightInCM: number = parseFloat(heightCMInput.value);
   const weightInKG: number = parseFloat(weightKGInput.value);

    // Check if height and weight are valid numbers
    if (isNaN(heightInCM) || isNaN(weightInKG)) {

      // Display the "welcome" message if either value is empty
      if (welcomeMessage) {
        welcomeMessage.style.display = 'block';
        welcomeInput.style.display = 'block';
        result.style.display = 'none';
    }
      return;
 }

 //Calculate BMI using the metric units
 const metricBMI: number =  weightInKG / ((heightInCM / 100) ** 2);

 

 //hide welcome message and display results
 if(welcomeMessage)welcomeMessage.style.display = 'none';
 if(welcomeInput)welcomeInput.style.display = 'none';
 if(result)result.style.display = 'flex';

 // Display the BMI result in the "result" div
  if(finalResult)finalResult.innerText = metricBMI.toFixed(1);
  

 
 }


 // Add input event listeners to trigger BMI calculation
if (heightCMInput) heightCMInput.addEventListener("input", calculateBMI);
if (weightKGInput) weightKGInput.addEventListener("input", calculateBMI);


 
