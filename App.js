import { AuthProvider } from "./src/config/Auth";
import Router from "./src/routes/Router";

export default function App() {
	return (
		<AuthProvider>
			<Router />
		</AuthProvider>
	);
}
