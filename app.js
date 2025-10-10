// CareMate Application Logic
let userSymptoms = [];
let currentTheme = 'dark';
let chatHistory = [];

// Trusted medical resource URLs
const medicalResources = {
    webmd: 'https://www.webmd.com/search/search_results/default.aspx?query=',
    mayoclinic: 'https://www.mayoclinic.org/search/search-results?q=',
    nhs: 'https://www.nhs.uk/search/?q=',
    medlineplus: 'https://medlineplus.gov/search/?query=',
    healthline: 'https://www.healthline.com/search?q1='
};

// Initialize app
window.addEventListener('load', function() {
    createParticles();
    initializeStats();
    loadTheme();
});

// Create animated background particles
function createParticles() {
    const bgAnimation = document.getElementById('bgAnimation');
    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 20 + 's';
        particle.style.animationDuration = (15 + Math.random() * 10) + 's';
        bgAnimation.appendChild(particle);
    }
}

// Initialize statistics
function initializeStats() {
    document.getElementById('diseaseCount').textContent = Object.keys(diseaseDatabase).length;
    document.getElementById('symptomCount').textContent = allSymptoms.size;
}

// Theme management
function loadTheme() {
    const savedTheme = localStorage.getItem('caremate-theme') || 'dark';
    currentTheme = savedTheme;
    document.body.setAttribute('data-theme', savedTheme);
    updateThemeButton();
}

function toggleTheme() {
    currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.body.setAttribute('data-theme', currentTheme);
    localStorage.setItem('caremate-theme', currentTheme);
    updateThemeButton();
}

function updateThemeButton() {
    const icon = document.getElementById('themeIcon');
    const text = document.getElementById('themeText');
    if (currentTheme === 'dark') {
        icon.className = 'fas fa-moon';
        text.textContent = 'Dark';
    } else {
        icon.className = 'fas fa-sun';
        text.textContent = 'Light';
    }
}

// Auto-complete suggestions
document.getElementById('symptomInput').addEventListener('input', function(e) {
    const input = e.target.value.toLowerCase().trim();
    const suggestionsDiv = document.getElementById('suggestions');

    if (input.length < 2) {
        suggestionsDiv.style.display = 'none';
        return;
    }

    const matches = Array.from(allSymptoms).filter(symptom => 
        symptom.includes(input) && !userSymptoms.includes(symptom)
    ).slice(0, 10);

    if (matches.length > 0) {
        suggestionsDiv.innerHTML = matches.map(symptom => 
            `<div class="suggestion-item" onclick="selectSuggestion('${symptom}')">${symptom}</div>`
        ).join('');
        suggestionsDiv.style.display = 'block';
    } else {
        suggestionsDiv.style.display = 'none';
    }
});

// Close suggestions when clicking outside
document.addEventListener('click', function(e) {
    if (!e.target.closest('.input-wrapper')) {
        document.getElementById('suggestions').style.display = 'none';
    }
});

// Enter key support
document.getElementById('symptomInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addSymptom();
    }
});

// Select suggestion
function selectSuggestion(symptom) {
    document.getElementById('symptomInput').value = symptom;
    document.getElementById('suggestions').style.display = 'none';
    addSymptom();
}

// Add symptom
function addSymptom() {
    const input = document.getElementById('symptomInput');
    const symptom = input.value.trim().toLowerCase();
    
    if (!symptom) {
        return;
    }

    if (userSymptoms.includes(symptom)) {
        showNotification('This symptom is already added', 'warning');
        input.value = '';
        return;
    }

    if (symptom.length < 2) {
        showNotification('Please enter a valid symptom', 'warning');
        return;
    }

    // Check if symptom is in database
    const isInDatabase = allSymptoms.has(symptom);
    
    if (!isInDatabase) {
        // Show external resource option for unknown symptoms
        showExternalResourceOption(symptom);
    }

    userSymptoms.push(symptom);
    updateSymptomsDisplay();
    input.value = '';
    document.getElementById('suggestions').style.display = 'none';
    
    // Hide results when adding new symptom
    document.getElementById('results').style.display = 'none';
}

