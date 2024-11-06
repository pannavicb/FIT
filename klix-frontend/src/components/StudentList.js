// src/components/StudentList.js
import React, { useEffect, useState } from 'react';

const StudentList = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await fetch('http://localhost:3333/students');
        const data = await response.json();
        setStudents(data);
      } catch (error) {
        console.error('Error fetching student data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStudents();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Student List</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>BOD</th>
            <th>Status</th>
            <th>Image</th> {/* เพิ่มคอลัมน์สำหรับแสดงรูป */}
          </tr>
        </thead>
        <tbody>
          {students.map(student => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.first_name}</td>
              <td>{student.last_name}</td>
              <td>{student.email}</td>
              <td>{student.birthdate}</td>
              <td>{student.status}</td>
              <td>
                <img src={student.imageUrl} alt={student.name} style={{ width: '100px', height: '100px', borderRadius: '100%' }} />
              </td> {/* แสดงภาพนักเรียน */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;
