import { useSearchParams } from "react-router-dom";
import "./Tabs.scss";

import React, { useState } from "react";

export interface TabItem {
  label: string;
  content: React.FC;
}

export interface TabsProps {
  items: TabItem[];
  defaultTabIndex?: number;
}

export default function Tabs({
  items,
  defaultTabIndex = 0
}: TabsProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const tabParam = parseInt(
    searchParams.get("tab") || "0",
    10
  );
  const [activeTab, setActiveTab] = useState(
    isNaN(tabParam) ? defaultTabIndex : tabParam
  );

  const Child = items[activeTab].content;
  return (
    <div className="tabs">
      <div className="tabs-header">
        {items.map((item, index) => (
          <button
            key={index}
            className={activeTab === index ? "active" : ""}
            onClick={() => {
              setActiveTab(index);
              setSearchParams({ tab: index.toString() });
            }}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div className="tabs-content">
        <Child />
      </div>
    </div>
  );
}
