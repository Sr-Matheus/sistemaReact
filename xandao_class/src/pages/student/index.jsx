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

const MyUser = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/alunos/add');
};


  async function findAllUsers() {
    const usersRef = collection(db, 'aluno');
    await getDocs(usersRef).then((snapshot) => {
      let lista = [];
      snapshot.forEach((doc) => {
        lista.push({
          id: doc.id,
          nome: doc.data().nome,
          cpf: doc.data().cpf,
          serie: doc.data().serie,
          endereco: doc.data().endereco,
          idade: doc.data().idade,
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
        const docRef = doc(db, 'aluno', id);
        await deleteDoc(docRef)
            .then(() => {
                window.location.reload(); // recarrega a página após a exclusão
            })
            .catch((erro) => {
                alert('Erro ao deletar!');
            });
    }
}




  function handleEdit(idUser) {
    navigate('/alunos/edit', { state: { id: idUser } });
  }

  return (
    <main>
      <h1>Alunos</h1>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Nome</TableCell>
              <TableCell align="right">Idade</TableCell>
              <TableCell align="right">Série</TableCell>
              <TableCell align="right">Ações</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((item) => (
              <TableRow key={item.id}>
                <TableCell component="th" scope="row">
                  {item.nome}
                </TableCell>
                <TableCell align="right">{item.idade}</TableCell>
                <TableCell align="right">{item.serie}</TableCell>
                <TableCell align="right">
                  <Button variant="contained" color="error" onClick={() => handleDelete(item.id)}>
                    Deletar
                  </Button>
                  <Button variant="contained" color="success" onClick={() => handleEdit(item.id)} >
                    Editar
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    
            <div style={{ position: 'fixed', bottom: 16, right: 16 }}>
                    <Fab color="success" variant="extended" aria-label="add" onClick={handleClick}>
                        Adicionar novo Aluno
                        <AddIcon />
                    </Fab>
            </div>


    </main>
  );
};

export default MyUser;
