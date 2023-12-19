import useCart from "../hooks/useCart"

type PropsType = {
    viewCart: boolean
}

const Footer = ({ viewCart }: PropsType) => {
    const { totalItems, totalPrice } = useCart()

    const year: number = new Date().getFullYear()

    const footerContent = viewCart
        ? <p>YNS Shopping Cart &copy; {year}</p>
        : (
            <>
                <p>Total Items: {totalItems}</p>
                <p>Total Price: {totalPrice}</p>
                <p>YNS Shopping Cart &copy; {year}</p>
            </>
        )

    const content = (
        <footer className="footer">
            {footerContent}
        </footer>
    )

    return content
}

export default Footer