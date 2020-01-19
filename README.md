# Planes de Estudio ITESM

### How can I try?
Visit https://luispc111.github.io/PlanesDeEstudio/

### User description

Web page that includes the classes of various ITESM study models. It allows you to mark subjects with different colors to visualize the ones you have already taken, the ones you are currently taking and the ones you are planning to take.

### Implented study models

- ARQ11
- IDS11
- IFI11
- IIS11
- IME11
- IMI11
- INCQ13
- INT11
- ISD11
- ITC11
- LAD11
- LAF11
- LDI11
- LED11
- LEM11
- LIN11
- LRI11

### How to contribute

You can help the web page by making the JSON files of your study model. The format of the JSON files is:

```bash
[
    {
        "nombre": "Nombre de la materia",
        "clave": "Clave de la materia",
        "semestre": 0,
        "requisitoAcreditado": ["Clave de la materia"],
        "requisitoCursado": ["Clave de la materia"]
    },
]
```

The list of "requisitoAcreditado" is a list of the classes you need to pass to be able to take the class and "requisitoCursado" is a list of classes you need to take.

### Technical description

HTML and CSS is used for the frontend. Some bootstrap elements are also included. 

Javascript is used for the modification of tables, changes in the progress bar, and creation of buttons to choose the study model.

JSON is used to have the information of the courses, as well as their semester and the requirements to register it. We use HTTP requests to access the JSON files, so to run locally the app you'll need to set up a server.
