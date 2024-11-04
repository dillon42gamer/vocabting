const unit3Words = [
    { word: 'allot', sentence: 'The teacher allotted books and supplies to each student for the first day of school.' },
    { word: 'amass', sentence: 'A good investor can amass a fortune over the long run.' },
    { word: 'audacious', sentence: 'The audience cheered the audacious feats of the trapeze artists.' },
    { word: 'comply', sentence: 'Employees who fail to comply with a company’s rules may lose their jobs.' },
    { word: 'devoid', sentence: 'The old well on my grandparents’ property has long been devoid of water.' },
    { word: 'elite', sentence: 'Each year, the social elite of the community sponsors several events to benefit local charities.' },
    { word: 'grapple', sentence: 'A ship equipped with grapples may be used to recover large pieces of wreckage from the ocean floor.' },
    { word: 'incapacitate', sentence: 'In the 1940s and 1950s, polio incapacitated many thousands of people each year all over the world.' },
    { word: 'instigate', sentence: 'Several demonstrators in the angry crowd did their best to instigate a riot.' },
    { word: 'longevity', sentence: 'The sea turtle is known for its longevity.' },
    { word: 'myriad', sentence: 'Scientists continue to make new discoveries in their studies of the myriad life-forms of the jungle.' },
    { word: 'perspective', sentence: 'The designs for the children’s playhouse were drawn to scale and in the right perspective.' },
    { word: 'perturb', sentence: 'The rude and disruptive behavior of several party guests perturbed the host and hostess.' },
    { word: 'prodigious', sentence: 'Few intellects have rivaled the prodigious mind of Albert Einstein.' },
    { word: 'relevant', sentence: 'I found several Web sites that provided information relevant to the topic of my research paper.' },
    { word: 'skittish', sentence: 'Only an experienced and confident rider should mount a skittish horse.' },
    { word: 'tether', sentence: 'Some young people find it difficult to break the emotional and financial tether that binds them to their parents.' },
    { word: 'unison', sentence: 'The members of our new student orchestra need to practice playing in unison.' },
    { word: 'vie', sentence: 'Many actors vie for the leading role in the famous director’s new film.' },
    { word: 'willful', sentence: 'After lengthy deliberation, the jury found the defendant guilty of willful murder.' }
];

function getRandomSentence() {
    const randomIndex = Math.floor(Math.random() * unit3Words.length);
    const { word, sentence } = unit3Words[randomIndex];
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
