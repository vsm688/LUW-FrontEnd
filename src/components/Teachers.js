import React, { useState, useEffect } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

function Teachers () {

    const [studentInfo, setStudentInfo] = useState({});
    const [loading, setLoading] = useState(true)
    const [studentID, setStudentID] = useState(1);

    async function fetchStudent() {
        const response = fetch(`http://localhost:5000/student/${studentID}`)
          .then((response) => response.json())
          .then((data) => {
    
            setStudentInfo(data)
            setStudentID(data.StudentID);
          })
          .finally(() => {
            setLoading(false);
          })
          .catch(error => {
            setLoading(true);
          })
    }

    useEffect(() => {
        const response = fetchStudent();
    
    }, []);

    return (
        <>
        <Navbar></Navbar>
        <div>
            <h1>Teachers</h1>
            {studentInfo.Name}
            <img src={"/images/" + studentInfo.StudentID +".png"}></img>
        </div>
        <Footer></Footer>
        </>
    )
}

  
export default Teachers;
