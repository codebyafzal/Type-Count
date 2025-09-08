
const typingArea = document.getElementById('input-value');
const charactersResult = document.getElementById('character-span');
const wordsResult = document.getElementById('word-span');
const sentencesResult = document.getElementById('sentence-span');
const paragraphsResult = document.getElementById('paragraph-span');
const spacesResult = document.getElementById('spaces-span');
const result = document.querySelectorAll('.result-div');


typingArea.addEventListener('input', function() {

    characterCounts();

    wordsCount();

    sentencesCount();

})

// Characters Counts
function characterCounts() {

    const value = typingArea.value;
    const characterCounts = value.length;
    
    charactersResult.textContent = characterCounts;
}

// Words Counts
function wordsCount() {

    const words = typingArea.value;
    const wordsMatch = words.match(/\b[a-zA-Z0-9]+\b/g);

    wordsResult.textContent = wordsMatch ? wordsMatch.length : 0;

}

// Sentences Counts
function sentencesCount() {
    
    const sentences = typingArea.value;
    const sentencesCount = sentences.match(/\./g);


    sentencesResult.textContent = sentencesCount ? sentencesCount.length : 0;
}