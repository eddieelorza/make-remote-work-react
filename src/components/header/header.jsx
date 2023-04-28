import ImageDesk from '../../assets/images/image-hero-desktop.png';
import ImageMobile from '../../assets/images/image-hero-mobile.png';
import LogoDatabiz from '../../assets/images/client-databiz.svg';
import LogoAudiophile from '../../assets/images/client-audiophile.svg';
import LogoMeet from '../../assets/images/client-meet.svg';
import LogoMaker from '../../assets/images/client-maker.svg';
import './header.scss'



const Header = ()=>{
    return(
    
       <section className='container-fluid py-5 d-flex flex-column-reverse  flex-md-row justify-content-evenly align-itemns-center px-md-5'>
        <div className='d-flex flex-column align-items-center align-items-lg-start justify-content-center info-content py-5'>
            <h1 className=''>Make remote work</h1>
            <p className='my-4 my-md-5'>Get your team in sync, no matter your location. Streamline processes,create team rituals, and watch productivity soar.</p>
            <button type="button" className='btn btn-dark px-5 py-3 rounded-4'>Learn more</button>

            <div className='brand-container'>
                <img src={LogoDatabiz} alt=""/>
                <img src={LogoAudiophile} alt=""/>
                <img src={LogoMeet} alt=""/>
                <img src={LogoMaker} alt=""/>
            </div>
            
        </div>
        <div className='images-container'>
            <img className='d-none d-md-block' src={ImageDesk} alt=""/>
            <img className='d-block d-md-none w-100' src={ImageMobile} alt=""/>
        </div>
        
       </section>
    )
}


export default Header
