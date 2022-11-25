import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title}-CamBazar`
    }, [title])
}

export default useTitle