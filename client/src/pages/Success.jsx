import { useLocation } from "react-router"

const Success = () => {
    const location = useLocation()
    return (
        <div>
            ¡Pago exitoso!
        </div>
    )
}

export default Success
