/* eslint-disable react/prop-types */
import React, { Fragment } from 'react'
import { View, StyleSheet } from '@react-pdf/renderer'

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    borderBottomColor: '#bff0fd',
    borderBottomWidth: 1,
    alignItems: 'center',
    height: 24,
    fontStyle: 'bold',
    color: 'white',
    width: '100%'
  }
})

const InvoiceTableBlankSpace = ({ rowsCount }) => {
  const blankRows = Array(rowsCount).fill(0)
  const rows = blankRows.map((x, i) => (
    <View style={styles.row} key={`BR${i}`}></View>
  ))
  return <Fragment>{rows}</Fragment>
}

export default InvoiceTableBlankSpace
