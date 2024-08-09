var userLang = navigator.language.substring(0,2);

export default function initTranslationServer(localePath){
    loadLocales(localePath);
}

function loadLocales(localePath){
    //the html element needs this ID 
    //<html id="language-marker" lang="en">
    //default language can be anything, english is preferrable.
    document.getElementById("language-marker").lang = userLang;

    //fetch the json file containing translations
    fetch(localePath).then((res) => {
        if(!res.ok){
            throw new Error("HTTP ERROR");
        }
        return res.json();
    }).then((data =>{
        //iterate through data and languages
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

//search elements using text content as a parameter
function getElementByText(str){
    let elements = document.querySelectorAll("body *");
    for(let e in elements){
        if(elements[e].textContent == str){
            return elements[e];
        }
    }
    return null;
}

