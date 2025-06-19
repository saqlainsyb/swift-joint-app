import { Route, Routes, useLocation } from 'react-router-dom'
import RootLayout from '@/components/layout/RootLayout'
import Home from '@/pages/Home'
import ApplicationPage from '@/pages/ApplicationPage'
import ProductDetailPage from '@/pages/ProductDetailPage'
import { useEffect } from 'react'

function App() {
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]); 
  return (
    <RootLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/application" element={<ApplicationPage />} />
          <Route path="/product-detail/:productName" element={<ProductDetailPage />} />
        </Routes>
      </RootLayout>
  )
}

export default App
