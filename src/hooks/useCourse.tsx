import { useState } from 'react'
import { addCourse } from "../api/apiRepos"



export const useCourse = (name:string, year:string) => {
    const [createCourse, setCreateCourse] = useState([]);
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

    const CourseAdd = async () => {
        setLoading(true)
        try {
            setCreateCourse(await addCourse(name, year))
            setLoading(false)
        } catch (err) {
            setOnError(true);
            setLoading(false)
        }
    }

    return { createCourse, loading, onError, CourseAdd };
}