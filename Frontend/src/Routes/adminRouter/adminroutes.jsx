import { Routes,Route } from "react-router-dom";
import Formpage from "../../pages/adminPage/adminform";
function AdminRoutes(){
    return(
    
        <Routes>
            <Route path="/" element={<Formpage />} />  
            

        </Routes>
        
    )
}

export default AdminRoutes