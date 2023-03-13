
import React,{useState,useEffect} from 'react'
import Card from 'react-bootstrap/Card';
//import testI from './meditation.jpg';

function MyProjects() {
    const [project,setProject]=useState([])

    const fetchData =() =>{
        fetch('http://127.0.0.1:8000/project/')
        .then(response => response.json())
        .then(data => setProject(data))
      }
    
      useEffect(()=>{
        fetchData()},[])
    

  return (
    <div className="pro">
        <h1 className="headP">Projects</h1>
        <div className="projects my-4">
        {project.length > 0 && project.map(user=>{
        return (
            <Card style={{ width: '18rem'}} key={user.id} className="project mx-2 my-2">
            <Card.Img variant="top" src={user.image} />
            <Card.Body>
                <Card.Title>{user.title}</Card.Title>
                <Card.Text>
                {user.description}
                </Card.Text>
               
            </Card.Body>
        </Card>
         
        )
       })}
       


        </div>
    </div>
  )
}

export default MyProjects