import React from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';
import './style.css';
import Errors from '../../errors.js';

const validationSchema = Yup.object().shape({
    name: Yup.string().min(3, "Mínimo de 3 Caracteres").max(255, "Máximo de 255 Caracteres").required("Preencha o campo"),
    email: Yup.string().email("Deve ser um email válido").max(255, "Máximo de 255 Caracteres").required("Preencha o campo")
});

export default function Home(){
    return (
        <Formik initialValues={{name: "", email: ""}} 
        validationSchema={validationSchema}
        onSubmit={(values, {setSubmitting, resetForm}) => {
            setSubmitting(true);

            setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                resetForm();
                setSubmitting(false);
            }, 500);
        }}>

            {({values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting}) => (
                <form onSubmit={handleSubmit}>
                    <div className="input-row">
                        <label htmlFor="name">Nome:</label>
                        <input type="text" name="name" id="name"
                        className= {touched.name && errors.name ? "has-error" : "input-field"}
                        onBlur={handleBlur} onChange={handleChange} value={values.name}/>

                        <Errors touched={touched.name} message={errors.name}/>
                    </div>

                    <div className="input-row">
                        <label htmlFor="email">E-Mail:</label>
                        <input type="text" name="email" id="email"
                        className={touched.email && errors.email ? "has-error" : "input-field"}                        
                        onBlur={handleBlur} onChange={handleChange} value={values.email}/>

                        <Errors touched={touched.email} message={errors.email}/>
                    </div>

                    <div className="input-row">
                        <button type="submit" disabled={isSubmitting}>Enviar</button>
                    </div>

                </form>
            )}

        </Formik>
    );
};