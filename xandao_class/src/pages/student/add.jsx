import React from 'react';
import "./student.css";
import {useState, useEffect} from 'react';
import { db } from '../../services/firebaseConnection';
import { addDoc, collection, getDocs, doc, deleteDoc} from 'firebase/firestore';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import BadgeIcon from '@mui/icons-material/Badge';
import CakeIcon from '@mui/icons-material/Cake';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import PlaceIcon from '@mui/icons-material/Place';
import { useNavigate } from 'react-router-dom';

const bull = (<Box component="span" sx={{ display: 'flex', mx: '2px', transform: 'scale(0.8)'}}>•</Box>);




const StudentAdd = () =>
{
    return(
        <>
            <main>
              
                <div className="body">
                    
                    <Card className='card'>

                    <Typography variant="h3" component="div" className='card-title'>
                            Cadastro de Alunos
                    </Typography>
                    
                    <CardContent className='card-content'>

                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                    <DriveFileRenameOutlineIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                        <TextField id="input-with-sx" label="Nome" variant="standard" />
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                    <BadgeIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                        <TextField id="input-with-sx" label="CPF" variant="standard" />
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                    <CakeIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                        <TextField id="input-with-sx" label="Idade" variant="standard" />
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                    <AutoStoriesIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                        <TextField id="input-with-sx" label="Serie" variant="standard" />
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                    <PlaceIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                        <TextField id="input-with-sx" label="Endereço" variant="standard" />
                    </Box>
                        
                        
                    </CardContent>
                    <CardActions className='card-actions'>
                        <Button href='/alunos'>Cancelar</Button>
                        <Button variant="contained">Cadastrar</Button>
                    </CardActions>
                </Card>

       
                
                </div>
            </main>
            
        </>
    );
}


export default StudentAdd;