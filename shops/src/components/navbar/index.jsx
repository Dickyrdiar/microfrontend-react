import React, { useState } from "react";
import { IconButton, Navbar, Typography, Collapse } from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Navigation = () => {
  const [openNav, setOpenNav] = useState(false);

  const NavList = () => (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {["Pages", "Account", "Blocks", "Docs"].map((item) => (
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-normal text-gray-800"
          key={item}
        >
          <a href="#" className="flex items-center">
            {item}
          </a>
        </Typography>
      ))}
    </ul>
  );

  return (
    <Navbar className="mx-auto max-w-screen-xl w-full px-6 py-3 rounded-none fixed">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          variant="h6"
          className="mr-4 cursor-pointer py-1.5 text-gray-900"
          onClick={() => window.location.assign('/')}
        >
          Microfrontend
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
};

export default Navigation;
