# SGE
SGE is a modular, adaptative, multipurpose Javascript engine created from scratch to build from websites to webapps or videogames easily.

## WHAT SGE DOES? ##
SGE does exactly what you want it to do.
Load a scenes module to build a web app or make it load your custom WebGL manager on loadtime, it's easy and customizable.

## HOW DOES IT WORK? ##
SGE injects the dependences needed, the modules you tell it to load and the custom assets that you want to use in order, once everything is loaded, the Main function is fired.

SGE needs two files to work, the config.json file that includes all SGE configurations and the application js.

# SAMPLE CODE

- config.json
`{"Debug":true, "modules":["scenemanager"]}`

- application.js
```
function Init(){
    //this function fires on the first load, here should be all modules configuration.
    SGE.Loader.Add("assets/mycustommodule.js");
}
function Main(){
    //this function is trigged when all modules are loaded
    console.log("it works");
}
```
