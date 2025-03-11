import pip from './pip.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';

function Navbar() {
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
                            <a className="nav-link active" href="#">Головна</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Новини</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Контакти</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
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
                            <a href="#" className="btn btn-primary">Детальніше</a>
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
                            <a href="#" className="btn btn-primary">Детальніше</a>
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

function BlocksContainer() {
    return (
        <div className="container mt-3">
            <div className="row">
                {['Студенти', 'Викладачі', 'Розклади', 'Звіти', 'Фінанси', 'Підтримка'].map((text, index) => (
                    <div key={index} className="col-md-4 mb-3">
                        <div className="block">
                            {text}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

function Contacts() {
    return (
        <footer>
        <div className="container mt-5">
            <div className="card w-100 mb-4">
                <div className="card-body">
                    <h5 className="card-title">Контакти</h5>
                    <p className="card-text"><a href="tel:+380 67 123 4567">Phone</a></p>
                    <p className="card-text"><a href="mailto:https://mail.google.com">Mail</a></p>
                    
                </div>
            </div>
            </div>
        </footer>
    );
}

function App() {
    return (
        <div className="App">
            <Navbar />
            <InfoCards />
            <Carousel />
            <BlocksContainer />
            <Contacts />
        </div>
    );
}

export default App;
