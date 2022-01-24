const btn = document.getElementById('btn');

const colorsArr = ['white', 'red', 'green', 'orange', 'yellow', 'blue', 'cyan', 'violet', 'chocolate', 'aqua'];

btn.addEventListener('click', () => {
    let randomInt = Math.floor(Math.random()*colorsArr.length);
    let randomColor = colorsArr[randomInt];
    document.getElementById('main').style.backgroundColor = randomColor;
    document.getElementById('colors').innerHTML = randomColor;
});
