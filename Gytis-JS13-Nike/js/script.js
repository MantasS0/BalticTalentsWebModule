const mobileMenu = document.querySelector('.mobileMenu');

const popupButton = document.querySelector('.popupButton');
const popup = document.querySelector('.popupBg');


document.querySelector('.sandwich').addEventListener('click', () => {
    if (mobileMenu.style.left !== '0px') {
        mobileMenu.style.left = '0px';
    } else {
        mobileMenu.style.left = '-300px';
    }
});

popupButton.addEventListener('click', () => {
    popup.style.display = 'block';
});

popup.addEventListener('click', () => {
    popup.style.display = 'none';
});

document.querySelector('.popup').addEventListener('click', (e) => {
    e.stopPropagation();
});

//Galerija

const leftArrow = document.querySelector('.arrow.left');
const rightArrow = document.querySelector('.arrow.right');
const topArrow = document.querySelector('.arrow.top');
const bottomArrow = document.querySelector('.arrow.bottom');


const allGalleryElements = document.querySelectorAll('.galleryElement');

const galleryClasses = document.querySelectorAll('.gallery ul');

const sneakerGalleryElements = document.querySelectorAll('.sneakers .galleryElement');
const foodGalleryElements = document.querySelectorAll('.food .galleryElement');
const drinksGalleryElements = document.querySelectorAll('.drinks .galleryElement');

let currentHorizontalPhotoIndex = 0;
let currentVerticalPhotoIndex = 0;

/*
function hideAllGalleryElements() {
    for (let element of allGalleryElements) {
        element.style.display = 'none';
    }
}
*/

function hideAllGalleryElements() {
    for (let element of allGalleryElements) {
        element.style.visibility = 'hidden';
        element.style.height = '0';
        element.style.width = '0';
    }
}


function showGalleryElement(horizontalIndex, verticalIndex) {
    switch (verticalIndex) {
        case 0:
            sneakerGalleryElements[horizontalIndex].style.visibility = 'visible';
            sneakerGalleryElements[horizontalIndex].style.height = '400px';
            sneakerGalleryElements[horizontalIndex].style.width = '100%';
            break;
        case 1:
            foodGalleryElements[horizontalIndex].style.visibility = 'visible';
            foodGalleryElements[horizontalIndex].style.height = '400px';
            foodGalleryElements[horizontalIndex].style.width = '100%';
            break;
        case 2:
            drinksGalleryElements[horizontalIndex].style.visibility = 'visible';
            drinksGalleryElements[horizontalIndex].style.height = '400px';
            drinksGalleryElements[horizontalIndex].style.width = '100%';
            break;
    }
}

function getCurrentGallery() {
    switch (currentVerticalPhotoIndex) {
        case 0:
            return sneakerGalleryElements;
        case 1:
            return foodGalleryElements;
        case 2:
            return drinksGalleryElements;
    }
}

function showNextPhoto() {
    currentHorizontalPhotoIndex++;
    if (currentHorizontalPhotoIndex > getCurrentGallery().length - 1) {
        currentHorizontalPhotoIndex = 0;
    }
    hideAllGalleryElements();
    showGalleryElement(currentHorizontalPhotoIndex,currentVerticalPhotoIndex);
}

function showPreviousPhoto() {
    currentHorizontalPhotoIndex--;
    if (currentHorizontalPhotoIndex < 0) {
        currentHorizontalPhotoIndex = getCurrentGallery().length - 1;
    }
    hideAllGalleryElements();
    showGalleryElement(currentHorizontalPhotoIndex,currentVerticalPhotoIndex);
}

function showUpPhoto() {
    currentVerticalPhotoIndex++;
    if (currentVerticalPhotoIndex > galleryClasses.length - 1) {
        currentVerticalPhotoIndex = 0;
    }
    hideAllGalleryElements();
    showGalleryElement(currentHorizontalPhotoIndex,currentVerticalPhotoIndex);
}

function showDownPhoto() {
    currentVerticalPhotoIndex--;
    if (currentVerticalPhotoIndex < 0) {
        currentVerticalPhotoIndex = galleryClasses.length - 1;
    }
    hideAllGalleryElements();
    showGalleryElement(currentHorizontalPhotoIndex,currentVerticalPhotoIndex);
}

rightArrow.addEventListener('click', showNextPhoto);
leftArrow.addEventListener('click', showPreviousPhoto);
topArrow.addEventListener('click',showUpPhoto);
bottomArrow.addEventListener('click',showDownPhoto);

hideAllGalleryElements();
showGalleryElement(0,0);

/*
//vykdo funkcija reguliariai
setInterval(showNextPhoto, 1000);

//vykdo funkcija po Xms viena karta
setTimeout(showNextPhoto,5000);
*/












