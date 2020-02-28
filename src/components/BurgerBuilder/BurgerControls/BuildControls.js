import React from "react"
import classes from './BuildControls.module.css'
import BuildControl from './BuildControl/BuildControl'

const buildControls = (props) => {


    let buildControlList = props.listControls.map((ingredient) => {
        return <BuildControl label={ingredient.label} />
    })



    return (
        <div className={classes.BuildControls}>
            <p>total price is : 4TND</p>
            <div>
                {buildControlList}

                {/* <BuildControl label="cheese" />
                <BuildControl label="meat" />
                <BuildControl label="salad" />
                <BuildControl label="escalope" /> */}
            </div>
            <button className={classes.OrderButton}>Order Now</button>

        </div>
    )
}

export default buildControls