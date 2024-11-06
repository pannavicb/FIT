import React from 'react';
// src/App.js
import './App.css'; // เพิ่มบรรทัดนี้เพื่อใช้ไฟล์ CSS
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Courses from './pages/Courses';
import CourseDetails from './pages/CourseDetails';
import StudentList from './components/StudentList'; // นำเข้าคอมโพเนนต์ StudentList

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:id" element={<CourseDetails />} />
        <Route path="/students" element={<StudentList />} /> {/* แสดงคอมโพเนนต์ StudentList */}
      </Routes>
    </Router>
  );
};

export default App;
