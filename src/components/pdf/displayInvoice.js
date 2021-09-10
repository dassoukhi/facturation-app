import React from 'react';
import {PDFDownloadLink, PDFViewer, usePDF } from '@react-pdf/renderer';
import Invoice from "./invoice";
import { IconButton } from '@material-ui/core';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import GetAppIcon from '@material-ui/icons/GetApp';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';


  const DisplayInvoice = () => {
    const [instance, updateInstance] = usePDF({ document: Invoice });
    const currentInvoice = useSelector(state => state.invoice.value)
    const currentClient = useSelector(state => state.client.value)
    const history = useHistory() 

    const backTo = () => {
        history.push('/factures')
    }
    console.log(instance.url)

    if (instance.error) return <div>Something went wrong: {instance.error}</div>;

    return (
        <div style={{width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#ccc'}}>
            <div style={{ display: 'flex',justifyContent: 'flex-start', marginRight: '30px', marginBottom: '600px'}}>
                <IconButton onClick={backTo}>
                    <KeyboardBackspaceIcon fontSize='large'/>
                    {instance.loading}
                </IconButton>
                <h1>{instance.loading}</h1>
  
            </div>
            {instance.loading &&  <div style={{marginTop: '-100px'}}>Génération de la facture en cours ...</div>}
            {instance.error &&  <div>Quelque chose s'est mal passé: {instance.error}</div>}
            {!instance.loading && 
            <PDFViewer width="60%" height="100%" className="app" showToolbar={false} style={{border: 'none'}}>
                <Invoice client={currentClient} invoiceData1 = {currentInvoice}/>
            </PDFViewer>}
            <div style={{ display: 'flex',justifyContent: 'flex-start', marginLeft: '30px', marginBottom: '600px'}}>
                <PDFDownloadLink document={<Invoice client={currentClient} invoiceData1 = {currentInvoice}/>} fileName="somename.pdf">
                {({ blob, url, loading, error }) =>
                    loading ? 'Chargement...' : <IconButton href={instance.url} download="test.pdf">
                    <GetAppIcon fontSize='large'/>
                </IconButton>
                }
                </PDFDownloadLink>
            </div>
        </div>
        
    )
    };
  
  export default DisplayInvoice