import styled from "styled-components";
import SideBar from "./sidebar/Sidebar.index";

export const Container = styled.div`
  display: flex;
`;

export const Body = styled.div``;

export const Layout = (props) => {
  return (
    <Container>
      <SideBar />
      <Body>{props.children}</Body>
    </Container>
  );
};
