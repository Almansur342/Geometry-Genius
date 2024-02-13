 function getInputValue(inputId){
  const inputValue = document.getElementById(inputId);
  const inputText = inputValue.value;
  const input = parseFloat(inputText);
  return input;
 }
 function displayArea(area){
  const areaDisplayed = document.getElementById('parallelogram-area');
  areaDisplayed.innerText = area;
 }
 
 function calculateParallelogramArea(){
  const parallelogramBaseInput = getInputValue('parallelogram-base');
  const parallelogramHightInput = getInputValue('parallelogram-hight');
  const area = parallelogramBaseInput * parallelogramHightInput;
  displayArea(area)
 }