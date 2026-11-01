# Simon Says Game 🎮

🔗 **Live Demo:** [Play Simon Says Game](https://simon-says-game-bice.vercel.app/)

📂 **GitHub Repository:** [SimonSaysGame](https://github.com/AneeshPal/SimonSaysGame)

## About the Project

Simon Says is a memory-based game built using HTML, CSS, and JavaScript. The game generates a random sequence of colors, and the player has to remember and repeat that sequence in the correct order.

I built this project to improve my understanding of JavaScript fundamentals, DOM manipulation, event handling, and game logic.

The game starts when the user presses any key. With every new level, another color is added to the sequence, making the game more challenging.

## Features

- Interactive and simple user interface.
- Random color sequence generation.
- Increasing difficulty with each level.
- Flash animations for both game and user interactions.
- Checks whether the user's input matches the generated sequence.
- Game Over detection when an incorrect button is pressed.
- Highest score tracking during the current session.
- Restart the game by pressing any key after Game Over.

## Technologies Used

- **HTML5** – Structure of the game.
- **CSS3** – Styling, colors, and animations.
- **JavaScript** – Game logic, DOM manipulation, and event handling.

## How to Play

1. Open the game using the Live Demo link.
2. Press any key on your keyboard to start.
3. Watch carefully which color button flashes.
4. Click the same button.
5. In the next level, repeat the previous sequence and remember the newly added color.
6. Continue following the sequence correctly to reach higher levels.
7. Clicking the wrong button ends the game.

## Project Structure

```text
SimonSaysGame/
│
├── index.html
├── style.css
└── logic.js
```

## Getting Started

To run this project on your local machine:

**1. Clone the repository**

```bash
git clone https://github.com/AneeshPal/SimonSaysGame.git
```

**2. Navigate to the project directory**

```bash
cd SimonSaysGame
```

**3. Run the project**

Open `index.html` in your browser.

No additional dependencies or installations are required.

## What I Learned

While building this project, I got hands-on experience with:

- Working with JavaScript arrays to maintain game and user sequences.
- Using `addEventListener()` to handle keyboard and mouse events.
- DOM manipulation using `querySelector()` and `innerText`.
- Using `setTimeout()` to create flash effects and manage game timing.
- Implementing conditional statements to validate user input.
- Managing game states such as starting, level progression, and game over.

## Future Improvements

- Add sound effects for button clicks.
- Store the highest score using Local Storage.
- Make the game more responsive for mobile devices.
- Add a dedicated restart button.

---

**Built with ❤️ using HTML, CSS, and JavaScript.**