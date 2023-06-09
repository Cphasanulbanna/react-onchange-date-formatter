# react-date-formator

# installation

# npm

-   npm i react-onchange-date-formatter

# props

-   e: Event on onChange.
-   setState: State updater.
-   specialCharacter: Any special character that you want to format the date.

# Example

import React, {useState} from "react";
import useFormatDate from "react-onchange-date-formatter";

export default function App() {
const [date, setDate] = useState("")

const formatDate = useFormatDate()
const specialCharacter = "/"; //this can be "-", "/", " ", ".", "|" etc

const handleDateChange = (e) => {
formatDate(e, setDate, specialCharacter)
}

    return (
        <div>
            <Input type="text" placeholder="10/10/2023" value={date} onChange={handleDateChange}/>
        </div>
    )

}
