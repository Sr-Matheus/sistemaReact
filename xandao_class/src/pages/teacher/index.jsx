import React, { useState, useEffect } from 'react';
import { db } from '../../services/firebaseConnection';
import { collection, getDocs, doc, deleteDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

export default function Teacher () {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/professores/add');
    };

    async function findAllUsers() {
        const usersRef = collection(db, 'professor');
        await getDocs(usersRef).then((snapshot) => {
        let lista = [];
        snapshot.forEach((doc) => {
            lista.push({
            id: doc.id,
            nome: doc.data().nome,
            cpf: doc.data().cpf,
            especializacao: doc.data().especializacao,
            materia: doc.data().materia,
            preco: doc.data().preco,
            });
        });
        setUsers(lista);
        });
    }

    useEffect(() => {
        findAllUsers();
    }, []);

    async function handleDelete(id) {
        const confirmed = window.confirm('Tem certeza que deseja deletar o usuário?');
        if (confirmed) {
            const docRef = doc(db, 'professor', id);
            await deleteDoc(docRef)
                .then(() => {
                    window.location.reload();
                })
                .catch((erro) => {
                    alert('Erro ao deletar!');
                    console.log(erro)
                });
        }
    }

    function handleEdit(idUser) {
        navigate('/professores/edit', { state: { id: idUser } });
    }

    return (
        <main>
            <h1>Professores</h1>

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">

                    <TableHead>
                        <TableRow>
                        <TableCell align="center">Nome</TableCell>
                        <TableCell align="center">CPF</TableCell>
                        <TableCell align="center">Especialização</TableCell>
                        <TableCell align="center">Matéria</TableCell>
                        <TableCell align="center">Ações</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {users.map((item) => (
                        <TableRow key={item.id}>
                            <TableCell align="center">{item.nome}</TableCell>
                            <TableCell align="center">{item.cpf}</TableCell>
                            <TableCell align="center">{item.especializacao}</TableCell>
                            <TableCell align="center">{item.materia}</TableCell>
                            <TableCell align="center">
                            <Button variant="contained" color="success" onClick={() => handleEdit(item.id)} >
                                Editar
                            </Button>
                            <Button variant="contained" color="error" onClick={() => handleDelete(item.id)}>
                                Deletar
                            </Button>
                            </TableCell>
                        </TableRow>
                        ))}
                    </TableBody>

                </Table>
            </TableContainer>
        
            <div style={{ position: 'fixed', bottom: 16, right: 16 }}>
                <Fab color="success" variant="extended" aria-label="add" onClick={handleClick}>
                    Adicionar novo Professor
                    <AddIcon />
                </Fab>
            </div>

        </main>
    );
}