// Show external resources for unknown symptoms
function showExternalResourceOption(symptom) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: var(--bg-card);
        border: 2px solid var(--blue-primary);
        border-radius: 15px;
        padding: 30px;
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
        z-index: 10001;
        max-width: 500px;
        width: 90%;
        color: var(--text-primary);
    `;

    notification.innerHTML = `
        <div style="text-align: center;">
            <i class="fas fa-info-circle" style="font-size: 3em; color: var(--blue-primary); margin-bottom: 15px;"></i>
            <h3 style="margin-bottom: 15px;">Symptom Not in Database</h3>
            <p style="color: var(--text-secondary); margin-bottom: 20px;">
                "${symptom}" is not in our current database. Would you like to learn more about this symptom from trusted medical sources?
            </p>
            <div style="display: flex; gap: 10px; flex-direction: column;">
                <a href="${medicalResources.mayoclinic}${encodeURIComponent(symptom)}" target="_blank" 
                   class="external-link" style="width: 100%; text-align: center; box-sizing: border-box;">
                    <i class="fas fa-external-link-alt"></i> Mayo Clinic
                </a>
                <a href="${medicalResources.webmd}${encodeURIComponent(symptom)}" target="_blank" 
                   class="external-link" style="width: 100%; text-align: center; box-sizing: border-box;">
                    <i class="fas fa-external-link-alt"></i> WebMD
                </a>
                <a href="${medicalResources.healthline}${encodeURIComponent(symptom)}" target="_blank" 
                   class="external-link" style="width: 100%; text-align: center; box-sizing: border-box;">
                    <i class="fas fa-external-link-alt"></i> Healthline
                </a>
                <button onclick="this.closest('div').parentElement.parentElement.remove()" 
                        style="margin-top: 10px; padding: 12px; background: var(--bg-secondary); 
                               border: 1px solid rgba(0, 102, 255, 0.3); color: var(--text-primary); 
                               border-radius: 10px; cursor: pointer;">
                    Close
                </button>
            </div>
        </div>
    `;

    document.body.appendChild(notification);
    
    // Auto remove after 30 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.remove();
        }
    }, 30000);
}

// Remove symptom
function removeSymptom(symptom) {
    userSymptoms = userSymptoms.filter(s => s !== symptom);
    updateSymptomsDisplay();
    
    // Hide results when removing symptom
    if (userSymptoms.length === 0) {
        document.getElementById('results').style.display = 'none';
    }
}

// Update symptoms display
function updateSymptomsDisplay() {
    const container = document.getElementById('symptomsContainer');
    const analyzeBtn = document.getElementById('analyzeBtn');
    
    container.innerHTML = '';
    
    if (userSymptoms.length === 0) {
        analyzeBtn.disabled = true;
        return;
    }

    analyzeBtn.disabled = false;
    
    userSymptoms.forEach(symptom => {
        const chip = document.createElement('div');
        chip.className = 'symptom-chip';
        chip.innerHTML = `
            <span>${symptom}</span>
            <button class="remove-chip" onclick="removeSymptom('${symptom}')">×</button>
        `;
        container.appendChild(chip);
    });
}

// Calculate match score with advanced algorithm
function calculateMatchScore(userSymps, diseaseSymps) {
    const userSet = new Set(userSymps.map(s => s.toLowerCase()));
    const diseaseSet = new Set(diseaseSymps.map(s => s.toLowerCase()));
    
    let directMatches = 0;
    let partialMatches = 0;

    userSet.forEach(userSymp => {
        if (diseaseSet.has(userSymp)) {
            directMatches++;
        } else {
            // Check for partial matches (substring matching)
            diseaseSet.forEach(diseaseSymp => {
                const userWords = userSymp.split(' ');
                const diseaseWords = diseaseSymp.split(' ');
                
                userWords.forEach(uw => {
                    diseaseWords.forEach(dw => {
                        if (uw.length > 3 && dw.length > 3) {
                            if (uw.includes(dw) || dw.includes(uw)) {
                                partialMatches += 0.3;
                            }
                        }
                    });
                });
            });
        }
    });

    if (diseaseSet.size === 0) return 0;

    const totalMatch = directMatches + Math.min(partialMatches, directMatches * 0.5);
    let score = (totalMatch / diseaseSet.size) * 100;

    // Boost for multiple direct matches
    if (directMatches >= 5) score = Math.min(score * 1.5, 100);
    else if (directMatches >= 4) score = Math.min(score * 1.4, 100);
    else if (directMatches >= 3) score = Math.min(score * 1.3, 100);
    else if (directMatches >= 2) score = Math.min(score * 1.2, 100);

    // Penalty for very few matches
    if (directMatches === 0 && partialMatches < 1) score *= 0.4;
    else if (directMatches === 1) score *= 0.8;

    return Math.min(Math.round(score), 100);
}

// Determine severity based on disease
function getSeverity(diseaseName) {
    const highSeverity = [
        'heart attack', 'paralysis', 'aids', 'tuberculosis', 'pneumonia',
        'hepatitis', 'brain hemorrhage', 'acute liver failure', 'dengue'
    ];
    const lowSeverity = [
        'common cold', 'acne', 'allergy', 'fungal infection', 'impetigo'
    ];
    
    const nameLower = diseaseName.toLowerCase();
    
    if (highSeverity.some(d => nameLower.includes(d))) return 'High';
    if (lowSeverity.some(d => nameLower.includes(d))) return 'Low';
    return 'Medium';
}

// Analyze symptoms
async function analyzeSymptoms() {
    if (userSymptoms.length === 0) {
        showNotification('Please add at least one symptom', 'warning');
        return;
    }

    // Show loading
    document.getElementById('loading').style.display = 'block';
    document.getElementById('results').style.display = 'none';
    
    // Scroll to loading
    document.getElementById('loading').scrollIntoView({ behavior: 'smooth', block: 'center' });

    // Simulate processing time for better UX
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Calculate matches
    const matches = [];
    
    Object.entries(diseaseDatabase).forEach(([disease, info]) => {
        const score = calculateMatchScore(userSymptoms, info.symptoms);
        
        if (score > 10) {
            matches.push({
                disease: disease,
                confidence: score,
                description: info.description,
                severity: getSeverity(disease),
                advice: info.precautions,
                matchedSymptoms: userSymptoms.filter(us => 
                    info.symptoms.some(ds => 
                        us.toLowerCase() === ds.toLowerCase() || 
                        us.includes(ds) || 
                        ds.includes(us)
                    )
                )
            });
        }
    });

    // Sort by confidence
    matches.sort((a, b) => b.confidence - a.confidence);

    // Get top matches
    let topMatches = matches.slice(0, 6);

    // If no matches found or all scores are very low
    if (topMatches.length === 0 || topMatches[0].confidence < 15) {
        topMatches = [{
            disease: "Unable to Determine Specific Condition",
            confidence: 0,
            description: "Your combination of symptoms doesn't clearly match any specific conditions in our database. This could indicate a rare condition, multiple overlapping issues, or symptoms that require professional medical evaluation to properly diagnose.",
            severity: "Medium",
            advice: [
                "Schedule an appointment with a healthcare professional as soon as possible",
                "Keep a detailed log of all symptoms including when they started and their severity",
                "Note any triggers, patterns, or factors that make symptoms better or worse",
                "Monitor for any worsening or new symptoms",
                "Don't hesitate to seek emergency care if symptoms become severe or concerning",
                "Bring your symptom log to your medical appointment"
            ],
            matchedSymptoms: []
        }];
    }

    // Hide loading
    document.getElementById('loading').style.display = 'none';

    // Display results
    displayResults(topMatches);
}

// Display results
function displayResults(predictions) {
    const resultsContainer = document.getElementById('resultsContainer');
    resultsContainer.innerHTML = '';

    predictions.forEach((pred, index) => {
        const severityClass = pred.severity === 'High' ? 'severity-high' : 
                             pred.severity === 'Medium' ? 'severity-medium' : 'severity-low';
        
        const matchBadge = pred.matchedSymptoms && pred.matchedSymptoms.length > 0 ? 
            `<div style="margin-top: 10px; font-size: 0.9em; color: var(--text-secondary);">
                <i class="fas fa-check-circle" style="color: var(--success);"></i> 
                Matched ${pred.matchedSymptoms.length} of your symptoms
            </div>` : '';

        const card = document.createElement('div');
        card.className = 'result-card';
        card.style.animationDelay = `${index * 0.1}s`;
        card.innerHTML = `
            <div class="result-header">
                <div class="disease-name">
                    ${index === 0 ? '<i class="fas fa-star" style="color: var(--warning); margin-right: 8px;"></i>' : ''}
                    ${pred.disease}
                </div>
                <div class="confidence">
                    ${pred.confidence > 0 ? pred.confidence + '% Match' : 'Unknown'}
                </div>
            </div>
            <div class="severity ${severityClass}">
                <i class="fas fa-exclamation-circle"></i> ${pred.severity} Priority
            </div>
            ${matchBadge}
            <div class="description">${pred.description}</div>
            <div class="advice-section">
                <h4><i class="fas fa-lightbulb"></i> Recommended Actions</h4>
                <ul>
                    ${pred.advice.map(a => `<li>${a}</li>`).join('')}
                </ul>
            </div>
        `;
        resultsContainer.appendChild(card);
    });

    // Display health centers
    displayHealthCenters();

    // Show results and scroll
    document.getElementById('results').style.display = 'block';
    setTimeout(() => {
        document.getElementById('results').scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
}

// Generate health centers based on user location
function displayHealthCenters() {
    const centers = [
        {
            name: "Harare Central Hospital",
            address: "Southerton, Harare",
            phone: "+263 4 251 611",
            hours: "24/7 Emergency",
            specialty: "General & Emergency Care"
        },
        {
            name: "Parirenyatwa Group of Hospitals",
            address: "Mazowe Street, Harare",
            phone: "+263 4 703 631",
            hours: "24/7 Emergency",
            specialty: "Specialized Care & Teaching Hospital"
        },
        {
            name: "Avenues Clinic",
            address: "Baines Avenue, Harare",
            phone: "+263 4 252 555",
            hours: "Mon-Sat: 8AM-6PM",
            specialty: "Outpatient & Primary Care"
        },
        {
            name: "Trauma Centre",
            address: "Enterprise Road, Harare",
            phone: "+263 4 621 555",
            hours: "24/7 Emergency",
            specialty: "Trauma & Orthopedics"
        },
        {
            name: "Borrowdale Trauma Centre",
            address: "Borrowdale Road, Harare",
            phone: "+263 4 885 888",
            hours: "24/7 Emergency",
            specialty: "Emergency & Trauma Care"
        },
        {
            name: "West End Hospital",
            address: "Glenara Avenue, Harare",
            phone: "+263 4 778 055",
            hours: "24/7 Available",
            specialty: "General Medical Care"
        }
    ];

    // Add random distance for realism
    centers.forEach(center => {
        center.distance = (Math.random() * 8 + 0.5).toFixed(1);
    });

    // Sort by distance
    centers.sort((a, b) => parseFloat(a.distance) - parseFloat(b.distance));

    const container = document.getElementById('healthCenters');
    container.innerHTML = '';

    centers.slice(0, 6).forEach(center => {
        const card = document.createElement('div');
        card.className = 'center-card';
        card.innerHTML = `
            <div class="center-name">
                <i class="fas fa-hospital"></i>
                ${center.name}
            </div>
            <div class="center-info">
                <i class="fas fa-map-marker-alt"></i>
                <span>${center.address}</span>
            </div>
            <div class="center-info">
                <i class="fas fa-phone"></i>
                <span>${center.phone}</span>
            </div>
            <div class="center-info">
                <i class="fas fa-clock"></i>
                <span>${center.hours}</span>
            </div>
            <div class="center-info">
                <i class="fas fa-heartbeat"></i>
                <span>${center.specialty}</span>
            </div>
            <div class="center-info">
                <i class="fas fa-car"></i>
                <span>${center.distance} km away</span>
            </div>
        `;
        container.appendChild(card);
    });
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existing = document.querySelector('.notification');
    if (existing) {
        existing.remove();
    }

    const notification = document.createElement('div');
    notification.className = 'notification';
    
    const colors = {
        success: 'var(--success)',
        warning: 'var(--warning)',
        error: 'var(--danger)',
        info: 'var(--blue-primary)'
    };

    const icons = {
        success: 'check-circle',
        warning: 'exclamation-triangle',
        error: 'times-circle',
        info: 'info-circle'
    };

    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--bg-card);
        border: 2px solid ${colors[type]};
        border-radius: 12px;
        padding: 18px 24px;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
        z-index: 10000;
        display: flex;
        align-items: center;
        gap: 12px;
        animation: slideInRight 0.3s ease-out;
        max-width: 400px;
        color: var(--text-primary);
    `;

    notification.innerHTML = `
        <i class="fas fa-${icons[type]}" style="color: ${colors[type]}; font-size: 1.5em;"></i>
        <span style="flex: 1;">${message}</span>
        <i class="fas fa-times" style="cursor: pointer; opacity: 0.7;" onclick="this.parentElement.remove()"></i>
    `;

    document.body.appendChild(notification);

    // Add slide-in animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInRight {
            from { transform: translateX(400px); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
    `;
    document.head.appendChild(style);

    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.style.animation = 'slideOutRight 0.3s ease-out';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// Add slide-out animation
const slideOutStyle = document.createElement('style');
slideOutStyle.textContent = `
    @keyframes slideOutRight {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(400px); opacity: 0; }
    }
