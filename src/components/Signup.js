import React , {useState} from 'react'
import "../css/Signup.css";
import signupimg from "../images/signup-image.jpg"
import { useNavigate } from 'react-router-dom';


const Signup = () => {
    const navigate = useNavigate();
    const [user , setUser] = useState({
        name:"", email:"", phone:"", work:"", password:"", cpassword:"" });

    let name, value;
    const handleInput = (e) => {
        console.log(e);
        name = e.target.name;
        value = e.target.value;

        setUser({...user, [name]:value});
    }

    const PostData = async(e) =>{
        e.preventDefault();

        const { name , email , phone , work , password , cpassword } = user;

        const res = await fetch("/register" , {
            method: "POST",
            headers:{
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({

                name , email , phone , work , password , cpassword

            })
        });

        const data = await res.json();

        if(res.status === 422 || !data ){
            window.alert("INVALID REGISTRATION");
            console.log("invalid registratoion");
        }else {
            window.alert("successful REGISTRATION");
            console.log("successful registratoion");
        }

        navigate('/login');
    }

  return (
    
    
    <>
    <section class="signup">
            <div class="container">
                <div class="signup-content">
                    <div class="signup-form">
                        <h2 class="form-title">Registartion</h2>
                        <form method="POST" class="register-form" id="register-form">
                            <div class="form-group">
                                <label for="name"><i class="zmdi zmdi-account material-icons-name"></i></label>
                                <input type="text" name="name" id="name" placeholder="Your Name" autoComplete='off' value={user.name} onChange={handleInput}/>
                            </div>
                            <div class="form-group">
                                <label for="email"><i class="zmdi zmdi-email"></i></label>
                                <input type="email" name="email" id="email" placeholder="Your Email" autoComplete='off' value={user.email} onChange={handleInput}/>
                            </div>
                            <div class="form-group">
                                <label for="email"><i class="zmdi zmdi-phone"></i></label>
                                <input type="number" name="phone" id="email" placeholder="phone number"autoComplete='off' value={user.phone} onChange={handleInput}/>
                            </div>
                            <div class="form-group">
                                <label for="work"><i class="zmdi zmdi-library"></i></label>
                                <input type="text" name="work" placeholder="Work " autoComplete='off' value={user.work} onChange={handleInput}/>
                            </div>
                            <div class="form-group">
                                <label for="pass"><i class="zmdi zmdi-lock"></i></label>
                                <input type="password" name="password" id="pass" placeholder="Password"autoComplete='off' value={user.password} onChange={handleInput}/>
                            </div>
                            <div class="form-group">
                                <label for="re-pass"><i class="zmdi zmdi-lock-outline"></i></label>
                                <input type="password" name="cpassword" id="re_pass" placeholder="confirm password" autoComplete='off' value={user.cpassword} onChange={handleInput}/>
                            </div>
                           
                            <div class="form-group form-button">
                                <input type="submit" name="signup" id="signup" class="form-submit" value="Register" onClick={PostData}/>
                            </div>
                        </form>
                    </div>
                    <div class="signup-image">
                        <figure><img src={signupimg} alt="sing up image"/></figure>
                        <a to="/Loginin" class="signup-image-link">I am already member</a>
                    </div>
                </div>
            </div>
        </section>
        
    </>
  )
}

export default Signup