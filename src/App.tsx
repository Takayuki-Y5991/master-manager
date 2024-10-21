import SidebarWithContentLayout from "./components/layout/Layout";
import { Base } from "@/features/Base";
import { menuItems } from "@/config/menus";
import { Menus } from "./features/menus/Menus";

function App() {
  return <SidebarWithContentLayout children={Menus()} menus={menuItems} />;
}

export default App;
