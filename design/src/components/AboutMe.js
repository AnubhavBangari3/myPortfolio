
import React,{useState,useEffect} from 'react'


function AboutMe() {
  const [aboutMe,setAboutMe]=useState([])
  const fetchData =() =>{
    fetch('http://127.0.0.1:8000/aboutMe/')
    .then(response => response.json())
    .then(data => setAboutMe(data))
  }

  useEffect(()=>{
    fetchData()},[])
  return (
    <div className="aboutMe my-2">

        <div className="left my-4">

            <h1>ABOUT ME</h1>
        </div>

        <div className="right my-2">
        {aboutMe.length > 0 && aboutMe.map(user=>{
        return (
          
          <div className="intro">
            <p  key={user.id}>
                {user.description}
          </p>
          <p>
            <b>In future I will be doing 12 project in 12 months challenge </b>
          </p>
          </div>
        )
       })}
       
          

        </div>

    </div>
  )
}

export default AboutMe