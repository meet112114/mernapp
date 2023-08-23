import React, { useEffect, useState } from 'react'
import "../css/Signup.css"
import img from "../images/signin-image.jpg"
import { useNavigate } from 'react-router-dom';

const About = () => {

  const navigate = useNavigate();
  const [userData , setUserData] = useState({
    "name":"meet",
    "email":"mrsanwadkar@gmail.com",
    "phone":9136235689,
    "work":"developer",
    "password":"atoz",
    "cpassword":"atoz"
  });

  const callAboutPage = async () => {

    try{
      const res = await fetch('/about' , {
        method:"GET",
        headers:{
           Accept : "application/json",
          'Content-Type':'applicaion/json'
        },
        credentials:"include"
      });

      const data = await res.json();
      console.log(data);
      setUserData(data);

      if (!res.status === 200){
        const error = new Error(res.error);
        throw error;  
      }

    }catch(err){
      console.log(err);
      navigate('/Login');
    }
  }

  useEffect(() => {
   callAboutPage();
  }, [])
  

  return (
    <>

      <div className='container3 mt-5 '>
        <form method="GET">

          <div className='row'>
            <div className='col-md-4 pro-4img'>
              <img className="pro-img" src={img} alt="" />
            </div>

            <div className='col-md-6 mt-5'>
              <div className='profile-name'>
                 <h4>{userData.name}</h4> 
                 <h5>{userData.work}</h5>
                 <p className='profile_rating mt-3 mb-5'>Rating : 1/1</p>

                 

              </div>
              
            </div>

            <div className='col-md-2 mt-2 '>
              <input type="submit"  className='profile-edit form-control' value="Edit Profile" />
            </div>
          </div>

          <div className='row'>

            {/* LEFT SIDE  */}
            <div className='col-md-4'>
            <div className='profile-link'>
              <p>LINKS</p>
              <a  className='aa' href="https://myweatherapp-112114.web.app/" target='_meet'>React app</a><br />
              <a  className='aa' href="https://myweatherapp-112114.web.app/" target='_meet'>React app</a><br />
              <a  className='aa' href="https://myweatherapp-112114.web.app/" target='_meet'>React app</a><br />
              <a  className='aa' href="https://myweatherapp-112114.web.app/" target='_meet'>React app</a><br />
            </div>
            </div>

            {/* RIGHT SIDE */}

            <div className='col-md-8'>
            <div className='row'>
              <div className='col-md-6'>
                <h6>User ID</h6>
              </div>
              <div className='col-md-6'>
                <p>{userData._id}</p>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-6'>
                <h6>Name</h6>
              </div>
              <div className='col-md-6'>
                <p>{userData.name}</p>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-6'>
                <h6>Email</h6>
              </div>
              <div className='col-md-6'>
                <p>{userData.email}</p>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-6'>
                <h6>Phone</h6>
              </div>
              <div className='col-md-6'>
                <p>{userData.phone}</p>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-6'>
                <h6>Profession</h6>
              </div>
              <div className='col-md-6'>
                <p>{userData.work}</p>
              </div>
            </div>
            </div>
            
          </div>

        </form>
      </div>

    </>

  )
}

export default About