import './styles.scss'

import { FaReact } from "react-icons/fa";

export default function Header() {
    return (
        <header className='header'>
            <div className='info'>
                <p>Lucas Alves</p>
                <p>Front-End Developer</p>
            </div>
            <i className='icons'><FaReact /></i>
        </header>
    )
}