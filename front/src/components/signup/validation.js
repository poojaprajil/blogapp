function validation(formValues){

    const errors={};
    const regexp = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if(!formValues.username){
        errors.username="Username is required";
     }
     if(!formValues.email){
        errors.email="Email is required";
     }
     else if(!regexp.test(formValues.email)){
         errors.email="Email is invalid";
     }
     if (!formValues.password){
         errors.password="Passsword is required";
     }
     else if(formValues.password.length< 5){
         errors.password="Password is too short";
     }

     return errors;

}

export default validation;