const quizData = [
    {
        question: "Which state is famous for 'Hyderabadi Dum Biryani'?",
        options: ["Tamil Nadu", "Telangana", "Karnataka", "Maharashtra"],
        answer: "Telangana"
    },
    {
        question: "What is the main leafy ingredient in 'Kafuli' from Uttarakhand?",
        options: ["Spinach", "Mustard", "Coriander", "Fenugreek"],
        answer: "Spinach"
    },
    {
        question: "Which sweet dish from Odisha is made with caramelized cottage cheese?",
        options: ["Chhena Poda", "Rasgulla", "Peda", "Kalakand"],
        answer: "Chhena Poda"
    },
    {
        question: "What is the key vegetable used in 'Papaya Khar' from Assam?",
        options: ["Tomato", "Raw Papaya", "Potato", "Pumpkin"],
        answer: "Raw Papaya"
    },
    {
        question: "Which dish is a combination of Bati, Dal, and Churma?",
        options: ["Tunday Kebab", "Dal Bati Churma", "Litti Chokha", "Misal Pav"],
        answer: "Dal Bati Churma"
    },
    {
        question: "What is the signature dish of Punjab made with mustard greens?",
        options: ["Sarson da Saag", "Baingan Bharta", "Rajma", "Aloo Paratha"],
        answer: "Sarson da Saag"
    },
    {
        question: "Which northeastern state is known for 'Pork with Bamboo Shoot'?",
        options: ["Nagaland", "Manipur", "Tripura", "Arunachal Pradesh"],
        answer: "Nagaland"
    },
    {
        question: "Which dessert from Bihar consists of wheat and sattu balls with mashed vegetables?",
        options: ["Gulab Jamun", "Litti Chokha", "Chhena Poda", "Kheer"],
        answer: "Litti Chokha"
    },
    {
        question: "What grain is used in 'Bajra Khichri' from Haryana?",
        options: ["Wheat", "Rice", "Pearl Millet", "Corn"],
        answer: "Pearl Millet"
    },
    {
        question: "What is the name of the soupy noodle dish popular in Arunachal Pradesh?",
        options: ["Thukpa", "Momo", "Skyu", "Chakhwi"],
        answer: "Thukpa"
    },
    {
        question: "Which dish from Sikkim consists of steamed dumplings?",
        options: ["Thukpa", "Momos", "Skyu", "Chole Bhature"],
        answer: "Momos"
    },
    {
        question: "What is the main ingredient in 'Gongura Pickle' from Andhra Pradesh?",
        options: ["Mango", "Gongura Leaves", "Chili", "Garlic"],
        answer: "Gongura Leaves"
    },
    {
        question: "Which Goan dish is a coconut-based curry with raw mango?",
        options: ["Vindaloo", "Xacuti", "Goan Fish Curry", "Sorpotel"],
        answer: "Goan Fish Curry"
    },
    {
        question: "Which Maharashtrian dish features spicy lentils and pav?",
        options: ["Pav Bhaji", "Misal Pav", "Poha", "Vada Pav"],
        answer: "Misal Pav"
    },
    {
        question: "What is the name of the dish from Ladakh made with handmade pasta and vegetables?",
        options: ["Skyu", "Thukpa", "Momos", "Misa Mach Poora"],
        answer: "Skyu"
    }
];

let currentQuestion = 0;
let userAnswers = [];
let selectedQuizData = [];

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function startQuiz() {
    selectedQuizData = shuffleArray([...quizData]).slice(0, 5);
    currentQuestion = 0;
    userAnswers = [];
    loadQuestion();
}

function loadQuestion() {
    const questionData = selectedQuizData[currentQuestion];
    document.getElementById('question').textContent = questionData.question;
    document.getElementById('current-q').textContent = currentQuestion + 1;
    document.getElementById('total-q').textContent = selectedQuizData.length;
    
    // Update progress bar
    const progress = ((currentQuestion + 1) / selectedQuizData.length) * 100;
    document.getElementById('progress').style.width = progress + '%';
    
    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = '';
    
    questionData.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'option';
        optionElement.textContent = option;
        optionElement.onclick = () => selectAnswer(option);
        
        if (userAnswers[currentQuestion] === option) {
            optionElement.classList.add('selected');
        }
        
        optionsContainer.appendChild(optionElement);
    });

    // Update buttons
    document.getElementById('prev').disabled = currentQuestion === 0;
    
    if (currentQuestion === selectedQuizData.length - 1) {
        document.getElementById('next').style.display = 'none';
        document.getElementById('submit').style.display = 'inline-block';
    } else {
        document.getElementById('next').style.display = 'inline-block';
        document.getElementById('submit').style.display = 'none';
    }
}

function selectAnswer(answer) {
    userAnswers[currentQuestion] = answer;
    
    // Update visual selection
    document.querySelectorAll('.option').forEach((option) => {
        option.classList.toggle('selected', option.textContent === answer);
    });
}

function nextQuestion() {
    if (currentQuestion < selectedQuizData.length - 1) {
        currentQuestion++;
        loadQuestion();
    }
}

function prevQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        loadQuestion();
    }
}

function submitQuiz() {
    let score = 0;
    selectedQuizData.forEach((q, index) => {
        if (userAnswers[index] === q.answer) {
            score++;
        }
    });

    // Show results
    const resultElement = document.getElementById('result');
    const percentage = Math.round((score / selectedQuizData.length) * 100);
    
    let resultClass = 'result-info';
    let resultText = `Quiz Complete! You scored ${score} out of ${selectedQuizData.length} (${percentage}%)`;
    
    if (percentage >= 80) {
        resultClass = 'result-success';
        resultText += ' 🎉 Excellent knowledge of Indian cuisine!';
    } else if (percentage >= 60) {
        resultText += ' 👍 Good job exploring Indian flavors!';
    } else {
        resultText += ' 📚 Keep exploring the diverse tastes of India!';
    }
    
    resultElement.textContent = resultText;
    resultElement.className = resultClass;

    // Hide quiz elements
    document.querySelector('.quiz-header').style.display = 'none';
    document.getElementById('question').style.display = 'none';
    document.getElementById('options').style.display = 'none';
    document.querySelector('.buttons').style.display = 'none';

    // Show quiz stats
    showQuizStats(score);
}

function showQuizStats(score) {
    const statsHtml = `
        <div class="quiz-stats">
            <div class="stat">
                <div class="stat-number">${score}</div>
                <div class="stat-label">Correct</div>
            </div>
            <div class="stat">
                <div class="stat-number">${selectedQuizData.length - score}</div>
                <div class="stat-label">Incorrect</div>
            </div>
            <div class="stat">
                <div class="stat-number">${Math.round((score / selectedQuizData.length) * 100)}%</div>
                <div class="stat-label">Score</div>
            </div>
        </div>
    `;
    
    document.getElementById('result').insertAdjacentHTML('afterend', statsHtml);
}

function goHome() {
    window.location.href = 'index.html';
}

// Start quiz on page load
startQuiz();