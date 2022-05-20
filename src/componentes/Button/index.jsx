import React from 'react'
import style from './Button.module.scss'

function Button({type, texto}) {
        return(
            <button type={type} className={style.botao}>
                {texto}
            </button>
        )
    }
export default Button;