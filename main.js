
const changeTheme = document.querySelector('.themeChanger');
const changeImage = document.querySelector('.imgChanger');
const changeButton = document.querySelector('.btnChanger');
const changeFont = document.querySelector('.fontChanger');

const container = document.querySelector('.container');
const image = document.querySelector('.travelImg');
const button = document.querySelector('.btn');
const body = document.querySelector('body');

changeTheme.addEventListener('click', function(eventObject) {
    
//    console.log("clicked Change Background");
//    container.style.backgroundColor = "black";
      if (body.classList.contains('black')) {
          body.classList.remove('black');
          body.classList.add('mirage');
          changeTheme.textContent = "Lights Off";
      }
      else {
          body.classList.remove('mirage');
          body.classList.add('black');
          changeTheme.textContent = "Lights On";
      }     
});







