## 🕹️ Blink Tac Toe — Player vs Computer
Blink Tac Toe is a playful and animated twist on the classic Tic Tac Toe game. Built using React (Vite), it supports:

 - Player vs Computer mode
 - Player vs Player mode
 - Emoji category selection
 - Vanishing rule gameplay
 - Dark mode support
 - Move history tracking
 - Rich visual UI with avatars, animations, and effects

## ✨ Features
### 🎮 Gameplay Mechanics

- Select from various emoji categories (e.g. Animals, Food, Sports)
- Only 3 emojis allowed on the board per player at any time
- The oldest emoji vanishes when a 4th is placed
- Win by forming a line of 3 emojis
- No draws — keep playing until someone wins!

## 🧠 Player vs AI
- Computer selects random emojis
- Computer plays intelligently using available spaces
- Turn-based logic with visual highlighting

## 👯‍♀️ Player vs Payer
- Each player select there emojis
- Players plays intelligently using available spaces
- Turn-based logic with visual highlighting

## 💎 UI/UX Enhancements
- Modern responsive UI with Tailwind CSS
- Highlighted turns and winner banners
- Custom avatars for player and AI
- Lottie animations and confetti effects
- Emoji-based move timeline and stats

## 📁 Project Structure
src/ <br>
├── assets/<br>
│   ├── emojis.js<br>
│   ├── react.svg<br>
│   └── winnerAnimation.json<br>
├── components/<br>
│   └── ui/ <br>
│   ├── Board.jsx<br>
│   ├── Cell.jsx<br>
│   ├── Emoji.jsx<br>
│   ├── EmojiCategoryModal.jsx<br>
│   ├── GameSelectionCards.jsx<br>
│   ├── GameStats.jsx<br>
│   ├── GameStatsMultiplayer.jsx<br>
│   ├── Help.jsx<br>
│   ├── Navbar.jsx<br>
│   ├── PlayerHeader.jsx<br>
│   ├── PlayerSetupModal.jsx<br>
│   ├── ThemeToggle.jsx<br>
│   └── WinnerModal.jsx<br>
├── hooks/ <br>
│   ├── useMultiplayerGame.js <br>
│   └── useSinglePlayerGame.js<br>
├── lib/<br>
├── pages/  <br>
│   ├── GameSelection.jsx<br>
│   ├── MultiPlayer.jsx<br>
│   └── SinglePlayerGame.jsx<br>
├── App.jsx<br>
├── App.css<br>
└── index.css<br>

## 📽️ Recorded Video
[![Watch the demo on loom](https://www.loom.com/share/d8222a1a7dba443d8178712b27ece8d9?sid=8de4f3a5-aa29-4dd9-9322-f7dedc4f3b20)](https://www.loom.com/share/d8222a1a7dba443d8178712b27ece8d9?sid=8de4f3a5-aa29-4dd9-9322-f7dedc4f3b20)


## 🚀 Getting Started
### 📦 Prerequisites
 Make sure you have:

Node.js (v18+ recommended)

npm or pnpm

## 📥 Installation
### Clone the repository
`git clone https://github.com/sagar-embadi/blink-tac-toe.git`

### Navigate to the project folder
`cd blink-tac-toe`

### Install dependencies
`npm install`

### ▶️ Run the App
`npm run dev`

Visit http://localhost:5173 in your browser.

## 🧱 Technologies Used
- React
- Vite
- Tailwind CSS
- Lottie React
- ShadCN/UI (optional for dialog + button UI)

## 🛠️ Customization
- Add your own emoji categories in assets/emojis.js
- Replace avatars with user-uploaded ones
- Implement difficulty levels in computerPlay()
- Extend to Multiplayer or Online via Socket.IO

## 📌 To Do
 - Multiplayer support via WebSockets
-  Leaderboard (localstorage or backend)
-  Minimax AI for harder mode


## 📄 License
This project is licensed under the MIT License.
Feel free to fork, improve, and customize!

## 👦Author

- Sagar Embadi
- sagarembadi7@gmail.com
- https://www.linkedin.com/in/sagar-embadi