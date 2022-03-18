import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header(){

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
            </Navbar>
        </div>
    )
}

export default Header;