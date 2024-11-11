import Root from "./routes/Root";
import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
function App() {
	const queryClient = new QueryClient();
	return (
		<QueryClientProvider client={queryClient}>
			<Root />
		</QueryClientProvider>
	);
}

export default App;