`;
document.head.appendChild(slideOutStyle);

// Quick action buttons
function clearAllSymptoms() {
    userSymptoms = [];
    updateSymptomsDisplay();
    document.getElementById('results').style.display = 'none';
    showNotification('All symptoms cleared', 'info');
}

// Keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // Ctrl/Cmd + K to focus search
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        document.getElementById('symptomInput').focus();
    }
    
    // Escape to clear input
    if (e.key === 'Escape') {
        document.getElementById('symptomInput').value = '';
        document.getElementById('suggestions').style.display = 'none';
    }
});

// Add quick action buttons to the symptom input section
window.addEventListener('load', function() {
    const inputSection = document.querySelector('.glass-card');
    const quickActions = document.createElement('div');
    quickActions.style.cssText = `
        display: flex;
        gap: 10px;
        margin-top: 15px;
        flex-wrap: wrap;
    `;
    quickActions.innerHTML = `
        <button onclick="clearAllSymptoms()" style="
            background: var(--bg-secondary);
            border: 1px solid rgba(0, 102, 255, 0.3);
            color: var(--text-primary);
            padding: 10px 20px;
            border-radius: 10px;
            cursor: pointer;
            transition: all 0.3s;
            display: flex;
            align-items: center;
            gap: 8px;
        " onmouseover="this.style.borderColor='var(--blue-primary)'" onmouseout="this.style.borderColor='rgba(0, 102, 255, 0.3)'">
            <i class="fas fa-trash-alt"></i> Clear All
        </button>
        
    `;
    
    const analyzeBtn = document.getElementById('analyzeBtn');
    analyzeBtn.parentNode.insertBefore(quickActions, analyzeBtn);
});

// Voice input feature (if supported)
if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
    window.addEventListener('load', function() {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        const recognition = new SpeechRecognition();
        recognition.continuous = false;
        recognition.interimResults = false;

        const voiceBtn = document.createElement('button');
        voiceBtn.innerHTML = '<i class="fas fa-microphone"></i>';
        voiceBtn.style.cssText = `
            position: absolute;
            right: 130px;
            top: 50%;
            transform: translateY(-50%);
            background: var(--bg-secondary);
            border: 1px solid rgba(0, 102, 255, 0.3);
            color: var(--text-primary);
            padding: 10px 15px;
            border-radius: 10px;
            cursor: pointer;
            transition: all 0.3s;
        `;
        
        voiceBtn.onclick = function() {
            recognition.start();
            voiceBtn.style.color = 'var(--danger)';
            showNotification('Listening... Speak your symptom', 'info');
        };

        recognition.onresult = function(event) {
            const symptom = event.results[0][0].transcript.toLowerCase();
            document.getElementById('symptomInput').value = symptom;
            voiceBtn.style.color = 'var(--text-primary)';
            addSymptom();
        };

        recognition.onerror = function() {
            voiceBtn.style.color = 'var(--text-primary)';
            showNotification('Voice recognition failed', 'error');
        };

        document.querySelector('.input-wrapper').appendChild(voiceBtn);
    });
}

// Analytics tracking (page views, analyses performed)
let analyticsData = {
    pageViews: 0,
    analysesPerformed: 0,
    symptomsAdded: 0,
    lastVisit: null
};

// Load analytics from localStorage
function loadAnalytics() {
    const saved = localStorage.getItem('caremate-analytics');
    if (saved) {
        analyticsData = JSON.parse(saved);
    }
    analyticsData.pageViews++;
    analyticsData.lastVisit = new Date().toISOString();
    saveAnalytics();
}

function saveAnalytics() {
    localStorage.setItem('caremate-analytics', JSON.stringify(analyticsData));
}

// Track analysis
const originalAnalyze = analyzeSymptoms;
analyzeSymptoms = async function() {
    analyticsData.analysesPerformed++;
    saveAnalytics();
    return originalAnalyze();
};

// Track symptom additions
const originalAddSymptom = addSymptom;
addSymptom = function() {
    const result = originalAddSymptom();
    if (result !== false) {
        analyticsData.symptomsAdded++;
        saveAnalytics();
    }
    return result;
};

// Load analytics on page load
window.addEventListener('load', loadAnalytics);

// Service Worker registration for PWA support (optional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        // Uncomment to enable PWA features
        // navigator.serviceWorker.register('/sw.js').then(function(registration) {
        //     console.log('ServiceWorker registered:', registration);
        // }).catch(function(error) {
        //     console.log('ServiceWorker registration failed:', error);
        // });
    });
}

// Add helpful tips on first visit
window.addEventListener('load', function() {
    const hasVisited = localStorage.getItem('caremate-visited');
    if (!hasVisited) {
        setTimeout(() => {
            showNotification('Welcome to CareMate! Start by adding your symptoms above.', 'info');
            localStorage.setItem('caremate-visited', 'true');
        }, 1000);
    }
});

// Scroll animations for better UX
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

window.addEventListener('load', function() {
    document.querySelectorAll('.glass-card, .center-card, .result-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });
});

console.log('✓ CareMate Application Ready');
console.log('💙 Your health companion is here to help!');


// Send chat message
function sendChatMessage() {
    const input = document.getElementById('chatInput');
    const message = input.value.trim();
    
    if (!message) return;
    
    // Add user message to chat
    addMessageToChat(message, 'user');
    input.value = '';
    
    // Show typing indicator
    showTypingIndicator();
    
    // Process message and respond
    setTimeout(() => {
        const response = generateChatResponse(message);
        removeTypingIndicator();
        addMessageToChat(response, 'bot');
    }, 1000 + Math.random() * 1000);
}

// Add message to chat
function addMessageToChat(message, sender) {
    const messagesDiv = document.getElementById('chatMessages');
    const messageEl = document.createElement('div');
    messageEl.className = sender === 'user' ? 'user-message' : 'bot-message';
    
    const avatar = document.createElement('div');
    avatar.className = 'message-avatar';
    avatar.innerHTML = sender === 'user' ? '<i class="fas fa-user"></i>' : '<i class="fas fa-robot"></i>';
    
    const content = document.createElement('div');
    content.className = 'message-content';
    content.innerHTML = `<p>${message.replace(/\n/g, '<br>')}</p>`;
    
    messageEl.appendChild(avatar);
    messageEl.appendChild(content);
    messagesDiv.appendChild(messageEl);
    
    // Scroll to bottom
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
    
    // Store in history
    chatHistory.push({ sender, message, timestamp: new Date() });
}

    
 



//Health-Tip    
const healthTips = [
    "Stay hydrated by drinking at least 8 glasses of water daily.",
    "Wash your hands regularly to prevent the spread of germs.",
    "Get at least 7-8 hours of sleep for optimal health.",
    "Eat a balanced diet rich in fruits and vegetables.",
    "Exercise for at least 30 minutes most days of the week.",
    "Take breaks from screens to rest your eyes.",
    "Manage stress with relaxation techniques like deep breathing.",
    "Schedule regular check-ups with your healthcare provider."
];

function showHealthTip() {
    const tip = healthTips[Math.floor(Math.random() * healthTips.length)];
    document.getElementById('healthTipText').textContent = tip;
}

// ...auto-change for the tips ...

let currentTipIndex = 0;

function showHealthTip() {
    document.getElementById('healthTipText').textContent = healthTips[currentTipIndex];
    currentTipIndex = (currentTipIndex + 1) % healthTips.length;
}

// Call this on page load and set interval to auto-change tips
document.addEventListener('DOMContentLoaded', function() {
    showHealthTip();
    setInterval(showHealthTip, 7000); // Change tip every 7 seconds
});

// ...ends here...

// Call this on page load
document.addEventListener('DOMContentLoaded', showHealthTip);

