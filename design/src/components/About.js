
import React,{useState,useEffect} from 'react'
import Image from 'react-bootstrap/Image'


function About() {
  const [about,setAbout]=useState([])

  const fetchData =() =>{
    fetch('http://127.0.0.1:8000/about/')
    .then(response => response.json())
    .then(data => setAbout(data))
  }

  useEffect(()=>{
    fetchData()},[])

    
  return (
    <div className="about my-2">
        
        {about.length > 0 && about.map(user=>{
        return (
          
          <div className="des" key={user.id}>
            <div className="inside mx-2 my-2">
            <Image className="me" src={user.image} fluid/>
            </div>
            
            
            <div className="right-work mx-2 my-4"><h2>Hi I am {user.name}</h2>
            
            <h3>
              "When you change the way you look at things, the things you look at change" ~ Wayne Dyer
            </h3>
            
            </div>
            
            
          
          </div>
        )
       })}
         
        
       

    </div>
  )
}

export default About
