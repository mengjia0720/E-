import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import MainLayout from './components/layout/MainLayout';
import Home from './pages/Home';
import Search from './pages/Search';
import CampsiteDetails from './pages/CampsiteDetails';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';

function App() {
  return (
    <AuthProvider>
      <Router>
        <MainLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/campsites/:id" element={<CampsiteDetails />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </MainLayout>
      </Router>
    </AuthProvider>
  );
}

export default App;