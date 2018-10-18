var codeEditor = {};
codeEditor.toggleButtonFlag = false;

function cssDoubleClick() {
    var cssBox = document.getElementById("cssBox");
    
    cssBox.value = "h4 {\ncolor: lightblue; \ntext-align:center;\n}\n\np { \nfont-family: verdana, cursive; \nfont-size: 35pt; \ntext-align: right; \n}";
}

function htmlDoubleClick() {
    var htmlBox = document.getElementById("htmlBox");
    
    htmlBox.value = "<h4> Hello World! </h4>\n\n<p> Welcome to my code editor application! </p>";
}

function cssClick() {
    var cssBox = document.getElementById("cssBox");
    cssBox.style.boxShadow = "2px 2px 20px 10px orange";
}

function cssLeave() {
    var cssBox = document.getElementById("cssBox");
    cssBox.style.boxShadow = "2px 2px 5px 1px #888888";
}

function htmlClick() {
    var htmlBox = document.getElementById("htmlBox");
    htmlBox.style.boxShadow = "2px 2px 20px 10px orange";
}

function htmlLeave() {
    var htmlBox = document.getElementById("htmlBox");
    htmlBox.style.boxShadow = "2px 2px 5px 1px #888888";
}



function launchClicked() {
    var htmlBox = document.getElementById("htmlBox");
    var previewBox = document.getElementById("previewBox");
    
    previewBox.innerHTML = htmlBox.value;
}

function clearClicked() {
    var htmlBox = document.getElementById("htmlBox");
    var cssBox = document.getElementById("cssBox");
    var previewBox = document.getElementById("previewBox");
    var styleTag = document.getElementById("dynamicStyles");
    
    htmlBox.value = "";
    cssBox.value = "";
    previewBox.innerHTML = "";
    styleTag.innerHTML = "";
}


function toggleClicked() {
    var cssBox = document.getElementById("cssBox");
    var styleTag = document.getElementById("dynamicStyles");
    var toggleButton = document.getElementById("toggleButton");
    
    if(codeEditor.toggleButtonFlag == false){
        let rules = getCssObject(cssBox.value);

        let tempStyleText = "";
        for(let i = 0; i < rules.length; i++){
             tempStyleText += "#previewBox " + rules[i].selectorText + " {" + rules[i].style.cssText + "}\n";
        }

        styleTag.innerHTML = tempStyleText;
        codeEditor.toggleButtonFlag = true;
        toggleButton.style.backgroundColor = "forestgreen";
    }
    else{
        styleTag.innerHTML = "";
        codeEditor.toggleButtonFlag = false;
        toggleButton.style.backgroundColor = "darkseagreen";
    }
}


function headerDoubleClick() {
   
    var title = prompt("Please enter a new title:");
    
    document.getElementById("title").innerHTML = title;
    document.getElementById("header").innerHTML = title;
}

//help for this function provided by http://jsfiddle.net/v2JsZ/
function getCssObject(styleGiven) {
    var doc = document.implementation.createHTMLDocument("");
    var styleProperty = document.createElement("style");
    styleProperty.textContent = styleGiven;
    doc.body.appendChild(styleProperty);
    return styleProperty.sheet.cssRules;
};



