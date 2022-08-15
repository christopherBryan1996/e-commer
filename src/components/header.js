import Logo from '../img/Logo.png'
import Search from '../img/search.png'
import Hero from '../img/Hero.png'
import './header.css'
import {NavLink} from 'react-router-dom'

export default function Header(props){
    const statusLogin=localStorage.getItem('login')
    console.log(statusLogin)

    function signOff(){
        localStorage.setItem('login',0)
        window.location.replace('/e-commer/')
    }

    return <header>
        <div className='div-global-header'>
            <img src={Logo} alt="Logo" className='img-header-logo'/>
            <div className='div-search'>
                <input type='text' placeholder='¿Qué deseas buscar?' className='input-style'/>
                <img src={Search} alt='Search' className='img-header-search'/>
            </div>
            <div className='div-login' style={{display: props.showStatus?'block':'none'}}>
                <div style={{display: statusLogin==0 ?'block':'none'}}>
                    <NavLink to='/e-commer/login'  className='btn-login'>Login</NavLink>
                </div>
            </div>
            <div className='div-login' style={{display: statusLogin>0?'block':'none'}}>
                <button onClick={signOff} className='btn-login'>Sign off</button>
            </div>
        </div>
        <div style={{display: props.showStatus?'block':'none'}}>
            <img src={Hero} alt='Search' className='cont-img-header'/>
        </div>
    </header>
}