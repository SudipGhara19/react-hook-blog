import { useState } from "react";

export function useFormInput(Initialize){
    const[value, setValue] = useState(Initialize)

    function handleChange(e) {
        setValue(e.target.value)
    }

    return {
        value,
        onchange: handleChange
    }
}