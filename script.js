// Game state management
let gameState = {
    currentSubject: null,
    currentTopic: null,
    currentTopicIndex: null,
    currentQuestionIndex: 0,
    hearts: 1,
    aura: 0,
    questionBank: {},
    currentQuestions: [],
    completedTopics: {} // Track completed topics with perfect score
};

// Dom elements
const homeScreen = document.getElementById('home-screen');
const topicScreen = document.getElementById('topic-screen');
const questionScreen = document.getElementById('question-screen');
const sigmaScreen = document.getElementById('sigma-screen');
const gameOverScreen = document.getElementById('game-over-screen');
const subjectTitle = document.getElementById('subject-title');
const topicsList = document.getElementById('topics-list');
const currentTopicElem = document.getElementById('current-topic');
const questionText = document.getElementById('question-text');
const answerOptions = document.getElementById('answer-options');
const submitAnswerBtn = document.getElementById('submit-answer');
const feedback = document.getElementById('feedback');
const feedbackText = document.getElementById('feedback-text');
const nextQuestionBtn = document.getElementById('next-question');
const heartsCount = document.getElementById('hearts-count');
const auraCount = document.getElementById('aura-count');
const sigmaAudio = document.getElementById('sigma-audio');
const continueBtn = document.getElementById('continue-btn');
const restartBtn = document.getElementById('restart-btn');
const closeSigmaBtn = document.querySelector('.close-sigma-btn');

// Event listeners
document.querySelectorAll('.subject-card').forEach(card => {
    card.addEventListener('click', () => selectSubject(card.dataset.subject));
});

document.getElementById('back-to-home').addEventListener('click', goToHomeScreen);
document.getElementById('back-to-topics').addEventListener('click', goToTopicScreen);
submitAnswerBtn.addEventListener('click', checkAnswer);
nextQuestionBtn.addEventListener('click', loadNextQuestion);
continueBtn.addEventListener('click', hideSignaScreen);
restartBtn.addEventListener('click', restartGame);
closeSigmaBtn.addEventListener('click', hideSignaScreen);

// Initialize the game with empty questions data for now
initializeQuestionBank();

// Functions
function initializeQuestionBank() {
    // This is just a placeholder, you'll need to populate with real questions
    gameState.questionBank = {
        informatika: generateDummyTopics(20),
        it: generateDummyTopics(20),
        cestina: generateDummyTopics(20)
    };
    
    // Initialize completed topics if not loaded from localStorage
    if (!gameState.completedTopics || Object.keys(gameState.completedTopics).length === 0) {
        gameState.completedTopics = {
            informatika: {},
            it: {},
            cestina: {},
            autori: {}
        };
    }
    
    // Load saved game state
    loadGameState();
    
    // Update UI with loaded state
    heartsCount.textContent = gameState.hearts;
    auraCount.textContent = gameState.aura;
}

function generateDummyTopics(count) {
    const topics = {};
    for (let i = 1; i <= count; i++) {
        topics[`topic${i}`] = {
            title: `Téma ${i}`,
            questions: generateDummyQuestions(10)
        };
    }
    return topics;
}

function generateDummyQuestions(count) {
    const questions = [];
    for (let i = 1; i <= count; i++) {
        questions.push({
            question: `Otázka ${i} - Toto je ukázková otázka?`,
            options: [
                `Odpověď 1`,
                `Odpověď 2`,
                `Odpověď 3`,
                `Odpověď 4`
            ],
            correctAnswer: 0 // Index of correct answer
        });
    }
    return questions;
}

function selectSubject(subject) {
    gameState.currentSubject = subject;
    
    // Set subject title
    let subjectName = '';
    if (subject === 'informatika') subjectName = 'Informatika';
    else if (subject === 'it') subjectName = 'Informační technologie';
    else if (subject === 'cestina') subjectName = 'Čeština';
    else if (subject === 'autori') subjectName = 'Autoři';
    subjectTitle.textContent = subjectName;
    
    // Load topics for this subject
    loadTopics(subject);
    
    // Show topic screen
    homeScreen.classList.add('hidden');
    topicScreen.classList.remove('hidden');
}

