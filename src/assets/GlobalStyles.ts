import { createGlobalStyle } from "styled-components";
import {colors} from "../colors"

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: ${colors.NETURALS._100};
  }
`;

export default GlobalStyle;