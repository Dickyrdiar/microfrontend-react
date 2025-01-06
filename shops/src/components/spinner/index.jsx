import { Spinner } from '@material-tailwind/react'

const SpinnerLoading = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Spinner className='h-9 w-9'/>
    </div>
  )
}

export default SpinnerLoading