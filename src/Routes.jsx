import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/App"
import Login from "./pages/Login"

export default function AppRoutes() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
			</Routes>
		</BrowserRouter>
	)
}