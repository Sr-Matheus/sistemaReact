import React from "react";
import {useState, useEffect} from 'react';
import { db } from '../../services/firebaseConnection';
import { addDoc, collection, getDocs, doc, deleteDoc} from 'firebase/firestore';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

const Teacher = () =>
{
    return(
        <>
            <p>Teste Professor</p>
            <div style={{ position: 'fixed', bottom: 16, right: 16 }}>
                    <Fab color="success" variant="extended" aria-label="add">
                        Adicionar novo Professor
                        <AddIcon />
                    </Fab>
                </div>
        </>
    );
}


export default Teacher;