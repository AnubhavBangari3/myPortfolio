
import React,{useState,useEffect} from 'react'
import Badge from 'react-bootstrap/Badge';

function Skills() {
    const [skills,setSkills]=useState([])

    const fetchData =() =>{
      fetch('http://127.0.0.1:8000/skills/')
      .then(response => response.json())
      .then(data => setSkills(data))
    }
  
    useEffect(()=>{
      fetchData()},[])
  return (
    <div className="aboutMe my-2">

        <div className="left my-4">

            <h1>SKILLS</h1>
        </div>

        <div className="right my-2">
        {skills.length > 0 && skills.map(user=>{
        return (
                
                
                  <div className="skills-list mx-2" key={user.id}>
                    <h4><Badge  bg="light" text="dark">
                      {user.name}
                    </Badge>{' '}</h4>
                  </div>
                 
                    
             
                
       
        )
       })}
        

        </div>

    </div>
  )
}

export default Skills
