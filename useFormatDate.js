import React from "react";

export const useFormatDate = () => {
    const formatDate = (e, setState, specialCharacter) => {
        let value = e.target.value;
        var numbers = /^[0-9!@#$%^&*()-?":{}|<>{/}]+$/;
        if (value.match(numbers)) {
            let typedDate =
                value.length === 3 && !value.includes(specialCharacter)
                    ? `${value.substring(0, 2)}${specialCharacter}${value.substring(2)}`
                    : value.length === 6 && value[value.length - 1] !== specialCharacter
                    ? `${value.substring(0, 5)}${specialCharacter}${value.substring(5)}`
                    : value;
            setState(typedDate);
        } else {
            setState("");
            return false;
        }
    };
    return formatDate;
};
