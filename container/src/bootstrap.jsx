/* eslint-disable react/react-in-jsx-scope */
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from './App'
import { ThemeProvider } from "@material-tailwind/react";
import './index.css'

const rootElement  =document.getElementById("root")
const root = createRoot(rootElement)

root.render(
  <>
    <StrictMode>
    <ThemeProvider>
      <App/>
    </ThemeProvider>
  </StrictMode>
  </>
)