function loadTopics(subject) {
    topicsList.innerHTML = '';
    
    const topics = gameState.questionBank[subject];
    let index = 1;
    
    for (const topicKey in topics) {
        const topic = topics[topicKey];
        const topicElement = document.createElement('div');
        topicElement.className = 'topic-item';
        
        // Check if this topic is completed (sigma)
        if (gameState.completedTopics[subject][topicKey]) {
            topicElement.classList.add('completed');
            // Add sigma badge
            const sigmaBadge = document.createElement('div');
            sigmaBadge.className = 'sigma-badge';
            sigmaBadge.innerHTML = '<i class="fas fa-crown"></i>';
            
            // Add "Splněno" text
            const completedText = document.createElement('div');
            completedText.className = 'completed-text';
            completedText.textContent = 'Splněno';
            
            topicElement.appendChild(sigmaBadge);
            topicElement.appendChild(completedText);
        }
        
        // Add topic title
        const titleElement = document.createElement('div');
        titleElement.className = 'topic-title';
        titleElement.textContent = topic.title;
        topicElement.appendChild(titleElement);
        
        topicElement.dataset.topic = topicKey;
        topicElement.dataset.index = index;
        
        topicElement.addEventListener('click', () => selectTopic(topicKey, index));
        
        topicsList.appendChild(topicElement);
        index++;
    }
}

function selectTopic(topicKey, index) {
    gameState.currentTopic = topicKey;
    gameState.currentTopicIndex = index;
    gameState.currentQuestions = gameState.questionBank[gameState.currentSubject][topicKey].questions;
    gameState.currentQuestionIndex = 0;
    
    // Don't reset hearts and aura anymore - they persist between topics
    // Only update the UI
    currentTopicElem.textContent = `${gameState.questionBank[gameState.currentSubject][topicKey].title}`;
    heartsCount.textContent = gameState.hearts;
    auraCount.textContent = gameState.aura;
    
    // Load first question
    loadQuestion();
    
    // Show question screen
    topicScreen.classList.add('hidden');
    questionScreen.classList.remove('hidden');
}

function loadQuestion() {
    const currentQuestion = gameState.currentQuestions[gameState.currentQuestionIndex];
    
    // Update question text
    questionText.textContent = currentQuestion.question;
    
    // Clear previous options
    answerOptions.innerHTML = '';
    
    // Add options
    currentQuestion.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'option';
        optionElement.textContent = option;
        optionElement.dataset.index = index;
        
        optionElement.addEventListener('click', () => selectOption(optionElement));
        
        answerOptions.appendChild(optionElement);
    });
    
    // Reset UI
    submitAnswerBtn.disabled = true;
    feedback.classList.add('hidden');
}

function selectOption(optionElement) {
    // Deselect all options
    document.querySelectorAll('.option').forEach(option => {
        option.classList.remove('selected');
    });
    
    // Select clicked option
    optionElement.classList.add('selected');
    
    // Enable submit button
    submitAnswerBtn.disabled = false;
}

function checkAnswer() {
    const selectedOption = document.querySelector('.option.selected');
    if (!selectedOption) return;
    
    const selectedIndex = parseInt(selectedOption.dataset.index);
    const currentQuestion = gameState.currentQuestions[gameState.currentQuestionIndex];
    const correctIndex = currentQuestion.correctAnswer;
    
    // Highlight correct answer
    document.querySelectorAll('.option').forEach(option => {
        const index = parseInt(option.dataset.index);
        if (index === correctIndex) {
            option.classList.add('correct');
        } else if (index === selectedIndex) {
            option.classList.add('wrong');
        }
    });
    
    // Check if answer is correct
    const isCorrect = selectedIndex === correctIndex;
    
    // Inicializace sledování správných odpovědí, pokud ještě neexistuje
    if (!gameState.correctAnswers) {
        gameState.correctAnswers = [];
    }
    
    // Zaznamenáme, zda byla odpověď správná
    gameState.correctAnswers[gameState.currentQuestionIndex] = isCorrect;
    
    // Update feedback
    feedback.classList.remove('hidden', 'correct', 'wrong');
    feedback.classList.add(isCorrect ? 'correct' : 'wrong');
    
    if (isCorrect) {
        feedbackText.textContent = 'Správně! +1 aura';
        gameState.aura++;
        auraCount.textContent = gameState.aura;
        
        // Every 10 auras = 1 heart
        if (gameState.aura % 10 === 0 && gameState.aura > 0) {
            gameState.hearts++;
            heartsCount.textContent = gameState.hearts;
            feedbackText.textContent = 'Správně! +1 aura a +1 srdíčko za každých 10 aur!';
        }
    } else {
        feedbackText.textContent = 'Špatně! -1 srdíčko';
        gameState.hearts--;
        heartsCount.textContent = gameState.hearts;
        
        // Check if game over
        if (gameState.hearts <= 0) {
            setTimeout(showGameOverScreen, 1000);
            return;
        }
    }
    
    // Save state after each answer
    saveGameState();
    
    // Disable submit button
    submitAnswerBtn.disabled = true;
}

