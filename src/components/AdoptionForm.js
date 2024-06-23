import React, { useState } from 'react';

function AdoptionForm() {
    const [formData, setFormData] = useState({
        name: '',
        dni: '',
        contact: '',
        petName: '',
        petType: '',
        petAge: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({...formData, [name]: value });
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        const response = await fetch('/.netlify/functions/adopt', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        const result = await response.json();
        console.log('Success:', result);
    };

    return ( <
        form onSubmit = { handleSubmit } >
        <
        input type = "text"
        name = "name"
        placeholder = "Nombre Completo"
        onChange = { handleChange }
        /> <
        input type = "text"
        name = "dni"
        placeholder = "DNI"
        onChange = { handleChange }
        /> <
        input type = "text"
        name = "contact"
        placeholder = "Contacto"
        onChange = { handleChange }
        /> <
        input type = "text"
        name = "petName"
        placeholder = "Nombre de la Mascota"
        onChange = { handleChange }
        /> <
        input type = "text"
        name = "petType"
        placeholder = "Tipo de Mascota (Perro/Gato)"
        onChange = { handleChange }
        /> <
        input type = "number"
        name = "petAge"
        placeholder = "Edad de la Mascota"
        onChange = { handleChange }
        /> <
        button type = "submit" > Adoptar < /button> <
        /form>
    );
}

export default AdoptionForm;