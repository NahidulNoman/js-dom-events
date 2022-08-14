// option 1
// use this one 
function makeRed(){
    document.body.style.background = 'red'
}
// option 2
const makeBlue = document.getElementById('make-blue');
        makeBlue.onclick = makeBlueButton;

        function makeBlueButton(){
            document.body.style.background = 'blue'
        }
// option 3
        const makePurple = document.getElementById('make-purple');
        makePurple.onclick = function makePurple(){
            document.body.style.background = 'purple';
        }
// option 4
       const makePink = document.getElementById('make-pink');
       makePink.addEventListener('click', makePinkButton);
       function makePinkButton(){
        document.body.style.background = 'pink'
       }
// option 5
       const makeGreen = document.getElementById('make-green');
       makeGreen.addEventListener('click', function makeGreenButton(){
            document.body.style.background = 'green'
       })

// option 6
// we use this one very much this is important..
       document.getElementById('make-orange').addEventListener('click', function makeOrange(){
        document.body.style.background = 'orange';
      })