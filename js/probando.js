var intentos=0;
function control(){
  var min =1;
  var max =4;
  var  respuesta=document.getElementById('respuesta').value;
  intentos++;
  console.log(intentos+"--"+respuesta);
 
       if (respuesta >= min && respuesta <=max && intentos <=4) {

        document.getElementById('Actualizar').disabled = true;
           if (respuesta == 4 ){

               alert ("Correcto Adivinaste  Intentos:"+intentos+"/4"+  "Para jugar de nuevo actualiza la pagina");
               document.getElementById('confirmar').disabled = true;
               document.getElementById('Actualizar').disabled = false;

               
               
              

              }else{
                alert ("Incorrecto   Intentos:"+intentos+"/4");   
                            
              }

          }
       if (intentos == 2 && respuesta <4 && respuesta >0){
          alert("¡Pista! : no esta relacionado con la salud");
          
       }
       if (intentos == 3 && respuesta <4 && respuesta >0 ){
           alert("¡Pista! : esta relacionado con los animales");
          
       }
       if (intentos == 4 && respuesta<4){
           alert("¿Quieres volver a jugar?, actualiza la pagina");
           document.getElementById('confirmar').disabled = true;
           document.getElementById('Actualizar').disabled = false;

    
       }
       if (respuesta>4 ){

        alert("Error inserte un numero del 1 al 4, actualize la pagina")
        document.getElementById('confirmar').disabled = true;
        document.getElementById('Actualizar').disabled = false;



       }
       
      if (respuesta ==0){
        alert("Error inserte un numero del 1 al 4, actualize la pagina")
        document.getElementById('confirmar').disabled = true;
        document.getElementById('Actualizar').disabled = false;

      }
             
      
    }
     


   