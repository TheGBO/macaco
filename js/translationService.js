var localePath = "data/locale.json"
var userLang = navigator.language.substring(0,2);

export default function initTranslationServer(){
    loadLocales();
}

function loadLocales(){
    document.getElementById("language-marker").lang = userLang;
    let localeData = fetch(localePath).then((res) => {
        if(!res.ok){
            throw new Error("HTTP ERROR");
        }
        return res.json();
    }).then((data =>{
        for(let lang in data){
            if(lang == userLang){
                let currentLang = data[lang];
                //get terms and translate them.
                for(let term in currentLang){
                    let translatableElement = getElementByText(term);
                    if(translatableElement !== null){
                        translatableElement.textContent = currentLang[term];
                    }
                }
            }
        }
        
    })).catch();
}

function getElementByText(str){
    let elements = document.querySelectorAll("body *");
    for(let e in elements){
        if(elements[e].textContent == str){
            return elements[e];
        }
    }
    return null;
}

