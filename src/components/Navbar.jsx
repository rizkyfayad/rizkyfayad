import React, { useState, useEffect } from "react";
import {
  IconHome,
  IconUser,
  IconBriefcase,
  IconMail,
  IconSun,
  IconMoon,
} from "@tabler/icons-react";
import { FloatingDock } from "@/components/ui/floating-dock";
import { useTheme } from "../contexts/ThemeContext";
export const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  const links = [
    {
      title: "Home",
      icon: <IconHome className="h-5 w-5" />,
      href: "#home",
    },
    {
      title: "About",
      icon: <IconUser className="h-5 w-5" />,
      href: "#about",
    },
    {
      title: "Projects",
      icon: <IconBriefcase className="h-5 w-5" />,
      href: "#projects",
    },
    {
      title: "Contact",
      icon: <IconMail className="h-5 w-5" />,
      href: "#contact",
    },
    {
      title: theme === 'dark' ? "Light Mode" : "Dark Mode",
      icon: theme === 'dark' ? <IconSun className="h-5 w-5" /> : <IconMoon className="h-5 w-5" />,
      href: "#",
      onClick: toggleTheme,
    },
  ];

  return (
    <div className="fixed bottom-5 left-0 right-0 flex justify-center z-50">
      <FloatingDock items={links} />
    </div>
  );
};
