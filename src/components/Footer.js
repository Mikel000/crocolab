import up from '../assets/up.png'
import lpi from '../assets/lpi.png'
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
} from '../components/FootbarElements';
import '../styles/Footer.css'

function Footer() {
	return (
            < div >
            <Nav >
                <img src={up} className='up-logo' />

                  <Bars />
                  <NavMenu>
                        <NavLink to='/about' activeStyle>
                            About
                        </NavLink>
                        <NavLink to='/contact' activeStyle>
                            Contact
                        </NavLink>
                        <NavLink to='/help' activeStyle>
                            Help
                        </NavLink>
                </NavMenu>
                <img src={lpi} className='lpi-logo' />

                </Nav>

            </div>
	)
}

export default Footer
