const Button = {
    variants: {
        "main": {
            bgColor: "#006D7F",
            color: "#FFFFF0",
            _hover: {
                bgColor: "#004A57",
                color: "#FFFFF0",
            }
        },
        "main-outline": {
            border: "1px solid #006D7F",
            bgColor: "transparent",
            color: "#006D7F",
            _hover: {
                bgColor: "#C4FCF1",
                color: "#006D7F",
                border: "3px solid #006D7F",
            }
        }

    }
}

export default Button