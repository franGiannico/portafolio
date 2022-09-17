import Burger from "./Burguer"
import RightNav from "./RightNav"

const Header = ({ open }) => {

    return (
        <>
            <header open={open} >                                 
                <div className="s-grid-1 lg-cols-3 s-cross-center s-main-end  main-header header-links">           
                    <RightNav/>                       
                    <Burger/>      
                 </div>
            </header>
        </>
    )
}

export default Header