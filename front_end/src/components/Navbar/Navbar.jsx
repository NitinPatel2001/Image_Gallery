import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { getdata } from '../PhotoGallery/Home';


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(10)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '20ch',
      '&:focus': {
        width: '40ch',
      },
    },
  },
}));

var s = []

export default function SearchAppBar() {
  const Onchanger = (e) => {
    getdata(e)
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{backgroundColor: "blanchedalmond", color: "Black"}}>
        <Toolbar style={{textAlign: "center"}}>
          <a width="auto" href='\' style={{textDecoration: "none"}}>
            <Typography
              variant="h5"
              href="http://localhost:3000"
              noWrap
              component="div"
              padding={2}
              sx={{ flexGrow: 0.5, display: {sm:"block"}, alignItems: "center"}}
              style={{fontFamily: "cursive", marginRight: "50px"}}
            >
              Image Gallery
            </Typography>
          </a>
          <Search sx={{color: "Black"}}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              name='Search'
              onChange={(e) => {
                Onchanger(e.target.value)
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export function Takearray() {
  return s
}