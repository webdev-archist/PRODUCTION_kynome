import React, {useState, useEffect, createContext} from 'react'

const AuthContext = createContext()
export default AuthContext

export const AuthContextProvider = ({ children }) => {
    const [token, setToken] = useState(false)
    , [user, setUser] = useState({})
    , [datas, setDatas] = useState(false) 

    useEffect(() => {
        /*
            fetch('http://localhost:3000/api/data')
            .then((res) => {
                return res.json()
            })
            .then(contents => {
                console.log(contents);
                setDatas(contents)
            })
            .catch(err=>{
                console.group(err)
                console.groupEnd()
            })
        */
	}, [])

    return (
        <AuthContext.Provider value={{ token, setToken, user, setUser, datas, setDatas }}>
            {children}
        </AuthContext.Provider>
    )
}
