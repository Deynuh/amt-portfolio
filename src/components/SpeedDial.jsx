import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';

import DensityMediumOutlinedIcon from '@mui/icons-material/DensityMedium';

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import Face3OutlinedIcon from '@mui/icons-material/Face3Outlined';

const actions = [
  { icon: <HomeOutlinedIcon />, name: 'Home', action: handleClick, operation: 'home'},
  { icon: <Face3OutlinedIcon />, name: 'About', action: handleClick , operation: 'about' },
  { icon: <ArticleOutlinedIcon />, name: 'Projects', action: handleClick , operation: 'projects'},
];


export default function BasicSpeedDial() {
  return (
    <Box sx={{ height: 260, transform: 'translateZ(0px)', flexGrow: 1}}>
      <SpeedDial
        ariaLabel="SpeedDial"
        direction='down'
        onClick={handleClick}
        sx={{ position: 'relative'}}
        icon={<DensityMediumOutlinedIcon />}
        FabProps={{
            sx: {
              bgcolor: '#9dbef5',
              '&:hover': {
                bgcolor: '#b9cceb',
              }
            }
          }}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={(e) => {
                    handleClick(e.action.operation)
               }}
          />
        ))}
      </SpeedDial>
    </Box>
  );

  
}


//handler function
function handleClick (e,operation){
  e.preventDefault();
  const ref = useRef(null);
  const about = document.getElementById('about');

  if (operation=="home"){
    ref.current.scrollIntoView({behavior: 'smooth'});    
  } else if (operation=="about") {
    about.current.scrollIntoView({behavior: 'smooth'});    
  } else if (operation=="projects") {
    
  }
  setOpen(!open);// to close the speed dial, remove this line if not needed.
};