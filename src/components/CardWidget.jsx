import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'

const CardWidget = ({counter}) =>{
    return(
        <div className="cardWidgetContainer d-flex align-items-center position-relative">
            <ShoppingCartIcon fontSize="large" />
            <p className=" badge rounded-pill bg-danger position-absolute top-0 start-100 translate-middle"> {counter}</p>
        </div>
    )
}

export default CardWidget