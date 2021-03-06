import { useEffect, useState } from "react"

const useTools = () => {
    const [tools, setTools] = useState([]);

    useEffect(() => {
        fetch('https://enigmatic-taiga-40573.herokuapp.com/tools')
            .then(res => res.json())
            .then(data => {
                setTools(data);
            })
    }, [])

    return [tools];
}

export default useTools;