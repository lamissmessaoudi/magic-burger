import React from "react"
import classes from './BuildControls.module.css'
import BuildControl from './BuildControl/BuildControl'

const buildControls = (props) => {

    let buildControlList = props.ingredientsProps.map((ingredient) => {
        return <BuildControl
            key={ingredient.id}
            label={ingredient.label}
            count={ingredient.count}
            added={() => { props.method(ingredient.id, "add") }}
            removed={() => { props.method(ingredient.id, "remove") }}
            max={ingredient.max}
            disableRemoving={ingredient.count === 0}
        />
    })


    return (
        <div className={classes.BuildControls}>
            <p>total price is : {props.totalPrice.toFixed(2)} TND</p>
            <div>
                {buildControlList}
            </div>
            <button className={classes.OrderButton}
                onClick={props.showOrHideOrderedSummery}>
                Order Now
            </button>

        </div>
    )
}

export default buildControls