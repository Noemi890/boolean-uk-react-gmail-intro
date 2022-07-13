const Li = ({url, text}) => {
    return (
        <li>
            <img className="icon" src={url} alt={text} />
        </li>
    )
}

export default Li