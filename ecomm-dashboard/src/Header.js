import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

function Header(){

    let user = JSON.parse(localStorage.getItem('user-info'))

    const navigate = useNavigate()

    function logout()
    {
        localStorage.clear();
        navigate("/register")
    }

    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">BelezaShop</Navbar.Brand>
                <Nav className="mr-auto navbar-wrapper">
                    {
                        localStorage.getItem('user-info') ?
                        <>
                            <Link to="/add">Ajouter un produit</Link>
                            <Link to="/update">Mettre a jour un produit</Link>
                        </>
                        :
                        <>
                            <Link to="/login">Se connecter</Link>
                            <Link to="/register">S'inscrire</Link>
                        </>
                    }
                </Nav>
                {localStorage.getItem('user-info')?
                <Nav>
                    <NavDropdown title={user && user.name}>
                        <NavDropdown.Item onClick={logout}>Déconnexion</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                :null}
            </Navbar>
        </div>
    )
}

export default Header;