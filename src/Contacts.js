import React, { useState } from 'react';
import './App.css';

function Contacts() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form data submitted:', formData);
        alert('Ваше повідомлення надіслано!');
    };

    return (
        <div className="container mt-5 pt-5">
            <div className="row">
                <div className="col-md-12">
                    <div className="card mb-4">
                        <div className="card-body">
                            <h5 className="card-title">Контакти</h5>
                            <p className="card-text">
                                Ви можете зв'язатися з нами за допомогою наступних каналів:
                            </p>
                            <ul>
                                <li><strong>Телефон:</strong> +38 (050) 123-45-67</li>
                                <li><strong>Email:</strong> info@portal.ua</li>
                                <li><strong>Адреса:</strong> вул. Протасів Яр, 1, Київ, Україна</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Форма відправлення */}
            <div className="row">
                <div className="col-md-12">
                    <div className="card mb-4">
                        <div className="card-body">
                            <h5 className="card-title">Залиште повідомлення</h5>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Ваше ім'я</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Ваш Email</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="message" className="form-label">Ваше повідомлення</label>
                                    <textarea
                                        className="form-control"
                                        id="message"
                                        name="message"
                                        rows="4"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary">Відправити</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contacts;
