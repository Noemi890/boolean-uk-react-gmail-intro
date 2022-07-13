import Title from './Title'
import Header from './Header'
import EmailBody from './EmailBody'
import EmailActions from './EmailActions'
import WriteEmail from './WriteEmail'

const MainContent = () => {
    return (
        <article className="email-content">
          <Title />
          <Header />
          <EmailBody />
          <EmailActions />
          <WriteEmail />
        </article>
    )
}

export default MainContent