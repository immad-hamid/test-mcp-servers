import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { 
  ThemeProvider, 
  createTheme,
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  Container,
  Button,
  Box,
  Card,
  CardContent,
  Grid,
  Tabs,
  Tab
} from '@mui/material';
import { Home as HomeIcon, Star as StarIcon, People as PeopleIcon, School as SchoolIcon } from '@mui/icons-material';
import UsersPage from './pages/UsersPage';
import StudentsPage from './pages/StudentsPage';
import './App.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

function NavigationTabs() {
  const location = useLocation();
  const [value, setValue] = React.useState(location.pathname);

  React.useEffect(() => {
    setValue(location.pathname);
  }, [location.pathname]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Tabs 
      value={value} 
      onChange={handleChange} 
      textColor="inherit" 
      indicatorColor="secondary"
      sx={{ ml: 3 }}
    >
      <Tab 
        label="Home" 
        value="/" 
        component={Link} 
        to="/" 
        icon={<HomeIcon />} 
        iconPosition="start" 
      />
      <Tab 
        label="Users" 
        value="/users" 
        component={Link} 
        to="/users" 
        icon={<PeopleIcon />} 
        iconPosition="start" 
      />
      <Tab 
        label="Students" 
        value="/students" 
        component={Link} 
        to="/students" 
        icon={<SchoolIcon />} 
        iconPosition="start" 
      />
    </Tabs>
  );
}

function HomePage() {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h2" component="h1" gutterBottom align="center">
        Welcome to Material-UI
      </Typography>
      
      <Typography variant="h5" component="h2" gutterBottom align="center" color="text.secondary">
        Your React app is now configured with MUI!
      </Typography>
      
      <Box sx={{ mt: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="div" gutterBottom>
                  <StarIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
                  Getting Started
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Material-UI is now successfully configured in your React application. 
                  You can start building beautiful UIs with pre-built components.
                </Typography>
                <Button variant="contained" sx={{ mt: 2 }}>
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="div" gutterBottom>
                  <PeopleIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
                  Users DataGrid
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Check out the Users page to see MUI DataGrid in action with 
                  mock data, pagination, and sorting capabilities.
                </Typography>
                <Button 
                  variant="outlined" 
                  sx={{ mt: 2 }}
                  component={Link}
                  to="/users"
                >
                  View Users
                </Button>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="div" gutterBottom>
                  <SchoolIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
                  Students DataGrid
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Explore the Students page featuring advanced DataGrid with 
                  custom renderers, filtering, and comprehensive student management.
                </Typography>
                <Button 
                  variant="outlined" 
                  sx={{ mt: 2 }}
                  component={Link}
                  to="/students"
                >
                  View Students
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <AppBar position="static">
          <Toolbar>
            <HomeIcon sx={{ mr: 2 }} />
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              React MUI App
            </Typography>
            <NavigationTabs />
            <Button color="inherit" sx={{ ml: 2 }}>Login</Button>
          </Toolbar>
        </AppBar>
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/students" element={<StudentsPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
