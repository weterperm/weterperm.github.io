

anime({
  targets: '.alpha',
  translateY: -50,
  direction: 'alternate',
  loop: false,
  easing: 'steps(1)'
})

anime({
  targets: '.alpha',
  translateY: 50,
  direction: 'alternate',
  loop: false,
  easing: 'spring(1, 70, 7, 5)'
})

anime({
  targets: '.name',
  translateX: 220,
  direction: 'alternate',
  loop: false,
  easing: 'spring(1, 50, 8, 1)'
})

var but = document.getElementById("changeName");
var name = document.getElementsByClassName("name");

but.addEventListener('click', kik);

function kik(){
  anime({
    targets: '.name',
    translateX: -220,
    direction: 'alternate',
    loop: false,
    easing: 'spring(1, 50, 8, 1)'
  })
}


