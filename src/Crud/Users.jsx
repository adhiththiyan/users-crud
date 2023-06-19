import axios from "axios"
import { useEffect, useState } from "react"
import style from "./homecrud.module.css"
import { Link } from "react-router-dom"

const Users=()=>{
  let[content,setcontent]=useState([])

    useEffect(()=>{
      axios.get("http://localhost:3000/employees")
      .then((response)=>{
        console.log("got the data")
        setcontent(response.data)
      })
      .catch(()=>{
        console.log("something went wrong")
      })
    })
    let deletedata=(a)=>{
      axios.delete(`http://localhost:3000/employees/${a}`)
      window.location.assign("/users")
    }

    return(
      <div id={style.homepage}>
        {content.map((x)=>{
          return(
            <div id={style.card}>
            <tr>
              <th colSpan="2">Employee:</th>
              <td>{x.id}</td>
            </tr>
            <tr>
              <td>Name:</td>
              <td>{x.name}</td>
            </tr>
            <tr>
              <td>Salary:</td>
              <td>{x.sal}</td>
            </tr>
            <tr>
              <td>Company:</td>
              <td>{x.com}</td>
            </tr>
            <tr>
              <td><Link to={`/edit/${x.id}`}>Edit</Link></td>
              <td><button onClick={()=>{deletedata(x.id)}}>Delete</button></td>

            </tr>

            </div>
          )
        })}
      </div>
    )
}
export default Users