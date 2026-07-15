import { Icon, type IconName } from "./Icon";

export type CockpitSection = "home" | "navigation" | "vehicle" | "music" | "assistant" | "settings";

const items: Array<{ id: CockpitSection; label: string; icon: IconName }> = [
	{ id: "home", label: "首页", icon: "home" },
	{ id: "navigation", label: "导航", icon: "navigation" },
	{ id: "vehicle", label: "车辆", icon: "vehicle" },
	{ id: "music", label: "音乐", icon: "music" },
	{ id: "assistant", label: "小境", icon: "sparkle" },
	{ id: "settings", label: "设置", icon: "settings" },
];

export function CockpitDock({ active, onSelect }: { active: CockpitSection; onSelect: (section: CockpitSection) => void }) {
	return <nav className="cockpit-dock" aria-label="主要功能">
		{items.map((item) => <button key={item.id} className={active === item.id ? "active" : ""} onClick={() => onSelect(item.id)}><span className="dock-icon"><Icon name={item.icon}/></span><span>{item.label}</span></button>)}
	</nav>;
}
