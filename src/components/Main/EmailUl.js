import Li from './ListItem'

import backArrow from '../../assets/icons/back-arrow.png'
import rubbishButton from '../../assets/icons/rubbish-bin-delete-button.png'
import rateStarButton from '../../assets/icons/rate-star-button.png'

const EmailUl = () => {
    return (
        <ul>
            <Li url={backArrow} text='reply button'/>
            <Li url={rubbishButton} text='delete button'/>
            <Li url={rateStarButton} text='star button'/>
        </ul>
    )
}

export default EmailUl