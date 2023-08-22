import * as React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { Autocomplete } from '@react-google-maps/api';
// import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { Search, SearchIconWrapper, StyledInputBase } from './styles';

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          <Typography
            variant="h6"
            noWrap
            // component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Travel Advisor
          </Typography>
          <Box display="flex">
            <Typography
              variant="h6"
              noWrap
              // component="div"
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >
              Travel Advisor
            </Typography>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              {/* <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            /> */}
              {/* <Autocomplete> */}
              <div>
                {/* <div>
                <SearchIcon />
              </div> */}
                <StyledInputBase placeholder="Search…" />
              </div>
              {/* </Autocomplete> */}
            </Search>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
