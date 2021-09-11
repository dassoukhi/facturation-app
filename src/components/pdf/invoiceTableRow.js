/* eslint-disable react/prop-types */
import React, { Fragment } from 'react'
import { Text, View, StyleSheet } from '@react-pdf/renderer'

const borderColor = '#90e5fc'
const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    borderBottomColor: '#bff0fd',
    borderBottomWidth: 1,
    alignItems: 'center',
    height: 24,
    fontStyle: 'bold'
  },
  description: {
    width: '50%',
    textAlign: 'left',
    borderRightColor: borderColor,
    borderRightWidth: 1,
    paddingLeft: 8
  },
  qty: {
    width: '10%',
    borderRightColor: borderColor,
    borderRightWidth: 1,
    textAlign: 'right',
    paddingRight: 8
  },
  rate: {
    width: '15%',
    borderRightColor: borderColor,
    borderRightWidth: 1,
    textAlign: 'right',
    paddingRight: 8
  },
  amount: {
    width: '15%',
    textAlign: 'right',
    paddingRight: 8
  }
})

const InvoiceTableRow = ({ items }) => {
  const rows = items.map((item, index) => (
    <View style={styles.row} key={index}>
      <Text style={styles.description}>{item.description}</Text>
      <Text style={styles.qty}>{item.quantite}</Text>
      <Text style={styles.rate}>{item.prix}</Text>
      <Text style={styles.qty}>{String(item.taxe).concat('%')}</Text>
      <Text style={styles.amount}>{item.total}</Text>
    </View>
  ))
  return <Fragment>{rows}</Fragment>
}

export default InvoiceTableRow
