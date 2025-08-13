import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import Layout from "./components/Layout";

import { Routes, Route } from 'react-router-dom';
import AdminPage from './pages/admin/AdminPage';
import ProductsPage from './pages/ProductsPage';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path='services' element={<ServicesPage />} />
        <Route path='products' element={<ProductsPage />} />
      </Route>

      <Route path='admin' element={<AdminPage />} />
    </Routes>
  )
}

export default App