// import html2canvas from 'html2canvas';

const $boton = document.querySelector("#btnCapturar"), // El botón que desencadena
      $objetivo = document.querySelector("#planDeEstudios"); // A qué le tomamos la foto


$boton.addEventListener("click", () => {
    html2canvas($objetivo)
      .then(canvas => {
        let enlace = document.createElement('a');
        enlace.download = "MiPlanDeEstudios.png";
        enlace.href = canvas.toDataURL();
        enlace.click();
      });
  });