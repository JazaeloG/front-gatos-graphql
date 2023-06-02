import CreateGato from './CreateGato';
import GatoList from './GatoList';
import Header from './Header';
import { Route, Routes } from 'react-router-dom';
import Login from './Login';

function App(){
  return (
    <div className="center w85">
      <Header />
      <div className="ph3 pv1 background-gray">
        <Routes>
          <Route path="/" element={<GatoList/>} />
          <Route
            path="/create"
            element={<CreateGato/>}
          />
          <Route path="/login" element={<Login/>} />
        </Routes>
      </div>
    </div>
  );
  };


export default App;