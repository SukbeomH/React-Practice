import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import PersonIcon from '@mui/icons-material/Person';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

interface HeaderProps {
  onDrawerToggle: () => void;
}

export default function Header(props: HeaderProps) {
  const { onDrawerToggle } = props;

  return (
    <React.Fragment>
      <AppBar color="primary" position="sticky" elevation={0}>
        <Toolbar>
          <Grid container spacing={0}>
            <Grid sx={{ display: { sm: 'none', xs: 'block' } }} item>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={onDrawerToggle}
                edge="start"
              >
                <MenuIcon />
              </IconButton>
            </Grid>
            <Grid
              item
              xs
              display="flex"
              alignContent="center"
              justifyContent="center"
            >
              <Typography
                color="inherit"
                variant="h5"
                component="h1"
                justifySelf="center"
                alignSelf="center"
              >
                Authentication
              </Typography>
            </Grid>
            <Grid sx={{ display: { sm: 'none', xs: 'block' } }} item>
              <IconButton color="inherit">
                <CalendarMonthIcon />
              </IconButton>
            </Grid>
            <Grid sx={{ display: { sm: 'none', xs: 'block' } }} item>
              <IconButton color="inherit">
                <PersonIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
