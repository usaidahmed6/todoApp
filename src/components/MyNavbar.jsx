import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function MyNavbar() {
    return (

        <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="#">Todo App</Navbar.Brand>
            </Container>
        </Navbar>

    );
}

export default MyNavbar;