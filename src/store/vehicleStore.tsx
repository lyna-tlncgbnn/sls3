import { createContext, type ReactNode, useContext, useMemo, useState } from "react";

export type DriveMode = "comfort" | "sport" | "eco";

export interface VehicleState {
	battery: number;
	range: number;
	speed: number;
	driveMode: DriveMode;
	doorsLocked: boolean;
	climateEnabled: boolean;
	cabinTemperature: number;
	targetTemperature: number;
	fanLevel: number;
	seatHeating: boolean;
	defrost: boolean;
}

interface VehicleStoreValue {
	vehicle: VehicleState;
	toggleDoors: () => void;
	toggleClimate: () => void;
	toggleSeatHeating: () => void;
	toggleDefrost: () => void;
	setDriveMode: (mode: DriveMode) => void;
	setTargetTemperature: (temperature: number) => void;
	setFanLevel: (level: number) => void;
}

const initialVehicleState: VehicleState = {
	battery: 82,
	range: 520,
	speed: 0,
	driveMode: "comfort",
	doorsLocked: true,
	climateEnabled: true,
	cabinTemperature: 25,
	targetTemperature: 22,
	fanLevel: 3,
	seatHeating: false,
	defrost: false,
};

const VehicleStoreContext = createContext<VehicleStoreValue | null>(null);

export function VehicleStoreProvider({ children }: { children: ReactNode }) {
	const [vehicle, setVehicle] = useState(initialVehicleState);

	const value = useMemo<VehicleStoreValue>(() => ({
		vehicle,
		toggleDoors: () => setVehicle((state) => ({ ...state, doorsLocked: !state.doorsLocked })),
		toggleClimate: () => setVehicle((state) => ({ ...state, climateEnabled: !state.climateEnabled })),
		toggleSeatHeating: () => setVehicle((state) => ({ ...state, seatHeating: !state.seatHeating })),
		toggleDefrost: () => setVehicle((state) => ({ ...state, defrost: !state.defrost })),
		setDriveMode: (driveMode) => setVehicle((state) => ({ ...state, driveMode })),
		setTargetTemperature: (targetTemperature) => setVehicle((state) => ({
			...state,
			targetTemperature: Math.min(30, Math.max(16, targetTemperature)),
		})),
		setFanLevel: (fanLevel) => setVehicle((state) => ({
			...state,
			fanLevel: Math.min(5, Math.max(1, fanLevel)),
		})),
	}), [vehicle]);

	return <VehicleStoreContext.Provider value={value}>{children}</VehicleStoreContext.Provider>;
}

export function useVehicleStore() {
	const context = useContext(VehicleStoreContext);
	if (!context) throw new Error("useVehicleStore must be used within VehicleStoreProvider");
	return context;
}
