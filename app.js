var btn = document.querySelector("#btn");
var txtInput = document.querySelector("#input");
var outputDiv = document.querySelector("#output");

var serverURL ="https://api.funtranslations.com/translate/minion.json"


function getTranslationURL(input) {
    return serverURL + "?" + "text=" + input

}


function clickHandler(){

    var inputText = txtInput.value;

    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText  =json.contents.translated;
            outputDiv.innerText = translatedText;
        })
        
};
btn.addEventListener("click",clickHandler)