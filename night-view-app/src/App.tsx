import HomePage from './components/HomePage/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Auth from './components/Auth/Auth';
import Header from './components/Header/Header';

function App() {
  return (
    <>
      <Header></Header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/auth" element={<Auth isSignin={true}/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
