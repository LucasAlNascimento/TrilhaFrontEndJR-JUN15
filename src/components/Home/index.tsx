import './styles.scss'

import Footer from "../Footer";
import Header from "../Header";
import { useEffect } from 'react';

export default function Home() {

    useEffect(() => {
        const aboutContainer = document.querySelector('.about-container');
        const logoCodigoCerto = document.querySelector('.logo-codigocerto');

        function scroll() {
            if (logoCodigoCerto) {
                const imagePosition = logoCodigoCerto?.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;

                if (imagePosition <= windowHeight) {
                    aboutContainer?.classList.add('scrolled');
                } else {
                    aboutContainer?.classList.remove('scrolled');
                }
            }
        }

        window.addEventListener('scroll', scroll);

        return () => {
            window.removeEventListener('scroll', scroll);
        };
    }, []);


    return (
        <main>
            <Header />
            <div className='info-container'>
                <h1>Lucas Alves do Nascimento</h1>
                <h2>24 anos</h2>
                <div className='photo-container'>
                    <img src='/lucasimage.jpg' alt='Foto Lucas' />
                </div>
            </div>
            <div className='about-container'>
                <h2>Olá, prazer em conhecê-los!</h2>

                <p>Me chamo <b>Lucas</b>, profissional em transição de carreira para o desenvolvimento de software, com 6 anos de experiência como Analista Administrativo e bacharelado em <b>Ciência da Computação</b> pela UNIP finalizado no ano de 2021.</p>

                <img src='/uniplogo.png' alt='Logo React' className='logo-unip' />

                <p>Durante minha carreira, adquiri compreensão em <b>processos empresariais</b>, <b>pensamento crítico</b> e <b>gestão de projetos</b>, habilidades que são diretamente transferíveis para o desenvolvimento.</p>

                <h2>Objetivos de Carreira</h2>

                <p>Me interesso desde o começo da graduação pelo <b>desenvolvimento front-end</b>. Desejo estudar muito e trilhar minha carreira por esse caminho daqui em diante, porém quero me aprofundar também em outras áreas como <b>Back-End</b> e <b>DevOps</b>.</p>

                <div className='logo-container'>
                    <img src='/reacticon.webp' alt='Logo React' />
                    <img src='/csharplogo.png' alt='Logo C#' />
                    <img src='/jenkins.png' alt='Logo Jenkins' />
                </div>

                <p>Considero difícil dizer qual stack eu mais me identifico, porque todas que eu estudo eu me interesso e quero me aprofundar, porém se fosse para escolher seguir carreira em alguma em específico, gostaria de seguir utilizando <b>React</b>.</p>

                <h2>Gostos Pessoais</h2>

                <p>Me considero muito estudioso e curioso, além de ser apaixonado por <b>futebol, videogame, tecnologia e música</b>. Gosto de jogar FIFA, tanto que contratei um ilustrador para fazer uma arte minha baseada nas cartas de jogadores do modo Ultimate Team do FIFA para colocar no meu portfólio de aplicações, porém, ao invés de ter atributos de jogador, pedi para o ilustrador colocar <b>atributos de um desenvolvedor front-end</b>.</p>

                <img src='/lucashero.png' alt='Ilustração Lucas Hero' className='card' />

                <h2>Motivações</h2>

                <p>Me identifiquei com a <b>Código Certo</b> porque atualmente trabalho em uma empresa que presta serviço assistencial odontológico para pessoas em situação de vulnerabilidade social e acredito que <b>ajudar o próximo é algo que devemos levar conosco sempre em nossas vidas</b>. </p>

                <img src='/codigocertologo.webp' alt='Logo Código Certo' className='logo-codigocerto' />

                <p>O trabalho que a <b>Código Certo</b> faz ajudando desenvolvedores a terem experiência prática e ingressar no mercado do desenvolvimento é incrível e <b>vai de encontro com meus princípios</b>. Me incluo nessa experiência pois necessito da prática, já que não segui minha área de formação mesmo após o estágio.</p>


            </div>
            <Footer />
        </main>
    )

}