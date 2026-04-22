# Email-Phishing-Detection-System-NLP-Chrome-Extension-
Modular phishing detection system using NLP and a Chromium extension. Extracts email content, processes it via a backend pipeline, and classifies threats. Uses a feedback loop for continuous learning and a dataset-driven approach for scalable, efficient analysis.

# 🛡️ Email Phishing Detection System

A modular phishing detection system that analyzes email content using NLP and integrates with a Chromium-based browser extension.

---

## 🚀 Overview

This project detects phishing emails by combining a browser extension with a backend NLP pipeline. The extension extracts email content, sends it to a server, and receives a classification (phishing/safe).

---

## 🧩 Architecture

Extension (Frontend)
↓
API Backend
↓
NLP Pipeline
↓
Dataset / Storage

## ✨ Features

- 📧 Extracts email content from Gmail  
- 🧹 Cleans and preprocesses text  
- 🧠 NLP-based classification  
- 💾 Stores structured dataset  
- 🔁 Feedback loop for improvement  
- ⚡ Optimized (processing only on write)

---

## 🛠️ Tech Stack

- **Frontend:** JavaScript (Chrome Extension)  
- **Backend:** Python (Flask)  
- **NLP:** spaCy, scikit-learn  
- **Storage:** JSON / Database  

---

## ⚙️ How It Works

1. Extension reads email content  
2. Sends data to backend API  
3. NLP pipeline processes text  
4. Classifies email (phishing/safe)  
5. Stores result in dataset  
6. Improves via user feedback  

---

## 📦 Installation (Extension)

1. Clone the repository  
2. Open `chrome://extensions/`  
3. Enable Developer Mode  
4. Click **Load Unpacked**  
5. Select the extension folder  

---

## 🧠 Example Output

```json
{
  "label": "phishing",
  "confidence": 0.91
}

🔄 Future Improvements
Advanced NLP models (BERT/LLMs)
Real-time Gmail warnings
Cloud deployment
Analytics dashboard
👨‍💻 Author

Zumair Firoz Ansari 
B.Tech CSE Student at IILM University
Supervised under Adhvesh Kumar Gupta
