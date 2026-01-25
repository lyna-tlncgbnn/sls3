import { Desktop, ModalsView, ProzillaOS, Taskbar, WindowsView } from "prozilla-os";
import { appsConfig } from "../config/appsConfig";
import { skin } from "../config/skin";

export function App() {
	return <ProzillaOS
		systemName="YourOS"
		tagLine="Powered by ProzillaOS"
		config={{
			apps: appsConfig,
		}}
		skin={skin}
	>
		<Taskbar/>
		<WindowsView/>
		<ModalsView/>
		<Desktop/>
	</ProzillaOS>;
}
