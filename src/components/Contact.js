import React , {useEffect , useState} from 'react'
import "../css/Signup.css"


const Contact = () => {

  const [userData , setUserData] = useState({name:"",email:"",phone:"",message:""});

  const ContactUsPage = async () => {

    try{

      const res = await fetch('/getData' , {
        method:"GET",
        headers:{
          'Content-Type':'applicaion/json'
        }
      });

      const data = await res.json();
      // console.log(data);
      setUserData({ ...userData , name:data.name , email:data.email , phone:data.phone });

      if (!res.status === 200){
        const error = new Error(res.error);
        throw error;  
      }

    }catch(err){
      console.log(err);
    }
  }

  useEffect(() => {
   ContactUsPage();
  }, []);

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUserData({ ...userData , [name]:value });
  }

  
  const ContactForm = async(e) =>{
    e.preventDefault();

    const { name , email , phone , message } = userData;
    const res = await fetch("/contact" , {
        method: "POST",
        headers:{
            "Content-Type" : "application/json"
        },
        body: JSON.stringify({

            name , email , phone , message

        })
    });

    const data = await res.json();

        if(!data){
          alert("message not sent");
        }else{
          alert("message sent");
          setUserData({ ...userData , message:""});
        }

}

  return (
    <>
    <div>

    </div>
  <div className='container'>

  <form  method="POST" className="row g-3" style={{
    marginTop:"50px"
  }}>

    <div className='contact-us' style={{
      marginBottom:"10px",
      paddingLeft:"15px"
    }}>  Get In Touch</div>

    <div className="col-md-4">
    <input type="text" className="form-control" 
    name='name'
    value={userData.name}
    onChange={handleInput}
    placeholder='Name'/>
  </div>

  <div className="col-md-4">
    <input type="text" className ="form-control" 
    name='email'
    value={userData.email}
    onChange={handleInput}
    placeholder='email'/>
  </div>

  <div className="col-md-4">
    <div className="input-group has-validation">
      <input type="number" className="form-control" 
      name='phone'
      value={userData.phone}
      onChange={handleInput}
      placeholder='phone number'/>
    </div>
  </div>

  <div  style={{
    marginTop:"50px",
  }}>
    <textarea className="form-control"  
    name='message'
    value={userData.message}
    onChange={handleInput}
    placeholder="message" required></textarea>
  </div>

  <div className="form-group form-button" style={{
    paddingLeft:"15px",
    marginBottom:"20px"
  }}>
    <input type="submit" name="send"  className="form-submit" value="Send" onClick={ContactForm} />
  </div>

  </form>
  </div>
    </>

  )
}

export default Contact