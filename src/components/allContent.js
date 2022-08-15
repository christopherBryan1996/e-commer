import './allContent.css'
import Footer from "./footer"
import Header from "./header"
import { useSelector } from "react-redux"
import Back from '../img/arrow_back.png'

export default function AllContent(){
    const gamers=useSelector(state=> state.gamers)
    let num=0
    return <div>
        <Header showStatus={true}/>
        <main>
            <div className='div-cont-back'>
                <p className='txt-back-main'>Ver todo </p>
                <img src={Back} alt='back' width='24px'/>
            </div>
            <div className='div-cont-produc'>
                {gamers.map((date)=>{
                    const random=Math.random()*(150-50)+50
                    num++
                    if(num<=5){
                        return <div className='cont-product'>
                            <img src={date.background_image} alt='portada' className="img-main"/>
                            <p className='txt-name-product'>{date.slug}</p>
                            <p className='txt-price'>${random.toFixed(2)}</p>
                            <button className='btn-see-produc'>Ver producto</button>
                        </div> 
                    }
                    if(num===20){
                        num=0
                    }
                })}
            </div>
            <div className='div-cont-back'>
                <p className='txt-back-main'>Ver todo </p>
                <img src={Back} alt='back'  width='24px'/>
            </div>
            <div className='div-cont-produc'>
                {gamers.map((date)=>{
                    const random=Math.random()*(150-50)+50
                    num++
                    if(num>5 && num<11){
                        return <div className='cont-product'>
                            <img src={date.background_image} alt='portada' className="img-main"/>
                            <p className='txt-name-product'>{date.slug}</p>
                            <p className='txt-price'>${random.toFixed(2)}</p>
                            <button className='btn-see-produc'>Ver producto</button>
                        </div> 
                    }
                    if(num===20){
                        num=0
                    }
                })}
            </div>
            <div className='div-cont-back'>
                <p className='txt-back-main'>Ver todo </p>
                <img src={Back} alt='back'  width='24px'/>
            </div>
            <div className='div-cont-produc div-ult'>
                {gamers.map((date)=>{
                    const random=Math.random()*(150-50)+50
                    num++
                    if(num>11 && num<17){
                        return <div className='cont-product'>
                            <img src={date.background_image} alt='portada' className="img-main"/>
                            <p className='txt-name-product'>{date.slug}</p>
                            <p className='txt-price'>${random.toFixed(2)}</p>
                            <button className='btn-see-produc'>Ver producto</button>
                        </div> 
                    }
                    if(num===20){
                        num=0
                    }
                
                })}
            </div>
            
        </main>
        <Footer/>
    </div>
}