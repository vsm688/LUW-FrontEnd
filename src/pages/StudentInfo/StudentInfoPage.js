import React from 'react'
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { StudentPageContainer, StudentMainContent, StudentProfileDiv, StudentInfoContainer, StudentMainContentSecondary, 
  ImgContainer, ProfileButton, StudentInfoDiv, InformationContent } from "./StudentInfoPage.Styled";
import { useEffect } from 'react';
import { useState } from 'react';
import { type } from '@testing-library/user-event/dist/type';
const StudentInfoPage = () => {

  const [studentInfo, setStudentInfo] = useState(null);
  const [loading,setLoading] = useState(true)
  
  async function fetchStudent () {
    const response = fetch("http://localhost:5000/student/1")
    .then((response) => response.json())
    .then((data) => {
   
      setStudentInfo(data)})
    .finally(() =>{
      setLoading(false);
    })
  }

  useEffect ( () =>{
    const response = fetchStudent();

  },[]);
  // We know if loading hasn't completed that the studentInfo state hasn't been updated. Therefore we display loading on the screen. Else we have access
  // to all the fields and thus can load the data.
  if (loading){
    return <>
     "loading"
    </>
  } 

  const photoPath = studentInfo.ImagePath;
  console.log(studentInfo.StudentID);
  const photoPath2 = "/images/" + studentInfo.StudentID +".png";
  
  return (
    <>
      <StudentPageContainer>
        <Navbar></Navbar>
        <StudentMainContent>
          <StudentMainContentSecondary>
            <StudentProfileDiv>
        
              <ImgContainer src={photoPath2}></ImgContainer>
              <ProfileButton>Edit profile</ProfileButton>
              <ProfileButton>Change photo</ProfileButton>
            </StudentProfileDiv>
            <StudentInfoContainer>
              <h1>{studentInfo.Name}</h1>
              <StudentInfoDiv>
                <InformationContent><p>School</p> <div><p>{studentInfo.School}</p></div></InformationContent>
                <InformationContent><p>Teacher</p> <div><p>{studentInfo.Teacher}</p></div></InformationContent>
                <InformationContent><p>Course</p> <div><p>Beginner</p></div></InformationContent>
                <InformationContent><p>Date of Birth</p> <div><p>{studentInfo.DateOfBirth}</p></div></InformationContent>
                <InformationContent><p>Contact No</p> <div><p>{studentInfo.ContactNumber}</p></div></InformationContent>
                <InformationContent><p>Email Address</p> <div><p>{studentInfo.Email}</p></div></InformationContent>
              </StudentInfoDiv>

            </StudentInfoContainer>
          </StudentMainContentSecondary>
        </StudentMainContent>
        <Footer></Footer>
      </StudentPageContainer>
    </>
  )
}

export default StudentInfoPage;