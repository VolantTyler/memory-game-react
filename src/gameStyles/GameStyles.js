export const basicStyleAndData = [
  {
    card: "glasses",
    matched: false,
    cardFlipped: false,
    id: 1,
    clickable: true
  },
  {
    card: "cannabis",
    matched: false,
    cardFlipped: false,
    id: 2,
    clickable: true
  },
  { card: "frog", matched: false, cardFlipped: false, id: 3, clickable: true },
  {
    card: "user-secret",
    matched: false,
    cardFlipped: false,
    id: 4,
    clickable: true
  },
  { card: "eye", matched: false, cardFlipped: false, id: 5, clickable: true },
  { card: "poo", matched: false, cardFlipped: false, id: 6, clickable: true },
  {
    card: "user-ninja",
    matched: false,
    cardFlipped: false,
    id: 7,
    clickable: true
  },
  { card: "dice", matched: false, cardFlipped: false, id: 8, clickable: true },
  {
    card: "glasses",
    matched: false,
    cardFlipped: false,
    id: 9,
    clickable: true
  },
  {
    card: "cannabis",
    matched: false,
    cardFlipped: false,
    id: 10,
    clickable: true
  },
  { card: "frog", matched: false, cardFlipped: false, id: 11, clickable: true },
  {
    card: "user-secret",
    matched: false,
    cardFlipped: false,
    id: 12,
    clickable: true
  },
  { card: "eye", matched: false, cardFlipped: false, id: 13, clickable: true },
  { card: "poo", matched: false, cardFlipped: false, id: 14, clickable: true },
  {
    card: "user-ninja",
    matched: false,
    cardFlipped: false,
    id: 15,
    clickable: true
  },
  { card: "dice", matched: false, cardFlipped: false, id: 16, clickable: true }
];

export const cardStyle = {
  display: "grid",
  backgroundColor: "rgba(139, 22, 10, 0.3)",
  borderRadius: "5px",
  boxShadow: "0 1px 3rem 2px rgba(185, 200, 250, 0.85)"
};

export const flippedCardStyle = {
  opacity: 1,
  justifySelf: "center",
  alignSelf: "center",
  fontSize: "4rem"
};

export const matchedCardStyle = {
  opacity: 1,
  backgroundColor: "salmon",
  width: "100%",
  height: "100%",
  display: "grid"
};

export const boardStyle = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr 1fr",
  gridTemplateRows: "1fr 1fr 1fr 1fr",
  gap: ".5rem",
  maxWidth: "800px",
  maxHeight: "80vh",
  height: "1350px",
  margin: "0 auto"
  // padding: "1.5rem"
};

export const settingsStyle = {
  width: "200px",
  height: "200px",
  position: "fixed",
  top: "3rem",
  right: "3rem",
  fontSize: "2rem"
};

export const modalStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};

export const modalContentStyle = {
  display: "grid",
  gridTemplateColumns: "1fr",
  justifyItems: "center",
  padding: "1.5rem"
};

export const scorePanelStyle = {
  maxWidth: "800px",
  height: "5vh",
  margin: "1.5rem auto",
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr 1fr",
  gridTemplateRows: "100%",
  justifyItems: "center",
  alignItems: "center"
};
