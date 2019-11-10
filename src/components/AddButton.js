import React from 'react'
import './AddButton.css'

const AddButton = (props) => (
    <div>
      <a onClick={props.onClick} className={props.color === "green" ? "table__add-button--pros" : "table__add-button--cons"}>＋</a>
    </div>
)

export default AddButton
