import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import CoPresentIcon from '@mui/icons-material/CoPresent';
import AssignmentIcon from '@mui/icons-material/Assignment';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import { Link } from 'react-router-dom';
export const mainListItems = (
  <React.Fragment>

    <ListItemButton href='/'>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItemButton>

    <ListItemButton href='/employees'>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Employees" />
    </ListItemButton>
    <ListItemButton href='/attendance'>
      <ListItemIcon>
        <CoPresentIcon />
      </ListItemIcon>
      <ListItemText primary="Attendance" />
    </ListItemButton>

    <ListItemButton href='/salary'>
      <ListItemIcon>
        <CurrencyRupeeIcon />
      </ListItemIcon>
      <ListItemText primary="Salaries" />
    </ListItemButton>

    <ListItemButton href='/reminder'>
      <ListItemIcon>
        <NotificationsActiveIcon />
      </ListItemIcon>
      <ListItemText primary="Reminders" />
    </ListItemButton>

    {/* <ListItemButton>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Integrations" />
    </ListItemButton> */}
    
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      Saved reports
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItemButton>
  </React.Fragment>
);