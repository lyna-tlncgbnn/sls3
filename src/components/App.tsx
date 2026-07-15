import { Desktop, ModalsView, ProzillaOS, Taskbar, WindowsView } from "prozilla-os";
import { appsConfig } from "../config/appsConfig";
import { skin } from "../config/skin";

export function App() {
	return <ProzillaOS
		systemName="赛境 OS"
		tagLine="智能汽车模拟中控"
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
