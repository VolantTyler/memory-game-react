export const colorProfiles = [
  {
    value: "Basic",
    cardStyle: {
      display: "grid",
      backgroundColor: "rgba(139, 22, 10, 0.3)",
      borderRadius: "5px",
      boxShadow: "0 1px 3rem 2px rgba(135, 200, 250, 0.65)"
    },
    flippedCardStyle: {
      opacity: 1,
      justifySelf: "center",
      alignSelf: "center",
      fontSize: "4rem"
    },
    matchedCardStyle: {
      opacity: 1,
      backgroundColor: "salmon",
      width: "100%",
      height: "100%",
      display: "grid"
    }
  }
];

export const cardOptions = [
  { name: "Basic", url: "https://api.myjson.com/bins/6wo9q" },
  { name: "Home", url: "https://api.myjson.com/bins/8htda" },
  { name: "Oddball", url: "https://api.myjson.com/bins/1e8avi" },
  { name: "Tech", url: "https://api.myjson.com/bins/gy65q" }
];
