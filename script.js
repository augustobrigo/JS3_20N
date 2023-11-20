window.addEventListener("load",inicio);

function inicio(){

    let boton = document.getElementById("btn");
    boton.addEventListener("click", mostrar);

    let divConenedor = document.getElementById("contenedor");

    function mostrar() {

        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                //Al hacer parse nos devuelve un objeto
                var objeto = JSON.parse(this.responseText);

               
               objeto.forEach(recorrer);
               function recorrer(item,index){

                let etiq = document.createElement("div");
                etiq.className = "claseDiv";

                etiq.innerHTML += "ID: " + item.id + 
                    "<br> <video controls autoplay loop src="+ item.url +"></video> " + 
                    "<br> Lugar: " + item.lugar + 
                    "<br> Tiempo: " + item.tiempo +
                    "<br> Activo: " + item.activo;

                divConenedor.appendChild(etiq);
               }
            
        }
         };
        xhr.open("GET", "http://camacho.atwebpages.com/webcam/getWebcam.php", true);
        xhr.send();
   
    }
}



