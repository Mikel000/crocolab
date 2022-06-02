import Banner from './Banner'
import Footer from './Footer'
import { BrowserRouter as Router, Routes, Route }from 'react-router-dom';
import Core from '../pages/Core'
import Protocols from '../pages/Protocols'
import Tips from '../pages/Tips'
import Discover from '../pages/Discover'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Help from '../pages/Help'




function App() {
	return (
		<div>

			<Router>
				<Banner />

			<Routes>
					<Route path='/search' element={<Core />} />
					<Route path='/protocols' element={<Protocols />} />
					<Route path='/tips' element={<Tips />} />
					<Route path='/discover-initiatives' element={<Discover />} />


			</Routes>
			</Router>
			<Router>
				<Routes>
					<Route path='/about' element={<About />} />
					<Route path='/contact' element={<Contact />} />
					<Route path='/help' element={<Help />} />



				</Routes>
				<Footer />

			</Router>

		</div>
	);
}

export default App