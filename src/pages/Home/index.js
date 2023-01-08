import React, {useState,useEffect} from 'react';
import {FiX} from 'react-icons/fi';
import './styles.css'
import api from '../../services/api';
import converterDataExibicao from '../../functions/converterDataExibicao'
import converterDataFormulario from '../../functions/converterDataFormulario';
import getErrorMessage  from '../../functions/getErrorMessage';


export default function Home(){
   
    const [nome,setNome]=useState('');
    const [dataFormulario,setData]=useState('');
    const [lembretes,setLembretes]=useState([]);

    useEffect(()=>{
        api.get('Lembretes/lembretesPorData')
        .then(response=>{
            setLembretes(response.data);
        })
    },[lembretes]);

    async function handleRegister(e){
        e.preventDefault()
        const data=converterDataFormulario(dataFormulario);

        const lembrete ={
            nome,
            data
        };

        await api.post('Lembretes', lembrete).catch(function (error) {

            if (error.response) {

              error.response.status === 400 ? alert(getErrorMessage(error.response.data.errors))
                : alert("Não foi possível concluir a criação do Lembrete");
            }
          });
    }

    async function handleDeleteLembrete(id){

        try {
            await api.delete(`Lembretes/${id}`);
        }catch(err){
            alert("Erro na exlusão, tente novamente.")
        }
    }

    return(

        <div className="home-container">
            <section className="form">
                <form onSubmit={handleRegister}>
                    <h1>Novo Lembrete</h1>
                    <div className="input-container">
                        <button className='visual-button'>Nome</button>
                        <input placeholder='Nome do lembrete'
                            value={nome}
                            onChange={e=>setNome(e.target.value)}   
                        ></input>
                    </div>

                    <div className="input-container">
                        <button className='visual-button'>Data</button>
                        <input type="text" 
                            placeholder='Data do lembrete (formato dd/mm/aaaa)'
                            required pattern="\d{2}/\d{2}/\d{4}"
                            value={dataFormulario}
                            onChange={e=>setData(e.target.value)}  
                            ></input>
                    </div>
                    <button className='submit-button' type='submit'>Criar</button>
                </form>
            </section>

            <section className="reminder-container">
                <h1>Lista de Lembretes</h1>
                {
                    lembretes.map(dataEvento=>(
                    <div className="date-container">
                        <h2>{converterDataExibicao(dataEvento[0].data)}</h2>
                        {
                            dataEvento.map(evento=>(
                            <div className="event-container" key={evento.lembreteId}>
                                <p>{evento.nome}</p>
                                <button className='delete-button'
                                    onClick={()=>handleDeleteLembrete(evento.lembreteId)}
                                >
                                    <FiX size={20} color="0081ad"/>
                                </button>
                        </div>
                            ))
                        }
                    </div>
                    ))
                }    
            </section>
        </div>

        );
}