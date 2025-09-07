
const typingArea = document.getElementById('input-value');
const charactersResult = document.getElementById('character-span');
const wordsResult = document.getElementById('word-span');
const sentencesResult = document.getElementById('sentence-span');
const paragraphsResult = document.getElementById('paragraph-span');
const spacesResult = document.getElementById('spaces-span');
const result = document.querySelectorAll('.result-div');


typingArea.addEventListener('input', function() {

    const value = typingArea.value;
    const length = value.length;

    // Characters Count
    charactersResult.textContent = length;

    //Words Count


})