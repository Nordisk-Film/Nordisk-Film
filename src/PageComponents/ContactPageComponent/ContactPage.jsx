import { useState } from 'react';
import { Main } from "../../Components/MainComponent/Main";
import './ContactPage.scss';

export const ContactPage = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    });

    const [errors, setErrors] = useState({});

    const validateField = (name, value) => {
        const nameRegex = /^[A-Za-z]+$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^[0-9]{8}$/;

        switch (name) {
            case 'firstName':
            case 'lastName':
                return nameRegex.test(value);
            case 'email':
                return emailRegex.test(value);
            case 'phone':
                return phoneRegex.test(value);
            case 'message':
                return value.trim() !== '';
            default:
                return true;
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });

        if (!validateField(name, value)) {
            setErrors({
                ...errors,
                [name]: true
            });
        } else {
            const { [name]: removedError, ...rest } = errors;
            setErrors(rest);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};
        Object.keys(formData).forEach((field) => {
            if (!validateField(field, formData[field])) {
                newErrors[field] = true;
            }
        });
        setErrors(newErrors);
        if (Object.keys(newErrors).length === 0) {
            // Handle form submission
            console.log('Form submitted', formData);
            // Reset form fields
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                message: ''
            });
        }
    };

    const getBorderStyle = (field) => {
        if (formData[field] === '') {
            return { borderLeft: '0.25rem solid transparent' };
        }
        return errors[field] ? { borderLeft: '0.25rem solid red' } : { borderLeft: '0.25rem solid lime' };
    };

    const isFormValid = () => {
        return Object.keys(formData).every((field) => validateField(field, formData[field]));
    };

    return (
        <Main>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>First Name:</label>
                    <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        style={getBorderStyle('firstName')}
                    />
                </div>
                <div>
                    <label>Last Name:</label>
                    <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        style={getBorderStyle('lastName')}
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        style={getBorderStyle('email')}
                    />
                </div>
                <div>
                    <label>Phone Number:</label>
                    <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        style={getBorderStyle('phone')}
                    />
                </div>
                <div>
                    <label>Message:</label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        style={getBorderStyle('message')}
                    />
                </div>
                <div className="button-container">
                    <button
                        type="submit"
                        className={isFormValid() ? 'active' : ''}
                    >
                        Submit
                    </button>
                </div>
            </form>
        </Main>
    );
};