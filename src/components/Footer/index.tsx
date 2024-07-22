import './styles.scss'

export default function Footer() {
    return (
        <footer className='footer'>
            <div className='footer-info-container'>
                <div className='footer-info'>
                    <span>Powered by</span>
                    <span>Código Certo</span>
                </div>
                <img src='/codigocertologo.webp' alt='Código Certo Logo' />
            </div>
        </footer>
    )
}