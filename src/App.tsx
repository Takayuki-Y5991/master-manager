import SidebarWithContentLayout from "./components/layout/Layout";
import { Base } from "@/features/Base";
import { menuItems } from "@/config/menus";
import { Menus } from "./features/menus/Menus";
import { HoursInputForm } from "./components/utils/HoursInputForm";

function App() {
  return (
    <SidebarWithContentLayout menus={menuItems}>
      <HoursInputForm onSubmit={(data) => console.log(data)} />
    </SidebarWithContentLayout>
  );
}

export default App;
