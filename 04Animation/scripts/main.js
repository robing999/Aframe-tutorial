

// // changing individual properties with code and using setInterval
var rotationSpeed = -3;
var myOtherBox = document.getElementById('myOtherBox');

function spin(){
 rotationSpeed=rotationSpeed-0.5;
myOtherBox.object3D.rotation.x += rotationSpeed;
 myOtherBox.object3D.rotation.y += 1.0;
 	console.log( myOtherBox.object3D.rotation.x);
 }

 setInterval(spin, 16); //equivalent to 60 fps
