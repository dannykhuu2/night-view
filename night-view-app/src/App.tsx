import HomePage from './pages/HomePage/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Auth from './components/Auth/Auth';
import Header from './components/Header/Header';
import LikesPage from './pages/LikesPage/LikesPage';

function App() {
  return (
    <>
      <BrowserRouter>
      <Header></Header>
        <Routes>
          <Route path="/" element={<Header />} />
            <Route index element={<HomePage />} />
            <Route path="/likes" element={<LikesPage />} />
          <Route path="/auth/signin" element={<Auth initialStateSignIn={true} />} />
          <Route path="/auth/signup" element={<Auth initialStateSignIn={false} />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
