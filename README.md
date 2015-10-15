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
    this file can be named as you want to, the path has to be specified in the html `<script>` tag using the attribute "app".
    This file has the core of the application, the has to be two functions:

    - ##Init
        it has modules definitions and configurations.
        if you want to use custom modules or configure scenes or default modules, this is your function.

    - ##Main
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

    //We are using the scenemanager module, so lets define a scene called "hello_world"
    SGE.Scene.Add("hello_world", function(){
        $("body").html("Hello world!");
        console.log("Hello world!")
    });
}
function Main(){
    //this function is trigged when all modules are loaded
    console.log("it works");

    //Now lets fire the "hello_world" scene
    SGE.Scene.Load("hello_world");
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

#MODULES
SGE modules are stored in SGE/modules/. All modules has the same structure that allows SGE to load them in a memory efficent way (i guess)

SGE has some prebuilt modules that you can activate in the config.json

- ###scenemanager
    it allows you to manage scenes, you can define them and fire them at your will.

    SGE.Scene has two functions:
    - SGE.Scene.Add(string name, function callback)
        Defines your scene.
    - SGE.Scene.Load(string name, object arguments = null)
        Fires your scene, you can pass args if you want to, they have to be catched in the catcher's scene definition
        ```
            //Defines scene that catches args
            SGE.Scene.Add("getter", function(args){
                console.log("my name is ",args[0]);
            });

            //Fires the scene
            SGE.Scene.Load("getter",["Pablo"]);
        ```

- ###gameloop
    The easiest kind of loop ever. just define the actions and subscribe them to the loop.

    SGE.GameLoop has four functions:

    - SGE.GameLoop.Suscribe(function fn, boolean priorize = false)
        you can suscribe any function and it'll be fired in every loop.
        Priorized suscriptions will be fired first, so you can control inputs or logic before draw (ex).
    - SGE.GameLoop.Run(int fps)
        This start's the loop at the fps required.
        This will clear the canvas (var ctx) if it has been defined (sounds dumb, gonna change it soon)
    - SGE.GameLoop.Stop()
        Stops the loop, you can rerun it calling SGE.GameLoop.Run() again.
    - SGE.GameLoop.Clear()
        Stops the loop and clears all the suscribed functions

- ###mousemanager
    It's not very usefull but i like it :)
    i dont think i will work more in this module, aint necessary.

    mousemanager checks the cursor position on live, it has one function to use:

    - SGE.Mouse.Position()
        returns an object with the mouse position
        ```
        {
            X: int mouse X,
            Y: int mouse Y
        }
        ```
        Yo can get positions using SGE.Mouse.Position().X or SGE.Mouse.Position().Y

- ###fullscreen
    It fires the full screen and calls the callback if theres any, it needs user interaction.
    SGE.FullScreen(funcion callback = null)
