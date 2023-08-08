// Sidebar.style.js
import styled from "styled-components";
import { Menu } from "antd";

export const SidebarContainer = styled.div`
  background: linear-gradient(to right, #ffffff 50%, #f6f7f8 100%);
  width: 256px;
  height: 100vh;
`;

export const CustomMenu = styled(Menu)`
  margin-top: 30px;
  background: linear-gradient(to right, #ffffff 50%, #f6f7f8 100%);
  .ant-menu-submenu-title {
    width: 256px !important;
    margin: 0px !important;
    border-radius: 0px !important;
    color: black !important;
    &:hover {
      background-color: #f0f2f3 !important;
      color: black !important;
    }
  }
`;

export const CustomMenuItem = styled(Menu.Item)`
  margin: 0px !important;
  width: 100% !important;
  border-radius: 0px !important;
  &.ant-menu-item-selected {
    background-color: #e0e4e8 !important;
    color: black !important;
  }
  &.ant-menu-item:hover {
    background-color: #f0f2f3 !important;
    color: black;
  }
  border: none !important;
`;
