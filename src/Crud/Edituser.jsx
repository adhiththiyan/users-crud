import { useEffect, useState } from "react"
import style from "./homecrud.module.css"
import axios from "axios"
import {useNavigate, useParams } from "react-router-dom"

const Edituser=()=>{

    let [name,setname]=useState("")
    let [sal,setsal]=useState("")
    let [com,setcom]=useState("")

    let navigate=useNavigate()

    let{abc}=useParams()

    useEffect(()=>{
        axios.get(`http://localhost:3000/employees/${abc}`)
        .then((response)=>{
            setname(response.data.name)
            setsal(response.data.sal)
            setcom(response.data.com)

        })
        .catch(()=>{
            console.log("something went wrong")
        })
    },[])

        let namedata=(e)=>{
            setname(e.target.value)
        }
         let saldata=(e)=>{
            setsal(e.target.value)
        }
         let comdata=(e)=>{
            setcom(e.target.value)
        }
        let formhandle=()=>{
            let payload={name,sal,com}
            axios.put(`http://localhost:3000/employees/${abc}`,payload)
            .then(()=>{
                console.log("data has been updated")
            })
            .catch(()=>{
                console.log("something went wrong")
            })
            navigate("/users")
        }
        


    return(
        <div id={style.myform}>
        <form action="">
            <h1>Upadte User</h1>
            <label htmlFor="">Name:</label>
            <input type="text" value={name} onChange={namedata}/><br />
            <label htmlFor="">Salary:</label>
            <input type="number" value={sal} onChange={saldata}/><br />
            <label htmlFor="">Company:</label>
            <input type="text" value={com} onChange={comdata}/><br />
            <button onClick={formhandle}>Update</button>
        </form>
      </div>
            
        
    )
}
export default Edituser