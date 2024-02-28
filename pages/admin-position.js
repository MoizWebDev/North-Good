import React, { useState } from 'react';

const AdminPosition = () => {
    const [formData, setFormData] = useState({
        title: '',
        location: '',
        responsibilities: '',
        qualifications: '',
        department: '',
        summary: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3000/api/position', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const responseData = await response.json();
            console.log(responseData); // Handle success response
        } catch (error) {
            console.error('Error:', error); // Handle error
        }
    };

    return (
        <>
            <div className="container-form">
                <form className='form-add' style={{ paddingTop: "100px" }} onSubmit={handleSubmit}>
                    <input type="text" name="title" placeholder='Title' value={formData.title} onChange={handleChange} />
                    <input type="text" name="location" placeholder='Location' value={formData.location} onChange={handleChange} />
                    <input type="text" name="responsibilities" placeholder='Responsibilities' value={formData.responsibilities} onChange={handleChange} />
                    <input type="text" name="qualifications" placeholder='Qualifications' value={formData.qualifications} onChange={handleChange} />
                    <input type="text" name="department" placeholder='Department' value={formData.department} onChange={handleChange} />
                    <input type="text" name="summary" placeholder='Summary' value={formData.summary} onChange={handleChange} />
                    <input type="text" name="password" placeholder='Password Of Admin' value={formData.password} onChange={handleChange} />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </>
    )
}

export default AdminPosition;
