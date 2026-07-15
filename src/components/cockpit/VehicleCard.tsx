import { Icon } from "./Icon";
import { type DriveMode, useVehicleStore } from "../../store/vehicleStore";

const modes: Array<{ id: DriveMode; label: string }> = [
	{ id: "eco", label: "节能" },
	{ id: "comfort", label: "舒适" },
	{ id: "sport", label: "运动" },
];

function VehicleIllustration() {
	return <svg className="vehicle-illustration" viewBox="0 0 260 360" role="img" aria-label="赛境汽车俯视图">
		<defs>
			<linearGradient id="carPaint" x1="0" x2="1" y1="0" y2="1">
				<stop offset="0" stopColor="#dce9ef"/><stop offset=".46" stopColor="#79909b"/><stop offset="1" stopColor="#25343c"/>
			</linearGradient>
			<linearGradient id="glass" x1="0" y1="0" x2="0" y2="1">
				<stop stopColor="#172b3a"/><stop offset="1" stopColor="#071117"/>
			</linearGradient>
			<filter id="carGlow"><feGaussianBlur stdDeviation="8"/></filter>
		</defs>
		<ellipse cx="130" cy="325" rx="92" ry="18" fill="#3fd3ff" opacity=".14" filter="url(#carGlow)"/>
		<path d="M82 45c10-22 30-32 48-32s38 10 48 32l26 68 9 145c1 33-18 63-50 74l-33 11-33-11c-32-11-51-41-50-74l9-145z" fill="url(#carPaint)" stroke="#cce7ef" strokeOpacity=".55" strokeWidth="2"/>
		<path d="m82 61 48-25 48 25 16 54-64-9-64 9z" fill="url(#glass)" stroke="#75cce2" strokeOpacity=".35"/>
		<path d="m66 125 64-10 64 10 2 92-66 16-66-16z" fill="#5d747e" opacity=".72"/>
		<path d="m72 137 49-12v88l-48-8zM188 137l-49-12v88l48-8z" fill="url(#glass)" stroke="#8bcddd" strokeOpacity=".28"/>
		<path d="M64 231 130 244l66-13 4 40-25 38-45 17-45-17-25-38z" fill="#273941" opacity=".92"/>
		<path d="M93 313h74" stroke="#47d7ff" strokeWidth="4" strokeLinecap="round" opacity=".85"/>
		<path d="M50 112 30 123v48l24 7M210 112l20 11v48l-24 7" fill="#253943" stroke="#7f99a4" strokeWidth="2"/>
		<path d="M73 48 50 31M187 48l23-17" stroke="#d7eef5" strokeWidth="2" opacity=".7"/>
	</svg>;
}

export function VehicleCard() {
	const { vehicle, toggleDoors, setDriveMode } = useVehicleStore();

	return <section className="panel vehicle-card" aria-label="车辆状态">
		<div className="panel-heading">
			<div><span className="eyebrow">VEHICLE</span><h2>车辆状态</h2></div>
			<button className={`icon-action ${vehicle.doorsLocked ? "is-active" : ""}`} onClick={toggleDoors} aria-label={vehicle.doorsLocked ? "解锁车辆" : "锁定车辆"}>
				<Icon name={vehicle.doorsLocked ? "lock" : "unlock"}/>
			</button>
		</div>
		<div className="vehicle-visual">
			<div className="vehicle-aura"/><VehicleIllustration/>
			<div className="vehicle-badge battery-badge"><span>{vehicle.battery}%</span><small>电量</small></div>
			<div className="vehicle-badge range-badge"><span>{vehicle.range}</span><small>续航 km</small></div>
		</div>
		<div className="drive-mode" aria-label="驾驶模式">
			{modes.map((mode) => <button key={mode.id} className={vehicle.driveMode === mode.id ? "active" : ""} onClick={() => setDriveMode(mode.id)}>{mode.label}</button>)}
		</div>
	</section>;
}
