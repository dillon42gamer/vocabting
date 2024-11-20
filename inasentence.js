const unit4Words = [
    { word: 'annul', sentence: 'The state legislature voted to __________ outdated laws.' },
    { word: 'blasé', sentence: 'Battle-hardened soldiers may tend to become __________ about danger.' },
    { word: 'bolster', sentence: 'You should use facts to __________ your argument.' },
    { word: 'deplore', sentence: 'Social critics __________ the widespread decline in good manners.' },
    { word: 'frivolous', sentence: 'I’ll ignore your __________ suggestion.' },
    { word: 'muster', sentence: 'You will need to __________ your courage to face the bully who has been tormenting you.' },
    { word: 'nonentity', sentence: 'We may not be movie stars, but we did not deserve to be treated as __________.' },
    { word: 'obsess', sentence: 'If you allow fear of failure to __________ you, you will find it difficult to achieve your goals.' },
    { word: 'ornate', sentence: 'If you ask me, an __________ frame distracts the viewer’s eye from a simple drawing.' },
    { word: 'oust', sentence: 'Military leaders __________ the duly elected president and took over the government.' },
    { word: 'peruse', sentence: 'It is wise to have a lawyer __________ an agreement before you sign it.' },
    { word: 'porous', sentence: 'Some synthetic materials are as __________ and strong as natural sponges.' },
    { word: 'promontory', sentence: 'We chose a high __________ overlooking the sea as the perfect spot for our picnic lunch.' },
    { word: 'prone', sentence: 'Unfortunately, I am __________ to sinus infections.' },
    { word: 'qualm', sentence: 'Don’t you have serious __________ about voting for such a relatively unknown candidate?' },
    { word: 'recourse', sentence: 'If my letter of complaint fails to get results, I will still have __________ to a higher authority.' },
    { word: 'residue', sentence: 'A sticky __________ remains on the counter.' },
    { word: 'solicitous', sentence: 'Neighbors made __________ inquiries about the state of the elderly couple’s health.' },
    { word: 'staid', sentence: 'Many companies have a dress code that requires employees to wear __________ colors such as navy or gray.' },
    { word: 'sustain', sentence: 'You may __________ a serious eye injury if you forget to wear your safety goggles when you work with power tools.' }
];

function getRandomSentence() {
    const randomIndex = Math.floor(Math.random() * unit4Words.length);
    const { word, sentence } = unit4Words[randomIndex];
    document.getElementById('sentenceDisplay').textContent = sentence;
    return word;
}

let currentWord = getRandomSentence();

document.getElementById('sentenceSubmit').addEventListener('click', function() {
    const userAnswer = document.getElementById('sentenceInput').value.trim();
    if (userAnswer.toLowerCase() === currentWord.toLowerCase()) {
        document.getElementById('sentenceResult').textContent = 'Correct!';
        document.getElementById('sentenceResult').style.color = 'green';
    } else {
        document.getElementById('sentenceResult').textContent = `Incorrect. The correct word was: ${currentWord}`;
        document.getElementById('sentenceResult').style.color = 'red';
    }
    document.getElementById('sentenceInput').value = '';
    currentWord = getRandomSentence();
});
