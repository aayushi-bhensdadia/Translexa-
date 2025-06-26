const selectTag = document.querySelectorAll("select");
const translationbtn = document.querySelector("#Translate")
const inputText = document.querySelector("#inputText");
const outputText = document.querySelector("#outputText");

selectTag.forEach((tag , id) => {
   for (const countriesCode in countries) {
    let selected;
    if(id == 0 && countriesCode == "en-GB"){
        selected = " selected";
    }else if(id == 1 && countriesCode == "hi-IN"){
        selected = " selected";
    }
      let option = `<option value="${countriesCode}"${selected}>${countries[countriesCode]}</option>`;
      tag.insertAdjacentHTML("beforeend",option);
   }
});

translationbtn.addEventListener(("click") , () => {
  let text = inputText.value;
  let TranslateFrom = selectTag[0].value;
  let TranslateTo = selectTag[1].value;
  
  let urlApi = `https://api.mymemory.translated.net/get?q=${text}&langpair=${TranslateFrom}|${TranslateTo}`
  // fetching Api data
  fetch(urlApi).then(res => res.json()).then(data => {
    outputText.value = data.responseData.translatedText;
  });
});


  