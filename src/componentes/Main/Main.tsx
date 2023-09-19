import { useState } from 'react'
import Projetos from './componentes/projetos/Projetos'
import './main.css'
type ProjetosType = {
    id:number,
    titulo:string,
    descricao:string,
    imagem:string
}

export default function Main() {
    const [texto,setTexto]=useState("")

    const projetos:ProjetosType[] = [
        {
            id:1,
            titulo:'NVC',
            descricao:"Nesse projeto participamos de treinos e competições ao decorrer do ano. Atualmente estamos participando da Conesul, campeonato estadual do MS o qual aguardamos os resultados classificatórios para as semifinais.",
            imagem:'/nvc.jfif'
        },
        {
            id:2,
            titulo:'Winner Ballet',
            descricao:'Dou aula de Ballet na Winner School para crianças do infantil 3 e infantil 4. As aulas ocorrem de Segunda-Feira a Quinta-Feira das 17h30min às 18h30min, sendo intercalado os dias de cada turma',
            imagem:'/KEN.png'
        },
        {
            id:3,
            titulo:'Site Disney',
            descricao:'Em sala está sendo realizado a criação de um site de filmes, o qual está associado a disciplina de Frameworks. Nesse site cadastramos alguns filmes, no meu, escolhi os filmes da Disney.',
            imagem:'/boneca.jpg'
        },
        {
            id:4,
            titulo:'Barbie',
            descricao:"Depois de ser expulsa da Barbieland por ser uma boneca de aparência menos do que perfeita, Barbie parte para o mundo humano em busca da verdadeira felicidade.",
            imagem:'/barbie.png'
        },
    ]

    function TrataTexto(e:React.ChangeEvent<HTMLInputElement>){
        setTexto(e.target.value)
    }
    return (
        <>
            <div className="campo_pesquisa">
                <p>Busque um projeto</p>
                <input type="text" 
                       className='botao_pesquisa'
                       placeholder='Pesquise um Projeto'
                       onChange={TrataTexto} />
                {texto && <p>Resultados Para: {texto} </p>}
            </div>
            <main className="content-main">
               
                {
                    projetos.filter((projetos)=>projetos.titulo.toLowerCase().includes(texto)).map(
                        (projetos)=>
                            <Projetos 
                                key={projetos.id}
                                descricao={projetos.descricao}
                                titulo={projetos.titulo}
                                imagem={projetos.imagem}
                            />
                    )
                }

            </main>
        </>
    )
}