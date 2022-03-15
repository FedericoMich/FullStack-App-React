import { useState } from 'react'
import { addUser } from "../api/apiRepos"



export const useUser = (name:string, surname:string, repos:string) => {
    const [createUser, setCreateUser] = useState([]);
    const [loading, setLoading] = useState(true)
    const [onError, setOnError] = useState(false);

    /*  useEffect(() => {
          const populate = async () => {
              try {
                  setDetailRepos(await addUser( name,surname,repos ))
                  setLoading(false)
              } catch (err) {
                  setOnError(true);
                  setLoading(false)
              }
          }
          populate()
      }, [login, repoName])
  
      */

    const UserAdd = async () => {
        setLoading(true)
        try {
            setCreateUser(await addUser(name, surname, repos))
            setLoading(false)
        } catch (err) {
            setOnError(true);
            setLoading(false)
        }
    }

    return { createUser, loading, onError, UserAdd };
}