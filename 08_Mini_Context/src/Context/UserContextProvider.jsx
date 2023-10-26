import React from "react";
import UserContext from "./UserContext";

// !use children as prop and wrap this children to get access of UserContext
const UserContextProvider = ({ children }) => {
    const [user, setUser] = React.useState(null);
    return (
        // kis value ka access de rhe hai wo bhi to likhna hoga so write this in value
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider >
    )
}

export default UserContextProvider