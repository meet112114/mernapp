import React , {useState , useContext } from 'react'
import signinimg from "../images/signin-image.jpg";
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../App';

const Login = () => {

    const  {state , dispatch} = useContext( UserContext);
    const navigate = useNavigate();
    const [email ,setEmail] = useState('');
    const [password , setPassword] = useState('');


    const loginUser = async (e) => {
        e.preventDefault();

        const res = await fetch('signin' , {
            method:"POST",
            headers:{
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                email,
                password
            })
        });
        
        const data = res.json();

        if(res.status === 400 || !data){
            window.alert("Invalid credentials");
            console.log("invalid credenials");
        }else {
            dispatch({type:"USER" , payload:true})
            window.alert("Login successful");
            console.log("Login successful");
            navigate('/');
        }


    }

  return (
    <>
       
       <section class="sign-in">
            <div class="container">
                <div class="signin-content">
                    <div class="signin-image">
                        <figure><img src={signinimg} alt="sing up image"/></figure>
                        <a href="#" class="signup-image-link">Create an account</a>
                    </div>

                    <div class="signin-form">
                        <h2 class="form-title">Login</h2>
                        <form method="POST" class="register-form" id="login-form">
                            <div class="form-group">
                                <label for="your_name"><i class="zmdi zmdi-account material-icons-name"></i></label>
                                <input type="text" name="email" id="your_name" placeholder="email" 
                                value={email} onChange={(e)=> setEmail(e.target.value)}/>
                            </div>
                            <div class="form-group">
                                <label for="your_pass"><i class="zmdi zmdi-lock"></i></label>
                                <input type="password" name="your_pass" id="your_pass" placeholder="Password" 
                                value={password} onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            <div class="form-group">
                                <input type="checkbox" name="remember-me" id="remember-me" class="agree-term" />
                                <label for="remember-me" class="label-agree-term"><span><span></span></span>Remember me</label>
                            </div>
                            <div class="form-group form-button">
                                <input type="submit" name="signin" id="signin" class="form-submit" value="Log in" onClick={loginUser}/>
                            </div>
                        </form>
                        
                    </div>
                </div>
            </div>
        </section>


    </>
  )
}

export default Login