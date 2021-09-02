import React from 'react'
import DescriptionIcon from '@material-ui/icons/Description'
import PeopleAltIcon from '@material-ui/icons/PeopleAlt'
import SettingsIcon from '@material-ui/icons/Settings'
import AccountBalanceIcon from '@material-ui/icons/AccountBalance'
import BuildIcon from '@material-ui/icons/Build'
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'

export const SidebarData = [
  {
    title: 'Factures',
    path: '/factures',
    icon: <DescriptionIcon />
  },
  {
    title: 'Clients',
    path: '/clients',
    icon: <PeopleAltIcon />
  },
  {
    title: 'Paramétre',
    icon: <SettingsIcon />,
    path: '#',
    iconClosed: <ArrowDropDownIcon />,
    iconOpened: <ArrowDropUpIcon />,

    subNav: [
      {
        title: 'Entreprise',
        path: '/parametre/entreprise',
        icon: <AccountBalanceIcon />
      },
      {
        title: 'Facture',
        path: '/parametre/facture',
        icon: <DescriptionIcon />
      },
      {
        title: 'Général',
        path: '/parametre/general',
        icon: <BuildIcon />
      }
    ]
  }
]
