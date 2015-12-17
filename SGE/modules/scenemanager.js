// MANAGER DE ESCENAS
SGE.Scene = new function(){
    var scenes = {};
    var current;
    var hasGameLoop = SGE.hasModule("gameloop");

    var _Add = function(name, callback, destructor){
        scenes[name] = {
            'callback': callback,
            'destructor': destructor || false
        };
    };

    var _LoadScene = function(name,args){
        if(current && scenes[current].destructor) scenes[current].destructor();
        current = name;
        if(hasGameLoop){
            GameLoop.Clear();
        }
        scenes[name].callback(args);
    };

    this.Add = _Add;
    this.Load = _LoadScene;
};  // SCENE
