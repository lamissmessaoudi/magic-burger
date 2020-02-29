import React from "react"
import classes from './BuildControls.module.css'
import BuildControl from './BuildControl/BuildControl'

const buildControls = (props) => {


    let totalPrice = props.totalPrice
    let buildControlList = props.ingredientsProps.map((ingredient) => {
        return <BuildControl
            label={ingredient.label}
            count={ingredient.count}
            added={() => { props.methodAdd(ingredient) }}
            removed={() => { props.methodRemove(ingredient) }}
        />
    })



    return (
        <div className={classes.BuildControls}>
            <p>total price is : {totalPrice}</p>
            <div>
                {buildControlList}
            </div>
            <button className={classes.OrderButton}>Order Now</button>

        </div>
    )
}

export default buildControls