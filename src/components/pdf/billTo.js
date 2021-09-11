/* eslint-disable react/prop-types */
import React from 'react'
import { Text, View, StyleSheet } from '@react-pdf/renderer'

const styles = StyleSheet.create({
  headerContainer: {
    marginTop: 36
  },
  billTo: {
    marginTop: 20,
    paddingBottom: 3,
    fontFamily: 'Helvetica-Oblique'
  }
})

const BillTo = ({ client }) => (
  <View style={styles.headerContainer}>
    <Text style={styles.billTo}>FACTURÉ À :</Text>
    <Text>{String(client.name).toUpperCase()}</Text>
    <Text>{client.adress}</Text>
    <Text>{client.phone}</Text>
    <Text>{client.email}</Text>
    <Text>{client.siteWeb}</Text>
  </View>
)

export default BillTo
