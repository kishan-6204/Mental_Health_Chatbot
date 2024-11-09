let sentimentData;

// Load the sentiment dataset from the JSON file
fetch('sentiment.json')
    .then(response => response.json())
    .then(data => {
        sentimentData = data.responses;
        // Send a default message when the chatbot is ready
        setTimeout(() => {
            displayMessage("How are you today?", "bot-message", "robot.png");
        }, 1000); // Wait 1 second before showing the message
    })
    .catch(error => console.error('Error loading sentiment dataset:', error));

document.getElementById("send-btn").addEventListener("click", function () {
    const userInput = document.getElementById("user-input").value;
    if (userInput) {
        displayMessage(userInput, "user-message", "user.png"); // Add avatar for user

        // Store the message in local storage
        storeMessage(userInput);

        // Simulate bot thinking
        const thinkingMessageDiv = displayMessage("Thinking...", "bot-message", "robot.png");

        // Generate an emoji and reply based on the message after a delay
        setTimeout(() => {
            // Remove the thinking message after 2 seconds
            thinkingMessageDiv.remove();

            const { emoji, response } = generateEmojiAndResponse(userInput);
            // Display the emoji
            displayMessage(emoji, "bot-message", "robot.png");
            
            // Further delay before showing the text response
            setTimeout(() => {
                displayMessage(response, "bot-message", "robot.png"); // Bot reply after emoji
            }, 2000); // 2 seconds delay for the text response
        }, 2000); // 2 seconds delay for the emoji
    }
    document.getElementById("user-input").value = '';
});

// Function to display a message in the chatbox
function displayMessage(text, className, avatar) {
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("message", className);

    const avatarImg = document.createElement("img");
    avatarImg.src = avatar;
    messageDiv.appendChild(avatarImg);

    const textSpan = document.createElement("span");
    textSpan.textContent = text;
    messageDiv.appendChild(textSpan);

    document.getElementById("messages").appendChild(messageDiv);

    // Scroll to the bottom
    const chatbox = document.getElementById("chatbox");
    chatbox.scrollTop = chatbox.scrollHeight;

    // Return the messageDiv so it can be removed later
    return messageDiv;
}

// Function to store the user's message in localStorage
function storeMessage(message) {
    let messages = JSON.parse(localStorage.getItem('messages')) || [];
    messages.push(message);
    localStorage.setItem('messages', JSON.stringify(messages));
}

// Function to generate an emoji and response based on user input
function generateEmojiAndResponse(message) {
    // Ensure that sentimentData is available
    if (!sentimentData) {
        return { emoji: "🤖", response: "I'm having trouble understanding you right now." };
    }

    // Example logic for keyword matching
    for (let i = 0; i < sentimentData.length; i++) {
        const sentiment = sentimentData[i];
        if (message.includes(sentiment.keyword)) {
            return {
                emoji: sentiment.emoji,
                response: sentiment.response
            };
        }
    }

    // Default response if no keywords match
    return {
        emoji: "🤖",
        response: "I'm here if you want to talk!"
    };
}
