# Word Twist · Letters have secrets

Small, responsive English anagram game for mixed-level classrooms. **No registration, no accounts, no analytics or tracking, no external JavaScript dependencies.** English vocabulary; introduction to *anagrams* in **English, Czech and Ukrainian**. Interface language selector: EN / CZ / УКР. Four selectable difficulty levels from easy to expert; 56 verified puzzles. Pupils can enter answers with a keyboard or tap letter tiles. Hints and progress are optional; no time pressure.

## GitHub location

This game is published as a separate `word-twist/` directory inside the existing
`janat-hue/-teacher-ai-tool` GitHub repository. Existing files and other apps are unchanged.

When GitHub Pages is enabled to deploy the `main` branch from the repository root,
the game address is:

https://janat-hue.github.io/-teacher-ai-tool/word-twist/

If that address returns 404, enable GitHub Pages via repository **Settings → Pages →
Deploy from a branch → main → / (root) → Save**. Pages can take some time to deploy.

No server or accounts are required; the game uses only static frontend files.
The optional Unsplash hero image requires network access; the game works without it.

## Files

- `index.html` — page, explanation in three languages, game layout.
- `styles.css` — responsive visual design, reduced-motion support.
- `game.js` — all game data and logic, labels in three languages.
- `assets/favicon.svg` — simple original logo.
- `anagram-data.json` — editable, human-readable copy of the puzzle library.

To add a puzzle, edit `DECKS` at the beginning of `game.js`. Every solution must contain **exactly the same letters** as the source. Spaces are ignored. You can also specify other accepted answers in `accepted`.

## Image licence / credit

Hero photo: **Debby Hudson**, “A pile of wooden letters sitting on top of a table”, [Unsplash](https://unsplash.com/photos/a-pile-of-wooden-letters-sitting-on-top-of-a-table-Mq2lhWl54ME). Published 12 August 2024. The photographer's page marks the photo “Free to use under the Unsplash License”. See [Unsplash License](https://unsplash.com/license). Credit and links are included in the footer. Image loads directly from Unsplash (it isn't packaged into the ZIP).

If you want a fully offline hero photo, download this image yourself from Unsplash and replace `background-image:url(...)` in `styles.css` with a file path you put under `assets/`.

## Notes

- Hints are currently in English, because pupils are practicing English vocabulary. Interface controls can be switched to Czech and Ukrainian.
- The definitions remain visible in EN/CZ/UK regardless of interface language.
- A word with exactly the right letters but not included in the answer list will not be marked correct. If a pupil finds an additional valid English anagram, add it to that puzzle's `accepted` array.
- The game stores nothing in cookies, browser local storage or on a server.