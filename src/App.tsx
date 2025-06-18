import { Route, Routes } from 'react-router-dom'
import RootLayout from '@/components/layout/RootLayout'
import Home from '@/pages/Home'
import ApplicationPage from '@/pages/ApplicationPage'
import ProductDetailPage from '@/pages/ProductDetailPage'

function App() {
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
