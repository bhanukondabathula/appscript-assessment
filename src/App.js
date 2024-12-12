import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './components/Home'
import ProductGallery from './components/ProductGallery'
import './App.css'

const App = () => (
  <Router>
    <Routes>
      <Route exact path="/" Component={Home} />
      <Route exact path="/products" Component={ProductGallery} />
    </Routes>
  </Router>
)

export default App
