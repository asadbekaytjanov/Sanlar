window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
  });
 function startGame() {
          var brain = Math.floor(Math.random() * 10)+1;
    document.getElementById("demo").innerText="Oyın baslandı, men 1 den 10 ǵa shekem san oyladim siz onı tabıń"
          return brain;
          }
function checkGame() {
          var brain = this.startGame()
          var x = document.getElementById("ip").value;
          if(x==brain){
                    document.getElementById("demo").innerText="Durıs !!! Men oylaǵan san "+brain+" edi";
           alert("Qutlıqlayman! Siz jeńimpazsiz!")
          }
          else {
                    if(x!==brain){
                              document.getElementById("demo").innerText="Qate, men oylaǵan san "+brain+" edi, qaytadan oynap kóriń"
                    }
          }
}