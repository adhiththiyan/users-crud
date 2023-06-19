import { Link } from "react-router-dom"
import style from "./findcode.module.css"


const Menu=()=>{
    return(
       <ol id={style.menublock}>
        <li><Link to="/comp1">Explore Work</Link></li>
        <li><Link to="/comp2">Hire Talents</Link></li>
        <li><Link to="/comp3">Dev Board</Link></li>
        <li><Link to="/comp4">Challenges</Link></li>
       </ol>
    )
}
export default Menu