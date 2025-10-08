import pandas as pd
import json
from supabase import create_client, Client
import re

# Supabase credentials
SUPABASE_URL = "YOUR_SUPABASE_URL"
SUPABASE_KEY = "YOUR_SUPABASE_SERVICE_KEY"  # Use service key for data upload

supabase: Client = create_client(SUPABASE_URL, SUPABASE_KEY)

def clean_text(text):
    """Clean and normalize text"""
    if pd.isna(text):
        return ""
    text = str(text)
    text = re.sub(r'\s+', ' ', text)  # Remove extra whitespace
    text = text.strip()
    return text

def extract_keywords(text):
    """Extract health-related keywords from text"""
    health_keywords = [
        'symptom', 'pain', 'fever', 'cough', 'treatment', 'medicine',
        'doctor', 'hospital', 'diagnosis', 'infection', 'disease',
        'medication', 'prescription', 'allergy', 'chronic', 'acute'
    ]
    text_lower = text.lower()
    found_keywords = [kw for kw in health_keywords if kw in text_lower]
    return found_keywords

def categorize_conversation(question, response):
    """Categorize medical conversation"""
    text = (question + " " + response).lower()
    
    categories = {
        'symptom_inquiry': ['symptom', 'feel', 'experiencing', 'having'],
        'diagnosis': ['diagnose', 'condition', 'disease', 'illness'],
        'treatment': ['treatment', 'cure', 'therapy', 'remedy'],
        'medication': ['medicine', 'medication', 'drug', 'prescription'],
        'prevention': ['prevent', 'avoid', 'protect', 'vaccination'],
        'emergency': ['emergency', 'urgent', 'severe', 'critical'],
        'general_advice': ['should', 'recommend', 'advice', 'suggest']
    }
    
    for category, keywords in categories.items():
        if any(kw in text for kw in keywords):
            return category
    
    return 'general'

def upload_to_supabase(df, batch_size=100):
    """Upload medical conversations to Supabase"""
    print(f"Processing {len(df)} conversations...")
    
    processed_data = []
    
    for idx, row in df.iterrows():
        # Adjust column names based on your dataset
        # Common column names: 'question', 'answer', 'input', 'output', 'patient', 'doctor'
        question = clean_text(row.get('question') or row.get('input') or row.get('patient') or '')
        response = clean_text(row.get('answer') or row.get('output') or row.get('doctor') or '')
        
        if not question or not response or len(question) < 10 or len(response) < 20:
            continue
        
        # Extract keywords and categorize
        keywords = extract_keywords(question + " " + response)
        category = categorize_conversation(question, response)
        
        processed_data.append({
            'question': question,
            'response': response,
            'category': category,
            'keywords': keywords
        })
        
        # Upload in batches
        if len(processed_data) >= batch_size:
            try:
                supabase.table('medical_conversations').insert(processed_data).execute()
                print(f"Uploaded batch of {len(processed_data)} conversations")
                processed_data = []
            except Exception as e:
                print(f"Error uploading batch: {e}")
                processed_data = []
    
    # Upload remaining data
    if processed_data:
        try:
            supabase.table('medical_conversations').insert(processed_data).execute()
            print(f"Uploaded final batch of {len(processed_data)} conversations")
        except Exception as e:
            print(f"Error uploading final batch: {e}")
    
    print("Upload complete!")

# Main execution
if __name__ == "__main__":
    # Load your CSV file from Kaggle
    # Replace 'medical_data.csv' with your actual file name
    df = pd.read_csv('chatdoctor.csv')  # or your dataset filename
    
    print(f"Loaded {len(df)} rows from CSV")
    print(f"Columns: {df.columns.tolist()}")
    
    # Upload to Supabase
    upload_to_supabase(df)