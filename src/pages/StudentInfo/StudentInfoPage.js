import React from 'react'
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import {BackToProjects,
  StudentPageContainer, StudentMainContent, StudentProfileDiv, StudentInfoContainer, StudentMainContentSecondary,
  ImgContainer, ProfileButton, StudentInfoDiv, InformationContent,StudentInfoFlexContainer,NameDiv
} from "./StudentInfoPage.Styled";
import { useEffect } from 'react';
import { useState } from 'react';
import { type } from '@testing-library/user-event/dist/type';
import { useNavigate } from "react-router-dom";
const StudentInfoPage = () => {

  const [studentInfo, setStudentInfo] = useState(null);
  const [loading, setLoading] = useState(true)
  const [studentID, setStudentID] = useState(1);

  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/projects`; 
    navigate(path);
  }


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
  // We know if loading hasn't completed that the studentInfo state hasn't been updated. Therefore we display loading on the screen. Else we have access
  // to all the fields and thus can load the data.

    return (
      <>
        <StudentPageContainer>
          <Navbar></Navbar>
          <StudentMainContent>
            <StudentMainContentSecondary>
              <StudentProfileDiv>
                {studentInfo === null ? <> <ImgContainer></ImgContainer>
                  <ProfileButton>Edit profile</ProfileButton>
                  <ProfileButton>Change photo</ProfileButton></> :


                  <> <ImgContainer src={"/images/" + studentInfo.StudentID +".png"}></ImgContainer>
                    <ProfileButton>Edit profile</ProfileButton>
                    <ProfileButton>Change photo</ProfileButton></>

                }
              </StudentProfileDiv>
              <StudentInfoFlexContainer>
              <StudentInfoContainer>
              
                <StudentInfoDiv>

                  {studentInfo === null ? <>   <InformationContent><p>School</p> <div><p></p></div></InformationContent>
                    <InformationContent><p>Teacher</p> <div><p></p></div></InformationContent>
                    <InformationContent><p>Course</p> <div><p>Beginner</p></div></InformationContent>
                    <InformationContent><p>Date of Birth</p> <div><p></p></div></InformationContent>
                    <InformationContent><p>Contact No</p> <div><p></p></div></InformationContent>
                    <InformationContent><p>Email Address</p> <div><p></p></div></InformationContent></>:
                    
                    <><NameDiv><h1>{studentInfo.Name}</h1>     </NameDiv>             <InformationContent><p>School</p> <div><p>{studentInfo.School}</p></div></InformationContent>
                    <InformationContent><p>Teacher</p> <div><p>{studentInfo.TeacherName}</p></div></InformationContent>
                    <InformationContent><p>Course</p> <div><p>Beginner</p></div></InformationContent>
                    <InformationContent><p>Date of Birth</p> <div><p>{studentInfo.DateOfBirth.split("T")[0]}</p></div></InformationContent>
                    <InformationContent><p>Contact No</p> <div><p>{studentInfo.ContactNumber}</p></div></InformationContent>
                    <InformationContent><p>Email Address</p> <div><p>{studentInfo.Email}</p></div></InformationContent></>
                    }
                    
                </StudentInfoDiv>
            
              </StudentInfoContainer>
              <BackToProjects onClick={routeChange}>Back to Projects</BackToProjects>
              </StudentInfoFlexContainer>
            </StudentMainContentSecondary>
          </StudentMainContent>
          <Footer></Footer>
        </StudentPageContainer>
      </>
    )
  }






export default StudentInfoPage;