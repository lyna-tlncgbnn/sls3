import { useEffect, useState } from "react";
import { ClimateBar } from "./ClimateBar";
import { CockpitDock, type CockpitSection } from "./CockpitDock";
import { NavigationCard } from "./NavigationCard";
import { SmartPanel } from "./SmartPanel";
import { StatusBar } from "./StatusBar";
import { VehicleCard } from "./VehicleCard";

const sectionNames: Record<CockpitSection, string> = {
	home: "首页", navigation: "地图导航", vehicle: "车辆控制", music: "音乐媒体", assistant: "小境 AI", settings: "系统设置",
};

export function CockpitHome() {
	const [activeSection, setActiveSection] = useState<CockpitSection>("home");
	const [notice, setNotice] = useState<string | null>(null);

	useEffect(() => {
		if (!notice) return;
		const timer = window.setTimeout(() => setNotice(null), 2200);
		return () => window.clearTimeout(timer);
	}, [notice]);

	const handleSelect = (section: CockpitSection) => {
		if (section === "home") {
			setActiveSection("home");
			setNotice(null);
			return;
		}
		setActiveSection(section);
		setNotice(`${sectionNames[section]}正在建设中`);
	};

	return <main className="cockpit-shell">
		<div className="ambient ambient-one"/><div className="ambient ambient-two"/>
		<StatusBar/>
		<div className="cockpit-content"><VehicleCard/><NavigationCard/><SmartPanel/></div>
		<ClimateBar/>
		<CockpitDock active={activeSection} onSelect={handleSelect}/>
		{notice && <div className="cockpit-toast" role="status"><span/>{notice}<small>下一阶段将接入独立应用</small></div>}
	</main>;
}
