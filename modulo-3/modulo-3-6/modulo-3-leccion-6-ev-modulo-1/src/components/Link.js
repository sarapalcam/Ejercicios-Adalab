const Link = (props) => {
    return <li className={`menu-item ${props.class}`}>
    <a href={props.url} target={props.openInNewTab ? "_blank" : null} rel="noreferrer">{props.text}</a>
  </li>
}

export default Link;