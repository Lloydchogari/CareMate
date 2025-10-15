// CareMate Application Logic - FINAL FIXED VERSION
let userSymptoms = [];
let currentTheme = 'dark';

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
    console.log('=== CareMate Initializing ===');
    console.log('Database loaded:', typeof diseaseDatabase !== 'undefined');
    
    if (typeof diseaseDatabase !== 'undefined') {
        console.log('Total diseases:', Object.keys(diseaseDatabase).length);
        console.log('Total symptoms:', typeof allSymptoms !== 'undefined' ? allSymptoms.size : 'Not loaded');
    }
    
    createParticles();
    loadTheme();
    showHealthTip(); // Initialize health tips
    setInterval(showHealthTip, 4000); // Auto-rotate tips
    
    // Welcome message for first-time visitors
    setTimeout(() => {
        const hasVisited = localStorage.getItem('caremate-visited');
        if (!hasVisited) {
            showNotification('Welcome to CareMate! Start by adding your symptoms above.', 'info');
            localStorage.setItem('caremate-visited', 'true');
        }
    }, 1000);
});

// Create animated background particles
function createParticles() {
    const bgAnimation = document.getElementById('bgAnimation');
    if (!bgAnimation) return;
    
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
    if (!icon || !text) return;
    
    if (currentTheme === 'dark') {
        icon.className = 'fas fa-moon';
        text.textContent = 'Dark';
    } else {
        icon.className = 'fas fa-sun';
        text.textContent = 'Light';
    }
}

// Auto-complete suggestions
const symptomInput = document.getElementById('symptomInput');
if (symptomInput) {
    symptomInput.addEventListener('input', function(e) {
        const input = e.target.value.toLowerCase().trim();
        const suggestionsDiv = document.getElementById('suggestions');
        if (!suggestionsDiv) return;

        if (input.length < 2) {
            suggestionsDiv.style.display = 'none';
            return;
        }

        if (typeof allSymptoms === 'undefined') return;

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

    // Enter key support
    symptomInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addSymptom();
        }
    });
}

// Close suggestions when clicking outside
document.addEventListener('click', function(e) {
    if (!e.target.closest('.input-wrapper')) {
        const suggestionsDiv = document.getElementById('suggestions');
        if (suggestionsDiv) {
            suggestionsDiv.style.display = 'none';
        }
    }
});

// Select suggestion
function selectSuggestion(symptom) {
    const input = document.getElementById('symptomInput');
    if (input) input.value = symptom;
    
    const suggestionsDiv = document.getElementById('suggestions');
    if (suggestionsDiv) suggestionsDiv.style.display = 'none';
    
    addSymptom();
}

// Add symptom - FIXED
function addSymptom() {
    const input = document.getElementById('symptomInput');
    if (!input) return;
    
    const symptom = input.value.trim().toLowerCase();
    
    console.log('➕ Adding symptom:', symptom);
    
    if (!symptom) return;

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
    const isInDatabase = typeof allSymptoms !== 'undefined' && allSymptoms.has(symptom);
    
    if (!isInDatabase) {
        console.log('⚠️ Symptom not in database, but adding anyway');
        showExternalResourceOption(symptom);
    }

    userSymptoms.push(symptom);
    console.log('✓ Current symptoms:', userSymptoms);
    
    updateSymptomsDisplay();
    input.value = '';
    
    const suggestionsDiv = document.getElementById('suggestions');
    if (suggestionsDiv) suggestionsDiv.style.display = 'none';
    
    const resultsDiv = document.getElementById('results');
    if (resultsDiv) resultsDiv.style.display = 'none';
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
                "${symptom}" is not in our current database. Would you like to learn more from trusted medical sources?
            </p>
            <div style="display: flex; gap: 10px; flex-direction: column;">
                <a href="${medicalResources.mayoclinic}${encodeURIComponent(symptom)}" target="_blank" 
                   style="padding: 12px; background: var(--blue-primary); color: white; text-decoration: none; border-radius: 10px;">
                    <i class="fas fa-external-link-alt"></i> Mayo Clinic
                </a>
                <a href="${medicalResources.webmd}${encodeURIComponent(symptom)}" target="_blank" 
                   style="padding: 12px; background: var(--blue-primary); color: white; text-decoration: none; border-radius: 10px;">
                    <i class="fas fa-external-link-alt"></i> WebMD
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
    setTimeout(() => {
        if (notification.parentElement) notification.remove();
    }, 30000);
}

// Remove symptom
function removeSymptom(symptom) {
    console.log('➖ Removing symptom:', symptom);
    userSymptoms = userSymptoms.filter(s => s !== symptom);
    console.log('✓ Remaining:', userSymptoms);
    
    updateSymptomsDisplay();
    
    if (userSymptoms.length === 0) {
        const resultsDiv = document.getElementById('results');
        if (resultsDiv) resultsDiv.style.display = 'none';
    }
}

