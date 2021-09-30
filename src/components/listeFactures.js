/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import { Button, CircularProgress } from '@material-ui/core'
import StatusInvoice from './statusInvoice'
import axios from 'axios'
import { addInvoice } from '../features/invoiceSlice'
import { useDispatch } from 'react-redux'
import { addArticle, removeFirst } from '../features/articleSlice'
import { addClient } from '../features/clientSlice'
import { useHistory } from 'react-router'
import API from '../services/api'

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: 'rgba(238,238,238)',
    color: theme.palette.common.black
  },
  body: {
    fontSize: 14
  }
}))(TableCell)
const columns = [
  { id: 'num_facture', label: 'Numéro facture', minWidth: 170 },
  {
    id: 'client_name',
    label: 'Client',
    minWidth: 100,
    format: value => value
  },
  {
    id: 'date_debut',
    label: 'Date',
    minWidth: 170,
    // align: 'right',
    format: value => new Date(value).toLocaleDateString()
  },
  {
    id: 'date_echeance',
    label: "Date d'écheance",
    minWidth: 170,
    // align: 'right',
    format: value => new Date(value).toLocaleDateString()
  },
  {
    id: 'total',
    label: 'Somme',
    minWidth: 170,
    align: 'right'
  },
  {
    id: 'etat',
    label: 'État',
    minWidth: 170,
    align: 'right',
    format: etat => {
      if (String(etat).toLocaleLowerCase() === 'confirm') {
        return 'Confirmée'
      }
      if (etat == 'paid') {
        return 'Payée'
      } else {
        return 'Annulée'
      }
    }
  }
]

const useStyles = makeStyles({
  container: {
    maxHeight: 'calc(40px + 60vh)',
    position: 'relative'
  },
  load: {
    backgroundColor: 'rgba(0, 0, 0, .5)',
    position: 'fixed',
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    width: 'calc(1px + 85vw)',
    bottom: '0px',
    right: '0px',
    zIndex: '999',
    marginLeft: 'calc(1px + 15vw)',
    alignItems: 'center',
    justifyContent: 'center'
  },
  message: {
    // marginBottom: 'calc(0px + 30vh)',
    color: 'white',
    textShadow: 'none',
    fontFamily: 'none'
  },
  circular: {
    color: 'white'
  }
})

export default function ListeFactures({ invoicesList }) {
  const classes = useStyles()
  const dispatch = useDispatch()
  const history = useHistory()
  const [isLoading, setIsLoading] = useState(false)

  const getSymbole = devise => {
    if (devise === 'USD') {
      return ' $'
    }
    if (devise == 'EUR') {
      return ' €'
    } else {
      return ' FCA'
    }
  }

  const generateOldPDF = id => {
    console.log(id)
    setIsLoading(true)
    axios
      .get(API + '/factures/' + id)
      .then(res => {
        //Add in factureSlice
        dispatch(
          addInvoice({
            numFacture: res.data.num_facture,
            dateDebut: new Date(res.data.date_debut).toLocaleDateString(),
            dateEcheance: new Date(res.data.date_echeance).toLocaleDateString(),
            devise: res.data.devise,
            total: res.data.total,
            HT: res.data.ht,
            taxe: res.data.taxe
          })
        )
        //Add in articleSlice
        for (const article of res.data.articles) {
          dispatch(
            addArticle({
              id: article.id,
              description: article.description,
              quantite: article.quantite,
              prix: article.prix,
              total: article.total,
              taxe: article.taxe
            })
          )
        }
        //remove first item because is empty
        dispatch(removeFirst())
        //add in clientSlice
        axios
          .get(API + '/clients/' + res.data.client_id)
          .then(result => {
            dispatch(
              addClient({
                name: result.data.nom,
                adress: result.data.adresse,
                email: result.data.email,
                phone: result.data.telephone,
                siteWeb: result.data.site_internet
              })
            )
            setIsLoading(false)
            //generate pdf
            history.push('/factures/generateinvoice')
          })
          .catch(erreur => {
            setIsLoading(false)
            console.error(erreur)
          })
      })
      .catch(err => {
        setIsLoading(false)
        console.error(err)
      })
  }

  return (
    <TableContainer className={classes.container}>
      <Table stickyHeader aria-label='sticky table'>
        <TableHead>
          <TableRow>
            {columns.map(column => (
              <StyledTableCell
                key={column.id}
                align={column.align}
                style={{ minWidth: column.minWidth }}
              >
                {column.label}
              </StyledTableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {invoicesList.map((row, index) => {
            return (
              <TableRow hover role='checkbox' tabIndex={-1} key={index}>
                {columns.map(column => {
                  const value =
                    column.id === 'total'
                      ? row[column.id] + getSymbole(row['devise'])
                      : row[column.id]
                  return (
                    <TableCell key={column.id} align={column.align}>
                      {column.id === 'etat' && (
                        <StatusInvoice
                          status={column.format(value)}
                          invoice_id={row.id}
                        />
                      )}
                      {column.id === 'num_facture' && (
                        <Button
                          color='primary'
                          style={{
                            textTransform: 'none',
                            marginRight: '-13px'
                          }}
                          onClick={() => generateOldPDF(row.id)}
                        >
                          {column.format || typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </Button>
                      )}
                      {column.id !== 'etat' && column.id !== 'num_facture' && (
                        <>
                          {column.format || typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </>
                      )}
                    </TableCell>
                  )
                })}
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
      {isLoading && (
        <div className={classes.load}>
          <p className={classes.message}>
            Génération de la facture en cours ...
          </p>
          <CircularProgress className={classes.circular} />
        </div>
      )}
    </TableContainer>
  )
}
