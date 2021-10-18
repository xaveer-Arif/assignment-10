import { useContext } from "react"
import { AuthContext } from "../Context/AuthProvider"
// import { AuthContext } from "../Context/AuthProvider"

const useAuth = () => {
    return useContext(AuthContext)
}
export default useAuth