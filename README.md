# SGE
SGE is a modular, adaptative, multipurpose Javascript engine created from scratch to build from websites to webapps or videogames easily.

## WHAT SGE DOES? ##
SGE does exactly what you want it to do.
Load a scenes module to build a web app or make it load your custom WebGL manager on loadtime, it's easy and customizable.

## HOW DOES IT WORK? ##
SGE injects the dependences needed, the modules you tell it to load and the custom assets that you want to use in order, once everything is loaded, the Main function is fired.

SGE needs two files to work, the config.json file that includes all SGE configurations and the application js.

- #config.json
    config file has all the configurations of SGE, here you can disable the console debugger or add modules or packages to load.

- #application.js
    this file can be named as you want to, the path has to be specified in the html <script> tag using the attribute "app".
    This file has the core of the application, the has to be two functions:

    -- Init()
        it has modules definitions and configurations.
        if you want to use custom modules or configure scenes or default modules, this is your function.

    -- Main()
        it has the core code.
        application code is write here, you can use it or not, remember, you can load your custom modules, controllers, etc.

# SAMPLE CODE

- config.json
```
{
    "Debug":true,
    "modules":[
        "scenemanager"
    ]
}
```

- application.js
```
function Init(){
    //this function fires on the first load, here should be all modules configuration.
    console.log("Initializing");
}
function Main(){
    //this function is trigged when all modules are loaded
    console.log("it works");
}
```

- index.html
```
<head>
    <script app="application.js" src="SGE/engine.js"></script>
</head>
<body>
</body>
```
