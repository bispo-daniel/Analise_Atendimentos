import React from "react";
import "./CreateTicket.css";
import axios from "axios";
let errorMessage = require("../../Scripts/errorMessage");

function CreateTicket() {
    async function apiPost(body) {
        try {
            let ticket = await axios.post('https://analise-atendimentos-backend.onrender.com/createTicket', body);

            if (ticket.status === 200) {
                return 200;
            } else {
                errorMessage();
            }
        } catch (error) {
            console.error(error);
            errorMessage();
        }
    }

    const eventHandler = async () => {
        let ticketNumber = document.getElementById("ticketNumberInput").value;
        let radioChecked = document.querySelector('input[name="ticketType"]:checked');
        let clientName = document.getElementById("clientNameInput").value;
        let telephone = document.getElementById("telephoneInput").value;

        let check = radioChecked && ticketNumber !== "" && clientName !== "" && telephone !== "";

        if(check) {
            let body = {number: ticketNumber, type: radioChecked.value, clientName: clientName, telephone: telephone};
            let response = await apiPost(body);

            if(response === 200) {
                window.location = '/dashboard';
            } else {
                errorMessage();
            }
        } else {
            errorMessage();
        }
    }

    const enterDown = (e) => {
        e.preventDefault();
        let keyCode = e.code || e.key
        if(keyCode === 'Enter'){
            eventHandler()
        }
    }

    return (
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

            <button className="btn btn-success m-3 w-50" onClick={e => eventHandler()}>Criar</button>
        </main>
    )
}

export default CreateTicket;