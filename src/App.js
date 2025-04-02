import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { ThemeProvider } from './components/theme/ThemeContext';
import Homepage from './pages/Homepage/Homepage';
function App() {
  return (
    <Router>
      <ThemeProvider>
        <Navbar />
        <ToastContainer />
        <Routes>
          <Route
            path='/'
            Component={Homepage}
          />
        </Routes>
      </ThemeProvider>
    </Router>
  );
}

export default App;
