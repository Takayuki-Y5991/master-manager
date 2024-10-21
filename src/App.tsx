import SidebarWithContentLayout from "./components/layout/Layout";
import { Base } from "@/features/Base";
import { menuItems } from "@/config/menus";

function App() {
  return <SidebarWithContentLayout children={Base()} menus={menuItems} />;
}

export default App;
