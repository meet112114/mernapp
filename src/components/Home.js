import React , { useState , useEffect }from 'react'

const Home = () => {

  
  const [userName , setUserName] = useState();
  const [show , setShow] = useState(false);

  const HomePage = async () => {

    try{

      const res = await fetch('/getData' , {
        method:"GET",
        headers:{
          'Content-Type':'applicaion/json'
        }
      });

      const data = await res.json();
      // console.log(data);
      setUserName( data.name );
      setShow(true);
     
    }catch(err){
      console.log(err);
    }
  }

  useEffect(() => {
   HomePage();
  }, []);

  return (
    <div className='home'>
        <div className='home-div'>
           <h1 className='pt-5'style={{
            color:"white",
            fontSize:"35px"
           }}>Welcome</h1>
           <h1 style={{
            color:" rgb(88, 176, 211)"
           }} >{userName }</h1>
           <h1 style={{
            color:" rgb(88, 176, 211)"
           }}> { show ? "Happy to see you back" : "We are the MERN developer" }</h1>
        </div>
   </div>
    
  )
}

export default Home