import SpanLabel from "./SpanLabel"
import SpanCount from "./SpanCount"
const Starred = () => {
    return (
    <li className="item">
        <SpanLabel text='Starred'/>
        <SpanCount text='2'/>
    </li>
  )
}

export default Starred