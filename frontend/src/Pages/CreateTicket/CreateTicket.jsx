import React from "react";
import axios from "axios";
import "./CreateTicket.css";

import Header from "../../Components/Header/Header"

import Message from "../../Scripts/Message";
import LoadingSpinner from "../../Scripts/LoadingSpinner";

function CreateTicket() {
    let executed = false;

    async function createTicket(body) {
        let responseMessage = '';

        if(!executed) {
            await axios.post('https://analise-atendimentos-backend.onrender.com/createTicket', body)
                .then(response => {
                    if (response.status === 200) {
                        executed = true;
                        responseMessage = response.data.message;
                    }
                })
                .catch(error => {
                    responseMessage = error.response.data.message;
                })  
        }
            
        return responseMessage;
    }

    const eventHandler = async () => {
        let area = document.getElementsByClassName('buttonSpinnerArea')[0]

        LoadingSpinner(area);

        let ticketNumber = document.getElementById("ticketNumberInput").value;
        let radioChecked = document.querySelector('input[name="ticketType"]:checked');
        let clientName = document.getElementById("clientNameInput").value;
        let telephone = document.getElementById("telephoneInput").value;

        let check = radioChecked && ticketNumber !== "" && clientName !== "" && telephone !== "";

        if(check) {
            let body = {
                number: ticketNumber, 
                type: radioChecked.value, 
                clientName: clientName, 
                telephone: telephone
            };

            let createTicketMessage = await createTicket(body);

            if(createTicketMessage === "Ticket criado com sucesso!") {
                Message(createTicketMessage);
                window.location = '/dashboard';
                
            } else {
                LoadingSpinner(area);
                Message(createTicketMessage);
            }

        } else {
            LoadingSpinner(area);
            Message("Ticket não pode ser criado");
        }
    }

    const enterDown = (e) => {
        e.preventDefault();
        let keyCode = e.code || e.key;
        if(keyCode === 'Enter'){
            eventHandler();
        }
    }

    return (
        <>
            <Header/>
            <main className="createTicketMain" onKeyUp={e => enterDown(e)}>
                <h1>Crie um Ticket</h1>
            
                <div className="radioGroup">
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="ticketType" id="inlineRadio1" value="Aberto" />
                        <label className="form-check-label" htmlFor="inlineRadio1">Aberto</label>
                    </div>

                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="ticketType" id="inlineRadio2" value="Fechado" />
                        <label className="form-check-label" htmlFor="inlineRadio2">Fechado</label>
                    </div>

                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="ticketType" id="inlineRadio3" value="Pendente" />
                        <label className="form-check-label" htmlFor="inlineRadio3">Pendente</label>
                    </div>
                </div>
                <input type="number" name="" id="ticketNumberInput" placeholder="Número do atendimento"/>
                <input type="text" name="" id="clientNameInput" placeholder="Nome do cliente"/>
                <input type="number" name="" id="telephoneInput" placeholder="Telefone"/>

                <div className="buttonSpinnerArea w-50">
                    <button className="btn btn-success my-3 w-100" onClick={e => eventHandler()}>Criar</button>
                </div>
            </main>
        </>
    )
}

export default CreateTicket;