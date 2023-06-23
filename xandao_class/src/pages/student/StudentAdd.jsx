import React from 'react';
import "./student.css";
import {useState, useEffect} from 'react';
import { db } from '../../services/firebaseConnection';
import { addDoc, collection, getDocs, doc, deleteDoc} from 'firebase/firestore';

const StudentAdd = () =>
{
    return(
        <>
            <main>
                <h1>Alunos</h1>
                <hr />
                <h2>Teste</h2>


                <div className="body">
                    <p>Adicionando Alunos</p>

                </div>
            </main>
            
        </>
    );
}


export default StudentAdd;