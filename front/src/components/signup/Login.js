import React from 'react'
import { useNavigate } from 'react-router-dom'


const Login = () => {
let navigate=useNavigate();
// navigate("../ArticleList",{replace:true})
  return (
	
    <div className="login">
				<form action={"http://localhost:5000/login"} > 
					<label for="chk" aria-hidden="true">Login</label>
					<input type="email" name="email" placeholder="Email" required="" />
					<input type="password" name="pswd" placeholder="Password" required="" />
					<button onClick={navigate("<../ArticleList/>",{replace:true})}>Login</button>
				</form>
			</div>
  )
}

export default Login
