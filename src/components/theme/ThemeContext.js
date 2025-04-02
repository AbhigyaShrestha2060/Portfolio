import {
  createTheme,
  ThemeProvider as MUIThemeProvider,
} from '@mui/material/styles';
import React, { createContext, useMemo, useState } from 'react';

// Define the dark coder theme colors
const darkCodeTheme = {
  primary: {
    main: '#8be9fd', // Cyan accent
    light: '#a4efff',
    dark: '#44c2e3',
  },
  secondary: {
    main: '#bd93f9', // Purple accent
    light: '#d1b1fa',
    dark: '#9a64f5',
  },
  background: {
    default: '#282a36', // Dark background
    paper: '#1e1f29', // Darker panels
    card: '#343746', // Slightly lighter for cards
  },
  text: {
    primary: '#f8f8f2', // Light text
    secondary: '#abb2bf', // Slightly dimmer text
  },
  error: {
    main: '#ff5555', // Red for errors
  },
  warning: {
    main: '#ffb86c', // Orange for warnings
  },
  info: {
    main: '#6272a4', // Blue-ish for info
  },
  success: {
    main: '#50fa7b', // Green for success
  },
  divider: 'rgba(248, 248, 242, 0.1)', // Subtle dividers
};

// Define enhanced light coder theme colors with better contrast
const lightCodeTheme = {
  primary: {
    main: '#0277bd', // Deeper blue for better visibility
    light: '#58a5f0',
    dark: '#004c8c',
  },
  secondary: {
    main: '#6a1b9a', // Deeper purple for better contrast
    light: '#9c4dcc',
    dark: '#38006b',
  },
  background: {
    default: '#e4e9f0', // Cool light gray, not white
    paper: '#d0d9e8', // Slightly darker panels
    card: '#e8edf5', // Slightly lighter for cards
  },
  text: {
    primary: '#1a202c', // Very dark blue-gray, almost black
    secondary: '#2d3748', // Dark gray for secondary text
  },
  error: {
    main: '#c62828', // Darker red for better contrast
  },
  warning: {
    main: '#e65100', // Darker orange for better contrast
  },
  info: {
    main: '#0288d1', // Darker blue for info
  },
  success: {
    main: '#2e7d32', // Darker green for success
  },
  divider: 'rgba(0, 0, 0, 0.15)', // More visible dividers
};

