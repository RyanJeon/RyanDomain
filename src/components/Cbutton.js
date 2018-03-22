import React, {Component} from 'react';
import '../styles/Cbutton.css';



function raiseInvoiceClicked(link){
    window.open(link);
}

const Cbutton = ({ label, link }) => (



    <div className = "SCbutton" onClick = {raiseInvoiceClicked.bind(this, link)}>
        {label}

    </div>


);

export default Cbutton
