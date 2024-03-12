import "./App.css";

import React, {useState} from "react";
import Header from "./components/Header";
import News from "./components/News";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App = ()=> {
  const pageSize= 6;
  const apikey = "4968c286f3594751bf7f4e3f2ce0ae09"
  const [progress, setProgress] = useState(0)

		return (
			<div>
				<BrowserRouter>
					<Header />
					<LoadingBar
						color="#f11946"
						progress={progress} 
						/>
					<Routes>
						<Route
							exact path="/"
							
							element={<News setProgress={setProgress} apikey={apikey} key="General" pageSize={pageSize} country="in" category="General" />}></Route>
						<Route
							exact path="/business"
						
							element={<News setProgress={setProgress} apikey={apikey} key="business" pageSize={pageSize} country="in" category="business" />}></Route>
						<Route
							exact path="/Entertainment"
							
							element={<News setProgress={setProgress} apikey={apikey} key="entertainment" pageSize={pageSize} country="in" category="entertainment" />
							}></Route>
						<Route
							exact path="/General"
						
							element={<News setProgress={setProgress} apikey={apikey} key="general" pageSize={pageSize} country="in" category="general" />}></Route>
						<Route
							exact path="/Health"
						
							element={<News setProgress={setProgress} apikey={apikey} key="health" pageSize={pageSize} country="in" category="health" />}></Route>
						<Route
							exact path="/Science"
							
							element={<News setProgress={setProgress} apikey={apikey} key="science" pageSize={pageSize} country="in" category="science" />}></Route>
						<Route
							exact path="/Sports"
							
							element={<News setProgress={setProgress} apikey={apikey} key="sports" pageSize={pageSize} country="in" category="sports" />}></Route>
						<Route
							exact path="/Technology"
						
							element={<News setProgress={setProgress} apikey={apikey} key="technology" pageSize={pageSize} country="in" category="technology" />}></Route>
					</Routes>
				</BrowserRouter>
			</div>
		);
	
}
export default App