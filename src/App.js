import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar';
import TableComponent from './components/TableComponent';
import ProfileForm from './components/ProfileForm';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
function App() {
  return (
    <Router>
      <Sidebar>
        <Routes>
          <Route path="/table" element={<TableComponent/>} />
          <Route path="/profile" element={<ProfileForm/>} />
        </Routes>
      </Sidebar>
    </Router>
  );
}

export default App;
