import { useState } from "react";
import Footer from "./footer";
import Header from "./header";
import './login.css'

export default function Login(){
    const [data, setData]= useState({
        email:'',
        password:''
    })
    function inputChange(e){
        setData((preStatus)=>{
            return{
                ...preStatus,
                [e.target.name]:e.target.value
            }
        })
    }
    function OnSubmit(e){
        e.preventDefault()
        if(data.email==='usuario@outlook.com' && data.password==='123456'){
            window.location.replace('/e-commer/')
            localStorage.setItem('login',1)
        }else if (data.email==='admin@outlook.com' && data.password==='123456') {
            window.location.replace('/e-commer/')
            localStorage.setItem('login',2)
        } else {
            alert('esta prueba solo acepta usuario@outlook.com y admin@outlook.com, password:123456')
        }
    }
    return<>
        <Header/>
        <main>
            <div>
                <form onSubmit={OnSubmit} className='form-login'>
                    <label className="txt-email" for='email'>Iniciar Sesión</label>
                    <input className="input-txt-form" type='email' name="email" value={data.email} placeholder="Escriba su correo electrónico" required id="email" onChange={inputChange}/>
                    <input className="input-txt-form" type='password' name="password" value={data.password} placeholder="Escriba su contraseña" required id="password" onChange={inputChange}/>
                    <input className="btn-login-init" type='submit' value='iniciar sesion'/>
                </form>
            </div>
        </main>
        <Footer/>
    </>
}