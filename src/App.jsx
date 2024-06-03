import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Tarif from './pages/Tarif';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Faq from './pages/Faq';
import Register from './pages/Register';
import Text from './pages/Text';
import Profile from './pages/Profile';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/tarif' element={<Tarif />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/faq' element={<Faq />} />
        <Route path='/register' element={<Register />} />
        <Route path='/text' element={<Text />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
