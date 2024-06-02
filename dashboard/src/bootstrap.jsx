import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import App from "./App"
import './index.css'
import { ThemeProvider } from "@material-tailwind/react";
import { BrowserRouter } from 'react-router-dom'

const RootElement = document.getElementById("root")
const root = createRoot(RootElement)

root.render(
  <StrictMode>
    <BrowserRouter basename="/menu-1">
      <ThemeProvider>
        <App/>
      </ThemeProvider>   
    </BrowserRouter>
  </StrictMode>
)