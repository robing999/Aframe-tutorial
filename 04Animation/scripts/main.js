

// // changing individual properties with code and using setInterval
var rotationSpeed = -0.01;
var rotationSpeedy = -0.05;
var myOtherBox = document.getElementById('myOtherBox');

function spin(){
myOtherBox.object3D.rotation.x += rotationSpeed;
 myOtherBox.object3D.rotation.y += rotationSpeedy;
 	console.log( myOtherBox.object3D.rotation.x);
 }

 setInterval(spin, 16); //equivalent to 60 fps
