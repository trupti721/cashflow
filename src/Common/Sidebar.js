import React from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import CalendarViewMonthIcon from '@mui/icons-material/CalendarViewMonth';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import DescriptionIcon from '@mui/icons-material/Description';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

const SidebarData = [
  {
    path: '/',
    icon: <HomeOutlinedIcon className="iconSize" fontSize="large" />
  },
  {
    path: '/PrepareCFS',
    icon: <CalendarViewMonthIcon className="iconSize" fontSize="large" />,
    elem: 'Balance'
  },
  {
    path: 'clientOnboarding',
    icon: <PeopleOutlineIcon className="iconSize" fontSize="large" />,
    elem: 'Income'
  },
  {
    path: 'clientOnboarding2',
    icon: <PeopleOutlineIcon className="iconSize" fontSize="large" />,
    elem: 'Income'
  },
  {
    path: 'AuditLogs',
    icon: <PeopleOutlineIcon className="iconSize" fontSize="large" />,
    elem: 'Income'
  },
  {
    path: 'BalanceSheetTable',
    icon: <PeopleOutlineIcon className="iconSize" fontSize="large" />,
    elem: 'Income'
  },
  {
    path: 'TableGroup',
    icon: <PeopleOutlineIcon className="iconSize" fontSize="large" />,
    elem: 'Income'
  },
  {
    // path: "/",
    icon: <SettingsOutlinedIcon className="iconSize" fontSize="large" />
  },
  {
    // path: "/",

    icon: <DescriptionIcon className="iconSize" fontSize="large" />
  }
];

function Sidebar() {
  return (
    <div className="sidebar">
      {SidebarData.map(item => (
        <div style={{ marginBottom: '30px' }}>
          <Link to={item.path}>{item.icon}</Link>
        </div>
      ))}
    </div>
  );
}

export default Sidebar;
