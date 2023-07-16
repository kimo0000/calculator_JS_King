const input = document.querySelector('#inp');
const btns = document.querySelectorAll('button');
const equal = document.querySelector('#equal');

btns.forEach(btn => {
    // console.log(btn.textContent)
    btn.addEventListener('click', (e) => {
    //    console.log(e.target.textContent)
    let btnValue = e.target.textContent
      if(btnValue === "C") {
         clearResult();
      } else if(btnValue === "=") {
         equalResult();
      } else {
         results(btnValue)
      }        
    })
})

function clearResult() {
   input.value = "";
}

function equalResult() {
   input.value = eval(input.value);
}

function results(btnValue) {
   input.value += btnValue;
}