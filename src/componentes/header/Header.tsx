import './Header.css'
function Header(){
    return(
        <header>
            <div>
                <h1>Stefanny Lorena</h1>
            </div>
            <nav>
                <div className='mb'>
                <ul>
                    <li>
                        <a href="#">Home</a>
                    </li>
                </ul>
                <ul>
                    <li>
                        <a href="#">Blog</a>
                    </li>
                </ul>
                <ul>
                    <li>
                        <a href="#">Sobre</a>
                    </li>
                </ul>
                <ul>
                    <li>
                        <a href="#">Contato</a>
                    </li>
                </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header 