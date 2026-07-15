import { useEffect, useState } from "react";
import { Icon } from "./Icon";
import { useVehicleStore } from "../../store/vehicleStore";

function formatTime(date: Date) {
	return date.toLocaleTimeString("zh-CN", { hour: "2-digit", minute: "2-digit", hour12: false });
}

export function StatusBar() {
	const [now, setNow] = useState(new Date());
	const { vehicle } = useVehicleStore();
	useEffect(() => {
		const timer = window.setInterval(() => setNow(new Date()), 30_000);
		return () => window.clearInterval(timer);
	}, []);

	return <header className="status-bar">
		<div className="status-left"><strong className="clock">{formatTime(now)}</strong><span className="divider"/><span>7月15日 周三</span><span className="status-location"><Icon name="location"/>重庆</span></div>
		<div className="system-mark"><span className="brand-dot"/>SAIJING <b>OS</b></div>
		<div className="status-right"><span><Icon name="bluetooth"/></span><span><Icon name="signal"/>5G</span><span className="range-text">续航 {vehicle.range} km</span><span><Icon name="battery"/>{vehicle.battery}%</span></div>
	</header>;
}
