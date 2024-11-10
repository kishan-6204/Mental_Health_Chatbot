# Sentiment-Based Chatbot

## Features
- **Emoji Responses**: The chatbot replies with emojis that reflect the user's emotion.
- **Custom Responses**: Provides responses that are specific to the user's feelings.
- **Typing Simulation**: Simulates typing delays to make the chatbot feel more natural.
- **Full-Screen Chat Interface**: Uses the full screen for a seamless chat experience.
- **Responsive Design**: Adapts to different screen sizes for both desktop and mobile users.

## JSON Structure
The chatbot uses a JSON file to store multiple keywords associated with different emotions. This allows the chatbot to recognize synonyms and related terms for each feeling.

Example JSON Structure:
```json
{
    "responses": [
        {
            "keywords": ["happy", "joyful", "excited"],
            "emoji": "😊",
            "response": "I'm so glad you're feeling happy! Keep smiling and spread the joy!"
        },
        {
            "keywords": ["sad", "unhappy", "down"],
            "emoji": "😢",
            "response": "I'm sorry you're feeling sad. It's okay to have down days, but remember, things can get better."
        }
        // ... other sentiments
    ]

```
## Installation
- **Clone the repository**: git clone https://github.com/Kishan-6204/Sentiment-Based-Chatbot.git
- **Navigate to the project directory**: cd Sentiment-Based-Chatbot.
- Open index.html in a web browser to view and interact with the chatbot.

## File Structure
- **index.html**: The main HTML file for the chatbot interface.
- **styles.css**: Contains the CSS styling for the chatbot, including full-screen support and responsive design.
- **script.js**: Contains the JavaScript logic for handling user input, fetching responses, and simulating typing delays.
- **sentiments.json**: Stores the list of keywords, emojis, and responses for different sentiments.

## Usage
- Open index.html in your browser.
- Start typing your feelings in the chat input box.
- The chatbot will analyze your input and respond with an appropriate emoji and message.

## Configuration
- You can edit sentiments.json to add more emotions or adjust responses. Here’s how to add a new sentiment:

- Open sentiments.json.
- Add a new object to the responses array with your desired keywords, emoji, and response.

## Example:
```
{
    "keywords": ["relaxed", "calm", "peaceful"],
    "emoji": "😌",
    "response": "It's great that you're feeling relaxed. Enjoy the peace and take it easy."
}
```

## Customization

- **Adding New Emotions**: Update sentiments.json with new keywords, emojis, and responses.
- **Changing Styles**: Modify styles.css to adjust the look and feel of the chatbot.
- **Typing Delay**: Adjust the typing simulation delay in script.js to change how long the chatbot "thinks" before responding.

## Future Improvements

- **Machine Learning**: Integrate NLP to analyze user sentiment more accurately.
- **User Authentication**: Allow users to save chat history and access it later.
- **Backend Support**: Connect to a database for storing user conversations and custom responses.

## Contributing

- Feel free to fork the repository and submit pull requests. Contributions are welcome to enhance the chatbot’s functionality or improve the user experience.

## Contact
For questions, feedback, or further inquiries, reach out at kishanshukla631@gmail.com

