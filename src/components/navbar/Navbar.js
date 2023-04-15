import './navbar.css'
import logo from '../../assets/navbar/logo.png'
import home from '../../assets/navbar/home.png'
import contact from '../../assets/navbar/contact.png'
import service from '../../assets/navbar/service.png'





function Navbar () {


    return (
        <div>
            <div className='header'>
                <div className='logo'>
                    
                    <a href='#'><img src={logo} /></a>
                    <p>Contec Contabilidade</p>

                </div>
                <div className='nav'>
                    <a href='#'><img src={home} className='home' alt=''/></a>
                    <a href='#'><img src={service} alt=''/></a>
                    <a href='#'><img src={contact} alt=''/></a>
                </div>
            </div>
        </div>
    );
}

export default Navbar;