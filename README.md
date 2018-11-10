# Memory Game - React

This repo is an initial redesign of Udacity's Front-End Web Developer `Memory Game` nanodegree project using React. This solo project utilizes a few third-party component libraries, including `Font Awesome - React`, `rc-slider`, `react-modal`, and incoroporates `localStorage` and service workers to allow users to keep a history of their gameplay (scores). As this is still in development, certain features aren't fully implemented. However, the game functions at a basic level. A list of `TODO`s are provided at the end of this `README`.

### Installation

- Note: `npm` is required, so be sure you've got the latest version installed prior to locally testing or building this app.

Clone or download the repo, then navigate to the root project directory. In your preferred terminal or command-line tool, run `npm i` to install the project's dependencies. To run the game in development mode, simply enter `npm start` once the dependencies have finished downloading. Open [http://localhost:3000](http://localhost:3000) to view it in the browser (your editor may instead open a window in your default browser).

## (In-Progress) DEMO

Visit [Heroku](https://react-memory-game-jmw.herokuapp.com/) for a live demo.

#### TODOs

- Add responsiveness - currently works fine on laptop and desktop computers, but will need media queries.
- Add error boundaries and offline/online notifications via Toastify component library.
- Finish baking in theme/styling/card settings options, such that players can choose from different decks, color schemes, and even sound effects profiles.
- UPDATE 11/8/18: Card styling options have been implemented, but the interface for choosing styles is quite basic. Considering use of `react-select` for the menu, via an implemented `form` element and dynamic options depending on the MyJSON API-fetched styles (cards and color schemes). UPDATE 11/10/18: Modified Card-Style selection interface using `styled-components`, partly. However, the entirety of the settings menu will be moved to a settings modal, queued up by clicking the gear icon; also considering moving `Start Over` button to the modal. This would leave the stars, timer, and possibly points on the Score Panel, and all settings in said modal.
- Add either classes or use a third-party component library for audio functionality (or perhaps utility functions).
- UDATE 11/8/18: Custom `audio/LoopAudio.js` component utilized for sound effects. TODO: further customze so that props account for various sound demands -- initial click for ticking, per-click profiles for `success` and `fail` match attempts, etc.
- UPDATE 11/8/18: CSS-as-JS implemented, although considering `styled-components` for all game styling (transition won't be strenuous, and it'll allow for various hover/active/focus styling more easily than the current approach -- better to stick with `styled-components` versus a Frankenstein's blend of CSS and CSS-as-JS). UPDATE 11/10/18: Implemented `styled-components` for most game styles, sans cards -- while this would allow for a more tranditional `backface-visibility` approach to flipping the cards, it will require mild refactoring of card logic. TODO: Update card styling to utilize `styled-components`, negating the need for `react-spring`.
- Since JavaScript styling is used extensively over traditional CSS, clean up and centrally locate all styles into discrete files for development (see update and TODO above). UPDATE 11/10/18: Largely completed, but still need to inject further styles (TODO: update overall board and card styling, and use `styled-components` to inject media queries).
- Implement tests to ensure functionality conforms to expectations.
- Release to select reviewers for input on improvment -- for example, implementing React 'best practices'.
