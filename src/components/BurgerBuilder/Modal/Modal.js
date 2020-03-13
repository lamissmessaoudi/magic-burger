import React from 'react'
import Backdrop from './Backdrop/Backdrop'
import classes from './Modal.module.css'

const modal = (props) => {
    return (
        <div>
            <Backdrop show={props.show}
                showOrHideOrderedSummery={props.showOrHideOrderedSummery} />
            <div className={classes.Modal}
                style={{ transform: props.show ? 'translateY(0)' : 'translateY(-100vh)' }}>
                {props.children}
            </div>

        </div>
    )
}

export default modal