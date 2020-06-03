import React,{useContext,useState} from "react"
import {Collapse,Navbar,NavbarToggler,NavbarBrand,Nav,NavItem,NavLink,NavbarText} from "reactstrap";
import{Link} from "react-router-dom"
import {FcHome} from "react-icons/fc"
import { UserContext } from "../context/UserContext";
const Header=()=>{

const context=useContext(UserContext);
const[isOpen,setOpen]=useState(false)
const toggle =()=>setOpen(!isOpen)


    return(
<Navbar color="info" light expand="md">
<NavbarBrand><Link to="/" className="text-white"><FcHome/></Link>
</NavbarBrand>
<NavbarText className="text-white"> {
    context.user?.email? context.user.email : ""
}
</NavbarText>
<NavbarToggler onClick={toggle}/>
<Collapse isOpen={isOpen} navbar>
<Nav className="ml-auto" navbar>
{
    context.user ? (<NavItem>
        <NavLink onClick={()=>{context.setUser(null)}} className="text-white">Logout</NavLink>
        </NavItem>) : (
            <>
            <NavItem>
            <NavLink tag={Link} to="/signup" className="text-white">signUp</NavLink>
            </NavItem>
            <NavItem>
            <NavLink tag={Link} to="/signin" className="text-white">signIn</NavLink>
            </NavItem>
            </>
            )
}

</Nav>
</Collapse>
</Navbar>
    )
}

export default Header;