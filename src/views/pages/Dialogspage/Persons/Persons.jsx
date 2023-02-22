import React from 'react'
import { PersonItem } from 'views/components/PersonItem/PersonItem'

const Persons = (props) => {
   const dialogsElements = props.dialogs.map((p) => (
      <PersonItem name={p.name} key={p.id} id={p.id} />
   ))

   return dialogsElements
}

export { Persons }

