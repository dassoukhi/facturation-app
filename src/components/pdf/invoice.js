/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { Page, Document, Image, StyleSheet } from '@react-pdf/renderer'
import InvoiceTitle from './invoiceTitle'
import BillTo from './billTo'
import InvoiceNo from './invoiceNo'
import InvoiceItemsTable from './invoiceItemsTable'
import InvoiceThankYouMsg from './invoiceThankYouMsg'
import logo from '../../../src/images/dassolution.png'

const entLogo = localStorage.getItem('logo')

const styles = StyleSheet.create({
  page: {
    fontFamily: 'Helvetica',
    fontSize: 11,
    paddingTop: 30,
    paddingLeft: 60,
    paddingRight: 60,
    lineHeight: 1.5,
    flexDirection: 'column'
  },
  logo: {
    width: 74,
    height: 66,
    marginLeft: 'auto',
    marginRight: 'auto'
  }
})

const Invoice = ({ client, invoice, articles }) => {
  console.log('pdfClient :', client)
  console.log('pdfFacture :', invoice)
  console.log('pdfArtcles :', articles)
  return (
    <Document>
      <Page size='A4' style={styles.page}>
        <Image style={styles.logo} src={entLogo ? entLogo : logo} />
        <InvoiceTitle title='Facture' />
        <InvoiceNo invoice={invoice} />
        <BillTo client={client} />
        <InvoiceItemsTable invoice={invoice} articles={articles} />
        <InvoiceThankYouMsg />
      </Page>
    </Document>
  )
}

export default Invoice
