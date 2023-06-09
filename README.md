# react-date-formator

-   A simple date formatter for react apps

# installation

# npm

-   npm i react-onchange-date-formatter

# props

-   e: Event on onChange.
-   setState: State updater.
-   specialCharacter: Any special character that you want to format the date.

# Example

```jsx
import React, { useState } from "react";
import useFormatDate from "react-onchange-date-formatter";

export default function App() {
    const [date, setDate] = useState("");

    const formatDate = useFormatDate();
    const specialCharacter = "/"; // This can be "-", "/", " ", ".", "|" etc

    const handleDateChange = (e) => {
        formatDate(e, setDate, specialCharacter);
    };

    return (
        <div>
            <input
                type="text"
                placeholder="10/10/2023"
                value={date}
                onChange={handleDateChange}
            />
        </div>
    );
}
```
