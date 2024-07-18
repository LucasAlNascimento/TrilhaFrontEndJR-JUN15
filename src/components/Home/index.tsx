import './styles.scss'

import Footer from "../Footer";
import Header from "../Header";

export default function Home() {
    return (
        <main>
            <Header />
            <div className='info-container'>
                <h1>Lucas Alves do Nascimento</h1>
                <h2>24 anos</h2>
                <div className='photo-container'>
                    <img src='/lucasimage.jpg' alt='Foto Lucas'/>
                </div>
            </div>
            <div className='about-container'>
                <h2>Olá, prazer em conhecê-los!</h2>

                <p>Atualmente sou um profissional em transição de carreira para o desenvolvimento de software, com 6 anos de experiência como Analista Administrativo e <b>bacharelado em Ciência da Computação</b> pela UNIP no ano de 2021. Durante minha carreira, adquiri forte compreensão em processos de negócios, pensamento crítico e gestão de projetos, habilidades que são diretamente transferíveis para o desenvolvimento.</p>

                <h2>Objetivos de Carreira</h2>

                <p>Me interesso desde o começo da graduação pelo <b>desenvolvimento front-end</b>. Desejo trilhar minha carreira por esse caminho daqui em diante, porém quero me aprofundar também em outras áreas como <b>Back-End e DevOps</b>.</p>

            </div>
            <Footer />
        </main>
    )

}