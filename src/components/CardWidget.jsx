const CardWidget = ({counter}) =>{
    //console.log (props)
    return(
        <div className="cardWidgetContainer">
            <img src="./carta.png">
            </img>
            <p className="cardCounter"> {counter}</p>
        </div>
    )
}

export default CardWidget