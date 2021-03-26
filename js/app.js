//Lanzar un dado 2 veces y sumar las caras que cayeron, repetir esto 100 veces y mostrar al final cuantas veces cayó cada posible valor de la suma.
let aterrizar=[0,0,0,0,0,0];
 function Dadito(){
 let k= Math.floor((Math.random()*6)+1);
 return k;
 }
  
 for(let g=0;g<100;g++){
 let k=Dadito();
 aterrizar[k-1]+=1;}
  document.write('El numero 1  cayo ' + aterrizar[0] + 'veces </br>' + 
                 'El numero 2  cayo ' + aterrizar[1] + 'veces </br>' + 
                 'El numero 3  cayo ' + aterrizar[2] + 'veces </br>' + 
                 'El numero 4  cayo ' + aterrizar[3] + 'veces </br>' + 
                 'El numero 5  cayo ' + aterrizar[4] + 'veces </br>' + 
                 'El numero 6  cayo ' + aterrizar[5] + 'veces </br>');