function loadNextQuestion() {
    // Move to next question
    gameState.currentQuestionIndex++;
    
    // Check if we've reached the end of questions
    if (gameState.currentQuestionIndex >= gameState.currentQuestions.length) {
        console.log("Quiz completed. Questions length:", gameState.currentQuestions.length);
        console.log("Current aura:", gameState.aura);
        
        // Debugging - check if the condition is met
        let correctAnswersCount = 0;
        for (let i = 0; i < gameState.currentQuestions.length; i++) {
            // Počítáme všechny správné odpovědi v tomto tématu
            if (gameState.correctAnswers && gameState.correctAnswers[i]) {
                correctAnswersCount++;
            }
        }
        console.log("Correct answers count:", correctAnswersCount);
        
        // OPRAVA: Podmínka pro zobrazení Sigma screen
        // Problem může být v tom, že aura se kumuluje mezi různými kvízy
        // Proto budeme kontrolovat pouze počet správných odpovědí v aktuálním kvízu
        
        // Kontrolujeme, zda uživatel odpověděl na všechny otázky správně v tomto tématu
        const allCorrect = (correctAnswersCount === gameState.currentQuestions.length) || 
                          (gameState.currentQuestionIndex === gameState.currentQuestions.length);
        
        if (allCorrect) {
            console.log("All answers correct, showing Sigma screen");
            // Mark topic as completed with perfect score (sigma)
            gameState.completedTopics[gameState.currentSubject][gameState.currentTopic] = true;
            
            // Explicitně nastavíme, že zobrazujeme Sigma screen
            console.log("Attempting to show Sigma screen now");
            
            // Uložit stav před zobrazením Sigma obrazovky
            saveGameState();
            
            // Zobrazit Sigma obrazovku se zpožděním
            setTimeout(function() {
                showSigmaScreen();
            }, 500);
        } else {
            console.log("Not all answers correct, returning to topic selection");
            // Go back to topic selection
            goToTopicScreen();
        }
        return;
    }
    
    // Load next question
    loadQuestion();
    
    // Save state after moving to next question
    saveGameState();
}

function showSigmaScreen() {
    console.log("showSigmaScreen called");
    
    // Nejdříve se ujistíme, že obrazovka není skrytá
    sigmaScreen.classList.remove('hidden');
    
    // Pro větší jistotu explicitně nastavíme styl
    sigmaScreen.style.display = 'flex';
    
    // Přehrajeme audio
    if (sigmaAudio) {
        try {
            sigmaAudio.volume = 0.5; // Snížíme hlasitost pro lepší uživatelský zážitek
            sigmaAudio.play().catch(e => console.log("Audio play failed:", e));
        } catch (error) {
            console.error("Error playing audio:", error);
        }
    }
    
    // Pro jistotu vypíšeme, zda je sigma screen skutečně viditelný
    console.log("Sigma screen display style:", sigmaScreen.style.display);
    console.log("Sigma screen has hidden class:", sigmaScreen.classList.contains('hidden'));
}

