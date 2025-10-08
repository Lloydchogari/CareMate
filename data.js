// CareMate Disease Database
const diseaseDatabase = {
    "Fungal infection": {
        symptoms: ["itching", "skin rash", "nodal skin eruptions", "dischromic patches"],
        description: "A fungal infection occurs when fungi invade and overgrow on the skin, causing various skin conditions including ringworm, athlete's foot, and yeast infections.",
        precautions: ["Bath twice daily with antifungal soap", "Use antifungal powder on affected areas", "Keep affected area clean and dry", "Wear loose cotton clothes", "Avoid sharing towels or clothing"]
    },
    "Allergy": {
        symptoms: ["continuous sneezing", "shivering", "chills", "watering from eyes"],
        description: "An allergic reaction occurs when your immune system reacts to a foreign substance such as pollen, pet dander, or certain foods.",
        precautions: ["Identify and avoid allergens", "Apply calamine lotion for skin reactions", "Use antihistamines as directed", "Keep windows closed during high pollen times", "Consult doctor for severe reactions"]
    },
    "GERD": {
        symptoms: ["stomach pain", "acidity", "ulcers on tongue", "vomiting", "cough", "chest pain"],
        description: "Gastroesophageal reflux disease (GERD) is a chronic digestive condition where stomach acid flows back into the esophagus, causing irritation.",
        precautions: ["Avoid fatty and spicy foods", "Don't lie down immediately after eating", "Maintain healthy weight", "Eat smaller meals", "Elevate head while sleeping"]
    },
    "Chronic cholestasis": {
        symptoms: ["itching", "vomiting", "yellowish skin", "nausea", "loss of appetite", "abdominal pain"],
        description: "A condition where bile flow from the liver is reduced or stopped, leading to bile accumulation and liver damage.",
        precautions: ["Take cold baths for itching relief", "Drink plenty of water", "Eat vitamin K rich foods", "Consult hepatologist immediately", "Avoid alcohol completely"]
    },
    "Drug Reaction": {
        symptoms: ["itching", "skin rash", "stomach pain", "burning micturition", "spotting urination"],
        description: "An adverse drug reaction is an unwanted or harmful reaction after taking medication, ranging from mild to severe.",
        precautions: ["Stop the medication immediately", "Consult nearest hospital", "Keep list of medications you're allergic to", "Inform all healthcare providers about reactions", "Carry medical alert card"]
    },
    "Peptic ulcer disease": {
        symptoms: ["vomiting", "loss of appetite", "abdominal pain", "passage of gases", "internal itching"],
        description: "Open sores that develop on the inside lining of your stomach and the upper portion of your small intestine, often caused by H. pylori bacteria.",
        precautions: ["Avoid fatty and spicy foods", "Consume probiotic foods", "Eliminate stress", "Limit alcohol and caffeine", "Take prescribed medications regularly"]
    },
    "AIDS": {
        symptoms: ["muscle wasting", "patches in throat", "high fever", "extra marital contacts"],
        description: "Acquired immunodeficiency syndrome (AIDS) is a chronic, potentially life-threatening condition caused by HIV that damages the immune system.",
        precautions: ["Get tested regularly", "Practice safe sex", "Avoid sharing needles", "Take antiretroviral therapy as prescribed", "Regular medical monitoring"]
    },
    "Diabetes": {
        symptoms: ["fatigue", "weight loss", "restlessness", "lethargy", "irregular sugar level", "blurred vision", "increased appetite", "polyuria"],
        description: "A chronic disease affecting how your body turns food into energy, characterized by high blood sugar levels that can lead to serious complications.",
        precautions: ["Monitor blood sugar levels daily", "Maintain balanced diet", "Exercise regularly", "Take medications as prescribed", "Regular check-ups with doctor"]
    },
    "Gastroenteritis": {
        symptoms: ["vomiting", "sunken eyes", "dehydration", "diarrhea"],
        description: "An intestinal infection marked by diarrhea, cramps, nausea, vomiting and fever, commonly called stomach flu.",
        precautions: ["Stay hydrated with oral rehydration solution", "Rest adequately", "Avoid solid foods initially", "Eat bland foods gradually", "Wash hands frequently"]
    },
    "Bronchial Asthma": {
        symptoms: ["fatigue", "cough", "high fever", "breathlessness", "family history", "mucoid sputum"],
        description: "A condition in which your airways narrow and swell and may produce extra mucus, making breathing difficult and triggering coughing.",
        precautions: ["Use prescribed inhalers regularly", "Avoid triggers (dust, smoke, pollen)", "Keep rescue inhaler accessible", "Practice breathing exercises", "Monitor peak flow regularly"]
    },
    "Hypertension": {
        symptoms: ["headache", "chest pain", "dizziness", "loss of balance", "lack of concentration"],
        description: "High blood pressure is a common condition where the force of blood against artery walls is too high, increasing risk of heart disease.",
        precautions: ["Reduce salt intake", "Exercise regularly", "Maintain healthy weight", "Limit alcohol", "Monitor blood pressure daily"]
    },
    "Migraine": {
        symptoms: ["acidity", "indigestion", "headache", "blurred vision", "excessive hunger", "stiff neck", "depression", "visual disturbances"],
        description: "A neurological condition characterized by intense, debilitating headaches often accompanied by nausea, vomiting, and sensitivity to light and sound.",
        precautions: ["Identify and avoid triggers", "Maintain regular sleep schedule", "Stay hydrated", "Practice stress management", "Keep headache diary"]
    },
    "Cervical spondylosis": {
        symptoms: ["back pain", "weakness in limbs", "neck pain", "dizziness", "loss of balance"],
        description: "Age-related wear and tear affecting the spinal disks in your neck, causing neck pain, stiffness, and sometimes nerve compression.",
        precautions: ["Maintain proper posture", "Use ergonomic furniture", "Do neck exercises", "Apply hot/cold therapy", "Physical therapy sessions"]
    },
    "Paralysis (brain hemorrhage)": {
        symptoms: ["vomiting", "headache", "weakness of one body side", "altered sensorium"],
        description: "Loss of muscle function in part of your body, often caused by bleeding in or around the brain requiring immediate medical attention.",
        precautions: ["Call emergency immediately", "Keep patient calm", "Note time of symptom onset", "Don't give food or water", "Begin rehabilitation early"]
    },
    "Jaundice": {
        symptoms: ["itching", "vomiting", "fatigue", "weight loss", "high fever", "yellowish skin", "dark urine", "abdominal pain"],
        description: "A condition where skin and whites of the eyes turn yellow due to high bilirubin levels, indicating liver or blood problems.",
        precautions: ["Drink plenty of water", "Avoid alcohol completely", "Eat light, nutritious diet", "Rest adequately", "Monitor for complications"]
    },
    "Malaria": {
        symptoms: ["chills", "vomiting", "high fever", "sweating", "headache", "nausea", "diarrhea", "muscle pain"],
        description: "A life-threatening disease caused by parasites transmitted through mosquito bites, common in tropical regions.",
        precautions: ["Take antimalarial medications", "Use mosquito nets", "Apply insect repellent", "Wear protective clothing", "Seek immediate treatment"]
    },
    "Chicken pox": {
        symptoms: ["itching", "skin rash", "fatigue", "lethargy", "high fever", "headache", "loss of appetite", "mild fever"],
        description: "A highly contagious viral infection causing an itchy, blister-like rash on the skin, common in children.",
        precautions: ["Isolate patient", "Apply calamine lotion", "Keep nails trimmed", "Use antihistamines for itching", "Stay hydrated"]
    },
    "Dengue": {
        symptoms: ["skin rash", "chills", "joint pain", "vomiting", "fatigue", "high fever", "headache", "nausea", "loss of appetite", "pain behind eyes", "back pain", "muscle pain", "red spots over body"],
        description: "A mosquito-borne viral infection causing flu-like illness and potentially lethal complications including hemorrhagic fever.",
        precautions: ["Drink plenty of fluids", "Get adequate rest", "Monitor platelet count", "Avoid aspirin and NSAIDs", "Seek immediate medical care"]
    },
    "Typhoid": {
        symptoms: ["chills", "vomiting", "fatigue", "high fever", "headache", "nausea", "constipation", "abdominal pain", "diarrhea", "toxic look", "belly pain"],
        description: "A bacterial infection that can lead to high fever, diarrhea, and vomiting, caused by contaminated food or water.",
        precautions: ["Complete antibiotic course", "Drink only safe water", "Eat thoroughly cooked food", "Maintain good hygiene", "Get vaccinated"]
    },
    "Hepatitis A": {
        symptoms: ["joint pain", "vomiting", "yellowish skin", "dark urine", "nausea", "loss of appetite", "abdominal pain", "diarrhea", "mild fever", "yellowing of eyes", "muscle pain"],
        description: "A highly contagious liver infection caused by the hepatitis A virus, usually contracted from contaminated food or water.",
        precautions: ["Get vaccinated", "Wash hands thoroughly", "Avoid contaminated food/water", "Rest adequately", "Avoid alcohol"]
    },
    "Hepatitis B": {
        symptoms: ["itching", "fatigue", "lethargy", "yellowish skin", "dark urine", "loss of appetite", "abdominal pain", "yellow urine", "yellowing of eyes", "malaise", "receiving blood transfusion", "receiving unsterile injections"],
        description: "A serious liver infection caused by the hepatitis B virus that can become chronic and lead to liver failure or cancer.",
        precautions: ["Get vaccinated", "Practice safe sex", "Don't share needles", "Screen blood donations", "Regular liver monitoring"]
    },
    "Hepatitis C": {
        symptoms: ["fatigue", "yellowish skin", "nausea", "loss of appetite", "yellowing of eyes", "family history"],
        description: "A viral infection causing liver inflammation, sometimes leading to serious liver damage including cirrhosis and liver cancer.",
        precautions: ["Avoid sharing needles", "Practice safe sex", "Screen blood products", "Take antiviral medications", "Avoid alcohol"]
    },
    "Hepatitis D": {
        symptoms: ["joint pain", "vomiting", "fatigue", "high fever", "yellowish skin", "dark urine", "nausea", "loss of appetite", "abdominal pain", "yellowing of eyes"],
        description: "A liver infection caused by the hepatitis D virus, which only occurs in people infected with hepatitis B.",
        precautions: ["Get hepatitis B vaccination", "Follow hepatitis B precautions", "Regular medical monitoring", "Avoid alcohol", "Antiviral therapy as needed"]
    },
    "Hepatitis E": {
        symptoms: ["joint pain", "vomiting", "fatigue", "high fever", "yellowish skin", "dark urine", "nausea", "loss of appetite", "abdominal pain", "yellowing of eyes", "acute liver failure", "coma", "stomach bleeding"],
        description: "A liver disease caused by the hepatitis E virus, usually spread through contaminated water, can be severe in pregnant women.",
        precautions: ["Drink safe water", "Practice good hygiene", "Avoid raw shellfish", "Rest adequately", "Monitor liver function"]
    },
    "Alcoholic hepatitis": {
        symptoms: ["vomiting", "yellowish skin", "abdominal pain", "swelling of stomach", "distention of abdomen", "history of alcohol consumption", "fluid overload"],
        description: "Liver inflammation caused by drinking too much alcohol, potentially leading to permanent liver damage and failure.",
        precautions: ["Stop alcohol immediately", "Nutritious diet", "Vitamin supplements", "Medical supervision", "Support groups"]
    },
    "Tuberculosis": {
        symptoms: ["chills", "vomiting", "fatigue", "weight loss", "cough", "high fever", "breathlessness", "sweating", "loss of appetite", "mild fever", "yellowing of eyes", "swelled lymph nodes", "malaise", "phlegm", "chest pain", "blood in sputum"],
        description: "A potentially serious infectious disease that mainly affects the lungs, spread through the air when infected person coughs or sneezes.",
        precautions: ["Complete 6-9 month medication", "Cover mouth when coughing", "Isolate during infectious period", "Improve ventilation", "Contact tracing"]
    },
    "Common Cold": {
        symptoms: ["continuous sneezing", "chills", "fatigue", "cough", "high fever", "headache", "swelled lymph nodes", "malaise", "phlegm", "throat irritation", "redness of eyes", "sinus pressure", "runny nose", "congestion", "chest pain", "loss of smell", "muscle pain"],
        description: "A viral infection of your upper respiratory tract, typically harmless but can be uncomfortable, usually resolves in 7-10 days.",
        precautions: ["Get plenty of rest", "Stay hydrated", "Gargle with salt water", "Use humidifier", "Take vitamin C"]
    },
    "Pneumonia": {
        symptoms: ["chills", "fatigue", "cough", "high fever", "breathlessness", "sweating", "malaise", "phlegm", "chest pain", "fast heart rate", "rusty sputum"],
        description: "An infection that inflames air sacs in one or both lungs, which may fill with fluid, can be life-threatening.",
        precautions: ["Complete antibiotic course", "Rest adequately", "Stay hydrated", "Use prescribed inhalers", "Get vaccinated"]
    },
    "Dimorphic hemorrhoids (piles)": {
        symptoms: ["constipation", "pain during bowel movements", "pain in anal region", "bloody stool", "irritation in anus"],
        description: "Swollen veins in the lowest part of the rectum and anus, causing discomfort, pain, and bleeding during bowel movements.",
        precautions: ["High fiber diet", "Drink plenty of water", "Avoid straining", "Sitz baths", "Regular exercise"]
    },
    "Heart attack": {
        symptoms: ["vomiting", "breathlessness", "sweating", "chest pain"],
        description: "A medical emergency where blood flow to the heart is blocked, potentially damaging or destroying part of the heart muscle.",
        precautions: ["Call emergency immediately", "Chew aspirin if not allergic", "Stay calm and rest", "Cardiac rehabilitation", "Lifestyle modifications"]
    },
    "Varicose veins": {
        symptoms: ["fatigue", "cramps", "bruising", "obesity", "swollen legs", "swollen blood vessels", "prominent veins on calf"],
        description: "Enlarged, twisted veins visible just under the skin surface, usually in legs, caused by weak or damaged vein walls.",
        precautions: ["Elevate legs regularly", "Wear compression stockings", "Exercise regularly", "Avoid prolonged standing", "Maintain healthy weight"]
    },
    "Hypothyroidism": {
        symptoms: ["fatigue", "weight gain", "cold hands and feet", "mood swings", "lethargy", "dizziness", "puffy face and eyes", "enlarged thyroid", "brittle nails", "swollen extremities", "depression", "irritability", "abnormal menstruation"],
        description: "A condition where the thyroid gland doesn't produce enough thyroid hormones, slowing down metabolism and affecting multiple body systems.",
        precautions: ["Take thyroid medication daily", "Regular thyroid monitoring", "Balanced diet with iodine", "Regular exercise", "Stress management"]
    },
    "Hyperthyroidism": {
        symptoms: ["fatigue", "mood swings", "weight loss", "restlessness", "sweating", "diarrhea", "fast heart rate", "excessive hunger", "muscle weakness", "irritability", "enlarged thyroid", "swollen extremities", "abnormal menstruation"],
        description: "A condition where the thyroid gland produces too much thyroid hormone, speeding up metabolism and causing various symptoms.",
        precautions: ["Take prescribed medications", "Regular monitoring", "Avoid excess iodine", "Manage stress", "Consider radioactive iodine therapy"]
    },
    "Hypoglycemia": {
        symptoms: ["vomiting", "fatigue", "anxiety", "sweating", "headache", "nausea", "blurred vision", "fast heart rate", "slurred speech", "palpitations"],
        description: "A condition characterized by abnormally low blood sugar levels, common in diabetes treatment, can be dangerous if severe.",
        precautions: ["Consume fast-acting sugar", "Carry glucose tablets", "Eat regular meals", "Monitor blood sugar", "Adjust medications with doctor"]
    },
    "Osteoarthritis": {
        symptoms: ["joint pain", "neck pain", "knee pain", "hip joint pain", "swelling joints", "painful walking"],
        description: "The most common form of arthritis, occurring when protective cartilage cushioning bones wears down over time.",
        precautions: ["Maintain healthy weight", "Regular low-impact exercise", "Physical therapy", "Hot/cold therapy", "Pain management"]
    },
    "Arthritis": {
        symptoms: ["muscle weakness", "stiff neck", "swelling joints", "movement stiffness", "painful walking"],
        description: "Inflammation of one or more joints, causing pain and stiffness that can worsen with age, includes many types.",
        precautions: ["Regular exercise", "Weight management", "Anti-inflammatory diet", "Physical therapy", "Medication as prescribed"]
    },
    "(vertigo) Paroxysmal Positional Vertigo": {
        symptoms: ["vomiting", "headache", "nausea", "spinning movements", "loss of balance", "unsteadiness"],
        description: "A condition causing brief episodes of mild to intense dizziness, triggered by specific changes in head position.",
        precautions: ["Canalith repositioning exercises", "Avoid sudden head movements", "Safety measures at home", "Stay hydrated", "Vestibular therapy"]
    },
    "Acne": {
        symptoms: ["skin rash", "pus filled pimples", "blackheads", "scurring"],
        description: "A skin condition occurring when hair follicles become plugged with oil and dead skin cells, common during adolescence.",
        precautions: ["Gentle cleansing twice daily", "Don't pick or squeeze", "Oil-free cosmetics", "Healthy diet", "Prescribed medications"]
    },
    "Urinary tract infection": {
        symptoms: ["burning micturition", "spotting urination", "foul smell of urine", "continuous feel of urine"],
        description: "An infection in any part of the urinary system, most commonly affecting the bladder and urethra, more common in women.",
        precautions: ["Drink plenty of water", "Urinate frequently", "Wipe front to back", "Empty bladder after intercourse", "Complete antibiotic course"]
    },
    "Psoriasis": {
        symptoms: ["skin rash", "joint pain", "skin peeling", "silver like dusting", "small dents in nails", "inflammatory nails"],
        description: "A chronic autoimmune skin disease causing red, itchy scaly patches, most commonly on knees, elbows, trunk and scalp.",
        precautions: ["Moisturize regularly", "Avoid triggers", "Prescribed topical treatments", "Phototherapy if needed", "Stress management"]
    },
    "Impetigo": {
        symptoms: ["skin rash", "high fever", "blister", "red sore around nose", "yellow crust ooze"],
        description: "A highly contagious bacterial skin infection causing red sores that rupture, ooze, and develop honey-colored crusts.",
        precautions: ["Keep area clean", "Complete antibiotic course", "Don't touch sores", "Separate towels and linens", "Good hand hygiene"]
    }
};

// Extract all unique symptoms
const allSymptoms = new Set();
Object.values(diseaseDatabase).forEach(disease => {
    disease.symptoms.forEach(symptom => {
        allSymptoms.add(symptom.toLowerCase());
    });
});

console.log(`✓ CareMate Database loaded: ${Object.keys(diseaseDatabase).length} conditions, ${allSymptoms.size} symptoms`);