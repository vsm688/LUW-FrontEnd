import React from 'react'
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { PageButton, DisplayPagesGroup, DifficultyGroup, 
    BacktoTopButton, BacktoTopContainer, ButtonContainer, Line, SelectionDiv, DifficultyButton, 
    MainContent, Headercontainer, Container, LeftMenu, RightItems, ProjectPanel, ProjectsContainer } from './Projects.styled';
import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
const Projects = () => {

    const [checkBoxState, setCheckBoxState] = useState([
        { id: 1, name: "premium", type: "subscription", checked: false },
        { id: 2, name: "free", type: "subscription", checked: false },
        { id: 3, name: "Animation", type: "ActivityType", checked: false },
        { id: 4, name: "Game", type: "ActivityType", checked: false },
        { id: 5, name: "Chatbot", type: "ActivityType", checked: false },
        { id: 6, name: "Augmented Reality", type: "ActivityType", checked: false },
        { id: 7, name: "1-4", type: "ActivityType", type: "Year", checked: false, lower:1, higher: 4},
        { id: 8, name: "5-6", type: "ActivityType", type: "Year", checked: false,lower:5,higher:6 },
        { id: 9, name: "7-8", type: "ActivityType", type: "Year", checked: false,lower:7,higher:8 },
        { id: 10, name: "9-13", type: "ActivityType", type: "Year", checked: false,lower:9,higher:13 },
        { id: 11, name: "Computer Science", type: "Subject", checked: false },
        { id: 12, name: "Maths", type: "ActivityType", type: "Subject", checked: false },
        { id: 13, name: "Science", type: "ActivityType", type: "Subject", checked: false },
        { id: 14, name: "Language", type: "ActivityType", type: "Subject", checked: false },
        { id: 15, name: "Art", type: "ActivityType", type: "Subject", checked: false },
        { id: 16, name: "Music", type: "ActivityType", type: "Subject", checked: false },]);




    const [buttonState, setButtonState ] = useState(
        [
            {id:1, color:"#65AFFA", name:"Beginner", textColor: "white"},
            {id:2, color:"white",name:"Intermediate", textColor: "black"},
            {id:3, color:"white",name:"Advanced", textColor: "black"},
        ]
    )

    const [projectData, setProjectData] = useState(null);
    const [loading, setLoading] = useState(true);

    const myRef = useRef(null)
    let navigate = useNavigate(); 
    const routeChange = (path) =>{ 
        
        navigate("/" + path);
      }

    useEffect(() => {
        console.log("state has changed!")
        fetch("http://localhost:5000/projects", {
            method: "POST",
            body: JSON.stringify(checkBoxState),
            headers: {
                "Content-type": "application/json"
            }
        }).then(response => response.json())
            .then(data => setProjectData(data))
            .finally(() => {

                setLoading(false);

            })
            .catch(error => console.log(error))
    }, [checkBoxState])

    useEffect(() => {


    }, [projectData])
    let toScroll = document.getElementById("MainPanelHeader");
    return (
        <>
            <Navbar></Navbar>

            <Container>

                <RightItems>
                    <Headercontainer>
                        <div ref={myRef}></div>
                        <h1>Projects</h1>
                        <p>Welcome to the project library. You can use the filters on the right to help you search for specific projects.</p>

                    </Headercontainer>

                    <MainContent>

                        <LeftMenu>
                         
                            {checkBoxState.map((val, idx) => (
                           
                                <SelectionDiv key={val.id + 50}>
                                    {idx === 0 ? <><p>Subscription</p><Line></Line></> : null}
                                    {idx === 2 ? <><p>Activity Type</p><Line></Line></> : null}
                                    {idx === 6 ? <><p>Year Level</p><Line></Line></> : null}
                                    {idx === 10 ? <><p>Subject Matter</p><Line></Line></> : null}
                                    <div key={val.id * 10} style={{ display: "flex", margin: 0 }}>

                                        <input style={{ marginRight: "20px" }} checked={val.checked} type="checkbox" key={val.id}
                                            onChange={
                                                (e) => {

                                                    setCheckBoxState(checkBoxState.map(item => {
                                                        if (val.id == item.id) {
                                                            item.checked = e.target.checked;
                                                        }
                                                        return item;
                                                    }));
                                                }
                                            }></input><p>{val.name}</p>
                                    </div>
                                    {idx === 1 ? <br></br> : null}
                                    {idx === 5 ? <br></br> : null}
                                    {idx === 9 ? <br></br> : null}
                                </SelectionDiv>
                            ))}


                        </LeftMenu>

                        {loading ? <p>Loading</p> :

                            <div>
                                <ButtonContainer>

                                    <DifficultyGroup>
                                        {
                                            buttonState.map((val,idx) =>{
                                                return(
                                                    <DifficultyButton id = {idx + 20} style={{background:`${val.color}`, color:`${val.textColor}`}} onClick={
                                                        (e) =>{
                                                            setButtonState(buttonState.map( (item,idx) =>{
                                                                if (item.id == val.id){
                                                                    item.color = "#65AFFA";
                                                                    item.textColor = "#FFFFFF";
                                                                } else{
                                                                    item.color = "#FFFFFF";
                                                                    item.textColor = "#000000";
                                                                }
                                                                return item;
                                                            }

                                                            ))
                                                        }
                                                    }>{val.name}</DifficultyButton>
                                                )
                                            })
                                        }
                                       </DifficultyGroup>
                                    <DisplayPagesGroup><div style={{ marginRight: "20px", color: "#6C6C6C" }}>Show</div><PageButton style={{ backgroundColor: "#65AFFA", color: "#FFFFFF" }}>25</PageButton><PageButton>50</PageButton><PageButton>100</PageButton></DisplayPagesGroup>


                                </ButtonContainer>

                                <ProjectsContainer>

                                    {

                                        (projectData == null ? <p>Sorry, Project data not available</p> :

                                            projectData.map((val, idx) => {
                                                console.log(val.Instructions);
                                                return (
                                                    
                                                    <ProjectPanel key={val.ProjectID + 10000} onClick={ () => routeChange(val.Instructions)}>
                                                        {<img src={"/images/Projects/ProjectPagePics/" + val.Name.replaceAll(" ", "") + ".png"}></img>}
                                                        <div>
                                                            <h3 style={{ margin: 0, color: "#6C6C6C" }}>
                                                                {val.Name}
                                                            </h3>
                                                            <p style={{ color: "#6C6C6C" }}>BEGINNER | {val.ActivityType}</p>
                                                        </div>
                                                    </ProjectPanel>
                                                  
                                                )
                                            }))}</ProjectsContainer>

                                <BacktoTopContainer onClick={
                                    () => {
                                        myRef.current.scrollIntoView();

                                    }
                                }>
                                    <BacktoTopButton>Back to top</BacktoTopButton>
                                </BacktoTopContainer>
                            </div>
                        }

                    </MainContent>
                </RightItems>
            </Container>
            <Footer></Footer>

        </>
    )
}

export default Projects