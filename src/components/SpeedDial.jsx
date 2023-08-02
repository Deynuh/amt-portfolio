import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';

import DensityMediumOutlinedIcon from '@mui/icons-material/DensityMedium';

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import Face3OutlinedIcon from '@mui/icons-material/Face3Outlined';

const actions = [
  { icon: <HomeOutlinedIcon />, name: 'Home' },
  { icon: <Face3OutlinedIcon />, name: 'About' },
  { icon: <ArticleOutlinedIcon />, name: 'Projects' },
];


export default function BasicSpeedDial() {
  return (
    <Box sx={{ height: 260, transform: 'translateZ(0px)', flexGrow: 1}}>
      <SpeedDial
        ariaLabel="SpeedDial"
        direction='down'
        sx={{ position: 'absolute', bottom: '0%', right: '1%'}}
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
          />
        ))}
      </SpeedDial>
    </Box>
  );
}