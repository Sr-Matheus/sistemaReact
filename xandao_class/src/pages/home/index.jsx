import React from "react";
import './home.css'
import home from '../../resources/img/home.svg'

const Home = () =>
{
    return(
        <>
            <main>
                <h1>Bem-vindo!</h1>

                <div className="body">
                    <p>
                        É com grande alegria que damos as boas-vindas a você em nossa plataforma dedicada à educação e colaboração entre professores e alunos. Aqui, você terá acesso a um ambiente dinâmico e interativo, projetado para facilitar o cadastro e gerenciamento de informações acadêmicas.
                    </p>

                    <img src={home} alt="" className="home_pic" />
                </div>
                
            </main>
            
        </>
    );
}


export default Home;