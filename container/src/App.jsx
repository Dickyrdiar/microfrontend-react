import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./containers/login";
import SpinnerLoading from "./components/spinner";
import Wrapper from "./molecules/global/wrapper";

// Assuming 'dashboard' is a remote module or application in Module Federation
const RemoteDashboard = lazy(() => import('dashboard/DashboardApp'));
const RemoteShops = lazy(() => import('shops/Shops'))

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={
          <Suspense fallback={SpinnerLoading}>
            <Wrapper />
          </Suspense>
        } />
        <Route path="/menu-1/*" element={<Suspense fallback={<SpinnerLoading />}><RemoteDashboard /></Suspense>} />
        <Route path="/menu-2/*" element={<Suspense fallback={<SpinnerLoading />}><RemoteShops /></Suspense>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
