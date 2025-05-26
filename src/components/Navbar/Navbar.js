import CodeIcon from '@mui/icons-material/Code';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MenuIcon from '@mui/icons-material/Menu';
import NightlightIcon from '@mui/icons-material/Nightlight';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import {
  AppBar,
  Badge,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
  alpha,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { links } from '../data/data';
import { ThemeContext } from '../theme/ThemeContext';

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { darkMode, toggleTheme } = useContext(ThemeContext);
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    // { label: 'Home', path: '/', icon: <HomeIcon /> },
    // { label: 'Projects', path: '/projects', icon: <WorkIcon /> },
    // { label: 'Skills', path: '/skills', icon: <CodeOutlinedIcon /> },
    // { label: 'Experience', path: '/experience', icon: <BusinessCenterIcon /> },
    // { label: 'Blog', path: '/blog', icon: <ArticleIcon />, badge: 3 },
    // { label: 'Contact', path: '/contact', icon: <ContactMailIcon /> },
  ];

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  // Check if a nav item is active
  const isActive = (path) => {
    return location.pathname === path;
  };

  const drawer = (
    <Box
      sx={{
        width: 280,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
      role='presentation'
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}>
      <Box
        sx={{
          py: 3,
          px: 2,
          display: 'flex',
          justifyContent: 'center',
          borderBottom: `1px solid ${theme.palette.divider}`,
        }}>
        <Typography
          variant='h6'
          sx={{ fontWeight: 700, display: 'flex', alignItems: 'center' }}>
          <CodeIcon sx={{ mr: 1 }} /> Abhigya Shrestha
        </Typography>
      </Box>
      {/* <List sx={{ flexGrow: 1 }}>
        {navItems.map((item) => {
          const active = isActive(item.path);
          return (
            <ListItem
              key={item.label}
              disablePadding
              component={Link}
              to={item.path}
              sx={{ textDecoration: 'none', color: 'inherit' }}>
              <ListItemButton
                sx={{
                  borderRadius: 1,
                  mx: 1,
                  my: 0.5,
                  backgroundColor: active
                    ? alpha(theme.palette.primary.main, 0.1)
                    : 'transparent',
                  '&:hover': {
                    backgroundColor: active
                      ? alpha(theme.palette.primary.main, 0.15)
                      : alpha(theme.palette.primary.main, 0.05),
                  },
                }}>
                <ListItemIcon
                  sx={{
                    color: active ? theme.palette.primary.main : 'inherit',
                    minWidth: 40,
                  }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.label}
                  sx={{
                    '& .MuiTypography-root': {
                      fontWeight: active ? 700 : 500,
                      color: active ? theme.palette.primary.main : 'inherit',
                    },
                  }}
                />
                {item.badge && (
                  <Badge
                    badgeContent={item.badge}
                    color='error'
                    sx={{ ml: 1 }}
                  />
                )}
              </ListItemButton>
            </ListItem>
          );
        })}
      </List> */}

      <Box
        sx={{
          p: 2,
          display: 'flex',
          flexDirection: 'column',
          borderTop: `1px solid ${theme.palette.divider}`,
        }}>
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 1 }}>
          <Tooltip title='GitHub'>
            <IconButton
              sx={{ mx: 1 }}
              onClick={() => window.open(links.github, '_blank')}>
              <GitHubIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title='LinkedIn'>
            <IconButton
              sx={{ mx: 1 }}
              onClick={() => window.open(links.linkedin, '_blank')}>
              <LinkedInIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title={darkMode ? 'Light Mode' : 'Dark Mode'}>
            <IconButton
              sx={{ mx: 1 }}
              onClick={toggleTheme}>
              {darkMode ? <WbSunnyIcon /> : <NightlightIcon />}
            </IconButton>
          </Tooltip>
        </Box>
      </Box>
    </Box>
  );

  return (
    <AppBar
      position='sticky'
      elevation={scrolled ? 4 : 0}
      sx={{
        transition: 'all 0.3s',
        bgcolor: scrolled
          ? theme.palette.mode === 'dark'
            ? alpha(theme.palette.background.paper, 0.95)
            : alpha('#ffffff', 0.95)
          : 'background.paper',
        backdropFilter: scrolled ? 'blur(8px)' : 'none',
      }}>
      <Container maxWidth='xl'>
        <Toolbar
          disableGutters
          sx={{ py: 1 }}>
          <Typography
            variant='h6'
            noWrap
            component={Link}
            to='/'
            sx={{
              mr: 2,
              display: 'flex',
              alignItems: 'center',
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: 'inherit',
              textDecoration: 'none',
            }}>
            <CodeIcon sx={{ mr: 1 }} /> Abhigya Shrestha
          </Typography>

          {/* Mobile menu icon */}
          {isMobile ? (
            <>
              <Box sx={{ flexGrow: 1 }} />
              <Tooltip title={darkMode ? 'Light Mode' : 'Dark Mode'}>
                <IconButton
                  color='inherit'
                  onClick={toggleTheme}
                  sx={{ mr: 2 }}>
                  {darkMode ? <WbSunnyIcon /> : <NightlightIcon />}
                </IconButton>
              </Tooltip>
              <IconButton
                size='large'
                edge='start'
                color='inherit'
                aria-label='menu'
                onClick={toggleDrawer(true)}>
                <MenuIcon />
              </IconButton>
            </>
          ) : (
            <>
              {/* Desktop navigation items */}
              <Box sx={{ flexGrow: 1, display: 'flex', ml: 4 }}>
                {navItems.map((item) => {
                  const active = isActive(item.path);
                  return (
                    <Box
                      key={item.label}
                      sx={{ position: 'relative' }}>
                      <Button
                        component={Link}
                        to={item.path}
                        startIcon={item.icon}
                        sx={{
                          color: active ? 'primary.main' : 'text.primary',
                          mx: 1,
                          fontWeight: active ? 700 : 500,
                          borderBottom: active
                            ? `2px solid ${theme.palette.primary.main}`
                            : 'none',
                          borderRadius: 0,
                          paddingBottom: '6px',
                          '&:hover': {
                            backgroundColor: 'transparent',
                            borderBottom: `2px solid ${
                              active
                                ? theme.palette.primary.main
                                : theme.palette.text.secondary
                            }`,
                          },
                        }}>
                        {item.label}
                      </Button>
                      {item.badge && (
                        <Badge
                          badgeContent={item.badge}
                          color='error'
                          sx={{
                            position: 'absolute',
                            top: 4,
                            right: -4,
                          }}
                        />
                      )}
                    </Box>
                  );
                })}
              </Box>
            </>
          )}

          {/* Action buttons aligned to the right */}
          <Box sx={{ flexGrow: 0, display: 'flex', alignItems: 'center' }}>
            {!isMobile && (
              <>
                <Tooltip title='GitHub'>
                  <IconButton
                    color='inherit'
                    sx={{ ml: 1 }}
                    onClick={() => window.open(links.github, '_blank')}>
                    <GitHubIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip title='LinkedIn'>
                  <IconButton
                    color='inherit'
                    sx={{ ml: 1 }}
                    onClick={() => window.open(links.linkedin, '_blank')}>
                    <LinkedInIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip title={darkMode ? 'Light Mode' : 'Dark Mode'}>
                  <IconButton
                    color='inherit'
                    onClick={toggleTheme}
                    sx={{ ml: 2 }}>
                    {darkMode ? <WbSunnyIcon /> : <NightlightIcon />}
                  </IconButton>
                </Tooltip>
              </>
            )}
            <Button
              variant='contained'
              color='primary'
              sx={{
                ml: 2,
                px: 2,
                fontWeight: 600,
                boxShadow: theme.shadows[2],
                '&:hover': {
                  boxShadow: theme.shadows[4],
                },
              }}>
              Hire Me
            </Button>
          </Box>
        </Toolbar>
      </Container>

      {/* Mobile drawer */}
      <Drawer
        anchor='right'
        open={drawerOpen}
        onClose={toggleDrawer(false)}>
        {drawer}
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
