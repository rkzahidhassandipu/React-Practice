import React, {useContext} from 'react';
import { UserContext } from './UserContext';

const Component4 = () => {
    const {user, text} = useContext(UserContext)
  return (
    <div>
        <p>{text}</p>
        <p>{user.name}</p>
        <p>{user.id}</p>
    </div>
  )
}

export default Component4

// import React, {useContext} from 'react';
// import { UserContext } from './UserContext';

// const Component4 = () => {
//     const user = useContext(UserContext)
//   return (
//     <div>
//         <p>{user.name}</p>
//         <p>{user.id}</p>
//     </div>
//   )
// }

// export default Component4