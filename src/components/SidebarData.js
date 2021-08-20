import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as IoIcons from 'react-icons/io'
import * as RiIcons from 'react-icons/ri'

export const SidebarData = [
  {
    title: 'Factures',
    path: '/factures',
    icon: <IoIcons.IoIosPaper />
  },
  {
    title: 'Clients',
    path: '/clients',
    icon: <FaIcons.FaUserFriends />
  },
  {
    title: 'Paramétre',
    icon: <FaIcons.FaCog />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Entreprise',
        path: '/parametre/entreprise',
        icon: <FaIcons.FaLandmark />
      },
      {
        title: 'Facture',
        path: '/parametre/facture',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Général',
        path: '/parametre/general',
        icon: <FaIcons.FaTools />
      }
    ]
  }
]
