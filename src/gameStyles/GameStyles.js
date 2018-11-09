import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faGlasses,
  faFrog,
  faUserSecret,
  faEye,
  faPoo,
  faUserNinja,
  faDice,
  faCannabis,
  faCog,
  faStar,
  faStarHalfAlt, // end basic set
  faBath,
  faChair,
  faCarSide,
  faHome,
  faTv,
  faTree,
  faBed,
  faCouch, // end home set
  faAngry,
  faBong,
  faBookDead,
  faBrain,
  faCodeBranch,
  faFlushed,
  faDharmachakra,
  faDragon, // end oddball set
  faChess,
  faChessBishop,
  faChessBoard,
  faChessKing,
  faChessKnight,
  faChessQueen,
  faChessPawn,
  faChessRook
} from "@fortawesome/free-solid-svg-icons";
import { faStar as farFaStar } from "@fortawesome/free-regular-svg-icons";
export const Library = library.add(
  faGlasses,
  faFrog,
  faUserSecret,
  faEye,
  faPoo,
  faUserNinja,
  faDice,
  faCannabis,
  faCog,
  faStar,
  faStarHalfAlt,
  farFaStar, // end basic style
  faBath,
  faChair,
  faCarSide,
  faHome,
  faTv,
  faTree,
  faBed,
  faCouch, // end home set
  faAngry,
  faBong,
  faBookDead,
  faBrain,
  faCodeBranch,
  faFlushed,
  faDharmachakra,
  faDragon, // end oddball set
  faChess,
  faChessBishop,
  faChessBoard,
  faChessKing,
  faChessKnight,
  faChessQueen,
  faChessPawn,
  faChessRook
);

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

export const styles = [
  { name: "Basic", url: "https://api.myjson.com/bins/6wo9q" },
  { name: "Home", url: "https://api.myjson.com/bins/8htda" },
  { name: "Oddball", url: "https://api.myjson.com/bins/1e8avi" },
  { name: "Tech", url: "https://api.myjson.com/bins/gy65q" }
];
