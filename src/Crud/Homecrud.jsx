import { Link } from "react-router-dom"
import style from "./homecrud.module.css"

const Homecrud=()=>{
    return(
        <section id={style.nav}>
            <Link to="/">CREATE-USER</Link>
            <Link to="/users">USERS</Link>
        </section>
    )
}
export default Homecrud