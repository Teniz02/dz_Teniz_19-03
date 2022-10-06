
var circles = document.querySelectorAll('.circle') 
var activeLight = 0; 
setInterval(() => { 
  changeLight(); 
}, 900); 
function changeLight() { 
  circles[activeLight].className = 'circle'; 
  activeLight++; 
   
  if(activeLight > 2) { 
    activeLight = 0; 
  } 
   
  var currentLight = circles[activeLight] 
   
  currentLight.classList.add(currentLight.getAttribute('color')); 
}


var arr = prompt ('зеленый желтый красный');

   if (arr === 'зеленый') {
      console.log('идти');
   } else if (arr === 'желтый') {
      console.log('жди');
   } else if (arr === 'красный') {
      console.log('стой');
  }
