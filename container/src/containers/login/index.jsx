/* eslint-disable react/react-in-jsx-scope */
// import AuthController from "../controller/AuthController"
import { Typography, Input, Card } from "@material-tailwind/react"
import EmailInput from "../../components/emailInput"
import AuthController from "../../controllers/auth"
import ButtonLogin from "../../components/button"

const Auth = () => {
  const {
    setEmail,
    setPassword,
    password,
    Email,
    handleClickLogin
  } = AuthController()

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="w-full bg-white md:p-10 p-4 flex flex-col justify-between">
        <div className="flex justify-center items-center md:min-h-[700px] min-h-[500px]">
          <Card className="w-96 max-w-full md:min-w-sm shadow-none md:shadow-md md:border-t-2 md:border-gray-100 rounded-xl md:p-4xl p-xs mt-14">

            <div className="p-6">
              <Typography
                type="h2"
                className="text-xl font-bold text-neutral-900 mb-xs"
              >
                Wellcome 👋
              </Typography>

              <Typography
                type="small"
                className="text-sm font-normal text-neutral-500 mb-4xl mt-4"
              >
                Please access your account
              </Typography>
            </div>

            <div className="mt-[-5] w-[10px] p-6">
              {/* <EmailInput email={Email} setEmail={setEmail}/> */}
              <EmailInput email={Email} setEmail={setEmail} />
            </div>

            <div className="mb-sm p-6">
             <Typography
                type="small"
                className="text-sm font-normal text-neutral-500 mb-4xl mt-4"
              >
                Kata Sandi
              </Typography>

              <Input 
                type="password"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="mt-[-5] p-6 w-full">
              <ButtonLogin
                onClick={handleClickLogin}
                className="w-full mt-[-12px]"
              />
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Auth