 function start(brain){
          console.log("I'ts working!")
          document.getElementById("ozg").innerHTML="Oyın Baslandı, men oylaǵan sandı kiritiń!"
          brain += Math.random()*50+1;
          return brain;
}
function check(a){
          
    if(document.getElementById("ip")===a){
              document.getElementById("ozg").innerHTML="Duris, men oylaǵan san "+a+" edi!";
    }
    else{ if(document.getElementById("ip")!==a)
              document.getElementById("ozg").innerHTML="Qate men oylaǵan san "+a+ " edi, qaytadan urınıp kórıń";
    }
}