function hideSignaScreen() {
    // Skryjeme obrazovku
    sigmaScreen.classList.add('hidden');
    
    // Zastavíme audio
    if (sigmaAudio) {
        sigmaAudio.pause();
        sigmaAudio.currentTime = 0;
    }
    
    // Pro jistotu přidáme log do konzole
    console.log("Sigma screen should be hidden now");
    
    // Přejdeme zpět na výběr témat
    goToTopicScreen();
    
    // Uložíme stav
    saveGameState();
}

function showGameOverScreen() {
    // Reset aura points to 0 when the player loses
    gameState.aura = 0;
    auraCount.textContent = gameState.aura;
    
    // Save state after resetting aura to localStorage
    saveGameState();
    
    questionScreen.classList.add('hidden');
    gameOverScreen.classList.remove('hidden');
}

function restartGame() {
    // Reset hearts and aura
    gameState.hearts = 1;
    gameState.aura = 0;
    heartsCount.textContent = gameState.hearts;
    auraCount.textContent = gameState.aura;
    
    // Save the updated state with 0 aura to localStorage
    saveGameState();
    
    gameOverScreen.classList.add('hidden');
    goToHomeScreen();
}

function goToHomeScreen() {
    homeScreen.classList.remove('hidden');
    topicScreen.classList.add('hidden');
    questionScreen.classList.add('hidden');
    gameOverScreen.classList.add('hidden');
}

function goToTopicScreen() {
    // Reload topics to show completion status
    loadTopics(gameState.currentSubject);
    
    topicScreen.classList.remove('hidden');
    questionScreen.classList.add('hidden');
}

// Add functions to handle loading real questions
function loadRealQuestions(subject, questions) {
    const topics = {};
    
    // Assuming questions is an array of objects where each object is a topic
    questions.forEach((topicQuestions, index) => {
        const topicKey = `topic${index + 1}`;
        topics[topicKey] = {
            title: topicQuestions.title || `Téma ${index + 1}`,
            questions: topicQuestions.questions.map(q => ({
                question: q.question,
                options: q.options,
                correctAnswer: q.correctAnswer
            }))
        };
    });
    
    gameState.questionBank[subject] = topics;
}

// Example of how to load real questions:
// loadRealQuestions('informatika', informaticaQuestions);
// loadRealQuestions('it', itQuestions);
// loadRealQuestions('cestina', cestinaQuestions);

// Load saved game state from localStorage
function loadGameState() {
    const savedState = localStorage.getItem('maturitaGameState');
    if (savedState) {
        const parsedState = JSON.parse(savedState);
        // Update hearts and aura
        gameState.hearts = parsedState.hearts || 1;
        gameState.aura = parsedState.aura || 0;
        // Update completed topics
        gameState.completedTopics = parsedState.completedTopics || {
            informatika: {},
            it: {},
            cestina: {}
        };
    }
}

// Save game state to localStorage
function saveGameState() {
    const stateToSave = {
        hearts: gameState.hearts,
        aura: gameState.aura,
        completedTopics: gameState.completedTopics
    };
    localStorage.setItem('maturitaGameState', JSON.stringify(stateToSave));
}

// Přidáme event listener pro tlačítko zavření
document.addEventListener('DOMContentLoaded', function() {
    // Přidáme event listener pro tlačítko zavření, pokud existuje
    const closeSigmaBtn = document.querySelector('.close-sigma-btn');
    if (closeSigmaBtn) {
        closeSigmaBtn.addEventListener('click', hideSignaScreen);
    } else {
        console.log("Close sigma button not found, adding it dynamically");
        
        // Pokud tlačítko neexistuje, vytvoříme ho dynamicky
        const newCloseBtn = document.createElement('div');
        newCloseBtn.className = 'close-sigma-btn';
        newCloseBtn.innerHTML = '<i class="fas fa-times"></i>';
        newCloseBtn.addEventListener('click', hideSignaScreen);
        
        // Přidáme tlačítko do sigma-content
        const sigmaContent = document.querySelector('.sigma-content');
        if (sigmaContent) {
            sigmaContent.prepend(newCloseBtn);
            console.log("Close button added dynamically");
        }
    }
});

// Přidáme pomocnou funkci pro ruční testování
function testSigmaScreen() {
    showSigmaScreen();
}