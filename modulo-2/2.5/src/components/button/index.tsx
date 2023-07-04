type ButtonProps = {
    children: React.ReactNode
    oneClick: () => void
}

import './button.css'

function Button({children, oneClick}: ButtonProps) {
    return(
        <button onClick={oneClick}>{children}</button>
    )
}

export default Button;