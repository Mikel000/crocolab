import React from "react";
import '../styles/pages.css'
import falcon from '../assets/falcon.jpg'
import pipettes from '../assets/pipettes.png'
import loop from '../assets/loop.jpg'
import dish from '../assets/dish.jpg'
import Popup from '../pages/popup'
import { useState } from "react";
import Popupfalcon from '../pages/popupfalcon'
import Popuploop from '../pages/popuploop'
import Popupdish from '../pages/popupdish'
import Popuppipette from '../pages/popuppipette'


const Protocols = () => {
	const [buttonPopupf, setButtonPopupf] = useState(false);
	const [buttonPopupp, setButtonPopupp] = useState(false);
	const [buttonPopupl, setButtonPopupl] = useState(false);
	const [buttonPopupd, setButtonPopupd] = useState(false);

	return ( 
		<div className='protocols-style'>
			<a className= 'animated-quote'>
			"Worldwide, some 20,500 institutions are involved in biological, medical or agricultural research (where plastic disposal is likely to be heaviest), and could produce approximately 5.5 million tonnes of lab plastic (the equivalent equal to 83% of the plastic recycled worldwide in 2012)."
			</a>
			<br></br>



			<h1 className= 'pasdingo'>
				Select a lab equipment to access the protocol
			</h1>
			<div>
				
				<img onClick = {() => setButtonPopupf(true)} className='falcon' src={falcon} />

				<Popup trigger={buttonPopupf} setTrigger={setButtonPopupf}>
					<Popupfalcon/>

				</Popup>

				<img onClick = {() => setButtonPopupp(true)} className = 'pipettes' src={pipettes} />

				<Popup trigger={buttonPopupp} setTrigger={setButtonPopupp}>
					<Popuppipette/>
				</Popup>

				<img onClick = {() => setButtonPopupl(true)} className = 'loop' src={loop} />

				<Popup trigger={buttonPopupl} setTrigger={setButtonPopupl}>
					<Popuploop/>
				</Popup>

				<img  onClick = {() => setButtonPopupd(true)} className = 'dish' src={dish} />

				<Popup trigger={buttonPopupd} setTrigger={setButtonPopupd}>
					<Popupdish/>
				</Popup>


			</div>

		</div>
	);
};

export default Protocols;