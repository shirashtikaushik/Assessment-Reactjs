import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';

function ShowStudentComponent() {
    debugger;
  const [students, setStudents] = useState([]);
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/student');
        setStudents(response.data);
      } catch (error) {
        console.error('Error fetching student data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2 class="text-left">Show Student</h2>
      <div>
        {students.map((student) => (
            <Card style={{ width: '18rem',  border:'2px solid grey', marginBottom:'10px'}}>
            <Card.Body>
              <Card.Title><b>NAME :</b> {student.name}</Card.Title>
              <Card.Text>
               <p><b>DOB :</b> {student.dob}</p>
               <p><b>GENDER :</b> {student.gender}</p>
               <p><b>ADDRESS :</b> {student.address}</p>
               <p><b>MOBILE :</b> {student.mobileNumber}</p>
              </Card.Text>
            </Card.Body>
          </Card>

          // <div key={student.id} className="student-card">
          //   <h3>Student ID: {student.id}</h3>
          //   <p>Name: {student.name}</p>
          //   <p>DOB: {student.dob}</p>
          //   <p>Gender: {student.gender}</p>
          //   <p>Address: {student.address}</p>
          //   <p>Mobile No: {student.mobileNumber}</p>
          // </div>
        ))}
      </div>
    </div>
  );
}

export default ShowStudentComponent;