// Define custom shadows for dark and light modes
const createCustomShadows = (isDarkMode) => {
  const baseColor = isDarkMode ? 'rgba(0, 0, 0, ' : 'rgba(0, 0, 0, ';

  return [
    'none',
    `0px 2px 1px -1px ${baseColor}0.2), 0px 1px 1px 0px ${baseColor}0.14), 0px 1px 3px 0px ${baseColor}0.12)`,
    `0px 3px 1px -2px ${baseColor}0.2), 0px 2px 2px 0px ${baseColor}0.14), 0px 1px 5px 0px ${baseColor}0.12)`,
    `0px 3px 3px -2px ${baseColor}0.2), 0px 3px 4px 0px ${baseColor}0.14), 0px 1px 8px 0px ${baseColor}0.12)`,
    `0px 2px 4px -1px ${baseColor}0.2), 0px 4px 5px 0px ${baseColor}0.14), 0px 1px 10px 0px ${baseColor}0.12)`,
    `0px 3px 5px -1px ${baseColor}0.2), 0px 5px 8px 0px ${baseColor}0.14), 0px 1px 14px 0px ${baseColor}0.12)`,
    `0px 3px 5px -1px ${baseColor}0.2), 0px 6px 10px 0px ${baseColor}0.14), 0px 1px 18px 0px ${baseColor}0.12)`,
    `0px 4px 5px -2px ${baseColor}0.2), 0px 7px 10px 1px ${baseColor}0.14), 0px 2px 16px 1px ${baseColor}0.12)`,
    `0px 5px 5px -3px ${baseColor}0.2), 0px 8px 10px 1px ${baseColor}0.14), 0px 3px 14px 2px ${baseColor}0.12)`,
    `0px 5px 6px -3px ${baseColor}0.2), 0px 9px 12px 1px ${baseColor}0.14), 0px 3px 16px 2px ${baseColor}0.12)`,
    `0px 6px 6px -3px ${baseColor}0.2), 0px 10px 14px 1px ${baseColor}0.14), 0px 4px 18px 3px ${baseColor}0.12)`,
    `0px 6px 7px -4px ${baseColor}0.2), 0px 11px 15px 1px ${baseColor}0.14), 0px 4px 20px 3px ${baseColor}0.12)`,
    `0px 7px 8px -4px ${baseColor}0.2), 0px 12px 17px 2px ${baseColor}0.14), 0px 5px 22px 4px ${baseColor}0.12)`,
    `0px 7px 8px -4px ${baseColor}0.2), 0px 13px 19px 2px ${baseColor}0.14), 0px 5px 24px 4px ${baseColor}0.12)`,
    `0px 7px 9px -4px ${baseColor}0.2), 0px 14px 21px 2px ${baseColor}0.14), 0px 5px 26px 4px ${baseColor}0.12)`,
    `0px 8px 9px -5px ${baseColor}0.2), 0px 15px 22px 2px ${baseColor}0.14), 0px 6px 28px 5px ${baseColor}0.12)`,
    `0px 8px 10px -5px ${baseColor}0.2), 0px 16px 24px 2px ${baseColor}0.14), 0px 6px 30px 5px ${baseColor}0.12)`,
    `0px 8px 11px -5px ${baseColor}0.2), 0px 17px 26px 2px ${baseColor}0.14), 0px 6px 32px 5px ${baseColor}0.12)`,
    `0px 9px 11px -5px ${baseColor}0.2), 0px 18px 28px 2px ${baseColor}0.14), 0px 7px 34px 6px ${baseColor}0.12)`,
    `0px 9px 12px -6px ${baseColor}0.2), 0px 19px 29px 2px ${baseColor}0.14), 0px 7px 36px 6px ${baseColor}0.12)`,
    `0px 10px 13px -6px ${baseColor}0.2), 0px 20px 31px 3px ${baseColor}0.14), 0px 8px 38px 7px ${baseColor}0.12)`,
    `0px 10px 13px -6px ${baseColor}0.2), 0px 21px 33px 3px ${baseColor}0.14), 0px 8px 40px 7px ${baseColor}0.12)`,
    `0px 10px 14px -6px ${baseColor}0.2), 0px 22px 35px 3px ${baseColor}0.14), 0px 8px 42px 7px ${baseColor}0.12)`,
    `0px 11px 14px -7px ${baseColor}0.2), 0px 23px 36px 3px ${baseColor}0.14), 0px 9px 44px 8px ${baseColor}0.12)`,
    `0px 11px 15px -7px ${baseColor}0.2), 0px 24px 38px 3px ${baseColor}0.14), 0px 9px 46px 8px ${baseColor}0.12)`,
  ];
};

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true); // Default to dark mode for coders

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: darkMode ? 'dark' : 'light',
          ...(darkMode ? darkCodeTheme : lightCodeTheme),
        },
        typography: {
          fontFamily: '"Fira Code", "Roboto Mono", monospace',
          h1: {
            fontWeight: 600,
            color: darkMode
              ? darkCodeTheme.text.primary
              : lightCodeTheme.text.primary,
          },
          h2: {
            fontWeight: 600,
            color: darkMode
              ? darkCodeTheme.text.primary
              : lightCodeTheme.text.primary,
          },
          h3: {
            fontWeight: 600,
            color: darkMode
              ? darkCodeTheme.text.primary
              : lightCodeTheme.text.primary,
          },
          h4: {
            color: darkMode
              ? darkCodeTheme.text.primary
              : lightCodeTheme.text.primary,
          },
          h5: {
            color: darkMode
              ? darkCodeTheme.text.primary
              : lightCodeTheme.text.primary,
          },
          h6: {
            color: darkMode
              ? darkCodeTheme.text.primary
              : lightCodeTheme.text.primary,
          },
          body1: {
            color: darkMode
              ? darkCodeTheme.text.primary
              : lightCodeTheme.text.primary,
          },
          body2: {
            color: darkMode
              ? darkCodeTheme.text.secondary
              : lightCodeTheme.text.secondary,
          },
          button: {
            textTransform: 'none',
            fontWeight: 500,
          },
        },
        components: {
          MuiAppBar: {
            styleOverrides: {
              root: {
                background: darkMode
                  ? 'linear-gradient(90deg, #282a36 0%, #1e1f29 100%)'
                  : 'linear-gradient(90deg, #b8c6db 0%, #c5d1e5 100%)',
                boxShadow: darkMode
                  ? '0 4px 20px rgba(0, 0, 0, 0.25)'
                  : '0 2px 10px rgba(0, 0, 0, 0.1)',
              },
            },
          },
          MuiDrawer: {
            styleOverrides: {
              paper: {
                backgroundColor: darkMode
                  ? darkCodeTheme.background.paper
                  : lightCodeTheme.background.paper,
                borderRight: darkMode
                  ? `1px solid ${darkCodeTheme.divider}`
                  : `1px solid ${lightCodeTheme.divider}`,
              },
            },
          },
          MuiButton: {
            styleOverrides: {
              root: {
                borderRadius: 6,
              },
              containedPrimary: {
                color: '#ffffff', // White text for primary buttons in both modes
                '&:hover': {
                  backgroundColor: darkMode
                    ? darkCodeTheme.primary.dark
                    : lightCodeTheme.primary.dark,
                },
              },
              containedSecondary: {
                color: '#ffffff', // White text for secondary buttons in both modes
                '&:hover': {
                  backgroundColor: darkMode
                    ? darkCodeTheme.secondary.dark
                    : lightCodeTheme.secondary.dark,
                },
              },
              textPrimary: {
                color: darkMode
                  ? darkCodeTheme.primary.main
                  : lightCodeTheme.primary.main,
              },
              textSecondary: {
                color: darkMode
                  ? darkCodeTheme.secondary.main
                  : lightCodeTheme.secondary.main,
              },
            },
          },
          MuiIconButton: {
            styleOverrides: {
              root: {
                color: darkMode
                  ? darkCodeTheme.text.primary
                  : lightCodeTheme.text.primary,
              },
            },
          },
          MuiCard: {
            styleOverrides: {
              root: {
                backgroundColor: darkMode
                  ? darkCodeTheme.background.card
                  : lightCodeTheme.background.card,
                boxShadow: darkMode
                  ? '0 4px 20px rgba(0, 0, 0, 0.2)'
                  : '0 2px 8px rgba(0, 0, 0, 0.1)',
              },
            },
          },
          MuiPaper: {
            styleOverrides: {
              root: {
                backgroundImage: 'none',
                backgroundColor: darkMode
                  ? darkCodeTheme.background.paper
                  : lightCodeTheme.background.paper,
                color: darkMode
                  ? darkCodeTheme.text.primary
                  : lightCodeTheme.text.primary,
              },
            },
          },
          MuiDivider: {
            styleOverrides: {
              root: {
                backgroundColor: darkMode
                  ? darkCodeTheme.divider
                  : lightCodeTheme.divider,
              },
            },
          },
          MuiListItemText: {
            styleOverrides: {
              primary: {
                color: darkMode
                  ? darkCodeTheme.text.primary
                  : lightCodeTheme.text.primary,
              },
              secondary: {
                color: darkMode
                  ? darkCodeTheme.text.secondary
                  : lightCodeTheme.text.secondary,
              },
            },
          },
          MuiTextField: {
            styleOverrides: {
              root: {
                '& label': {
                  color: darkMode
                    ? darkCodeTheme.text.secondary
                    : lightCodeTheme.text.secondary,
                },
                '& label.Mui-focused': {
                  color: darkMode
                    ? darkCodeTheme.primary.main
                    : lightCodeTheme.primary.main,
                },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: darkMode
                      ? 'rgba(248, 248, 242, 0.2)'
                      : 'rgba(0, 0, 0, 0.2)',
                  },
                  '&:hover fieldset': {
                    borderColor: darkMode
                      ? darkCodeTheme.primary.main
                      : lightCodeTheme.primary.main,
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: darkMode
                      ? darkCodeTheme.primary.main
                      : lightCodeTheme.primary.main,
                  },
                  '& input': {
                    color: darkMode
                      ? darkCodeTheme.text.primary
                      : lightCodeTheme.text.primary,
                  },
                },
              },
            },
          },
        },
        // Use the complete shadow array for both dark and light modes
        shadows: createCustomShadows(darkMode),
      }),
    [darkMode]
  );

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      <MUIThemeProvider theme={theme}>{children}</MUIThemeProvider>
    </ThemeContext.Provider>
  );
};
