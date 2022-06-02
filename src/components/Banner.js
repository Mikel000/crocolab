import '../styles/Banner.css'
import logo from '../assets/crocologocut.png'
import React from 'react';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
} from '../components/NavbarElements';


function Banner() {
	return (
        < div >

            <Nav>
                <img src={logo} alt='La maison jungle' className='lmj-logo' />
                <Bars />
                <NavMenu>
                    <NavLink to='/search' activeStyle>
                        Search
                    </NavLink>
                    <NavLink to='/protocols' activeStyle>
                        Protocols
                    </NavLink>
                    <NavLink to='/tips' activeStyle>
                        Tips
                    </NavLink>
                    <NavLink to='/discover-initiatives' activeStyle>
                        Discover initiatives
                    </NavLink>
                </NavMenu>
            </Nav>

			
		</div>
	)		
}


export default Banner
