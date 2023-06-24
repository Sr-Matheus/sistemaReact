import React from 'react';
import "./student.css";
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import {useState, useEffect} from 'react';
import { db } from '../../services/firebaseConnection';
import { addDoc, collection, getDocs, doc, deleteDoc} from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

const Student = () =>
{
    const navigate = useNavigate();
    

    const handleClick = () => {
        navigate('/alunos/add');
    };


    return(
        <>
            <main>
                <h1>Alunos</h1>
                <div className="body">

                <div style={{ position: 'fixed', bottom: 16, right: 16 }}>
                    <Fab color="success" variant="extended" aria-label="add" onClick={handleClick}>
                        Adicionar novo Aluno
                        <AddIcon />
                    </Fab>
                </div>
                                
                

                </div>
            </main>
            
        </>
    );
}


export default Student;