import SpanLabel from "./SpanLabel"
import SpanCount from "./SpanCount"

const Inbox = () => {
    return (
        <li className="item active">
          <SpanLabel text='Inbox'/>
          <SpanCount text='3'/>
        </li>
    )
}

export default Inbox