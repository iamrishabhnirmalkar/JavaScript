//Genrate a random color

const randomColor = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

console.log(randomColor());

let intervalid;

const startChangingcolor = function () {
  //this is extra code if you wnat you dont write if statement

  if (!intervalid) {
    intervalid = setInterval(changebg, 100);
  }

  function changebg() {
    document.body.style.backgroundColor = randomColor();
  }
};

const stopChangingcolor = function () {
  clearInterval(intervalid);

  // this is value going to be null
  intervalid = null;
};

document.querySelector("#start").addEventListener("click", startChangingcolor);

document.querySelector("#stop").addEventListener("click", stopChangingcolor);
