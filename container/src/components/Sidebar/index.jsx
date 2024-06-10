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
    label: "Menu 1",
    link: "/menu-1",
    icon: <PresentationChartBarIcon className="h-5 w-5" />
  }
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
            <ListItem className="p-0" selected={open === item.id} onClick={() => navigate(item.link) }>
              <ListItemPrefix>{item.icon}</ListItemPrefix>
              <Typography color="blue-gray" className="mr-auto font-normal">
                {item.label}
              </Typography>
            </ListItem>  
          </Accordion>
        ))}
      </List>
      <Alert open={openAlert} className="mt-auto" onClose={() => setOpenAlert(false)}>
        <CubeTransparentIcon className="mb-4 h-12 w-12" />
        <Typography variant="h6" className="mb-1">
          Upgrade to PRO
        </Typography>
        <Typography variant="small" className="font-normal opacity-80">
          Upgrade to Material Tailwind PRO and get even more components, plugins, advanced features
          and premium.
        </Typography>
        <div className="mt-4 flex gap-3">
          <Typography
            as="a"
            href="#"
            variant="small"
            className="font-medium opacity-80"
            onClick={() => setOpenAlert(false)}
          >
            Dismiss
          </Typography>
          <Typography as="a" href="#" variant="small" className="font-medium">
            Upgrade Now
          </Typography>
        </div>
      </Alert>
    </Card>
  );
}