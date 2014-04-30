define(['jquery','TEnvironment'], function($,TEnvironment) {
    function TToolbar() {
        var domToolbar = document.createElement("div");
        domToolbar.id = "ttoolbar";

        // MODES
        var domModes = document.createElement("div");
        domModes.className = "ttoolbar-modes";
        
        var domConsole = document.createElement("button");
        var imageConsole = document.createElement("img");
        imageConsole.src = TEnvironment.getBaseUrl() + "/images/console.png";
        imageConsole.className = "ttoolbar-mode-image";
        domConsole.appendChild(imageConsole);
        domConsole.appendChild(document.createTextNode(TEnvironment.getMessage('mode-console')));
        domConsole.className = "ttoolbar-mode";
        domConsole.onclick = function() { TEnvironment.toggleConsole(); };
        var domEditor = document.createElement("button");
        var imageEditor = document.createElement("img");
        imageEditor.src = TEnvironment.getBaseUrl() + "/images/editor.png";
        imageEditor.className = "ttoolbar-mode-image";
        domEditor.appendChild(imageEditor);
        domEditor.appendChild(document.createTextNode(TEnvironment.getMessage('mode-editor')));
        domEditor.className = "ttoolbar-mode";
        domEditor.onclick = function() { TEnvironment.toggleEditor(); };
        domModes.appendChild(domConsole);
        domModes.appendChild(domEditor);
        domToolbar.appendChild(domModes);
        
        // BUTTONS
        var domButtons = document.createElement("div");
        domButtons.className = "ttoolbar-buttons";
        domToolbar.appendChild(domButtons);
        
        // Create buttons
        var buttonExecute = document.createElement("button");
        buttonExecute.className = "ttoolbar-button ttoolbar-button-execute";
        var imageExecute = document.createElement("img");
        imageExecute.src = TEnvironment.getBaseUrl() + "/images/play.png";
        imageExecute.className = "ttoolbar-button-image";
        buttonExecute.appendChild(imageExecute);
        buttonExecute.appendChild(document.createTextNode(TEnvironment.getMessage('button-execute')));
        buttonExecute.onclick = function() { TEnvironment.execute(); };

        // OPTIONS
        var domOptions = document.createElement("div");
        domOptions.className = "ttoolbar-options";
        domToolbar.appendChild(domOptions);
        
        // Create options
        var optionClear = document.createElement("button");
        optionClear.className = "ttoolbar-option";
        var imageClear = document.createElement("img");
        imageClear.src = TEnvironment.getBaseUrl() + "/images/clear.png";
        imageClear.className = "ttoolbar-option-image";
        optionClear.appendChild(imageClear);
        optionClear.appendChild(document.createTextNode(TEnvironment.getMessage('option-clear')));
        optionClear.onclick = function() { TEnvironment.clear(true); };

        var optionDesignMode = document.createElement("button");
        optionDesignMode.className = "ttoolbar-option";
        var imageDesignMode = document.createElement("img");
        imageDesignMode.src = TEnvironment.getBaseUrl() + "/images/design_mode.png";
        imageDesignMode.className = "ttoolbar-option-image";
        optionDesignMode.appendChild(imageDesignMode);
        optionDesignMode.appendChild(document.createTextNode(TEnvironment.getMessage('option-design-mode')));

        this.getElement = function() {
            return domToolbar;
        };
        
        this.displayed = function() {
        };
        
        this.enableConsole = function() {
            domConsole.className = "ttoolbar-mode active";
            domOptions.appendChild(optionClear);
            domOptions.appendChild(optionDesignMode);
            domButtons.appendChild(buttonExecute);
        };
        
        this.disableConsole = function() {
            domConsole.className = "ttoolbar-mode";
            domOptions.removeChild(optionClear);
            domOptions.removeChild(optionDesignMode);
            domButtons.removeChild(buttonExecute);
        };
        
        this.enableEditor = function() {
            domEditor.className = "ttoolbar-mode active";
            editor = true;
        };
        
        this.disableEditor = function() {
            domEditor.className = "ttoolbar-mode";
            editor = false;
        };
    };
    return TToolbar;
});