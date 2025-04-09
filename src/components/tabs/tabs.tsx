import "./Tabs.scss";

import { useState } from "react";

//DYLAN EST UN LOOSER



export interface TabItem {
  label: string;
  content: React.ReactNode;
}

export interface TabsProps {
  items: TabItem[];
  defaultTabIndex?: number;
}

export function Tabs({ items, defaultTabIndex = 0 }: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultTabIndex);

  return (
    <div className="tabs">
      <div className="tabs-header">
        {items.map((item, index) => (
          <button
            key={index}
            className={activeTab === index ? "active" : ""}
            onClick={() => setActiveTab(index)}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div className="tabs-content">
        {items[activeTab]?.content}
      </div>
    </div>
  );
}
