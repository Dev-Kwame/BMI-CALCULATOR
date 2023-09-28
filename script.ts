const metricButton = document.getElementById('metric') as HTMLInputElement;
const imperialButton = document.getElementById('imperial') as HTMLInputElement;
const metricContent: Element | null = document.querySelector('.measurement-metric')
const imperialContent:  Element | null = document.querySelector('.measurement-imperial')
const rightLine: HTMLElement | null = document.querySelector('.right-line')
const heightCMInput = document.getElementById('heightCM') as HTMLInputElement;
const weightKGInput = document.getElementById('weightKG') as HTMLInputElement;
const heightFTInput = document.getElementById('heightFT') as HTMLInputElement;
const heightINInput = document.getElementById('heightIN') as HTMLInputElement;
const weightSTInput = document.getElementById('weightST') as HTMLInputElement;
const weightLBSInput = document.getElementById('weightLBS') as HTMLInputElement;
const welcomeMessage: HTMLElement = document.querySelector('.welcome');
const welcomeInput: HTMLElement = document.getElementById('open')
const result: HTMLElement = document.querySelector('.result')
const resultValue: HTMLElement | null = document.querySelector('.result-value')
const finalResult: HTMLElement | null = document.querySelector('.final_results')
const imperialBMIResult: Element | null = document.querySelector('.bmi-result')







 // Function to show the metric content and hide the imperial content
function showMetricContent(): void {
    if(metricButton) metricButton.checked = true; // Ensure Metric is checked
    if(imperialButton) imperialButton.checked = false; // Uncheck Imperial
    if(metricContent) metricContent.classList.remove("hidden");
    if(imperialContent) imperialContent.classList.add("hidden");
    //Reset content in imperial div when metric ic clicked on 
    if(heightFTInput)heightFTInput.value = "";
    if(heightINInput)heightINInput.value = "";
    if(weightSTInput) weightSTInput.value = "";
    if(weightLBSInput) weightLBSInput.value = "";
    if(welcomeMessage)welcomeMessage.style.display = 'block';
    if(welcomeInput)welcomeInput.style.display = 'block';
    if(result)result.style.display = 'none';
  
  }

  // Function to show the imperial content and hide the metric content
  function showImperialContent(): void {
    if(imperialButton) imperialButton.checked = true;
    if(metricButton) metricButton.checked = false;
    if(imperialContent)imperialContent.classList.remove("hidden");
    if(metricContent)metricContent.classList.add("hidden");
    if(rightLine)rightLine.style.display = "none";
     //Reset content in metric div when imperial is clicked on 
    if(heightCMInput)heightCMInput.value = "";
    if(weightKGInput)weightKGInput.value = "";
    if(welcomeMessage)welcomeMessage.style.display = 'block';
    if(welcomeInput)welcomeInput.style.display = 'block';
    if(result)result.style.display = 'none';
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
    if (isNaN(heightInCM) || isNaN(weightInKG)){

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

 function calculateBMIImperial(){

   const heighInFT: number = parseFloat(heightFTInput.value);
   const heightInIN: number = parseFloat(heightINInput.value);
   const weightInST: number = parseFloat(weightSTInput.value);
   const weightInLBS: number = parseFloat(weightLBSInput.value);

   if(isNaN(heighInFT) || isNaN(heightInIN) || isNaN(weightInST) || isNaN(weightInLBS)){

    // Display the "welcome" message if either value is empty
    if (welcomeMessage) {
      welcomeMessage.style.display = 'block';
      welcomeInput.style.display = 'block';
      result.style.display = 'none';
  }
    return;

   }

  //Calculate BMI using the imperial units
 const heightInInches = (heighInFT) * 12 + heightInIN;
 const weightInPounds = (weightInST) * 14 + weightInLBS
 const imperialBMI: number = weightInPounds /(heightInInches **2) *703; 

 //hide welcome message and display results
 if(welcomeMessage)welcomeMessage.style.display = 'none';
 if(welcomeInput)welcomeInput.style.display = 'none';
 if(result)result.style.display = 'flex';
 if(imperialBMIResult)imperialBMIResult.innerHTML = `Your BMI suggests you’re a healthy weight. Your ideal weight is between 9st 6lbs- 12st 10lbs`;


 if(finalResult)finalResult.innerText = imperialBMI.toFixed(1);



 }

 // Add input event listeners to trigger BMI calculation
if (heightCMInput) heightCMInput.addEventListener("input", calculateBMI);
if (weightKGInput) weightKGInput.addEventListener("input", calculateBMI);
if (heightFTInput) heightFTInput.addEventListener("input", calculateBMIImperial);
if (heightINInput) heightINInput.addEventListener("input", calculateBMIImperial);
if (weightSTInput)  weightSTInput.addEventListener("input", calculateBMIImperial);
if (weightLBSInput) weightLBSInput.addEventListener("input",calculateBMIImperial);


 
