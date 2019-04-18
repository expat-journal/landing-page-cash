
const changeTheme = document.querySelector('.themeChanger');
const changeImage = document.querySelector('.imgChanger');
const changeButton = document.querySelector('.btnChanger');
const changeFont = document.querySelector('.fontChanger');

const container = document.querySelector('.container');
const image = document.querySelector('.travelImg');
const button = document.querySelector('.btn');
const font = document.querySelector('body');

changeTheme.addEventListener('click', function(eventObject) {
    
    console.log("clicked Change Background");
    container.style.backgroundColor = "@dark-teal";

});

changeImage.addEventListener('click', function(eventObject) {
    
    console.log("clicked Change Image");
    image.src = "Images/commute.jpg";

});

changeButton.addEventListener('click', function(eventObject) {
    
    console.log("clicked Change Button");
    button.style.backgroundColor = "@mirage";

});



