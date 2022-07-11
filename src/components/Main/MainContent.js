import Title from './Title'
import Header from './Header'
import EmailBody from './EmailBody'
import EmailActions from './EmailActions'

const MainContent = () => {
    return (
        <article className="email-content">
          <Title />
          <Header />
          <EmailBody />
          <EmailActions />
        </article>
    )
}

export default MainContent