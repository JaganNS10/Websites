const x = document.getElementById('One')
const y = document.getElementById('Two')
const z = document.getElementById('Three')

function ForAll(){
	x.style.display = 'block';
	y.style.display = 'none';
	z.style.display = 'none';
}
function ForPhotos(){
	y.style.display = 'block';
	x.style.display = 'none';
	z.style.display = 'none';

}
function ForVideos(){
	z.style.display = 'block';
	x.style.display = 'none';
	y.style.display = 'none';

}

document.getElementById("scrollRight").addEventListener("click", function() {
  const container = document.getElementById("One");
  container .scrollBy({
    top: 0,
    left: 200, // Change this value to control scroll distance
    behavior: 'smooth' // Smooth scrolling effect
  });
});

document.getElementById("scrollRight").addEventListener("click", function() {
  const container = document.getElementById("Two");
  container .scrollBy({
    top: 0,
    left: 200, // Change this value to control scroll distance
    behavior: 'smooth' // Smooth scrolling effect
  });
});

document.getElementById("scrollRight").addEventListener("click", function() {
  const container = document.getElementById("Three");
  container .scrollBy({
    top: 0,
    left: 200, // Change this value to control scroll distance
    behavior: 'smooth' // Smooth scrolling effect
  });
});


document.getElementById("scrollLeft").addEventListener("click", function() {
  const container = document.getElementById("One");
  container .scrollBy({
    top: 0,
    left: -200, // Change this value to control scroll distance
    behavior: 'smooth' // Smooth scrolling effect
  });
});
document.getElementById("scrollLeft").addEventListener("click", function() {
  const container = document.getElementById("Two");
  container .scrollBy({
    top: 0,
    left: -200, // Change this value to control scroll distance
    behavior: 'smooth' // Smooth scrolling effect
  });
});
document.getElementById("scrollLeft").addEventListener("click", function() {
  const container = document.getElementById("Three");
  container .scrollBy({
    top: 0,
    left: -200, // Change this value to control scroll distance
    behavior: 'smooth' // Smooth scrolling effect
  });
});

function Move_1() {
  document.getElementById('Move_1').style.display='block';
  document.getElementById('Move_2').style.display='none';
  document.getElementById('Move_3').style.display='none';
  document.getElementById('Move_4').style.display='none'

}

function Move_2() {
  document.getElementById('Move_2').style.display='block';
  document.getElementById('Move_1').style.display='none';
  document.getElementById('Move_3').style.display='none';
  document.getElementById('Move_4').style.display='none';
}
function Move_3() {
  document.getElementById('Move_3').style.display='block';
  document.getElementById('Move_2').style.display='none';
  document.getElementById('Move_1').style.display='none';
  document.getElementById('Move_4').style.display='none'
  
}
function Move_4() {
  document.getElementById('Move_4').style.display='block';
  document.getElementById('Move_3').style.display='none';
  document.getElementById('Move_2').style.display='none';
  document.getElementById('Move_1').style.display='none';
}
let count = 0
function Display_All(){
   const x = document.getElementsByClassName('section-3');
   if (count==0){
    x[0].style.display='block';
    count+=1;
   }
   else{
     x[0].style.display='none';
     count = 0;
   }
   console.log(count)

}