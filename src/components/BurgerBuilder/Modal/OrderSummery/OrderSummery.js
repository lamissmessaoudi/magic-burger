import React from 'react'
import classes from './OrderSummery.module.css'

const orderSummery = (props) => {

    const content = props.ingredients.map((ingredient) => {
        return <li>
            {ingredient.label} : {ingredient.count}
        </li>
    })


    return (
        <div>
            <h1>OrderSummery</h1>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {content}
            </ul>

            <p><strong>Total Price: {props.totalPrice.toFixed(2)}</strong></p>
            <p>Continue to Checkout?</p>

            <button className={classes.Button + ' ' + classes.Success}>Order</button>
            <button className={classes.Button + ' ' + classes.Danger} onClick={props.showOrHideOrderedSummery}>CANCEL</button>

        </div>
    )
}

export default orderSummery