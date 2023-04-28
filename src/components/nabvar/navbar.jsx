import Logo from '../../assets/images/logo.svg';
import handle from '../../assets/images/icon-menu.svg'
import './navbar.scss'


const NavBar = () =>{

    return(
        <nav className='container-fluid d-flex justify-content-between align-items-cente m-0 p-4 p-md-5'>
            <div className='d-flex '>
                <img className='img-logo' src={Logo} alt=""/>
                <ul className='d-none d-md-flex justify-content-between list-wrapper'>
                    <li>Features</li>
                    <li>Company</li>
                    <li>Careers</li>
                    <li>About</li>
                </ul>
            </div>
            <div className='buttons d-none d-md-block'>
                <a className='btn me-3' href="#">login</a>
                <button className='btn' type="button">Register</button>
            </div>
            <span className='d-block d-md-none'>
                <img src={handle}alt=""/>
            </span>
        </nav>
    );

}

export default NavBar;