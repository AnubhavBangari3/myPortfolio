
import React,{useState,useEffect} from 'react'
import Card from 'react-bootstrap/Card';

function WorkExperience() {
    const [work,setWork]=useState([])
    
  const fetchData =() =>{
    fetch('http://127.0.0.1:8000/work/')
    .then(response => response.json())
    .then(data => setWork(data))
  }

  useEffect(()=>{
    fetchData()},[])
  return (
    <div className="aboutMe my-2" id="work-id">

    <div className="left my-4">

        <h1>WORK EXPERIENCE</h1>
    </div>

    <div className="right my-2">
    {work.length > 0 && work.map(user=>{
    return (

      
      
      <div className="Jobs" key={user.id}>
        <Card style={{ width: '18rem', height:'25rem'}} className="text-center mx-2 my-2">
          <Card.Header><h4><b>Company:</b> {user.name}</h4></Card.Header>
          <Card.Header><h4><b>Role:</b> {user.role}</h4></Card.Header>
          <Card.Body>
          
            <Card.Text className="work-desc">
             {user.work}
              
            </Card.Text>
           
          </Card.Body>
          <Card.Footer className="text-muted"><b>Time:</b> {user.timeperiod} </Card.Footer>
        </Card>
      
      </div>
    )
   })}
   
    
       
        

    </div>

</div>
  )
}

export default WorkExperience
