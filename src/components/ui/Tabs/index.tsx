import React, { useState } from "react";
import "./index.scss";

export type DataTabItem = {
    title: string;
    id: number;
};

interface TabProps {
    data: DataTabItem[];
    onChangeTab: (tab: DataTabItem) => void;
}

const Tabs = ({ data, onChangeTab }: TabProps) => {
    const [activeTabId, setActiveTabId] = useState<number | undefined>(1);

    const handleActive = (tab: DataTabItem) => {
        onChangeTab(tab);
        setActiveTabId(tab.id);
    };

    return (
        <div className="tabs">
            <div className="tabs__menu">
                <div className="tabs__menu--list">
                    {data.map((tab) => (
                        <div
                            key={tab.id}
                            className={`tabs__menu--item ${
                                activeTabId === tab.id ? "active" : ""
                            }`}
                        >
                            <span
                                onClick={() => handleActive(tab)}
                                className="tabs__menu--item-link"
                            >
                                {tab.title}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Tabs;
