import React, {memo, useMemo} from 'react'

const Memo = ({numberOfMessage, onHandleIncrement}) => {
    console.log("message randering");



    const calculatedNumber = useMemo(() => {
        let number = 0;
        for (let index = 0; index < 5000000000; index++) {
            number++;
        }
        return number; // Return the computed value
    }, []);
  return (
    <div>
        <h2>Number: {calculatedNumber}</h2>
        <p>Sent {numberOfMessage} message</p>
        <button onClick={onHandleIncrement}>Increment Message Number</button>
    </div>
  )
}

export default memo(Memo)