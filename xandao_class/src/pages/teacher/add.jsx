import React from 'react';
import "./teacher.css";
import { useState, useEffect } from 'react';
import { db } from '../../services/firebaseConnection';
import { addDoc, collection, getDocs, doc, deleteDoc } from 'firebase/firestore';

import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import BadgeIcon from '@mui/icons-material/Badge';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import PaidIcon from '@mui/icons-material/Paid';

// const bull = (<Box component="span" sx={{ display: 'flex', mx: '2px', transform: 'scale(0.8)' }}>•</Box>);

export default function TeacherAdd () {
    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [especializacao, setEspecializacao] = useState('');
    const [materia, setMateria] = useState('');
    const [preco, setPreco] = useState('');

    async function registerUser(e) {
        e.preventDefault();

        try {
            const docRef = await addDoc(collection(db, 'professor'), {
                nome: nome,
                cpf: cpf,
                especializacao: especializacao,
                materia: materia,
                preco: preco,
            });

            setNome('');
            setCpf('');
            setEspecializacao('');
            setMateria('');
            setPreco('');
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <>
      <main>
        <div className="body">
          <Paper elevation={24}>
            <Card variant="outlined" className="card">
              <Typography variant="h3" component="div" className="card-title">
                <b>Cadastro de Professor</b>
              </Typography>

              <form onSubmit={registerUser}>
                <CardContent className="card-content">
                  <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                      <DriveFileRenameOutlineIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                      <TextField id="input-with-sx" label="Nome" variant="standard" margin="dense" value={nome} onChange={(e) => setNome(e.target.value)} />
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                      <BadgeIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                      <TextField id="input-with-sx" label="CPF" variant="standard" margin="dense" value={cpf} onChange={(e) => setCpf(e.target.value)} />
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                      <WorkspacePremiumIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                      <TextField id="input-with-sx" label="Especilização" variant="standard" margin="dense" value={especializacao} onChange={(e) => setEspecializacao(e.target.value)} />
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                      <AutoStoriesIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                      <TextField id="input-with-sx" label="Materia" variant="standard" margin="dense" value={materia} onChange={(e) => setMateria(e.target.value)} />
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                      <PaidIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                      <TextField id="input-with-sx" label="Preço" variant="standard" margin="dense" type="number" value={preco} onChange={(e) => setPreco(e.target.value)} />
                  </Box>
                </CardContent>
                
                <CardActions className='card-actions'>
                  <Button href='/professores' variant="outlined">Cancelar</Button>
                  <Button type="submit" variant="contained">Cadastrar</Button>
                </CardActions>
              </form>
            </Card>
          </Paper>
        </div>
      </main>
    </>
  );
}