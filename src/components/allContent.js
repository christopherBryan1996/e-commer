import Footer from "./footer"
import Header from "./header"
import { useSelector } from "react-redux"
export default function AllContent(){
    const gamers=useSelector(state=> state.gamers)
    console.log(gamers)
    return <div>
        <Header/>
        <h1>hola</h1>
        <Footer/>
    </div>
}