# Voice-Typer Using DeepGram API

## How It Works

- A **Node.js WebSocket server** proxies microphone audio to the Deepgram streaming API.
- The browser captures your voice via the mic using `MediaRecorder`.
- Audio is streamed in real-time and Deepgram returns live transcripts.
- Transcripts are displayed in a `<textarea>` as you speak.


## Setup Instructions

### 1. Clone the Repository

### 2. Install Dependencies

```bash
npm install express ws dotenv
```

### 3. Get Deepgram API Key

- Create an account at [https://deepgram.com](https://deepgram.com)
- Go to Dashboard → API Keys → Create a new key
- Create a `.env` file in the root of the project:

```bash
# .env
DEEPGRAM_API_KEY=your_deepgram_api_key
```

## Running the Project

### Step 1: Start the Node.js WebSocket Server by using this command :

```bash
node server.js
```

### Step 2: Open the Frontend by :

Use any live server to open `index.html`. Recommended:

## Screenshot

![Screenshot 2025-06-22 162708](https://github.com/user-attachments/assets/b0cf13c1-464b-4571-be45-7e5a1aa60c5c)

## Demo Video

https://github.com/user-attachments/assets/d37a9402-0684-4b7e-9614-d58d9816ddd6
