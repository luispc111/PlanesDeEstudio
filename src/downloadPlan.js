// import html2canvas from 'html2canvas';

const $boton = document.querySelector("#btnCapturar"), // El botón que desencadena
      $objetivo = document.querySelector("#planDeEstudios"); // A qué le tomamos la foto

$boton.addEventListener("click", () => {
    const options = {
        // ignoreElements: elemento => {
        //   const tipo = elemento.nodeName.toLowerCase();
          
        //   if (tipo === "img" || tipo === "h1") {
        //     return true;
        //   }
        //   return false;
        // },
        backgroundColor: "#212529"
    };
    html2canvas($objetivo, options)
      .then(canvas => {
        let enlace = document.createElement('a');
        enlace.download = "MiPlanDeEstudios.png";
        enlace.href = canvas.toDataURL();
        enlace.click();
      });
  });