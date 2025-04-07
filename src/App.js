import React from 'react';
import pip from './pip.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import Contacts from './Contacts.js';
import Login from './components/Auth/Login';
import AdminPanel from './components/Admin/AdminPanel';
import Dashboard from './components/Dashboard/Dashboard';
import NotFound from './components/NotFound/NotFound';
import { AuthProvider, useAuth } from './AuthContext';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function Navbar() {
    const { user } = useAuth();
    return (
        <nav className="navbar navbar-expand-lg fixed-top navbar-gradient">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src={pip} alt="logo" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" to="/">Головна</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">Про сайт</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">Галерея картинок</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">Новини</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">Картинки</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contacts">Контакти</Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav">
                        {user && (
                            <li className="nav-item">
                                <Link className="nav-link" to="/dashboard">Dashboard</Link>
                            </li>
                        )}
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

function NewsSection() {
    const { news } = useAuth();
    return (
        <div className="container mt-5">
            <h2>Latest News</h2>
            <div className="row">
                {news && news.slice(0, 10).map((item, index) => (
                    <div key={index} className="col-md-6 mb-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{item.title}</h5>
                                <p className="card-text">{item.content}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

function HomePage() {
    return (
        <>
            <InfoCards />
            <Carousel />
            <NewsSection />
            <BlocksContainer />
        </>
    );
}

function InfoCards() {
    return (
        <div className="container mt-5 pt-5">
            <div className="row">
                <div className="col-md-4">
                    <div className="card w-100 mb-4">
                        <div className="card-body">
                            <h5 className="card-title">Опис програми</h5>
                            <p className="card-text">Інформаційний портал для обліку ВНЗ, розроблений на основі сучасних веб-технологій.</p>
                            <Link to="#" className="btn btn-primary">Детальніше</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-8">
                    <div className="card w-100 mb-4">
                        <div className="card-body">
                            <h5 className="card-title">Можливості системи</h5>
                            <ul>
                                <li>Облік студентів та викладачів</li>
                                <li>Управління фінансами</li>
                                <li>Генерація звітів</li>
                            </ul>
                            <Link to="#" className="btn btn-primary">Детальніше</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Carousel() {
    return (
        <div className="container mt-5">
            <div id="carouselExampleDark" className="carousel carousel-dark slide">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://nupp.edu.ua/uploads/files/0/news/2024/05/28/nupp.jpg" className="d-block w-100" alt="Slide 1" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://via.placeholder.com/1200x400" className="d-block w-100" alt="Slide 2" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://via.placeholder.com/1200x400" className="d-block w-100" alt="Slide 3" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                </button>
            </div>
        </div>
    );
}

import Students from './components/Categories/Students';
import Teachers from './components/Categories/Teachers';
import Schedule from './components/Categories/Schedule';
import Reports from './components/Categories/Reports';
import Finance from './components/Categories/Finance';
import Support from './components/Categories/Support';

function BlocksContainer() {
    const navigate = useNavigate();
    const blocks = [
        { text: 'Студенти', path: '/students' },
        { text: 'Викладачі', path: '/teachers' },
        { text: 'Розклади', path: '/schedule' },
        { text: 'Звіти', path: '/reports' },
        { text: 'Фінанси', path: '/finance' },
        { text: 'Підтримка', path: '/support' }
    ];

    return (
        <div className="container mt-3">
            <div className="row">
                {blocks.map((block, index) => (
                    <div key={index} className="col-md-4 mb-3">
                        <div 
                            className="block" 
                            onClick={() => navigate(block.path)}
                            style={{ cursor: 'pointer' }}
                        >
                            {block.text}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

function App() {
    return (
        <AuthProvider>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/contacts" element={<Contacts />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/admin" element={<AdminPanel />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/students" element={<Students />} />
                    <Route path="/teachers" element={<Teachers />} />
                    <Route path="/schedule" element={<Schedule />} />
                    <Route path="/reports" element={<Reports />} />
                    <Route path="/finance" element={<Finance />} />
                    <Route path="/support" element={<Support />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Router>
        </AuthProvider>
    );
}

export default App;
