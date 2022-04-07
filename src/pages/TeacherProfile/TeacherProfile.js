import Nav from '../components/navbar/Nav';
import './TeacherProfile.css';
import Pic from '../Images/Teacher areas/Ellipse -6.png';
import Footer from '../components/footer/Footer';
import React, { useState, useEffect } from 'react';

function TeacherProfile() {
  const [TeacherInfo, setTeacherInfo] = useState([]);

  useEffect(() => {
    const url = 'http://localhost:4000/TeacherProfile/4';

    const fetchData = async () => {
      try {
        const response = await fetch(url)
          .then((response) => response.json())
          .then((data) => {
            console.log(data[0]);
            setTeacherInfo(data[0]);
          });
      } catch (error) {
        console.log('error', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Nav></Nav>
      <div className="middlebody">
        <div className="left">
          <img src={Pic}></img>
          <br></br>
          <br></br>
          <button className='set'>Edit</button>
          <br></br>
          <br></br>
          <button className='set'>Change photo</button>
          <br></br>
          <br></br>
          <button className='set'>Settings</button>
        </div>

        <div className="right">
          <h2>{TeacherInfo.TeacherName}</h2>
          <br></br>

          <label><b>School:</b></label>&nbsp; &nbsp;
          <span>{TeacherInfo.School}</span>
          <br></br>
          <br></br>
          <label><b>Courses Purchased:</b></label>&nbsp; &nbsp;
          <span>Art</span>
          <br></br>
          <br></br>
          <label><b>Date of Birth:</b></label>&nbsp; &nbsp;
          <span>{TeacherInfo.DateOfBirth}</span>
          <br></br>
          <br></br>
          <label><b>Contact No:</b></label>&nbsp; &nbsp;
          <span>{TeacherInfo.ContactNumber}</span>
          <br></br>
          <br></br>
          <label><b>Email Address:</b></label>&nbsp; &nbsp;
          <span>{TeacherInfo.EMAIL}</span>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default TeacherProfile;
