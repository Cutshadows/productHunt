import React, {useState, useEffect} from 'react';



const useValidation=(stateInitial, validation, fn)=>{
    const [values, saveValues]=useState(stateInitial);
    const [errors, saveError]=useState({});
    const [submitForm, saveSubmitForm]=useState(false);

    useEffect(()=>{
        if(submitForm){
            const noErrors=Object.keys(errors).length===0;
            if(noErrors){
                fn(); //Fn= Funcion que se ejecuta en el componente 
            }
            saveSubmitForm(false);
        }
    }, []);

    //funcion que se ejecuta conforme el usuario escribre algo
    const handleChange=e=>{
        saveValues({
            ...values,
            [e.target.name]:e.target.value
        })
    }


    //function que se ejecuta cuando el usuario hace submite
    const handleSubmit=e=>{
        e.preventDefault();
        const errorValidation=validation(values);
        saveError(errorValidation);
        saveSubmitForm(true);
    }


    //FUNTION ONBLUR
    const handleBlur=()=>{
        const errorValidation=validation(values);
        saveError(errorValidation);
    }

    return{
        values,
        errors,
        handleSubmit,
        handleChange,
        handleBlur
    };
}
export default useValidation;