window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
  });
  function Game() {
    document.getElementById("ozg").innerHTML="Oyın Baslandı, men 1 den 50 ge shekem san oyladım";
    var brain = Math.floor(Math.random()*50)+1; 
return brain;
}
     function  checkGame(){
     var brain = this.Game()
    if(document.getElementById("ip")==brain){
        console.log(getElementById("ozg").innerHTML="Durıs, men oylaǵan san  "+brain+" edi !!!");
    }else{
        if(document.getElementById("ip")!==brain){
          document.getElementById("ozg").innerHTML="Qate, men oylaǵan san "+brain+" edi. Qaytadan oynap kóriń";
    }
  
    
 }
}
