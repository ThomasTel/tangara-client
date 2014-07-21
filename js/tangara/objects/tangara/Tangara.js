define(['jquery', 'TUI', 'TEnvironment', 'TRuntime', 'TUtils', 'TObject', 'TLink'], function($, TUI, TEnvironment, TRuntime, TUtils, TObject, TLink) {
    var Tangara = function() {
        // Do not call parent constructor, as we don't want this object to be erased when clearing the
        // Runtime
    };

    Tangara.prototype = Object.create(TObject.prototype);
    Tangara.prototype.constructor = Tangara;
    Tangara.prototype.className = "Tangara";

    Tangara.prototype._write = function(value) {
        value = TUtils.getString(value);
        TUI.addLogMessage(value);
    };

    Tangara.prototype._alert = function(value) {
        value = TUtils.getString(value);
        window.alert(value);
    };

    Tangara.prototype._loadScript = function(name) {
        name = TUtils.getString(name);
        var statements = TLink.getProgramStatements(name);
        TRuntime.setCurrentProgramName(name);
        TRuntime.executeStatements(statements);
    };

    Tangara.prototype._pause = function() {
        TRuntime.stop();
    };


    Tangara.prototype._unpause = function() {
        TRuntime.start();
    };

    Tangara.prototype._ask = function(text) {
        return window.prompt(text);
    };

    TEnvironment.internationalize(Tangara);

    var tangaraInstance = new Tangara();

    return tangaraInstance;
});



