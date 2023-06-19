import { useState } from "react"
import style from "./homecrud.module.css"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Createuser=()=>{

    let [name,setname]=useState("")
    let [sal,setsal]=useState("")
    let [com,setcom]=useState("")

    let abc=useNavigate()

    let namedata=(e)=>{
      setname(e.target.value)
    }
    let saldata=(e)=>{
      setsal(e.target.value)
    }
    let comdata=(e)=>{
      setcom(e.target.value)
    }

    let btn=(e)=>{
      e.preventDefault()
      let payload={name,sal,com}
      axios.post("http://localhost:3000/employees",payload)
      .then(()=>{
        console.log("data has been stored")
      })
      .catch(()=>{
        console.log("something went wrong")
      })
    abc("/users")

    }

    return(
      <div id={style.myform}>
        <form action="">
            <label htmlFor="">Name:</label>
            <input type="text" value={name} onChange={namedata}/><br />
            <label htmlFor="">Salary:</label>
            <input type="number" value={sal} onChange={saldata}/><br />
            <label htmlFor="">Company:</label>
            <input type="text" value={com} onChange={comdata}/><br />
            <button onClick={btn}>Submit</button>
        </form>
      </div>
    )
}
export default Createuser