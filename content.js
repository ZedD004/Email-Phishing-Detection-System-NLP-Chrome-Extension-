function getEmailContent() {
    const emailBody = document.querySelector(".a3s");
    return emailBody ? emailBody.innerText : "No email detected";
}

chrome.runtime.onMessage.addListener((req, sender, sendResponse) => {
    if (req.type === "GET_EMAIL") {
        sendResponse({ text: getEmailContent() });
    }
});