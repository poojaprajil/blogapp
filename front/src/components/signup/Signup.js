import React, { useEffect, useState } from 'react'
import Login from './Login';
import './Signup.css'
import validation from './validation'

function Signup(){
    // storing form value
    const [formValues,setFormValues]=useState({username: "", email: "", password: ""} );
    
    // form error values
    const [formEroorValues,setFormErrorValues]=useState({});

    // flag for submission
    const [isSubmit,setIsSubmit]=useState(false);

    // field change
    const handleChange=(event)=>{
             
        // console.log(event.target)
        const {name,value}=event.target;
        setFormValues({...formValues,[name]:value});
        console.log(formValues);

    }

    // form refresh
    const handleSubmit=(event)=>{
        event.preventDefault();
        setFormErrorValues(validation(formValues));
        setIsSubmit(true);
    }

    useEffect(()=>{
     if(Object.keys(formEroorValues).length===0 && isSubmit){
         alert("successful signup");
     }
    },[formEroorValues])

    return (

    // form
    <div>
      <div className="main">  	
		<input type="checkbox" id="chk" aria-hidden="true" />
        {Object.keys(formEroorValues).length===0 && isSubmit ? (<Login/>):(<pre className='pretext'></pre>)}


			<div className="signup">
				<form onSubmit={handleSubmit} action="http://localhost:5000/read" >
					<label for="chk" aria-hidden="true">Sign up</label>
					<input type="text" name="username" placeholder="User name" required="" value={formValues.username} onChange={handleChange}/>
					<p className='error'>{formEroorValues.username}</p>
                    <input type="email" name="email" placeholder="Email" required="" value={formValues.email} onChange={handleChange}/>
					<p className='error'>{formEroorValues.email}</p>
                    <input type="password" name="password" placeholder="Password" required="" value={formValues.password} onChange={handleChange}/>
					<p className='error'>{formEroorValues.password}</p>
                    <button> Sign up</button>
				</form>
			</div>

			
	</div>
    </div>
  )
}

export default Signup;
