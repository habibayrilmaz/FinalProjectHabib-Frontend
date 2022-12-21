import './App.css';
import User from './components/User';
import UserList from './components/UserList';
import Sidebar from './components/Sidebar';
import Imgsrc from './components/Imgsrc';
import {Routes, Route} from "react-router-dom";
import { WorkersPage } from './pages/WorkersPage';
import Expense from './components/Expense'
import OverTimeWork from './components/OverTimeWork'
import Permission from './components/Permission';
import Adverts from './components/Adverts';
import AdvertsList from './Lists.js/AdvertsList';
import ExpenseList from './Lists.js/ExpenseList';
import PermissionList from './Lists.js/PermissionList';
import OverTimeWorkList from './Lists.js/OverTimeWorkList';
import UsersList from './Lists.js/UsersList';
import UsersContacts from './Lists.js/UsersContacts';


function App() {
  return (
    <Routes>
      <Route path='/home' element={<><Imgsrc /><Sidebar /><UserList/></>}  />
      <Route path='/workers'  element={<><Imgsrc /><Sidebar /><UsersList/></>}  />
      <Route path='/workers-contact'  element={<><Imgsrc /><Sidebar /><UsersContacts/></>}  />
      <Route path="/adverts-list" element={<><Imgsrc /><Sidebar /><AdvertsList/></>}/> 
      <Route path="/permission-list" element={<><Imgsrc /><Sidebar /><PermissionList/></>}/> 
      <Route path="/expenses-list" element={<><Imgsrc /><Sidebar /><ExpenseList/></>}/> 
      <Route path="/over-time-work-list" element={<><Imgsrc /><Sidebar /><OverTimeWorkList/></>}/> 
      <Route path='/profile'  element={<><Imgsrc /><Sidebar /></>}  />
      <Route path='/adverts'  element={<><Imgsrc /><Sidebar /><Adverts/></>}  />
      <Route path='/permission'  element={<><Imgsrc /><Sidebar /><Permission/></>}  />
      <Route path='/expenses'  element={<><Imgsrc /><Sidebar /><Expense/></>}  />
      <Route path='/over-time-work'  element={<><Imgsrc /><Sidebar /><OverTimeWork/></>}  />
      <Route path='/user-register'  element={<><Imgsrc /><Sidebar /><User/></>}  />
      <Route path='/' element={<><Imgsrc /><Sidebar /><UserList/></>}  />
      <Route path='/workerspage' element={<WorkersPage/>} />
    </Routes>
  )
}

export default App;

