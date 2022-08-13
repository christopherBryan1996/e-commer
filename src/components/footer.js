import './footer.css'
import Swal from 'sweetalert2'
import Logo from '../img/Logo.png'
import { useState } from 'react'

export default function Footer(){
    const [data, setData]= useState({
        name:'',
        message:''
    })
    const messageSuceess=(e)=>{
        e.preventDefault()
        Swal.fire({
            icon: 'success',
            title: 'Tu mensaje fue enviado ',
            showConfirmButton: false,
            timer: 1500
        })
        setData({
            name:'',
            message:''
        })
    }
    function inputChange(e){
        setData((prevState)=>{
            return{
                ...prevState,
                [e.target.name]:e.target.value
            }
        })
    }
    return <footer>
        <div className='div-cont-footer-global'>
            <div>
                <img src={Logo} alt='Logo' width='176px' height='50px' className='img-logo-footer'/>
            </div>
            <div className='img-logo-footer'>
                <p className='txt-info'>Quienes somos</p>
                <p className='txt-info'>Política de privacidad</p>
                <p className='txt-info'>Programa de fidelidad</p>
                <p className='txt-info'>Nuestras Tiendas</p>
                <p className='txt-info'>Quiero ser franquiciado</p>
                <p className='txt-info'>Anúncie aquí</p>
            </div>
            <div className='img-logo-footer'>
                <form onSubmit={messageSuceess}>
                    <label for='name' className='txt-label-form'>Hable con nosotros</label>
                    <div className='div-cont-name-input'>
                        <label className='txt-name-send' for='name'>Nombre</label>
                        <input type='text' className='txt-message intput-name-footer' value={data.name} onChange={inputChange} id='name' name='name'></input>
                    </div>
                    <textarea type='text' name='message' className='txt-message textarea-footer' value={data.message} onChange={inputChange} rows='4' cols='45' placeholder='Escribe un mensaje'></textarea>
                    <input type='submit' className='btn-send-message' value='Enviar mensaje'/>
                </form>
            </div>
        </div>
        <div className='div-txt-autor'>
            <p className='txt-autor'>Desarrollado por Christopher Bryan Suarez Mancilla 2022</p>
        </div>
    </footer>
}