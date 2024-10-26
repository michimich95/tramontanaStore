const NavBarComponent = () =>{
    return(
        <nav className="navContainer">
            <a className="aLink"> Home </a>
            <a className="aLink"> New In </a>
            <a className="aLink"> Best Sellers </a>
            <CardWidget counter= {15}></CardWidget>
        </nav>
    )
}

export default NavBarComponent
