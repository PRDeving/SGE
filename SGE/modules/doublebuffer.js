SGE.DoubleBuffer = function(drawfunctions){
    var dfs = drawfunctions || [];
    var backbuffer_c = document.createElement("canvas");
    var backbuffer_ctx = backbuffer_c.getContext("2d");
    var frontbuffer_c;
    var frontbuffer_ctx;

    var _bindTo = function(c){
        frontbuffer_c = c.canvas;
        backbuffer_c.width = c.canvas.width;
        backbuffer_c.height = c.canvas.height;

        frontbuffer_ctx = c
        c.swapBuffer = _swap;
    }

    var _prerender = function(){
        backbuffer_ctx.save();
        backbuffer_ctx.fillStyle = "white";
        backbuffer_ctx.fillRect(0,0,backbuffer_c.width,backbuffer_c.height);
        backbuffer_ctx.restore();

        for(var df of dfs) df(backbuffer_ctx);
    }

    var _swap = function(){
        frontbuffer_ctx.drawImage(backbuffer_c, 0, 0);
        _prerender();
    }

    this.bindTo = _bindTo;
    this.swapBuffer = _swap;

    return this;
};
