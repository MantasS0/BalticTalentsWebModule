var width = 5;
var height = 2;

var perimeter = (width + height)*2;
var area = width*height;
var diagonal = Math.sqrt(Math.pow(width,2)+Math.pow(height,2));

// var parentElement;
// var childElement;
// var appendChildElement;
//
// parentElement = document.getElementById('container');
//
// childElement = document.createElement('div');
// appendChildElement = parentElement.appendChild(childElement);
// appendChildElement.innerHTML = 'The rectangle perimeter is: ' + '(' + width + ' + ' + height + ')*2 = ' + perimeter;



console.log('The rectangle width is: ' + width);
console.log('The rectangle height is: ' + height);
console.log('The rectangle perimeter is: ' + '(' + width + ' + ' + height + ')*2 = ' + perimeter);
console.log('The rectangle area is: ' + width + ' * ' + height + ' = ' + area);
console.log('The rectangle diagonal is: ' + '\u221A(' + width + '\xB2 + ' + height + '\xB2) = ' + diagonal);


