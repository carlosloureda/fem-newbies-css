import ProfileCard from "./components/ProfileCard";
import { Global, css } from "@emotion/react";
import styled from "@emotion/styled";

const GlobalStyles = css`
  @import url("https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@400;700&display=swap");
  * {
    font-size: 18px;
    line-height: 18px;
    font-family: "Kumbh Sans", sans-serif;
    box-sizing: border-box;
  }
`;

const S = {
  App: styled.div`
    text-align: center;
    position: relative;
    /* Required as we set position relative to center the child */
    width: 100%;
    height: 100vh;
    background-color: #19a2ae;
  `,
};

function App() {
  return (
    // TODO: add background/theme !
    <S.App>
      <Global styles={GlobalStyles} />
      <ProfileCard />
    </S.App>
  );
}

export default App;
