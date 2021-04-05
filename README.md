# Planes de Estudio ITESM

Página web dónde puedes ver los diferentes planes de estudio del Tec de Monterrey. Te muestra las materias de cada plan de estudios en una tabla y te deja utilizar diferentes colores para marcarlas, ayudandote a planear tus siguientes semestres y ver tu progreso en la carrera. Puedes probarla [en este link](https://luispc111.github.io/PlanesDeEstudio/)

La página usa la libreria de `html2canvas` para generar una imagen de la tabla del usuario.
- [Repositorio de Github](https://github.com/niklasvh/html2canvas)
- [Documentación](https://html2canvas.hertzen.com/)

## Instrucciones de la aplicación
---

La página está desarrollada en React, entonces si te sabes los scripts básicos del framework, no tendrás problema corriendo la aplicación.

### __Cómo instalarla__

Clona o descarga el repo, desde una terminal vete a la carpeta donde lo tengas y escribe `npm install` para instalar todas las dependencias de Node.

### __Cómo correrla__

Desde la terminal, escribe `npm start` estando en la carpeta del repo y la aplicación empezará a correr, abriendo automaticamente una pestaña en tu navegador de preferencia. Como estamos utilizando React, el servidor tiene '_hot reload_', por lo que se actualizará solo cada que guardes cambios.

### __Cómo correr las pruebas__

Desde la terminal, escribe `npm test` estando en la carpeta del repo y se empezarán las pruebas solas. Al igual que al correr la aplicación, cada vez que guardes cambios, las pruebas se correran solas de nuevo.

## Guía de contribución
---

### __Código__

Si quieres contribuir al código, crea un pull request con tu aportación. Al crear un pull request, asegurate que `proyecto-web` sea la branch objetivo e incluye el siguiente formato en la descripción del PR:

```
## Descripción

Pequeña descripción de la tarea

## Checklist

* [ ] La branch que se está mergeando está actualizada con la branch objetivo
* [ ] Agregaron pruebas unitarias
* [ ] Todas las pruebas pasaron localmente

## Checado por:

* [ ] Adrián
* [ ] Ale
* [ ] Diego
* [ ] Luisito
```

### __Plan de Estudio__

Si quieres aportar con la información de tu plan de estudios, mandanos la información de las materias con este formato:

```json
[
    {
        "nombre": "Nombre",
        "clave": "Clave tipo TI2011",
        "semestre": 0,
        "requisitos": ["Clave de la materia"]
    },
]
```

Ejemplo:
```json
[
    {
        "nombre": "Desarrollo de aplicaciones web",
        "clave": "TC2026",
        "semestre": 7,
        "requisitos": ["TC1020", "TC2022"]
    },
]
```

## Planes de estudios implementados
---
- ARQ11
- IBT11
- IDS11
- IFI11
- IIA11
- IID12
- IID17
- IIS11
- IMA11
- IMD11
- IME11
- IMI11
- IMT11
- INCQ13
- INT11
- IQA11
- IQP11
- ISD11
- ITC11
- LAD11
- LAF11
- LCDE11
- LCMD17
- LDF11
- LDI11
- LEC11
- LED11
- LEM11
- LIN11
- LPM12
- LPO11
- LRI11
