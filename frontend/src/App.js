import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Home from './pages/Home';
import StudentHome from './pages/student/StudentHome';
import TeacherHome from './pages/teacher/TeacherHome';
import AdminHome from './pages/admin/AdminHome';
import AddUser from './pages/admin/AddUser';
import Login from './pages/Login';
import UpdateUser from './pages/admin/UpdateUser';
import ViewUserList from './pages/admin/ViewUserList';
import AddCourse from './pages/admin/AddCourse';
import CourseList from './pages/admin/CourseList';
import ViewCourse from './pages/student/ViewCourse';
import UpdateCourse from './pages/admin/UpdateCourse';

function App() {
  return (

    <Router>
    <div className="App">

    <Routes>
    <Route exact path= "/" element={<Home />}></Route>
    <Route exact path="/signin" element={<Login />}></Route>
    <Route exact path= "/student" element={<StudentHome />}></Route>
    <Route exact path= "/teacher" element={<TeacherHome />}></Route>
    <Route exact path= "/admin" element={<AdminHome />}></Route>
    <Route exact path= "/addUser" element={<AddUser />}></Route>
    <Route exact path="/updateUser/:id" element={<UpdateUser/>}></Route>
    <Route exact path="/viewUserList" element={<ViewUserList/>}></Route>
    <Route exact path="/addCourse" element={<AddCourse/>}></Route>
    <Route exact path="/courseList" element={<CourseList/>}></Route>
    <Route exact path="/student-viewCourse" element={<ViewCourse />}></Route>
    <Route exact path="/updateCourse/:id" element={<UpdateCourse />}></Route>

    </Routes>
     
    </div>
    </Router>
  );
}

export default App;
