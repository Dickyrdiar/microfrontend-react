import React from "react"
import { Typography } from '@material-tailwind/react'
import Button from "@material-tailwind/react/components/Button"

const Dashboard = () => {
//  const navigate = useHistory()

  return (
    <>
      <div className="flex justify-center items-center h-screen gap-4">
        <Typography
          variant="h3"
        >
          this is a dashboard
        </Typography>

        <Button onClick={() => window.location.assign('menu-1')}>
          go to Menu-1
        </Button>
      </div>
    </>
  )
}

export default Dashboard