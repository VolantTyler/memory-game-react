# Memory Game - React

This repo is an initial redesign of Udacity's Front-End Web Developer `Memory Game` nanodegree project using React. This solo project utilizes a few third-party component libraries, including `Font Awesome - React`, `rc-slider`, `react-modal`, and incoroporates `localStorage` and service workers to allow users to keep a history of their gameplay (scores). As this is still in development, certain features aren't fully implemented. However, the game functions at a basic level. A list of `TODO`s are provided at the end of this `README`.

### Installation

- Note: `npm` is required, so be sure you've got the latest version installed prior to starting or building this app.

Clone or download the repo, then navigate to the root project directory. In your preferred terminal or command-line tool, run `npm i` to install the project's dependencies. To run the game in development mode, simply enter `npm start` once the dependencies have finished downloading. Open [http://localhost:3000](http://localhost:3000) to view it in the browser (your editor may instead open a window in your default browser).

#### TODOs

- Add responsiveness - currently works fine on laptop and desktop computers, but will need media queries.
- Add error boundaries and offline/online notifications.
- Finish baking in theme/styling/card settings options, such that players can choose from different decks, color schemes, and even sound effects profiles.
- Add either classes or use a third-party component library for audio functionality (or perhaps utility functions)
- Since JavaScript styling is used extensively over traditional CSS, clean up and centrally locate all styles into discrete files for development.
- Implement tests to ensure functionality conforms to expectations.
- Release to select reviewers for input on improvment -- for example, implementing React 'best practices'.
