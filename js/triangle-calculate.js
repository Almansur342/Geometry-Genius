function calculateTriangle(){
  // get triangle base
   const triangleBaseInput = document.getElementById('triangle-base');
   const triangleBaseText = triangleBaseInput.value;
   const base = parseFloat(triangleBaseText);
   console.log(base)
   // get triangle hight
   const triangleHightInput = document.getElementById('triangle-hight');
   const triangleHightText = triangleHightInput.value;
   const hight = parseFloat(triangleHightText);
   console.log(hight);
 // calculate area
   const area = 0.5 * base * hight;
   console.log(area);
  //  display triangel area
   const displayArea = document.getElementById('triangle-area');
   displayArea.innerText = area;
}

function calculateRectangle(){
  const rectangleWidthInput = document.getElementById('rectangle-width');
  const rectangleWidthText = rectangleWidthInput.value;
  const rectangleBase = parseFloat(rectangleWidthText);

  const rectangleLengthInput = document.getElementById('rectangle-length');
  const rectangleLengthText = rectangleLengthInput.value;
  const rectangleHight = parseFloat(rectangleLengthText);

  const areaRectangle = rectangleBase * rectangleHight;

  const displayRectangle = document.getElementById('rectangle-area');
  displayRectangle.innerText = areaRectangle;

}

