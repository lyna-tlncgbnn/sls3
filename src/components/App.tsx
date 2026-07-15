import { ModalsView, ProzillaOS, WindowsView } from "prozilla-os";
import { appsConfig } from "../config/appsConfig";
import { skin } from "../config/skin";
import { VehicleStoreProvider } from "../store/vehicleStore";
import { CockpitHome } from "./cockpit/CockpitHome";

export function App() {
	return <ProzillaOS
		systemName="赛境 OS"
		tagLine="智能汽车模拟中控"
		config={{
			apps: appsConfig,
		}}
		skin={skin}
	>
		<VehicleStoreProvider>
			<CockpitHome/>
		</VehicleStoreProvider>
		<WindowsView/>
		<ModalsView/>
	</ProzillaOS>;
}
