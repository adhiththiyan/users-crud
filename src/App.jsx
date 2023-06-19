import {BrowserRouter,Routes,Route} from "react-router-dom"

import Createuser from "./Crud/Createuser"
import Homecrud from "./Crud/Homecrud"
import Users from "./Crud/Users"
import Edituser from "./Crud/Edituser"
const App=()=>{
    return(
        <div>
            <BrowserRouter>
            <Homecrud></Homecrud>
            <Routes>
                <Route element={<Createuser/>} path="/"/>
                <Route element={<Users/>} path="/users"/>
                <Route element={<Edituser/>} path="/edit/:abc"/>

            </Routes>
            </BrowserRouter>
    

        </div>
    )
}
export default App