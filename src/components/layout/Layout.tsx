import React, { useState } from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

import { ChevronDown, ChevronUp } from "lucide-react";

export type MenuItem = {
  icon: React.ReactNode;
  label: string;
  href?: string;
  subItems?: MenuItem[];
};

const MenuItemComponent = ({ item }: { item: MenuItem }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSubmenu = () => {
    if (item.subItems) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <SidebarMenuItem>
      <SidebarMenuButton tooltip={item.label} onClick={toggleSubmenu}>
        {item.icon}
        <span>{item.label}</span>
        {item.subItems && (
          <span className="ml-auto">
            {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </span>
        )}
      </SidebarMenuButton>
      {item.subItems && isOpen && (
        <SidebarMenuSub>
          {item.subItems.map((subItem) => (
            <SidebarMenuSubItem key={subItem.label}>
              <SidebarMenuSubButton size="sm">
                {subItem.icon}
                <span>{subItem.label}</span>
              </SidebarMenuSubButton>
            </SidebarMenuSubItem>
          ))}
        </SidebarMenuSub>
      )}
    </SidebarMenuItem>
  );
};

export const SidebarWithContentLayout = ({
  children,
  menus,
}: {
  children: React.ReactNode;
  menus: MenuItem[];
}) => {
  return (
    <SidebarProvider>
      <div className="flex w-screen">
        <Sidebar>
          <SidebarHeader className="flex items-center justify-between p-4">
            <h2 className="text-lg font-semibold">Master Manager</h2>
          </SidebarHeader>
          <hr className="pt-2 pb-2" />
          <SidebarContent>
            <SidebarMenu>
              {menus.map((item) => (
                <MenuItemComponent key={item.label} item={item} />
              ))}
            </SidebarMenu>
          </SidebarContent>
        </Sidebar>
        <div className="p-2 flex">
          <SidebarTrigger />
          menus
        </div>

        <main className="flex-1 p-8">
          <div className="mx-full">{children}</div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default SidebarWithContentLayout;
