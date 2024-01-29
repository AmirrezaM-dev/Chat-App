import ReactDOM from "react-dom/client"
import "./index.css"
import "./assets/webfonts/inter/inter.css"
import "./assets/css/app.min.css"
import "bootstrap/dist/css/bootstrap.min.css"
import App from "./App"
import { HashRouter as Router } from "react-router-dom"
import MainComponent from "./Components/useMain"
import AuthProvider from "./Components/useAuth"
import ChatComponent from "./Components/useChat"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
	//<React.StrictMode>
	<Router>
		<MainComponent>
			<AuthProvider>
				<ChatComponent>
					<App />
				</ChatComponent>
			</AuthProvider>
		</MainComponent>
	</Router>
	//</React.StrictMode>
)