// Update symptoms display
function updateSymptomsDisplay() {
    const container = document.getElementById('symptomsContainer');
    const analyzeBtn = document.getElementById('analyzeBtn');
    
    if (!container) return;
    
    container.innerHTML = '';
    
    if (userSymptoms.length === 0) {
        if (analyzeBtn) analyzeBtn.disabled = true;
        return;
    }

    if (analyzeBtn) analyzeBtn.disabled = false;
    
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

// Calculate match score - OPTIMIZED
function calculateMatchScore(userSymps, diseaseSymps) {
    let exactMatches = 0;
    let partialMatches = 0;
    
    userSymps.forEach(userSymptom => {
        const userLower = userSymptom.toLowerCase().trim();
        
        diseaseSymps.forEach(diseaseSymptom => {
            const diseaseLower = diseaseSymptom.toLowerCase().trim();
            
            // Exact match
            if (userLower === diseaseLower) {
                exactMatches++;
            }
            // Contains match (for multi-word symptoms)
            else if (userLower.length > 3 && diseaseLower.length > 3) {
                if (userLower.includes(diseaseLower) || diseaseLower.includes(userLower)) {
                    partialMatches += 0.6;
                } else {
                    // Word-level matching
                    const userWords = userLower.split(/[\s-]+/);
                    const diseaseWords = diseaseLower.split(/[\s-]+/);
                    
                    userWords.forEach(uw => {
                        if (uw.length > 2) {
                            diseaseWords.forEach(dw => {
                                if (dw.length > 2 && (uw === dw || uw.includes(dw) || dw.includes(uw))) {
                                    partialMatches += 0.3;
                                }
                            });
                        }
                    });
                }
            }
        });
    });
    
    if (exactMatches === 0 && partialMatches === 0) return 0;
    
    // Calculate score with boost for exact matches
    const totalMatches = exactMatches + partialMatches;
    let score = (totalMatches / diseaseSymps.length) * 100;
    
    // Apply multiplier for multiple exact matches
    if (exactMatches >= 4) score *= 2.0;
    else if (exactMatches >= 3) score *= 1.7;
    else if (exactMatches >= 2) score *= 1.5;
    else if (exactMatches >= 1) score *= 1.3;
    
    return Math.min(Math.round(score), 100);
}

// Determine severity
function getSeverity(diseaseName) {
    const highSeverity = ['heart attack', 'paralysis', 'aids', 'tuberculosis', 'pneumonia', 'hepatitis', 'dengue', 'meningitis', 'appendicitis', 'stroke'];
    const lowSeverity = ['common cold', 'acne', 'allergy', 'fungal infection', 'athlete', 'conjunctivitis'];
    
    const nameLower = diseaseName.toLowerCase();
    
    if (highSeverity.some(d => nameLower.includes(d))) return 'High';
    if (lowSeverity.some(d => nameLower.includes(d))) return 'Low';
    return 'Medium';
}

// Analyze symptoms - MAIN FUNCTION
async function analyzeSymptoms() {
    console.log('\n🔍 === STARTING ANALYSIS ===');
    console.log('User symptoms:', userSymptoms);
    
    if (userSymptoms.length === 0) {
        showNotification('Please add at least one symptom', 'warning');
        return;
    }

    if (typeof diseaseDatabase === 'undefined') {
        showNotification('Error: Disease database not loaded', 'error');
        return;
    }

    // Show loading
    const loadingDiv = document.getElementById('loading');
    const resultsDiv = document.getElementById('results');
    
    if (loadingDiv) loadingDiv.style.display = 'block';
    if (resultsDiv) resultsDiv.style.display = 'none';
    
    if (loadingDiv) {
        loadingDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    // Simulate processing
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Calculate matches
    const matches = [];
    
    console.log('Checking', Object.keys(diseaseDatabase).length, 'diseases...\n');
    
    Object.entries(diseaseDatabase).forEach(([diseaseName, diseaseInfo]) => {
        const score = calculateMatchScore(userSymptoms, diseaseInfo.symptoms);
        
        if (score > 0) {
            // Find matched symptoms
            const matchedSymptoms = userSymptoms.filter(us => {
                const userLower = us.toLowerCase().trim();
                return diseaseInfo.symptoms.some(ds => {
                    const diseaseLower = ds.toLowerCase().trim();
                    return userLower === diseaseLower || 
                           userLower.includes(diseaseLower) || 
                           diseaseLower.includes(userLower);
                });
            });
            
            matches.push({
                disease: diseaseName,
                confidence: score,
                description: diseaseInfo.description,
                severity: getSeverity(diseaseName),
                advice: diseaseInfo.precautions,
                matchedSymptoms: matchedSymptoms
            });
            
            console.log(`✓ ${diseaseName}: ${score}% (${matchedSymptoms.length} matched)`);
        }
    });

    console.log('\n📊 Total matches found:', matches.length);

    // Sort by confidence
    matches.sort((a, b) => b.confidence - a.confidence);

    // Get top matches
    let topMatches = matches.slice(0, 6);

    if (topMatches.length === 0) {
        console.log('❌ No matches - showing default message');
        topMatches = [{
            disease: "Unable to Determine Specific Condition",
            confidence: 0,
            description: "Your symptoms don't clearly match any conditions in our database. This could indicate a rare condition or symptoms requiring professional evaluation.",
            severity: "Medium",
            advice: [
                "Schedule an appointment with a healthcare professional as soon as possible",
                "Keep a detailed log of all symptoms including when they started",
                "Note any triggers, patterns, or changes in symptoms",
                "Monitor for any worsening or new symptoms",
                "Seek emergency care if symptoms become severe"
            ],
            matchedSymptoms: []
        }];
    } else {
        console.log('✅ Top match:', topMatches[0].disease, '-', topMatches[0].confidence + '%');
    }

    // Hide loading
    if (loadingDiv) loadingDiv.style.display = 'none';

    // Display results
    displayResults(topMatches);
}

// Display results
function displayResults(predictions) {
    console.log('📋 Displaying', predictions.length, 'results');
    
    const resultsContainer = document.getElementById('resultsContainer');
    if (!resultsContainer) return;
    
    resultsContainer.innerHTML = '';

    predictions.forEach((pred, index) => {
        const severityClass = pred.severity === 'High' ? 'severity-high' : 
                             pred.severity === 'Medium' ? 'severity-medium' : 'severity-low';
        
        const confidenceBadge = pred.confidence > 0 ? 
            `<div style="margin-top: 10px; font-size: 0.9em; color: var(--text-secondary);">
                <i class="fas fa-chart-bar" style="color: var(--blue-primary);"></i> 
                Confidence: ${pred.confidence}%
            </div>` : '';
        
        const matchBadge = pred.matchedSymptoms && pred.matchedSymptoms.length > 0 ? 
            `<div style="margin-top: 10px; font-size: 0.9em; color: var(--text-secondary);">
                <i class="fas fa-check-circle" style="color: var(--success);"></i> 
                Matched ${pred.matchedSymptoms.length} symptom(s): <strong>${pred.matchedSymptoms.join(', ')}</strong>
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
            </div>
            <div class="severity ${severityClass}">
                <i class="fas fa-exclamation-circle"></i> ${pred.severity} Priority
            </div>
            ${confidenceBadge}
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

    // Show results
    const resultsDiv = document.getElementById('results');
    if (resultsDiv) {
        resultsDiv.style.display = 'block';
        setTimeout(() => {
            resultsDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
    }
}

// Display health centers
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
            specialty: "Specialized Care"
        },
        {
            name: "Avenues Clinic",
            address: "Baines Avenue, Harare",
            phone: "+263 4 252 555",
            hours: "Mon-Sat: 8AM-6PM",
            specialty: "Primary Care"
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
            specialty: "Emergency Care"
        },
        {
            name: "West End Hospital",
            address: "Glenara Avenue, Harare",
            phone: "+263 4 778 055",
            hours: "24/7 Available",
            specialty: "General Medical Care"
        }
    ];

    const container = document.getElementById('healthCenters');
    if (!container) return;
    
    container.innerHTML = '';

    centers.forEach(center => {
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
        `;
        container.appendChild(card);
    });
}

// Notification system
function showNotification(message, type = 'info') {
    const existing = document.querySelector('.notification');
    if (existing) existing.remove();

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
        position: fixed; top: 20px; right: 20px;
        background: var(--bg-card);
        border: 2px solid ${colors[type]};
        border-radius: 12px;
        padding: 18px 24px;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
        z-index: 10000;
        display: flex;
        align-items: center;
        gap: 12px;
        max-width: 400px;
        color: var(--text-primary);
    `;

    notification.innerHTML = `
        <i class="fas fa-${icons[type]}" style="color: ${colors[type]}; font-size: 1.5em;"></i>
        <span style="flex: 1;">${message}</span>
        <i class="fas fa-times" style="cursor: pointer; opacity: 0.7;" onclick="this.parentElement.remove()"></i>
    `;

    document.body.appendChild(notification);
    setTimeout(() => notification.remove(), 5000);
}

// Clear all symptoms
function clearAllSymptoms() {
    userSymptoms = [];
    updateSymptomsDisplay();
    const resultsDiv = document.getElementById('results');
    if (resultsDiv) resultsDiv.style.display = 'none';
    showNotification('All symptoms cleared', 'info');
}

// Health Tips
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

let currentTipIndex = 0;

function showHealthTip() {
    const tipElement = document.getElementById('healthTipText');
    if (tipElement) {
        tipElement.textContent = healthTips[currentTipIndex];
        currentTipIndex = (currentTipIndex + 1) % healthTips.length;
    }
}

// Keyboard shortcuts
document.addEventListener('keydown', function(e) {
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        const input = document.getElementById('symptomInput');
        if (input) input.focus();
    }
    
    if (e.key === 'Escape') {
        const input = document.getElementById('symptomInput');
        if (input) input.value = '';
        const suggestionsDiv = document.getElementById('suggestions');
        if (suggestionsDiv) suggestionsDiv.style.display = 'none';
    }
});

// Remove old event listeners and functions that might conflict
window.initializeStats = undefined;

console.log('✅ CareMate Application Ready - FINAL VERSION');
console.log('💙 Database loaded:', typeof diseaseDatabase !== 'undefined' ? 'YES' : 'NO');
console.log('📝 If you see errors about initializeStats, delete your old app.js completely and use this new one');