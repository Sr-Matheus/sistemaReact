import React from 'react';
import './navbar.css'
import logo_pos from '../../resources/img/logo_pos.svg'
import DashboardIcon from '../../resources/icons/dashboard.svg';
import TeacherIcon from '../../resources/icons/teacher.svg';
import StudentIcon from '../../resources/icons/student.svg';

const MyNavBar = () =>
{
    return(
        <>
            <div className="navbar">
                <img src={logo_pos} alt="Logo" className="logo" />
                <nav>
                    <ul className="nav-links">
                        <li>
                            <a href="/" className="nav-link">
                            <img src={DashboardIcon} alt="Dashboard" className="icon" />
                            Home
                            </a>
                        </li>
                        <li>
                            <a href="/alunos" className="nav-link">
                            <img src={StudentIcon} alt="Student" className="icon" />
                            Alunos
                            </a>
                        </li>
                        <li>
                            <a href="/professores" className="nav-link">
                            <img src={TeacherIcon} alt="Teacher" className="icon" />
                            Professores
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    );
}

export default MyNavBar;