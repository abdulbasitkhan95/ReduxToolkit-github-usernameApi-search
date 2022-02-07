import {useEffect, useState} from "react";
import {set} from "react-hook-form";
import {showMessage} from "../../global/utils";

const DataValidation = ({data, isLoading, error, isError, children}) => {
    const [html, setHtml] = useState(null);

    useEffect(() => {
        if(isLoading) {
            return <h1 className="text-white">Loading</h1>
        }

        if(isError) {
            return <h1 className="text-white">No Result Found</h1>
        }

        if(data.length === 0)
            return setHtml(<h1 className="text-white">No Result Found</h1>)


        return setHtml(children)

    }, [isError, isLoading, data])

    return html
}

export default DataValidation