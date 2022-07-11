const Li = (src, alt) => {
    return (
        <li>
            <img className="icon" src={src.url} alt={alt.text} />
        </li>
    )
}

export default Li