// 1
const xMen = document.getElementById('x-men');

// 2
const centered = document.getElementsByClassName('center');

// 3
const batman = document.querySelector('#batman');

// 4
const h3s = document.querySelectorAll('h3');

// 5a
const h1 = document.querySelector('h1');

// 5b
h1.innerText = "The Best Animated SuperHero TV Shows Ever";

// 6a
const honorableMentions = document.getElementById ('honorable-mentions');

// 6b
honorableMentions.innerHTML = '<p>OTHER GREAT SHOWS</p>';

// 7a

const aTag = document.querySelector('a');

// 7b

aTag.href = "https://fandomwire.com/15-greatest-animated-superhero-shows-ever-made-ranked";

// 8
h1.classList.add('background','text-color');

// 9
h1.classList.remove('background');

// 10a
const h4 = document.createElement('h4');

// 10b
h4.innerText = 'Is Avatar: the last Airbender a superhero show?'

// 10c
const body = document.querySelector('body'); body.prepend(h4);

// 11a
const h5 = document.createElement('h5');

// llb
h5.innerText = 'Heros in a half shell Turtle Power!'

// 11c
aTag.insertAdjacentElement('afterend',h5);

// 12
document.querySelector('ul>li').remove();
// removes superman from list


// bonus

// 13a
const divs = document.querySelectorAll('div');

// 13b
for (i = 0; i < divs.length; i++){
    divs[i].classList.toggle('background');
}

// 14a
const avengers = [
    "forever",
    "fight",
    "as",
    "One",
    "AVENGERS",
    "ASSEMBLE!"
];

// 14b

for (a of avengers){
    const spanLoop = document.createElement(`span`);
    spanLoop.innerText = `${a} `;
    body.append(spanLoop);
}

// ??????