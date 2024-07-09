import React from 'react';
import PropType from "prop-types";

const User = (props) => {
    
  return (
    <div>
        <h1>{props.userName}</h1>
        <h1>{props.userId}</h1>
        <h1>Welcome</h1>
        <h3>{props.user.id}</h3>
        <h3>{props.user.name}</h3>
    </div>
  )
}


User.propTypes = {
    // user: PropType.object.isRequired,
    user: PropType.shape({
        id: PropType.number,
        name: PropType.string
    })
}

User.propTypes = {
    userName: PropType.string,
    userId: PropType.number,
}

User.defaultProps = {
    userName: "default name",
    userId: 0
}


export default User