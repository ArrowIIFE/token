import '../styles/App.css';
import EmpploeeData from './EmploeeData';
import EmployeeCreate from './EmployeeCreate';
import EmployeeEdit from './EmployeeEdit';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
function App() {
  return (
       
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<EmpploeeData />} />
        <Route path="/employeecreate" element={<EmployeeCreate />}/>
        <Route path='/employee/edit/:empid' element={<EmployeeEdit />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
