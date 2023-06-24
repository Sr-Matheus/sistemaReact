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
import TextField from '@mui/material/TextField';
import BadgeIcon from '@mui/icons-material/Badge';
import CakeIcon from '@mui/icons-material/Cake';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import PlaceIcon from '@mui/icons-material/Place';

const bull = (<Box component="span" sx={{ display: 'flex', mx: '2px', transform: 'scale(0.8)'}}>•</Box>);




const StudentAdd = () =>
{
    return(
        <>
            <main>
              
                <div className="body">

                
                <Paper elevation={24}> 
                    
                    <Card variant="outlined" className='card'>

                        <Typography variant="h3" component="div" className='card-title'>
                                <b>Cadastro de Alunos</b>
                        </Typography>
                    
                        <CardContent className='card-content'>

                            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                <DriveFileRenameOutlineIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                                <TextField id="input-with-sx" label="Nome" variant="standard" margin="dense" />
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                <BadgeIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                                <TextField id="input-with-sx" label="CPF" variant="standard" margin="dense" />
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                <CakeIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                                <TextField id="input-with-sx" label="Idade" variant="standard" margin="dense" type="number"/>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                <AutoStoriesIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                                <TextField id="input-with-sx" label="Serie" variant="standard" margin="dense"/>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                <PlaceIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                                <TextField id="input-with-sx" label="Endereço" variant="standard" margin="dense" />
                            </Box>                            
                        </CardContent>

                            <CardActions className='card-actions'>
                                <Button href='/alunos' variant="outlined" >Cancelar</Button>
                                <Button variant="contained">Cadastrar</Button>
                            </CardActions>
                    </Card>
                </Paper>
       
                
                </div>
            </main>
            
        </>
    );
}


export default StudentAdd;