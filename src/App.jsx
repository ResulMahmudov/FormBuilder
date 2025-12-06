import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header';
import Preview from './pages/Preview';

const App = () => {
  
  return (
    <div className="App">
      <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/preview" element={<Preview />} />
        </Routes>
    </div>
  )
}

export default App