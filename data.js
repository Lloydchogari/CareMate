// CareMate Disease Database - Comprehensive Version
const diseaseDatabase = {
    "Fungal infection": {
        symptoms: ["itching", "skin rash", "nodal skin eruptions", "dischromic patches", "redness", "burning sensation", "flaky skin", "cracked skin", "skin discoloration", "numbness in affected area", "tingling sensation"],
        description: "A fungal infection occurs when fungi invade and overgrow on the skin, causing various skin conditions including ringworm, athlete's foot, and yeast infections.",
        precautions: ["Bath twice daily with antifungal soap", "Use antifungal powder on affected areas", "Keep affected area clean and dry", "Wear loose cotton clothes", "Avoid sharing towels or clothing"]
    },
    "Allergy": {
        symptoms: ["continuous sneezing", "shivering", "chills", "watering from eyes", "runny nose", "itchy eyes", "itchy throat", "nasal congestion", "wheezing", "shortness of breath", "skin hives", "swelling of face", "swelling of lips", "throat tightness", "coughing"],
        description: "An allergic reaction occurs when your immune system reacts to a foreign substance such as pollen, pet dander, or certain foods.",
        precautions: ["Identify and avoid allergens", "Apply calamine lotion for skin reactions", "Use antihistamines as directed", "Keep windows closed during high pollen times", "Consult doctor for severe reactions"]
    },
    "GERD": {
        symptoms: ["stomach pain", "acidity", "ulcers on tongue", "vomiting", "cough", "chest pain", "heartburn", "burning sensation in throat", "difficulty swallowing", "regurgitation", "sour taste in mouth", "nausea", "bloating", "burping", "hoarseness"],
        description: "Gastroesophageal reflux disease (GERD) is a chronic digestive condition where stomach acid flows back into the esophagus, causing irritation.",
        precautions: ["Avoid fatty and spicy foods", "Don't lie down immediately after eating", "Maintain healthy weight", "Eat smaller meals", "Elevate head while sleeping"]
    },
    "Chronic cholestasis": {
        symptoms: ["itching", "vomiting", "yellowish skin", "nausea", "loss of appetite", "abdominal pain", "dark urine", "pale stool", "fatigue", "weight loss", "swollen abdomen", "easy bruising", "bone pain", "night sweats"],
        description: "A condition where bile flow from the liver is reduced or stopped, leading to bile accumulation and liver damage.",
        precautions: ["Take cold baths for itching relief", "Drink plenty of water", "Eat vitamin K rich foods", "Consult hepatologist immediately", "Avoid alcohol completely"]
    },
    "Drug Reaction": {
        symptoms: ["itching", "skin rash", "stomach pain", "burning micturition", "spotting urination", "hives", "swelling", "difficulty breathing", "rapid heartbeat", "dizziness", "nausea", "vomiting", "fever", "joint pain", "facial swelling"],
        description: "An adverse drug reaction is an unwanted or harmful reaction after taking medication, ranging from mild to severe.",
        precautions: ["Stop the medication immediately", "Consult nearest hospital", "Keep list of medications you're allergic to", "Inform all healthcare providers about reactions", "Carry medical alert card"]
    },
    "Peptic ulcer disease": {
        symptoms: ["vomiting", "loss of appetite", "abdominal pain", "passage of gases", "internal itching", "heartburn", "nausea", "bloating", "belching", "dark or bloody stools", "weight loss", "back pain", "fatigue", "indigestion"],
        description: "Open sores that develop on the inside lining of your stomach and the upper portion of your small intestine, often caused by H. pylori bacteria.",
        precautions: ["Avoid fatty and spicy foods", "Consume probiotic foods", "Eliminate stress", "Limit alcohol and caffeine", "Take prescribed medications regularly"]
    },
    "AIDS": {
        symptoms: ["muscle wasting", "patches in throat", "high fever", "extra marital contacts", "fatigue", "weight loss", "night sweats", "swollen lymph nodes", "chronic diarrhea", "white spots in mouth", "persistent cough", "shortness of breath", "skin rashes", "memory loss", "recurring infections"],
        description: "Acquired immunodeficiency syndrome (AIDS) is a chronic, potentially life-threatening condition caused by HIV that damages the immune system.",
        precautions: ["Get tested regularly", "Practice safe sex", "Avoid sharing needles", "Take antiretroviral therapy as prescribed", "Regular medical monitoring"]
    },
    "Diabetes": {
        symptoms: ["fatigue", "weight loss", "restlessness", "lethargy", "irregular sugar level", "blurred vision", "increased appetite", "polyuria", "excessive thirst", "slow healing wounds", "tingling in hands", "tingling in feet", "numbness in extremities", "frequent infections", "dry skin", "irritability"],
        description: "A chronic disease affecting how your body turns food into energy, characterized by high blood sugar levels that can lead to serious complications.",
        precautions: ["Monitor blood sugar levels daily", "Maintain balanced diet", "Exercise regularly", "Take medications as prescribed", "Regular check-ups with doctor"]
    },
    "Gastroenteritis": {
        symptoms: ["vomiting", "sunken eyes", "dehydration", "diarrhea", "abdominal cramps", "nausea", "fever", "chills", "muscle aches", "headache", "loss of appetite", "weakness", "dry mouth", "reduced urination"],
        description: "An intestinal infection marked by diarrhea, cramps, nausea, vomiting and fever, commonly called stomach flu.",
        precautions: ["Stay hydrated with oral rehydration solution", "Rest adequately", "Avoid solid foods initially", "Eat bland foods gradually", "Wash hands frequently"]
    },
    "Bronchial Asthma": {
        symptoms: ["fatigue", "cough", "high fever", "breathlessness", "family history", "mucoid sputum", "wheezing", "chest tightness", "shortness of breath", "rapid breathing", "difficulty sleeping", "anxiety", "blue lips", "sweating", "difficulty speaking"],
        description: "A condition in which your airways narrow and swell and may produce extra mucus, making breathing difficult and triggering coughing.",
        precautions: ["Use prescribed inhalers regularly", "Avoid triggers (dust, smoke, pollen)", "Keep rescue inhaler accessible", "Practice breathing exercises", "Monitor peak flow regularly"]
    },
    "Hypertension": {
        symptoms: ["headache", "chest pain", "dizziness", "loss of balance", "lack of concentration", "blurred vision", "nosebleeds", "shortness of breath", "fatigue", "irregular heartbeat", "pounding in ears", "confusion", "anxiety", "numbness", "tingling"],
        description: "High blood pressure is a common condition where the force of blood against artery walls is too high, increasing risk of heart disease.",
        precautions: ["Reduce salt intake", "Exercise regularly", "Maintain healthy weight", "Limit alcohol", "Monitor blood pressure daily"]
    },
    "Migraine": {
        symptoms: ["acidity", "indigestion", "headache", "blurred vision", "excessive hunger", "stiff neck", "depression", "visual disturbances", "nausea", "vomiting", "sensitivity to light", "sensitivity to sound", "throbbing pain", "aura", "numbness", "tingling", "difficulty speaking", "dizziness"],
        description: "A neurological condition characterized by intense, debilitating headaches often accompanied by nausea, vomiting, and sensitivity to light and sound.",
        precautions: ["Identify and avoid triggers", "Maintain regular sleep schedule", "Stay hydrated", "Practice stress management", "Keep headache diary"]
    },
    "Cervical spondylosis": {
        symptoms: ["back pain", "weakness in limbs", "neck pain", "dizziness", "loss of balance", "stiffness", "headache", "numbness in arms", "tingling in hands", "grinding sensation in neck", "muscle spasms", "reduced range of motion", "shoulder pain", "difficulty walking"],
        description: "Age-related wear and tear affecting the spinal disks in your neck, causing neck pain, stiffness, and sometimes nerve compression.",
        precautions: ["Maintain proper posture", "Use ergonomic furniture", "Do neck exercises", "Apply hot/cold therapy", "Physical therapy sessions"]
    },
    "Paralysis (brain hemorrhage)": {
        symptoms: ["vomiting", "headache", "weakness of one body side", "altered sensorium", "sudden severe headache", "confusion", "difficulty speaking", "vision problems", "loss of coordination", "numbness", "seizures", "loss of consciousness", "difficulty swallowing", "facial drooping"],
        description: "Loss of muscle function in part of your body, often caused by bleeding in or around the brain requiring immediate medical attention.",
        precautions: ["Call emergency immediately", "Keep patient calm", "Note time of symptom onset", "Don't give food or water", "Begin rehabilitation early"]
    },
    "Jaundice": {
        symptoms: ["itching", "vomiting", "fatigue", "weight loss", "high fever", "yellowish skin", "dark urine", "abdominal pain", "yellowing of eyes", "pale stools", "nausea", "loss of appetite", "swollen abdomen", "easy bruising", "confusion"],
        description: "A condition where skin and whites of the eyes turn yellow due to high bilirubin levels, indicating liver or blood problems.",
        precautions: ["Drink plenty of water", "Avoid alcohol completely", "Eat light, nutritious diet", "Rest adequately", "Monitor for complications"]
    },
    "Malaria": {
        symptoms: ["chills", "vomiting", "high fever", "sweating", "headache", "nausea", "diarrhea", "muscle pain", "fatigue", "abdominal pain", "cough", "rapid breathing", "rapid heart rate", "confusion", "seizures", "bloody stools", "yellow skin", "enlarged spleen"],
        description: "A life-threatening disease caused by parasites transmitted through mosquito bites, common in tropical regions.",
        precautions: ["Take antimalarial medications", "Use mosquito nets", "Apply insect repellent", "Wear protective clothing", "Seek immediate treatment"]
    },
    "Chicken pox": {
        symptoms: ["itching", "skin rash", "fatigue", "lethargy", "high fever", "headache", "loss of appetite", "mild fever", "red spots", "fluid-filled blisters", "scabs", "body aches", "irritability", "swollen lymph nodes", "sore throat"],
        description: "A highly contagious viral infection causing an itchy, blister-like rash on the skin, common in children.",
        precautions: ["Isolate patient", "Apply calamine lotion", "Keep nails trimmed", "Use antihistamines for itching", "Stay hydrated"]
    },
    "Dengue": {
        symptoms: ["skin rash", "chills", "joint pain", "vomiting", "fatigue", "high fever", "headache", "nausea", "loss of appetite", "pain behind eyes", "back pain", "muscle pain", "red spots over body", "severe abdominal pain", "persistent vomiting", "bleeding gums", "nosebleeds", "blood in urine", "difficulty breathing", "cold clammy skin"],
        description: "A mosquito-borne viral infection causing flu-like illness and potentially lethal complications including hemorrhagic fever.",
        precautions: ["Drink plenty of fluids", "Get adequate rest", "Monitor platelet count", "Avoid aspirin and NSAIDs", "Seek immediate medical care"]
    },
    "Typhoid": {
        symptoms: ["chills", "vomiting", "fatigue", "high fever", "headache", "nausea", "constipation", "abdominal pain", "diarrhea", "toxic look", "belly pain", "weakness", "loss of appetite", "rose-colored spots", "enlarged spleen", "enlarged liver", "confusion", "delirium"],
        description: "A bacterial infection that can lead to high fever, diarrhea, and vomiting, caused by contaminated food or water.",
        precautions: ["Complete antibiotic course", "Drink only safe water", "Eat thoroughly cooked food", "Maintain good hygiene", "Get vaccinated"]
    },
    "Hepatitis A": {
        symptoms: ["joint pain", "vomiting", "yellowish skin", "dark urine", "nausea", "loss of appetite", "abdominal pain", "diarrhea", "mild fever", "yellowing of eyes", "muscle pain", "fatigue", "itching", "clay-colored stools", "sudden fever"],
        description: "A highly contagious liver infection caused by the hepatitis A virus, usually contracted from contaminated food or water.",
        precautions: ["Get vaccinated", "Wash hands thoroughly", "Avoid contaminated food/water", "Rest adequately", "Avoid alcohol"]
    },
    "Hepatitis B": {
        symptoms: ["itching", "fatigue", "lethargy", "yellowish skin", "dark urine", "loss of appetite", "abdominal pain", "yellow urine", "yellowing of eyes", "malaise", "receiving blood transfusion", "receiving unsterile injections", "joint pain", "nausea", "vomiting", "fever", "clay-colored stools"],
        description: "A serious liver infection caused by the hepatitis B virus that can become chronic and lead to liver failure or cancer.",
        precautions: ["Get vaccinated", "Practice safe sex", "Don't share needles", "Screen blood donations", "Regular liver monitoring"]
    },
    "Hepatitis C": {
        symptoms: ["fatigue", "yellowish skin", "nausea", "loss of appetite", "yellowing of eyes", "family history", "abdominal pain", "dark urine", "itching", "easy bruising", "weight loss", "swelling in legs", "confusion", "spider-like blood vessels"],
        description: "A viral infection causing liver inflammation, sometimes leading to serious liver damage including cirrhosis and liver cancer.",
        precautions: ["Avoid sharing needles", "Practice safe sex", "Screen blood products", "Take antiviral medications", "Avoid alcohol"]
    },
    "Hepatitis D": {
        symptoms: ["joint pain", "vomiting", "fatigue", "high fever", "yellowish skin", "dark urine", "nausea", "loss of appetite", "abdominal pain", "yellowing of eyes", "severe liver damage", "confusion", "swelling", "bleeding easily"],
        description: "A liver infection caused by the hepatitis D virus, which only occurs in people infected with hepatitis B.",
        precautions: ["Get hepatitis B vaccination", "Follow hepatitis B precautions", "Regular medical monitoring", "Avoid alcohol", "Antiviral therapy as needed"]
    },
    "Hepatitis E": {
        symptoms: ["joint pain", "vomiting", "fatigue", "high fever", "yellowish skin", "dark urine", "nausea", "loss of appetite", "abdominal pain", "yellowing of eyes", "acute liver failure", "coma", "stomach bleeding", "enlarged liver", "itching", "clay-colored stools"],
        description: "A liver disease caused by the hepatitis E virus, usually spread through contaminated water, can be severe in pregnant women.",
        precautions: ["Drink safe water", "Practice good hygiene", "Avoid raw shellfish", "Rest adequately", "Monitor liver function"]
    },
    "Alcoholic hepatitis": {
        symptoms: ["vomiting", "yellowish skin", "abdominal pain", "swelling of stomach", "distention of abdomen", "history of alcohol consumption", "fluid overload", "nausea", "loss of appetite", "fatigue", "fever", "confusion", "bleeding easily", "spider veins"],
        description: "Liver inflammation caused by drinking too much alcohol, potentially leading to permanent liver damage and failure.",
        precautions: ["Stop alcohol immediately", "Nutritious diet", "Vitamin supplements", "Medical supervision", "Support groups"]
    },
    "Tuberculosis": {
        symptoms: ["chills", "vomiting", "fatigue", "weight loss", "cough", "high fever", "breathlessness", "sweating", "loss of appetite", "mild fever", "yellowing of eyes", "swelled lymph nodes", "malaise", "phlegm", "chest pain", "blood in sputum", "night sweats", "weakness", "hoarseness", "difficulty breathing"],
        description: "A potentially serious infectious disease that mainly affects the lungs, spread through the air when infected person coughs or sneezes.",
        precautions: ["Complete 6-9 month medication", "Cover mouth when coughing", "Isolate during infectious period", "Improve ventilation", "Contact tracing"]
    },
    "Common Cold": {
        symptoms: ["continuous sneezing", "chills", "fatigue", "cough", "high fever", "headache", "swelled lymph nodes", "malaise", "phlegm", "throat irritation", "redness of eyes", "sinus pressure", "runny nose", "congestion", "chest pain", "loss of smell", "muscle pain", "watery eyes", "post-nasal drip", "hoarseness"],
        description: "A viral infection of your upper respiratory tract, typically harmless but can be uncomfortable, usually resolves in 7-10 days.",
        precautions: ["Get plenty of rest", "Stay hydrated", "Gargle with salt water", "Use humidifier", "Take vitamin C"]
    },
    "Pneumonia": {
        symptoms: ["chills", "fatigue", "cough", "high fever", "breathlessness", "sweating", "malaise", "phlegm", "chest pain", "fast heart rate", "rusty sputum", "confusion", "nausea", "vomiting", "sharp chest pain", "rapid breathing", "bluish lips", "blood in sputum"],
        description: "An infection that inflames air sacs in one or both lungs, which may fill with fluid, can be life-threatening.",
        precautions: ["Complete antibiotic course", "Rest adequately", "Stay hydrated", "Use prescribed inhalers", "Get vaccinated"]
    },
    "Dimorphic hemorrhoids (piles)": {
        symptoms: ["constipation", "pain during bowel movements", "pain in anal region", "bloody stool", "irritation in anus", "itching around anus", "swelling around anus", "lump near anus", "mucus discharge", "feeling of incomplete evacuation", "discomfort while sitting"],
        description: "Swollen veins in the lowest part of the rectum and anus, causing discomfort, pain, and bleeding during bowel movements.",
        precautions: ["High fiber diet", "Drink plenty of water", "Avoid straining", "Sitz baths", "Regular exercise"]
    },
    "Heart attack": {
        symptoms: ["vomiting", "breathlessness", "sweating", "chest pain", "pain in left arm", "pain in jaw", "nausea", "lightheadedness", "cold sweat", "fatigue", "anxiety", "indigestion", "pressure in chest", "rapid heartbeat", "shortness of breath"],
        description: "A medical emergency where blood flow to the heart is blocked, potentially damaging or destroying part of the heart muscle.",
        precautions: ["Call emergency immediately", "Chew aspirin if not allergic", "Stay calm and rest", "Cardiac rehabilitation", "Lifestyle modifications"]
    },
    "Varicose veins": {
        symptoms: ["fatigue", "cramps", "bruising", "obesity", "swollen legs", "swollen blood vessels", "prominent veins on calf", "aching legs", "heavy feeling in legs", "burning sensation", "throbbing", "itching around veins", "skin discoloration", "restless legs"],
        description: "Enlarged, twisted veins visible just under the skin surface, usually in legs, caused by weak or damaged vein walls.",
        precautions: ["Elevate legs regularly", "Wear compression stockings", "Exercise regularly", "Avoid prolonged standing", "Maintain healthy weight"]
    },
    "Hypothyroidism": {
        symptoms: ["fatigue", "weight gain", "cold hands and feet", "mood swings", "lethargy", "dizziness", "puffy face and eyes", "enlarged thyroid", "brittle nails", "swollen extremities", "depression", "irritability", "abnormal menstruation", "dry skin", "hair loss", "constipation", "muscle weakness", "joint pain", "memory problems", "slow heart rate"],
        description: "A condition where the thyroid gland doesn't produce enough thyroid hormones, slowing down metabolism and affecting multiple body systems.",
        precautions: ["Take thyroid medication daily", "Regular thyroid monitoring", "Balanced diet with iodine", "Regular exercise", "Stress management"]
    },
    "Hyperthyroidism": {
        symptoms: ["fatigue", "mood swings", "weight loss", "restlessness", "sweating", "diarrhea", "fast heart rate", "excessive hunger", "muscle weakness", "irritability", "enlarged thyroid", "swollen extremities", "abnormal menstruation", "heat intolerance", "trembling hands", "nervousness", "difficulty sleeping", "bulging eyes", "frequent bowel movements"],
        description: "A condition where the thyroid gland produces too much thyroid hormone, speeding up metabolism and causing various symptoms.",
        precautions: ["Take prescribed medications", "Regular monitoring", "Avoid excess iodine", "Manage stress", "Consider radioactive iodine therapy"]
    },
    "Hypoglycemia": {
        symptoms: ["vomiting", "fatigue", "anxiety", "sweating", "headache", "nausea", "blurred vision", "fast heart rate", "slurred speech", "palpitations", "shakiness", "hunger", "irritability", "dizziness", "confusion", "pale skin", "tingling lips", "weakness", "difficulty concentrating"],
        description: "A condition characterized by abnormally low blood sugar levels, common in diabetes treatment, can be dangerous if severe.",
        precautions: ["Consume fast-acting sugar", "Carry glucose tablets", "Eat regular meals", "Monitor blood sugar", "Adjust medications with doctor"]
    },
    "Osteoarthritis": {
        symptoms: ["joint pain", "neck pain", "knee pain", "hip joint pain", "swelling joints", "painful walking", "stiffness", "reduced flexibility", "grating sensation", "bone spurs", "tenderness", "loss of flexibility", "crackling sounds in joints", "weakness"],
        description: "The most common form of arthritis, occurring when protective cartilage cushioning bones wears down over time.",
        precautions: ["Maintain healthy weight", "Regular low-impact exercise", "Physical therapy", "Hot/cold therapy", "Pain management"]
    },
    "Arthritis": {
        symptoms: ["muscle weakness", "stiff neck", "swelling joints", "movement stiffness", "painful walking", "joint pain", "redness", "warmth in joints", "decreased range of motion", "fatigue", "morning stiffness", "joint deformity", "difficulty gripping"],
        description: "Inflammation of one or more joints, causing pain and stiffness that can worsen with age, includes many types.",
        precautions: ["Regular exercise", "Weight management", "Anti-inflammatory diet", "Physical therapy", "Medication as prescribed"]
    },
    "(vertigo) Paroxysmal Positional Vertigo": {
        symptoms: ["vomiting", "headache", "nausea", "spinning movements", "loss of balance", "unsteadiness", "dizziness", "lightheadedness", "nystagmus", "difficulty focusing", "sweating", "abnormal eye movements", "feeling of tilting"],
        description: "A condition causing brief episodes of mild to intense dizziness, triggered by specific changes in head position.",
        precautions: ["Canalith repositioning exercises", "Avoid sudden head movements", "Safety measures at home", "Stay hydrated", "Vestibular therapy"]
    },
    "Acne": {
        symptoms: ["skin rash", "pus filled pimples", "blackheads", "scurring", "whiteheads", "oily skin", "redness", "inflammation", "painful lumps under skin", "dark spots", "uneven skin texture"],
        description: "A skin condition occurring when hair follicles become plugged with oil and dead skin cells, common during adolescence.",
        precautions: ["Gentle cleansing twice daily", "Don't pick or squeeze", "Oil-free cosmetics", "Healthy diet", "Prescribed medications"]
    },
    "Urinary tract infection": {
        symptoms: ["burning micturition", "spotting urination", "foul smell of urine", "continuous feel of urine", "cloudy urine", "blood in urine", "pelvic pain", "lower abdominal pain", "urgency to urinate", "frequent urination", "fever", "chills", "back pain", "nausea"],
        description: "An infection in any part of the urinary system, most commonly affecting the bladder and urethra, more common in women.",
        precautions: ["Drink plenty of water", "Urinate frequently", "Wipe front to back", "Empty bladder after intercourse", "Complete antibiotic course"]
    },
    "Psoriasis": {
        symptoms: ["skin rash", "joint pain", "skin peeling", "silver like dusting", "small dents in nails", "inflammatory nails", "red patches", "dry cracked skin", "itching", "burning sensation", "thick nails", "swollen joints", "stiff joints"],
        description: "A chronic autoimmune skin disease causing red, itchy scaly patches, most commonly on knees, elbows, trunk and scalp.",
        precautions: ["Moisturize regularly", "Avoid triggers", "Prescribed topical treatments", "Phototherapy if needed", "Stress management"]
    },
    "Impetigo": {
        symptoms: ["skin rash", "high fever", "blister", "red sore around nose", "yellow crust ooze", "itching", "swollen lymph nodes", "red bumps", "oozing fluid", "crusty patches", "skin lesions"],
        description: "A highly contagious bacterial skin infection causing red sores that rupture, ooze, and develop honey-colored crusts.",
        precautions: ["Keep area clean", "Complete antibiotic course", "Don't touch sores", "Separate towels and linens", "Good hand hygiene"]
    },
    "Appendicitis": {
        symptoms: ["abdominal pain", "nausea", "vomiting", "loss of appetite", "fever", "constipation", "diarrhea", "inability to pass gas", "swelling in abdomen", "pain when walking", "pain in lower right abdomen", "rebound tenderness"],
        description: "Inflammation of the appendix causing severe abdominal pain, a medical emergency requiring immediate surgical removal.",
        precautions: ["Seek immediate medical attention", "Don't eat or drink", "Avoid pain medications before diagnosis", "Don't apply heat to abdomen", "Prepare for possible surgery"]
    },
    "Kidney stones": {
        symptoms: ["severe back pain", "pain in side", "pain in lower abdomen", "blood in urine", "cloudy urine", "foul-smelling urine", "frequent urination", "nausea", "vomiting", "fever", "chills", "painful urination", "pink or brown urine"],
        description: "Hard deposits of minerals and salts that form inside kidneys, causing severe pain when passing through urinary tract.",
        precautions: ["Drink plenty of water", "Limit salt intake", "Reduce animal protein", "Avoid oxalate-rich foods", "Take prescribed pain medication"]
    },
    "Anemia": {
        symptoms: ["fatigue", "weakness", "pale skin", "irregular heartbeat", "shortness of breath", "dizziness", "chest pain", "cold hands and feet", "headache", "lightheadedness", "brittle nails", "poor appetite", "difficulty concentrating"],
        description: "A condition where you lack enough healthy red blood cells to carry adequate oxygen to body tissues, causing tiredness and weakness.",
        precautions: ["Iron-rich diet", "Take iron supplements", "Vitamin B12 and folate", "Treat underlying causes", "Regular blood tests"]
    },
    "Sinusitis": {
        symptoms: ["facial pain", "nasal congestion", "thick nasal discharge", "reduced sense of smell", "cough", "headache", "fever", "fatigue", "bad breath", "dental pain", "ear pressure", "sore throat", "post-nasal drip"],
        description: "Inflammation or swelling of the tissue lining the sinuses, often caused by infection, allergies, or structural problems.",
        precautions: ["Use saline nasal spray", "Apply warm compress", "Stay hydrated", "Use humidifier", "Complete antibiotic course if bacterial"]
    },
    "Conjunctivitis (Pink eye)": {
        symptoms: ["redness in eyes", "itching", "gritty feeling", "discharge forming crust", "tearing", "sensitivity to light", "blurred vision", "swollen eyelids", "burning sensation"],
        description: "Inflammation or infection of the transparent membrane lining the eyelid and eyeball, highly contagious if viral or bacterial.",
        precautions: ["Don't touch eyes", "Wash hands frequently", "Use clean towels", "Avoid sharing eye cosmetics", "Apply prescribed eye drops"]
    },
    "Eczema": {
        symptoms: ["itchy skin", "red patches", "dry skin", "cracked skin", "scaly patches", "swelling", "oozing", "crusting", "thickened skin", "sensitive skin", "raw skin from scratching"],
        description: "A condition that makes skin red, inflamed, itchy, and sometimes develops blisters, often chronic and recurring.",
        precautions: ["Moisturize regularly", "Avoid triggers", "Use mild soaps", "Take lukewarm baths", "Wear soft fabrics"]
    },
    "Shingles": {
        symptoms: ["painful rash", "blisters", "burning sensation", "tingling", "numbness", "itching", "fluid-filled blisters", "fever", "headache", "fatigue", "sensitivity to touch", "red patches", "pain before rash appears"],
        description: "A viral infection causing painful rash with blisters, caused by reactivation of chickenpox virus, usually affects one side of body.",
        precautions: ["Take antiviral medications", "Keep rash covered", "Avoid contact with vulnerable people", "Pain management", "Calamine lotion for itching"]
    },
    "Meningitis": {
        symptoms: ["sudden high fever", "severe headache", "stiff neck", "nausea", "vomiting", "confusion", "sensitivity to light", "sleepiness", "difficulty waking", "seizures", "skin rash", "loss of appetite", "irritability"],
        description: "Inflammation of membranes surrounding brain and spinal cord, can be viral or bacterial, bacterial form is life-threatening emergency.",
        precautions: ["Seek immediate medical care", "Get vaccinated", "Avoid sharing utensils", "Practice good hygiene", "Complete antibiotic course"]
    },
    "Strep throat": {
        symptoms: ["sore throat", "painful swallowing", "fever", "red and swollen tonsils", "white patches on tonsils", "swollen lymph nodes", "headache", "nausea", "vomiting", "body aches", "rash"],
        description: "A bacterial infection causing throat pain and inflammation, common in children, requires antibiotic treatment.",
        precautions: ["Complete full antibiotic course", "Rest adequately", "Drink warm liquids", "Gargle with salt water", "Avoid sharing utensils"]
    },
    "Mononucleosis": {
        symptoms: ["extreme fatigue", "sore throat", "fever", "swollen lymph nodes", "swollen tonsils", "headache", "skin rash", "soft swollen spleen", "loss of appetite", "night sweats", "muscle aches"],
        description: "Infectious disease commonly called 'mono' or 'kissing disease', caused by Epstein-Barr virus, causes extreme fatigue.",
        precautions: ["Get plenty of rest", "Stay hydrated", "Avoid contact sports", "Don't share drinks or utensils", "Pain relievers for discomfort"]
    },
    "Celiac disease": {
        symptoms: ["diarrhea", "bloating", "abdominal pain", "gas", "fatigue", "weight loss", "nausea", "vomiting", "constipation", "pale stools", "foul-smelling stools", "anemia", "bone pain", "skin rash", "mouth ulcers", "joint pain", "numbness in hands and feet"],
        description: "An immune reaction to eating gluten that damages the small intestine lining, preventing absorption of nutrients.",
        precautions: ["Strict gluten-free diet", "Read food labels carefully", "Avoid cross-contamination", "Take vitamin supplements", "Regular medical monitoring"]
    },
    "Irritable Bowel Syndrome (IBS)": {
        symptoms: ["abdominal pain", "cramping", "bloating", "gas", "diarrhea", "constipation", "mucus in stool", "urgency to defecate", "feeling of incomplete evacuation", "nausea", "fatigue", "back pain"],
        description: "A common disorder affecting the large intestine, causing cramping, abdominal pain, bloating, gas, and changes in bowel habits.",
        precautions: ["Identify trigger foods", "Manage stress", "Regular exercise", "High-fiber diet", "Stay hydrated"]
    },
    "Lupus": {
        symptoms: ["fatigue", "fever", "joint pain", "joint swelling", "butterfly rash on face", "skin lesions", "sensitivity to sunlight", "fingers turning white or blue", "shortness of breath", "chest pain", "dry eyes", "headaches", "confusion", "memory loss"],
        description: "A chronic autoimmune disease where the immune system attacks its own tissues, affecting joints, skin, kidneys, and other organs.",
        precautions: ["Take prescribed medications", "Avoid sun exposure", "Regular medical check-ups", "Manage stress", "Adequate rest"]
    },
    "Fibromyalgia": {
        symptoms: ["widespread muscle pain", "fatigue", "sleep disturbances", "memory problems", "mood issues", "tender points", "stiffness", "headaches", "irritable bowel syndrome", "anxiety", "depression", "numbness", "tingling"],
        description: "A disorder characterized by widespread musculoskeletal pain accompanied by fatigue, sleep, memory and mood issues.",
        precautions: ["Regular exercise", "Stress management", "Good sleep hygiene", "Pain management techniques", "Physical therapy"]
    },
    "Chronic Kidney Disease": {
        symptoms: ["fatigue", "swelling in feet and ankles", "difficulty concentrating", "decreased appetite", "nausea", "vomiting", "muscle cramps", "dry itchy skin", "frequent urination", "blood in urine", "foamy urine", "puffiness around eyes", "high blood pressure"],
        description: "Gradual loss of kidney function over time, often caused by diabetes or high blood pressure, can lead to kidney failure.",
        precautions: ["Control blood pressure", "Manage blood sugar", "Low-salt diet", "Limit protein intake", "Regular kidney function tests"]
    },
    "Gout": {
        symptoms: ["severe joint pain", "inflammation", "redness", "warmth in joint", "limited range of motion", "tenderness", "swelling", "pain in big toe", "pain in ankle", "pain in knee", "recurring attacks"],
        description: "A form of arthritis causing sudden, severe attacks of pain, swelling, and redness in joints, caused by uric acid buildup.",
        precautions: ["Limit alcohol", "Avoid high-purine foods", "Stay hydrated", "Maintain healthy weight", "Take prescribed medications"]
    },
    "Sleep Apnea": {
        symptoms: ["loud snoring", "episodes of stopped breathing", "gasping for air during sleep", "dry mouth upon waking", "morning headache", "difficulty staying asleep", "excessive daytime sleepiness", "difficulty concentrating", "irritability"],
        description: "A serious sleep disorder where breathing repeatedly stops and starts during sleep, can lead to serious health problems.",
        precautions: ["Lose excess weight", "Exercise regularly", "Avoid alcohol before bed", "Sleep on your side", "Use CPAP machine if prescribed"]
    },
    "Gallstones": {
        symptoms: ["sudden intense pain in upper right abdomen", "back pain between shoulder blades", "right shoulder pain", "nausea", "vomiting", "indigestion", "heartburn", "gas", "clay-colored stools", "dark urine", "fever", "jaundice"],
        description: "Hardened deposits of digestive fluid in the gallbladder that can cause severe pain and complications requiring treatment.",
        precautions: ["Maintain healthy weight", "Avoid rapid weight loss", "Eat regular meals", "High-fiber diet", "Limit fatty foods"]
    },
    "Pancreatitis": {
        symptoms: ["upper abdominal pain", "pain radiating to back", "pain worse after eating", "nausea", "vomiting", "fever", "rapid pulse", "tender abdomen", "weight loss", "oily stools", "swollen abdomen"],
        description: "Inflammation of the pancreas causing severe abdominal pain, can be acute or chronic, often related to gallstones or alcohol use.",
        precautions: ["Stop alcohol consumption", "Low-fat diet", "Small frequent meals", "Stay hydrated", "Avoid smoking"]
    },
    "Multiple Sclerosis": {
        symptoms: ["numbness or weakness in limbs", "tingling sensations", "electric shock sensations", "lack of coordination", "unsteady gait", "vision problems", "blurred vision", "double vision", "slurred speech", "fatigue", "dizziness", "bladder problems", "cognitive changes"],
        description: "A chronic disease affecting the central nervous system, disrupting communication between brain and body, symptoms vary widely.",
        precautions: ["Take disease-modifying medications", "Physical therapy", "Manage stress", "Stay cool", "Regular exercise"]
    },
    "Parkinson's Disease": {
        symptoms: ["tremor", "slowed movement", "rigid muscles", "impaired posture", "loss of balance", "loss of automatic movements", "speech changes", "writing changes", "shuffling walk", "difficulty standing", "masked facial expression"],
        description: "A progressive nervous system disorder affecting movement, causing tremors, stiffness, and difficulty with walking and coordination.",
        precautions: ["Take medications as prescribed", "Physical therapy", "Occupational therapy", "Speech therapy", "Regular exercise"]
    },
    "Epilepsy": {
        symptoms: ["temporary confusion", "staring spell", "uncontrollable jerking movements", "loss of consciousness", "fear", "anxiety", "deja vu", "muscle stiffness", "sudden falls", "unusual sensations"],
        description: "A neurological disorder causing recurring seizures due to abnormal electrical activity in the brain, manageable with medication.",
        precautions: ["Take antiseizure medications regularly", "Get adequate sleep", "Avoid triggers", "Wear medical ID", "Safety measures at home"]
    },
    "Alzheimer's Disease": {
        symptoms: ["memory loss", "difficulty planning", "confusion with time or place", "trouble understanding visual images", "problems with speaking or writing", "misplacing things", "poor judgment", "withdrawal from activities", "mood changes", "personality changes", "difficulty completing familiar tasks"],
        description: "A progressive brain disorder causing memory loss and cognitive decline, most common cause of dementia in older adults.",
        precautions: ["Mental stimulation", "Social engagement", "Regular exercise", "Heart-healthy diet", "Manage cardiovascular risk factors"]
    },
    "Anxiety Disorder": {
        symptoms: ["excessive worry", "restlessness", "feeling on edge", "fatigue", "difficulty concentrating", "irritability", "muscle tension", "sleep disturbances", "rapid heartbeat", "sweating", "trembling", "shortness of breath", "panic attacks"],
        description: "A mental health disorder characterized by persistent, excessive worry and fear about everyday situations, affecting daily activities.",
        precautions: ["Cognitive behavioral therapy", "Stress management", "Regular exercise", "Avoid caffeine and alcohol", "Relaxation techniques"]
    },
    "Depression": {
        symptoms: ["persistent sadness", "loss of interest", "changes in appetite", "weight changes", "sleep problems", "loss of energy", "feelings of worthlessness", "difficulty concentrating", "thoughts of death", "physical aches", "irritability", "hopelessness"],
        description: "A mood disorder causing persistent feelings of sadness and loss of interest, affecting how you think, feel, and function.",
        precautions: ["Seek professional help", "Take prescribed medications", "Regular therapy", "Exercise regularly", "Social support"]
    },
    "COPD (Chronic Obstructive Pulmonary Disease)": {
        symptoms: ["shortness of breath", "chronic cough", "wheezing", "chest tightness", "excessive mucus production", "frequent respiratory infections", "fatigue", "weight loss", "swelling in ankles", "blue lips or fingernails"],
        description: "A group of lung diseases blocking airflow and making breathing difficult, primarily caused by smoking, includes emphysema and chronic bronchitis.",
        precautions: ["Quit smoking", "Avoid lung irritants", "Use prescribed inhalers", "Pulmonary rehabilitation", "Get vaccinated"]
    },
    "Endometriosis": {
        symptoms: ["painful periods", "pelvic pain", "pain during intercourse", "pain with bowel movements", "painful urination", "excessive menstrual bleeding", "fatigue", "diarrhea", "constipation", "bloating", "nausea", "infertility"],
        description: "A disorder where tissue similar to uterine lining grows outside the uterus, causing pain and potentially affecting fertility.",
        precautions: ["Pain management", "Hormone therapy", "Regular exercise", "Heat therapy", "Consider surgical options"]
    },
    "Polycystic Ovary Syndrome (PCOS)": {
        symptoms: ["irregular periods", "excess androgen", "acne", "male-pattern baldness", "excess facial hair", "weight gain", "darkening of skin", "skin tags", "difficulty getting pregnant", "mood changes"],
        description: "A hormonal disorder causing enlarged ovaries with small cysts, affecting menstruation, fertility, appearance, and long-term health.",
        precautions: ["Maintain healthy weight", "Regular exercise", "Balanced diet", "Manage insulin levels", "Hormonal birth control if prescribed"]
    },
    "Diverticulitis": {
        symptoms: ["abdominal pain", "tenderness in lower left abdomen", "fever", "nausea", "vomiting", "constipation", "diarrhea", "bloating", "rectal bleeding", "changes in bowel habits"],
        description: "Inflammation or infection of small pouches (diverticula) in the digestive tract, causing severe abdominal pain.",
        precautions: ["High-fiber diet", "Drink plenty of water", "Regular exercise", "Avoid nuts and seeds during flare-ups", "Complete antibiotic course"]
    },
    "Rosacea": {
        symptoms: ["facial redness", "visible blood vessels", "swollen red bumps", "eye problems", "enlarged nose", "burning sensation", "dry appearance", "raised patches", "thickening skin"],
        description: "A chronic skin condition causing redness and visible blood vessels in the face, may also produce small pus-filled bumps.",
        precautions: ["Identify and avoid triggers", "Use gentle skin care products", "Protect from sun", "Avoid hot drinks and spicy foods", "Prescribed medications"]
    },
    "Lyme Disease": {
        symptoms: ["bulls-eye rash", "fever", "chills", "fatigue", "body aches", "headache", "neck stiffness", "swollen lymph nodes", "joint pain", "joint swelling", "facial paralysis", "irregular heartbeat", "dizziness", "shortness of breath"],
        description: "An infectious disease transmitted by ticks, causing rash and flu-like symptoms, can lead to serious complications if untreated.",
        precautions: ["Complete antibiotic course", "Avoid tick-infested areas", "Use insect repellent", "Wear protective clothing", "Check for ticks after outdoor activities"]
    },
    "Whooping Cough (Pertussis)": {
        symptoms: ["runny nose", "nasal congestion", "red watery eyes", "fever", "severe coughing fits", "whooping sound when inhaling", "vomiting after coughing", "exhaustion after coughing", "blue face from lack of oxygen"],
        description: "A highly contagious respiratory infection causing severe coughing fits, especially dangerous for infants and young children.",
        precautions: ["Get vaccinated", "Complete antibiotic course", "Stay home while contagious", "Cover mouth when coughing", "Hand hygiene"]
    },
    "Mumps": {
        symptoms: ["swollen salivary glands", "pain in swollen glands", "fever", "headache", "muscle aches", "weakness", "fatigue", "loss of appetite", "pain while chewing", "testicular swelling in males"],
        description: "A viral infection affecting salivary glands causing swelling and pain, preventable by vaccination, can lead to complications.",
        precautions: ["Get MMR vaccine", "Isolate while contagious", "Rest adequately", "Stay hydrated", "Soft food diet"]
    },
    "Measles": {
        symptoms: ["high fever", "cough", "runny nose", "red watery eyes", "white spots inside mouth", "red blotchy rash", "sore throat", "muscle pain", "sensitivity to light", "tiny white spots with red centers"],
        description: "A highly contagious viral infection causing fever and red rash, preventable by vaccination, can cause serious complications.",
        precautions: ["Get vaccinated", "Isolate patient", "Rest adequately", "Stay hydrated", "Fever management"]
    },
    "Rubella (German Measles)": {
        symptoms: ["mild fever", "headache", "runny nose", "red eyes", "enlarged lymph nodes", "pink rash", "joint pain", "muscle aches", "stuffy nose"],
        description: "A contagious viral infection causing distinctive red rash, mild in most people but dangerous for pregnant women.",
        precautions: ["Get MMR vaccine", "Avoid contact if pregnant", "Isolate while contagious", "Rest and fluids", "Pain relief as needed"]
    },
    "Scabies": {
        symptoms: ["intense itching", "pimple-like rash", "tiny burrows in skin", "sores from scratching", "itching worse at night", "rash between fingers", "rash on wrists", "rash on elbows", "rash on waist"],
        description: "A contagious skin infestation caused by tiny mites burrowing into skin, causing intense itching and rash.",
        precautions: ["Prescribed topical treatment", "Wash all clothing and bedding", "Treat all household members", "Vacuum thoroughly", "Avoid close contact"]
    },
    "Ringworm": {
        symptoms: ["circular rash", "red scaly patches", "itching", "ring-shaped rash", "raised edges", "clear center", "spreading rash", "hair loss in affected area", "brittle nails"],
        description: "A fungal infection causing ring-shaped rash on skin, scalp, or nails, despite name not caused by worms, highly contagious.",
        precautions: ["Antifungal treatment", "Keep area clean and dry", "Don't share personal items", "Wash hands frequently", "Treat pets if infected"]
    },
    "Tonsillitis": {
        symptoms: ["sore throat", "difficult swallowing", "red swollen tonsils", "white or yellow coating on tonsils", "fever", "bad breath", "swollen lymph nodes", "headache", "stiff neck", "stomach pain", "ear pain"],
        description: "Inflammation of the tonsils usually caused by viral or bacterial infection, causing sore throat and difficulty swallowing.",
        precautions: ["Rest adequately", "Stay hydrated", "Gargle with salt water", "Complete antibiotics if prescribed", "Soft foods"]
    },
    "Laryngitis": {
        symptoms: ["hoarseness", "weak voice", "loss of voice", "tickling sensation in throat", "sore throat", "dry throat", "dry cough", "difficulty speaking", "raw throat"],
        description: "Inflammation of the voice box causing hoarseness or loss of voice, usually temporary and improves without treatment.",
        precautions: ["Rest your voice", "Stay hydrated", "Avoid irritants", "Use humidifier", "Don't whisper"]
    },
    "Athlete's Foot": {
        symptoms: ["itchy scaly rash", "burning sensation", "stinging", "cracked skin", "peeling skin", "blisters", "raw skin", "redness", "bad odor", "thick toenails"],
        description: "A fungal infection affecting the foot, especially between toes, causing itching, burning, and cracked skin.",
        precautions: ["Keep feet dry", "Antifungal medication", "Wear breathable shoes", "Change socks daily", "Don't walk barefoot in public areas"]
    },
    "Heat Stroke": {
        symptoms: ["high body temperature", "altered mental state", "nausea", "vomiting", "flushed skin", "rapid breathing", "racing heart rate", "headache", "confusion", "seizures", "loss of consciousness"],
        description: "A life-threatening condition where body overheats, usually from prolonged exposure to high temperatures, requires emergency care.",
        precautions: ["Move to cool area immediately", "Remove excess clothing", "Cool with water", "Call emergency services", "Prevention through hydration"]
    },
    "Food Poisoning": {
        symptoms: ["nausea", "vomiting", "diarrhea", "abdominal cramps", "fever", "weakness", "headache", "loss of appetite", "muscle aches", "bloody diarrhea", "dehydration"],
        description: "Illness caused by eating contaminated food, symptoms usually resolve within days but can be serious in vulnerable populations.",
        precautions: ["Stay hydrated", "Rest adequately", "Bland diet when ready", "Hand hygiene", "Seek care if severe symptoms"]
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

// LLOYD_DONNEL_CHOGARI