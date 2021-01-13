import "./App.css";

import ProfileCard from "./components/ProfileCard";
import { Global, css } from "@emotion/react";

const GlobalStyles = css`
  @import url("https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@400;700&display=swap");
  * {
    font-size: 18px;
    font-family: "Kumbh Sans", sans-serif;
    box-sizing: border-box;
  }
`;

function App() {
  return (
    // TODO: add background/theme !
    <div className="App">
      <Global styles={GlobalStyles} />
      <ProfileCard />
    </div>
  );
}

export default App;
