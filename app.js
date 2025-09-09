
const typingArea = document.getElementById('input-value');
const charactersResult = document.getElementById('character-span');
const wordsResult = document.getElementById('word-span');
const sentencesResult = document.getElementById('sentence-span');
const paragraphsResult = document.getElementById('paragraph-span');
const spacesResult = document.getElementById('spaces-span');
const result = document.querySelectorAll('.result-div');
const characterDiv = document.getElementById('character-div');
const wordDiv = document.getElementById('word-div');
const sentenceDiv = document.getElementById('sentence-div');
const paraDiv = document.getElementById('paragraph-div');
const spaceDiv = document.getElementById('spaces-div');


typingArea.addEventListener('input', function() {

    characterCounts();

    wordsCount();

    sentencesCount();

    paragraphsCount();

    spacesCount();

})

// Characters Counts
function characterCounts() {

    const value = typingArea.value;
    const characterCounts = value.replace(/[\r\n]/g,"");
    
    charactersResult.textContent = characterCounts.length;
}

// Words Counts
function wordsCount() {

    const words = typingArea.value;
    const wordsMatch = words.match(/\b[a-zA-Z]+(?:-[a-zA-Z]+)*\b/g);

    if(wordsMatch) {
        wordsResult.textContent = wordsMatch.length;
    } else {
        wordsResult.textContent = 0;
    }

}

// Sentences Counts
function sentencesCount() {
    
    const sentences = typingArea.value;
    const sentencesCount = sentences.match(/\./g);


    if(sentencesCount) {
        sentencesResult.textContent = sentencesCount.length;
    } else {
        sentencesResult.textContent = 0;
    }
}

// Paragraph Counts
function paragraphsCount() {

    const paragraph = typingArea.value;
    const paragraphsCount = paragraph.trim().split(/\n\s*\n/);
    const validParagraphs = paragraphsCount.filter(p => p.trim().length > 0);

    paragraphsResult.textContent = validParagraphs.length;
}

//Space Counts
function spacesCount() {

    const space = typingArea.value;
    const spacesCount = space.match(/ /g);

    if(spacesCount) {
        spacesResult.textContent = spacesCount.length;
    } else {
        spacesResult.textContent = 0;
    }

}

// Characters Count Copy
characterDiv.addEventListener('click', function() {
    
    navigator.clipboard.writeText(charactersResult.textContent);
    alert("Characters Count Copied!");

})

// Words Count Copy
wordDiv.addEventListener('click', function() {
    
    navigator.clipboard.writeText(wordsResult.textContent);
    alert("Words Count Copied!");

})

// Sentence Count Copy
sentenceDiv.addEventListener('click', function() {
    
    navigator.clipboard.writeText(sentencesResult.textContent);
    alert("Sentence Count Copied!");

})

// Paragraph Count Copy
paraDiv.addEventListener('click', function() {
    
    navigator.clipboard.writeText(paragraphsResult.textContent);
    alert("Paragraph Count Copied!");

})

// Spaces Count Copy
spaceDiv.addEventListener('click', function() {
    
    navigator.clipboard.writeText(spacesResult.textContent);
    alert("Spaces Count Copied!");

})
