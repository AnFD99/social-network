import { DialogType } from 'models'
import React, { FC } from 'react'
import { PersonItem } from 'views/components/PersonItem/PersonItem'

type PropsType = { dialogs: DialogType[] }

const Persons: FC<PropsType> = (props) => {
   const dialogsElements = props.dialogs.map((p) => (
      <PersonItem name={p.name} key={p.id} id={p.id} />
   ))

   return <>{dialogsElements}</>
}

export { Persons }

