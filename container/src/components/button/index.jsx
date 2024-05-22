import { Button } from "@material-tailwind/react"

const ButtonLogin = ({
  onClick,
  disabled,
  className,
  loading
}) => {
  return (
    <div className="relative">
      <Button className={className} disabled={disabled} color="primary" onClick={onClick}>
        {loading ? 'Logging in...' : 'Login'}
      </Button>
    </div>
  )
}

export default ButtonLogin