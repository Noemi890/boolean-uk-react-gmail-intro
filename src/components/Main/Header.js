import Avatar from './Avatar'
import EmailInfo from './EmailInfo'
import DateInfo from './DateInfo'
import EmailActionsIcons from './EmailActionsIcons'
const Header = () => {
    return (
        <header className="email-content--header">
            <Avatar />
            <EmailInfo />          
            <DateInfo />
            <EmailActionsIcons />
        </header>
    )
}

export default Header