import Code from './assets/code.svg'
import Share from './assets/share.svg'
import Chat from './assets/chat.svg'
import './styles.css'

export default function Card({id, imagemUrl, titulo, resumo, linhasDeCodigo, compartilhamento, comentarios, usuario}) {
    return (
        <article className='Card'>
            <div className='card__imagem'>
                <img src={imagemUrl} alt="Capa do post" />
            </div>
            <div className='card__conteudo'>
                <div className='conteudo__texto'>
                    <h3>{titulo}</h3>
                    <p>{resumo}</p>
                </div>
                <div className='conteudo__rodape'>
                    <ul>
                        <li>
                            <img src={Code} alt="Codigos" />
                            {linhasDeCodigo}
                        </li>
                        <li>
                            <img src={Share} alt="Compartilhamentos" />
                            {compartilhamento}
                        </li>
                        <li>
                            <img src={Chat} alt="Comentários" />
                            {comentarios}
                        </li>
                    </ul>

                    <div className='rodape__usuario'>
                        <img src={usuario.imagem} alt="Imagem do usuário" />
                        {usuario.nome}
                    </div>
                </div>
            </div>
        </article>
    )
}