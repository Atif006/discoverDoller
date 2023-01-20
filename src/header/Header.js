import styled from "@emotion/styled";
import { AppBar, Button } from "@mui/material";
import SearchBar from "./SearchBar";

const StyleHeader = styled(AppBar)`
  background: #2874f0;
  height: 54px;
  box-shadow: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Header = () => {
  return (
    <StyleHeader>
      <SearchBar />
      <Button style={{ background: "white", height: 30, marginLeft: 50 }}>
        Login
      </Button>
    </StyleHeader>
  );
};

export default Header;
