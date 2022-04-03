import React from 'react'
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { ButtonContainer,Line,SelectionDiv, DifficultyButton, MainContent, Headercontainer, Container, LeftMenu, RightItems, ProjectPanel, ProjectsContainer } from './Projects.styled';
import { useState, useEffect } from 'react';
const Projects = () => {

    const [checkBoxState, setCheckBoxState] = useState([{ id: 1, name: "premium", type: "subscription", checked: false },
    { id: 2, name: "free", type: "subscription", checked: false },
    { id: 3, name: "Animation", type: "ActivityType", checked: false },
    { id: 4, name: "Game", type: "ActivityType", checked: false },
    { id: 5, name: "Chatbot", type: "ActivityType", checked: false },
    { id: 6, name: "Augmented Reality", type: "ActivityType", checked: false },
    { id: 7, name: "1-4", type: "ActivityType", type: "Year", checked: false },
    { id: 8, name: "5-6", type: "ActivityType", type: "Year", checked: false },
    { id: 9, name: "7-8", type: "ActivityType", type: "Year", checked: false },
    { id: 10, name: "9-13", type: "ActivityType", type: "Year", checked: false },
    { id: 11, name: "Computer Science", type: "ActivityType", checked: false },
    { id: 12, name: "Maths", type: "ActivityType", type: "Year", checked: false },
    { id: 13, name: "Science", type: "ActivityType", type: "Year", checked: false },
    { id: 14, name: "Language", type: "ActivityType", type: "Year", checked: false },
    { id: 15, name: "Art", type: "ActivityType", type: "Year", checked: false },
    { id: 16, name: "Music", type: "ActivityType", type: "Year", checked: false },]);
    const [projectData, setProjectData] = useState();
    const [loading, setLoading] = useState(true);
    console.log("this is the inital state",checkBoxState);
    // useEffect(() => {
        // let checkBoxState2 = [
        //     { id: 1, name: "premium", type: "subscription",checked: false },
        //     { id: 2, name: "free", type: "subscription",checked: false },
        //     { id: 3, name: "Animation", type: "ActivityType",checked: false },
        //     { id: 4, name: "Game", type: "ActivityType",checked: false },
        //     { id: 5, name: "Chatbot", type: "ActivityType" ,checked: false},
        //     { id: 6, name: "Augmented Reality", type: "ActivityType" ,checked: false},
        //     { id: 7, name: "1-4", type: "ActivityType", type: "Year",checked: false },
        //     { id: 8, name: "5-6", type: "ActivityType", type: "Year" ,checked: false},
        //     { id: 9, name: "7-8", type: "ActivityType", type: "Year" ,checked: false},
        //     { id: 10, name: "9-13", type: "ActivityType", type: "Year",checked: false },
        //     { id: 11, name: "Computer Science", type: "ActivityType",checked: false },
        //     { id: 12, name: "Maths", type: "ActivityType", type: "Year",checked: false },
        //     { id: 13, name: "Science", type: "ActivityType", type: "Year",checked: false },
        //     { id: 14, name: "Language", type: "ActivityType", type: "Year",checked: false },
        //     { id: 15, name: "Art", type: "ActivityType", type: "Year",checked: false },
        //     { id: 16, name: "Music", type: "ActivityType", type: "Year" ,checked: false},
        // ];

        // setCheckBoxState(checkBoxState2.map((d) => {
        //     return { id: d.id, checked: false, name: d.name, type: d.type }
        // }));

    // }, [])

    useEffect(() => {
        console.log("this is the state", checkBoxState);
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
    }, [checkBoxState])

    useEffect(() => {
       

    }, [projectData])

    return (
        <>
            <Navbar></Navbar>

            <Container>

                <RightItems>
                    <Headercontainer>
                        <h1>Projects</h1>
                        <p>Welcome to the project library. You can use the filters on the right to help you search for specific projects.</p>

                    </Headercontainer>

                    <MainContent>

                        <LeftMenu>
                            {checkBoxState.map((val, idx) => (
                                <SelectionDiv key={val.id}>
                                    {idx === 0 ? <><p>Subscription</p><Line></Line></> : null}
                                    {idx === 2 ? <><p>Activity Type</p><Line></Line></> : null}
                                    {idx === 6 ? <><p>Year Level</p><Line></Line></>: null}
                                    {idx === 10 ? <><p>Subject Matter</p><Line></Line></> : null}
                                    <div key={val.id} style={{ display: "flex", margin: 0 }}>

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
                                    <div><DifficultyButton>Beginner</DifficultyButton> <DifficultyButton>Intermediate</DifficultyButton> <DifficultyButton>Advanced</DifficultyButton></div>
                                   
                                </ButtonContainer>
                                
                                <ProjectsContainer>

                                    {projectData.map((val, idx) => {
                                        return (
                                            <ProjectPanel key={val.ProjectID + 10000}>
                                                {<img src={"/images/Projects/" + val.Name.replaceAll(" ","") + ".png"}></img>}
                                                <h3 style={{margin:0}}>
                                                    {val.Name}
                                                </h3>
                                                <p>BEGINNER | {val.ActivityType}</p>
                                            </ProjectPanel>
                                        )
                                    })}</ProjectsContainer></div>
                        }

                    </MainContent>
                </RightItems>
            </Container>
            <Footer></Footer>

        </>
    )
}

export default Projects