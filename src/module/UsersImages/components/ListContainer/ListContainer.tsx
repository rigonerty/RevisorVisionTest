import { List } from '@mui/material'
import React from 'react'

interface props{
    children: React.ReactNode
}

export const ListContainer = ({children}:props) => {
  return (
    <List>
        {children}
    </List>
  )
}
