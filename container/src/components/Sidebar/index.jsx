/* eslint-disable no-unused-vars */
import React from "react";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Accordion,
  AccordionHeader,
  AccordionBody,
  Alert,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import {
  ChevronRightIcon,
  ChevronDownIcon,
  CubeTransparentIcon,
} from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";

const Menu = [
  {
    id: 1,
    label: "Dashboard",
    link: "/menu-1",
    icon: <PresentationChartBarIcon className="h-5 w-5" />
  }, 

  {
    id: 2,
    label: "Menu 2",
    link: "/menu-1",
    icon: <ShoppingBagIcon className="h-5 w-5" />
  }, 
]
 
export function SidebarMenu() {
  const [open, setOpen] = React.useState(0);
  const [openAlert, setOpenAlert] = React.useState(true);
  const navigate = useNavigate()
 

 
  return (
    <Card className="h-full w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
      <div className="mb-2 p-4">
        <Typography variant="h5" color="blue-gray" onClick={() => window.location.assign('/')} className="cursor-pointer">
          MF-Application
        </Typography>
      </div>
      <List>
        {Menu?.map((item) => (
          <Accordion key={item.id}
            open={open === item.id}
            icon={
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`mx-auto h-4 w-4 transition-transform ${
                  open === item.id ? "rotate-180" : ""
                }`}
                />
            }
          >
            <ListItem className="p-2" selected={open === item.id} onClick={() => navigate(item.link) }>
              <ListItemPrefix>{item.icon}</ListItemPrefix>
              <Typography color="blue-gray" className="mr-auto font-normal">
                {item.label}
              </Typography>
            </ListItem>  
          </Accordion>
        ))}
      </List>
    </Card>
  );
}