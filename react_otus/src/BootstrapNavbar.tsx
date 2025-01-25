import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import AboutPage from './pages/AboutPage';
import ReduxTestPage from './pages/ReduxTestPage';
import NotFoundPage from './pages/NotFoundPage';

function BootstrapNavbar() {
    return (
        <Router>
            <nav className="navbar navbar-expand-lg navbar-light bg-primary fixed-top" data-bs-theme="dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Otus App</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Главная</Link>
                            </li>                         
                            <li className="nav-item">
                                <Link className="nav-link" to="/login">Войти</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/register">Регистрация</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/redux_test">Redux</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">О нас</Link>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </nav>

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/redux_test" element={<ReduxTestPage />} />
                <Route path="*" element={<NotFoundPage />} /> {/* Страница 404 */}
            </Routes>
        </Router>
  );
}

export default BootstrapNavbar;