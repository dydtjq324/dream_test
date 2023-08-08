import { Menu } from "antd";
import { SidebarContainer, CustomMenuItem, CustomMenu } from "./Sidebar.style";

const { SubMenu } = Menu;

function getItem(label, key, icon, items) {
  return {
    key,
    icon,
    items,
    label,
  };
}

const items = [
  getItem("대메뉴", "대메뉴1", null, [
    getItem("소메뉴", "1"),
    getItem("소메뉴", "2"),
  ]),
  getItem("대메뉴", "대메뉴2", null, [
    getItem("소메뉴", "3"),
    getItem("소메뉴", "4"),
  ]),
];

const Sidebar = () => {
  const onClick = (e) => {
    console.log(`${e.key}번 페이지로 이동`);
  };

  return (
    <SidebarContainer>
      <CustomMenu onClick={onClick} mode="inline">
        {items.map((menuItem) => (
          <SubMenu key={menuItem.key} title={menuItem.label}>
            {menuItem.items.map((subItem) => (
              <CustomMenuItem key={subItem.key}>{subItem.label}</CustomMenuItem>
            ))}
          </SubMenu>
        ))}
      </CustomMenu>
    </SidebarContainer>
  );
};

export default Sidebar;
