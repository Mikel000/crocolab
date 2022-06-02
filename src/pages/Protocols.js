import React from "react";
import '../styles/pages.css'
import falcon from '../assets/falcon.jpg'
import pipettes from '../assets/pipettes.png'
import loop from '../assets/loop.jpg'
import dish from '../assets/dish.jpg'
import Popup from '../pages/pop-falcon'



const Protocols = () => {
	return (
		<div className='protocols-style'>
			<h1>
				Select an equipment to access the protocol
			</h1>
			<div>
				
				<img className='falcon' src={falcon} />
				<Popup trigger={true}>
					
				</Popup>
				<img className = 'pipettes' src={pipettes} />
				<img className = 'loop' src={loop} />
				<img className = 'dish' src={dish} />

			</div>

		</div>
	);
};

export default Protocols;