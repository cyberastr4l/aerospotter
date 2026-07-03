# AeroSpotter: Talent Show Edition

**AeroSpotter** is a bold, high-contrast aircraft and airport identification quiz game designed in a clean, modern **Runway Brutalist** style. It was custom-built for a school Talent Show to test spotting skills in a fast-paced, interactive presentation format.

The game is designed to be played live with a host presenting the screen to an audience.

---

## 🎮 How to Play

1. **Launch the Game**: Click **Launch Game** (or **Iniciar Jogo**) on the welcome screen. The deck will automatically shuffle a random sequence of aircraft and airports.
2. **Reveal the Card**: Click the locked card cover to reveal the silhouette/code. A **10-second shutter countdown** begins immediately!
3. **State the Identification**: The player must call out the name of the aircraft or airport before the timer runs out. If time expires, the image and code will blur.
4. **Reveal the Answer**: Click **Reveal Answer** to display the correct name.
5. **Validate & Auto-Advance**: The host clicks **Correct** or **Incorrect** to validate the player's guess. The progress bar (green/red step dots) updates, and the game **immediately advances** to the next card.
6. **Final Debriefing**: Once all rounds are finished, a report is displayed showing:
   * **Final Score**: The number of correct identifications.
   * **Elapsed Time**: The sum of the time used on each active timer (seconds up to 60s, then formatted as minutes and seconds).
   * **Flight Archive**: A detailed visual log of each round with thumbnails, correct names, and identification results.

---

## ✨ Key Features

*   **Runway Brutalist Aesthetics**: High-contrast layout with thick solid borders, flat offset shadows, and diagonal hazard stripes inspired by airfield markings.
*   **Dual-Asset Shuffling**: Integrates aircraft silhouettes and airport code overlays seamlessly in a single randomized quiz deck.
*   **Airport Code Overlay**: Airport rounds feature the official 3-letter IATA airport code image overlaying the bottom-center of the airfield image.
*   **Coherent Dark Mode**: A top-right toggle switches between light and dark themes. The dark theme features a pure black background and deep gray cards, while keeping the signature yellow branding accents and flat white offset shadows completely intact.
*   **Legibility First**: Text on colored backgrounds (yellow buttons/tags, green success elements, red danger elements) is forced to black to guarantee readability in all lighting conditions.
*   **European Portuguese & English (PT/EN)**: Fully localized language toggle for Portuguese (PT-PT) and English (EN).
*   **Zero-Overhead Presentation**: Stripped of names, scoreboards, and clutter—perfect for clean big-screen viewing during live events.

---

## 📂 Repository Structure

The project is structured into two versions depending on deployment needs:

*   **Root Directory**: Online-ready version. Fetches assets (aircraft and airport images) dynamically from a CDN (`https://cdn.realfoto.pt/aerospotter/`).
*   **`offline version/`**: Standalone offline version. Bundled with local asset directories under `planes/` and `airports/` for offline setups where an internet connection is unavailable.
