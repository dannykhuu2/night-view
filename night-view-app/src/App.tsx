import HomePage from './pages/HomePage/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Auth from './components/Auth/Auth';
import Header from './components/Header/Header';
import LikesPage from './pages/HomePage/LikesPage';

function App() {
  return (
    <>
      <Header></Header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/likes" element={<LikesPage />} />
          <Route path="/auth" element={<Auth showSignIn={true}/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
