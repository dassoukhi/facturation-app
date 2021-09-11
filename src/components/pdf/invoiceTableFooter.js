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
    fontSize: 12,
    fontStyle: 'bold'
  },
  descriptionTotal: {
    width: '85%',
    textAlign: 'right',
    borderRightColor: borderColor,
    borderRightWidth: 1,
    paddingRight: 8
  },
  descriptionHt: {
    width: '70%',
    textAlign: 'right',
    borderRightColor: borderColor,
    borderRightWidth: 1,
    paddingRight: 8,
    fontSize: '9px'
  },
  total: {
    width: '36%',
    textAlign: 'right',
    paddingRight: 8
  },
  totalHt: {
    width: '30%',
    textAlign: 'right',
    paddingRight: 8
  }
})

const InvoiceTableFooter = ({ invoice }) => {
  return (
    <Fragment>
      <View style={styles.row}>
        <Text style={styles.descriptionHt}>TOTAL HT</Text>
        <Text style={styles.totalHt}>{invoice.HT}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.descriptionHt}>TAXE</Text>
        <Text style={styles.totalHt}>{String(invoice.taxe).concat('%')}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.descriptionTotal}>TOTAL</Text>
        <Text style={styles.total}>{invoice.total + invoice.devise}</Text>
      </View>
    </Fragment>
  )
}

export default InvoiceTableFooter
