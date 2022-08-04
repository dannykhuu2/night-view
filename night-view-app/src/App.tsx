import HomePage from './components/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Auth from './components/Auth';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<Auth isSignin={true}/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
