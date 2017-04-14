/**
 * Created by sophia on 4/13/17.
 */
document.addEventListener("DOMContentLoaded", function () {

  const container = document.querySelector('.container');
  const text = container.querySelector('p');
  const move = 60;

  function moveShadow(e) {
    //console.log(e); //gives us x and y coords
    const width = container.offsetWidth; //width of container, in this case of the viewport
    const height = container.offsetHeight; //height of container, in this case of the viewport

    //mouse position relative to target element
    let x = e.offsetX;
    let y = e.offsetY;
    //'this' returns HTML element event is being called on
    //'e.target' returns HTML element of children if mouse is over them, in this case p tag
    //we could also just use 'x = e.pageX' in this example since we are using the entire page,
    //but in this scenario we only want it to move while w/in a certain <div>, etc. can do this:
    if (this !== e.target) {
      x = x + e.target.offsetLeft; //adds px left of <p>
      y = y + e.target.offsetTop; //adds px above <p>
    }
    //can move a total of 60px. -30 left, +30 right
    const moveX = Math.round(x / width * move - move / 2);
    const moveY = Math.round(y / height * move - move / 2);

    text.style.textShadow = `${moveX}px ${moveY}px 2px #000`;
  }

  container.addEventListener('mousemove', moveShadow);

});