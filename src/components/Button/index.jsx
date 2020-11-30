import React from "react"
import {StyledButton} from "./styles";

function Button({text, center, small}) {
    return (
        <StyledButton small={small} center={center}>
            {text}
        </StyledButton>
    )

}

export default Button