function first1(e){
    //e.preventDefault();
document.getElementById('dani').innerHTML = 'urdu';
console.log("hehwuhe")
}

function first2(event){
    event.preventDefault();
a= document.getElementById('language');
b = a.value;
console.log(b)
}


const apiKey = '3872936c04msh956841c16b63706p1a6af0jsn76f43301f3f9';

// Function to translate text using the language translation API
function translateText(text, sourceLanguage, targetLanguage) {
  const url = 'https://google-translate1.p.rapidapi.com/language/translate/v2';
  const headers = {
    'X-RapidAPI-Key': apiKey,
    'Content-Type': 'application/x-www-form-urlencoded'
  };
  const body = {
    q: text,
    source: sourceLanguage,
    target: targetLanguage,
    format: 'text'
  };

  fetch(url, {
    method: 'POST',
    headers: headers,
    body: new URLSearchParams(body)
  })
    .then(response => response.json())
    .then(data => {
      const translatedText = data.data.translations[0].translatedText;
      console.log(translatedText);
      // Do something with the translated text
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

// Example usage
translateText('Hello', 'en', 'es'); // Translate 'Hello' from English to Spanish



