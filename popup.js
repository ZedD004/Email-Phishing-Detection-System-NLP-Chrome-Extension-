const API_URL = "https://your-api-server.com";

let lastAnalyzed = null;

document.getElementById("analyze").addEventListener("click", async () => {

    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    chrome.tabs.sendMessage(tab.id, { type: "GET_EMAIL" }, async (response) => {

        const emailText = response.text;

        // Demo mode (no backend required)
        const data = {
            label: Math.random() > 0.5 ? "phishing" : "safe",
            confidence: (Math.random() * 0.3 + 0.7).toFixed(2)
        };

        lastAnalyzed = {
            text: emailText,
            prediction: data.label
        };

        document.getElementById("result").innerText =
            `Prediction: ${data.label} (Confidence: ${data.confidence})`;
    });
});

document.getElementById("feedback").addEventListener("click", async () => {

    if (!lastAnalyzed) {
        alert("Analyze first!");
        return;
    }

    alert("Feedback sent (demo mode)");
});