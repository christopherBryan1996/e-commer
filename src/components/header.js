import Logo from '../img/Logo.png'
import Search from '../img/search.png'
import Hero from '../img/Hero.png'
import './header.css'
export default function Header(){
    return <header>
        <div className='div-global-header'>
            <img src={Logo} alt="Logo" className='img-header-logo'/>
            <div className='div-search'>
                <input type='text' placeholder='¿Qué deseas buscar?' className='input-style'/>
                <img src={Search} alt='Search' className='img-header-search'/>
            </div>
            <div className='div-login'>

            </div>
        </div>
        <div>
            <img src={Hero} alt='Search' className='cont-img-header'/>
        </div>
    </header>
}