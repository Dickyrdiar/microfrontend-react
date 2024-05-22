import { startTransition, useState } from "react"
import { useNavigate } from "react-router-dom"
// import { useLocation } from 'react-router-dom'

const AuthController = () => {
  const [Email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [disabled, setDisabled] = useState(false)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleClickLogin = async () => {
    startTransition(() => {
      setLoading(true)

      if (Email && password) {
        localStorage.setItem("password", JSON.stringify(password))
        navigate("/menu-1")
      } else {
        setDisabled(true)
      }
      setLoading(false)
    })
  }

  return {
    Email, 
    password, 
    handleClickLogin, 
    setPassword,
    setEmail,
    location,
    disabled,
    loading
  }
}

export default AuthController