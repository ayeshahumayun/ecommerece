import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import ProductGrid from './pages/ProductGrid';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Calendar from './pages/Calendar';
import VideoCall from './pages/VideoCall';
import DocumentChamber from './pages/DocumentChamber';
import Payments from './pages/Payments';
import Login from './pages/Login';
import Walkthrough from './components/Walkthrough';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list" element={<ProductList />} />
          <Route path="/grid" element={<ProductGrid />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/video-call" element={<VideoCall />} />
          <Route path="/document-chamber" element={<DocumentChamber />} />
          <Route path="/payments" element={<Payments />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
      <Walkthrough />
      <Footer />
    </div>
  );
}

export default App;
