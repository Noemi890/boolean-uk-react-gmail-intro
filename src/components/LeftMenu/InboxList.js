import Inbox from "./Inbox"
import Starred from "./Starred"
import HideRead from "./HideRead"

const InboxList = () => {
   return (
   <ul className="inbox-list">
        <Inbox />
        <Starred />
        <HideRead />
    </ul>
    )
}

export default InboxList