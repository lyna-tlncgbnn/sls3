import { Icon } from "./Icon";
import { useVehicleStore } from "../../store/vehicleStore";

export function ClimateBar() {
	const { vehicle, toggleClimate, toggleDefrost, toggleSeatHeating, setFanLevel, setTargetTemperature } = useVehicleStore();
	const adjustTemperature = (amount: number) => setTargetTemperature(vehicle.targetTemperature + amount);

	return <section className="climate-bar" aria-label="空调控制">
		<div className="temperature-control"><button onClick={() => adjustTemperature(-0.5)} aria-label="降低温度">−</button><div><strong>{vehicle.targetTemperature.toFixed(1)}°</strong><small>驾驶位</small></div><button onClick={() => adjustTemperature(0.5)} aria-label="升高温度">＋</button></div>
		<span className="climate-divider"/>
		<button className={`climate-toggle ${vehicle.climateEnabled ? "is-active" : ""}`} onClick={toggleClimate}><Icon name="power" className="power-symbol"/><span><strong>AUTO</strong><small>{vehicle.climateEnabled ? "空调开启" : "空调关闭"}</small></span></button>
		<div className="fan-control"><Icon name="fan"/><button onClick={() => setFanLevel(vehicle.fanLevel - 1)}>−</button><div className="fan-levels">{[1, 2, 3, 4, 5].map((level) => <span key={level} className={level <= vehicle.fanLevel ? "active" : ""}/>)}</div><button onClick={() => setFanLevel(vehicle.fanLevel + 1)}>＋</button></div>
		<button className={`climate-function ${vehicle.seatHeating ? "is-active" : ""}`} onClick={toggleSeatHeating}><Icon name="seat"/><span>座椅加热</span></button>
		<button className={`climate-function ${vehicle.defrost ? "is-active" : ""}`} onClick={toggleDefrost}><Icon name="defrost"/><span>前挡除雾</span></button>
		<div className="cabin-temperature"><Icon name="temperature"/><div><strong>{vehicle.cabinTemperature}°</strong><small>车内温度</small></div></div>
	</section>;
}
