import React from "react";
import {useState, useEffect} from 'react';
import { db } from '../../services/firebaseConnection';
import { addDoc, collection, getDocs, doc, deleteDoc} from 'firebase/firestore';

const Teacher = () =>
{
    return(
        <>
            <p>Teste Professor</p>
        </>
    );
}


export default Teacher;