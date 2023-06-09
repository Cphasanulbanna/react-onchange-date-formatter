# react-onchange-date-formatter

A simple date formatter for react apps

# installation

```
npm i react-onchange-date-formatter
```

# props

-   e: Event on onChange.
-   setState: State updater.
-   specialCharacter: Any special character that you want to format the date.

# Usage Example

```jsx
import React, { useState } from "react";
import useFormatDate from "react-onchange-date-formatter";

export default function App() {
    const [date, setDate] = useState("");

    const formatDate = useFormatDate();

    // This can be "-", "/", " ", ".", "|" etc
    const specialCharacter = "/";

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

# npm link

https://www.npmjs.com/package/react-onchange-date-formatter
