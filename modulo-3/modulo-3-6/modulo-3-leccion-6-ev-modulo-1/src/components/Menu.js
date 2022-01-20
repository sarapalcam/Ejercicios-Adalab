import '../styles/components/Menu.scss';
import Link from './Link';

const Menu = () => {
    return <nav>
      <ul className="menu">
        <Link class="menu-item-blog"  url="https://adalab.es/blog/" text="Blog" openInNewTab/>
        <Link class="menu-item-contact"  url="https://adalab.es/contacto/" text="Contacto" openInNewTab={false}/>
      </ul>
    </nav>
}

export default Menu;