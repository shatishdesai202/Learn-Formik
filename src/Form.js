import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';


//IMPORTING CSS
import './Form.css';

const initialValues = {
    name : "",
    surname : "",
    address : ""
}

// const validate =  values =>{

//     const errors = {};

//     if(!values.name){
//         errors.name = 'required';
//     }else if ( values.name.length < 3){
//         errors.name = "enter more than 3 character";
//     }

//     if(!values.surname){
//         errors.surname = 'required';
//     }

//     if(!values.address){
//         errors.address = 'required';
//     }else if ( values.address.length < 5){
//         errors.address = "enter more than 5 character";
//     }

//     return errors;
// }

const validationSchema = Yup.object({ // REMEMBER ( validationSchema ) Exactly same name is compulsory
    name: Yup.string().required('This Field is Required').min(3, "minimum 3 character is required"),
    surname: Yup.string().required('This Field is Required'),
    address: Yup.string().required('This Field is Required')
})

const  onSubmit =  values =>{                        
    console.log('FormData->',values);
}

function Form() {

    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema
        // validate
    })
    
    return (
        <div className="container x col-md-4 col-md-offset-4">
            
            <form onSubmit={formik.handleSubmit} >
                
                <div className="form-group">
                    
                    <input autoComplete="off" onBlur={formik.handleBlur} onChange={formik.handleChange} 
                    value={formik.values.name}  name="name"  className="name form-control-lg" placeholder="Enter A Name" />
                    <small> 
                        {formik.touched.name && formik.errors.name ? <div className="error"> {formik.errors.name}  </div> : null} 
                    </small>
                </div>
                
                <div className="form-group">

                    <input autoComplete="off" onBlur={formik.handleBlur} onChange={formik.handleChange} 
                    value={formik.values.surname}  name="surname" className="surname form-control-lg" placeholder="Enter A Surname" />
                    <small> { formik.touched.surname && formik.errors.surname ? <div className="error"> {formik.errors.surname}  </div> : null} </small>

                </div>
                
                <div className="form-group">
                    
                    <input autoComplete="off" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.address}
                      name="address" className="address form-control-lg" placeholder="Enter A Address" />
                    <small> {formik.touched.address  &&  formik.errors.address ? <div className="error"> {formik.errors.address}  </div> : null} </small>

                </div>
                
                <button type="submit" className="btn btn-danger" >Submit</button>

            </form>
        
        </div>
    )
}

export default Form;
