import React from 'react'

const FunctionClick = () => {
    function clickHandler() {
        console.log('button clicked')
    }
    return (
        <div>
                {/* event handling in function  */}
            <button onClick={clickHandler}> click </button>
            
        </div>
    )
}

export default FunctionClick
