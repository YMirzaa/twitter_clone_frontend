import React from "react";

import './styles.css';

interface SidebarOptionProps {
    active?: boolean;
    text?: string;
    Icon?: any;
}

export default function SidebarOption({ active, text, Icon }: SidebarOptionProps) {
  return <div className={`sidebar-option ${active && "sidebar-option--active"}`} >
    <Icon />
    <h2>{text}</h2>
  </div>;
}