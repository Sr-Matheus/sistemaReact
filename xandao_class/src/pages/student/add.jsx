import React from 'react';
import "./student.css";
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
import CakeIcon from '@mui/icons-material/Cake';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import PlaceIcon from '@mui/icons-material/Place';

const bull = (<Box component="span" sx={{ display: 'flex', mx: '2px', transform: 'scale(0.8)' }}>•</Box>);

const StudentAdd = () => {
    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [idade, setIdade] = useState('');
    const [serie, setSerie] = useState('');
    const [endereco, setEndereco] = useState('');

    async function registerUser(e) {
        e.preventDefault();

        try {
            const docRef = await addDoc(collection(db, 'aluno'), {
                nome: nome,
                cpf: cpf,
                idade: idade,
                serie: serie,
                endereco: endereco,
            });

            setNome('');
            setCpf('');
            setIdade('');
            setSerie('');
            setEndereco('');
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
                                <b>Cadastro de Aluno</b>
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
                                        <CakeIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                                        <TextField id="input-with-sx" label="Idade" variant="standard" margin="dense" type="number" value={idade} onChange={(e) => setIdade(e.target.value)} />
                                    </Box>
                                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                        <AutoStoriesIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                                        <TextField id="input-with-sx" label="Serie" variant="standard" margin="dense" type="number" value={serie} onChange={(e) => setSerie(e.target.value)} />
                                    </Box>
                                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                        <PlaceIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                                        <TextField id="input-with-sx" label="Endereço" variant="standard" margin="dense" value={endereco} onChange={(e) => setEndereco(e.target.value)} />
                                    </Box>
                                </CardContent>
                                <CardActions className='card-actions'>
                                    <Button href='/alunos' variant="outlined">Cancelar</Button>
                                    <Button type="submit" variant="contained">Cadastrar</Button>
                                </CardActions>
                            </form>
                        </Card>
                    </Paper>
                </div>
            </main>
        </>
    );
};

export default StudentAdd;
