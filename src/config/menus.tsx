import {
  HomeIcon,
  FileTextIcon,
  BarChartIcon,
  MailIcon,
  UserIcon,
  SettingsIcon,
} from "lucide-react";
import { MenuItem } from "@/components/layout/Layout";

export const menuItems: MenuItem[] = [
  {
    icon: <HomeIcon className="h-4 w-4" />,
    label: "Home",
    href: "/",
  },
  {
    icon: <FileTextIcon className="h-4 w-4" />,
    label: "Content",
    subItems: [
      {
        icon: <FileTextIcon className="h-4 w-4" />,
        label: "Pages",
        href: "/content/pages",
      },
      {
        icon: <FileTextIcon className="h-4 w-4" />,
        label: "Blog Posts",
        href: "/content/blog",
      },
    ],
  },
  {
    icon: <BarChartIcon className="h-4 w-4" />,
    label: "Analytics",
    subItems: [
      {
        icon: <BarChartIcon className="h-4 w-4" />,
        label: "Dashboard",
        href: "/analytics/dashboard",
      },
      {
        icon: <BarChartIcon className="h-4 w-4" />,
        label: "Reports",
        href: "/analytics/reports",
      },
    ],
  },
  {
    icon: <MailIcon className="h-4 w-4" />,
    label: "Messages",
    href: "/messages",
  },
  {
    icon: <UserIcon className="h-4 w-4" />,
    label: "Profile",
    href: "/profile",
  },
  {
    icon: <SettingsIcon className="h-4 w-4" />,
    label: "Settings",
    href: "/settings",
  },
];
