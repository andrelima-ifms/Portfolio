import './Portfolio.css'
import Background from '../../assets/img/fundo.png'

function Portfolio(){
    return(
      <main style={{backgroundImage: `url(${Background})`}}>
        
        <p>...</p>
        <h1 className='my-title'>Olá, eu sou a Stefanny</h1>
        <p className='my-text'>Sejam bem-vindos ao meu blog pessoal!</p>
        <p className='my-text'>Aqui vocês poderam encontrar diversas atividades</p>
        <p className='my-text'>que faço no meu dia a dia. Espero que gostem!</p>
        <h1 className='my-title'>O que gosto de fazer?</h1>
        <p  className='my-text'>-Ensinar babys a dançar Ballet</p>
        <p  className='my-text'>-Jogar Vôlei</p>
        <p  className='my-text'>-Sair com a família</p>
        
      </main>
    )
}

export default Portfolio