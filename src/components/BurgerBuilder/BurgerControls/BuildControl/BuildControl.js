import React from "react"
import classes from './BuildControl.module.css'

const buildControl = (props) => {
    return (
        <div className={classes.BuildControl}>
            <div className={classes.Label}>
                {props.label}
            </div>
            <button
                onClick={props.removed}
                className={classes.Less}
                //disabled={(props.count <= 0)}
                disabled={props.disableRemoving}
            >
                Less
            </button>
            <button
                onClick={props.added}
                className={classes.More}
                disabled={(props.count >= props.max)}
            >
                More
            </button>

        </div>
    )
}

export default buildControl