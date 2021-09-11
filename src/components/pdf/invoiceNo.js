/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import React, { Fragment } from 'react'
import { Text, View, StyleSheet } from '@react-pdf/renderer'

const styles = StyleSheet.create({
  invoiceNoContainer: {
    flexDirection: 'row',
    marginTop: 36,
    justifyContent: 'flex-end'
  },
  invoiceDateContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  invoiceDate: {
    fontSize: 12,
    fontStyle: 'bold'
  },
  label: {
    width: 100
  }
})

const InvoiceNo = ({ invoice }) => (
  <Fragment>
    <View style={styles.invoiceNoContainer}>
      <Text style={styles.label}>Numéo de facture:</Text>
      <Text style={styles.invoiceDate}>{invoice.numFacture}</Text>
    </View>
    <View style={styles.invoiceDateContainer}>
      <Text style={styles.label}>Date de facturation: </Text>
      <Text>{invoice.dateDebut}</Text>
    </View>
    <View style={styles.invoiceDateContainer}>
      <Text style={styles.label}>Date de paiement: </Text>
      <Text>{invoice.dateEcheance}</Text>
    </View>
  </Fragment>
)

export default InvoiceNo
