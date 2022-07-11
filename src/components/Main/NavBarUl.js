import backArrow from '../../assets/icons/back-arrow.png'
import downloadButton from '../../assets/icons/download-button.png'
import rubbishButton from '../../assets/icons/rubbish-bin-delete-button.png'

import Li from "./ListItem"

const Ul = () => {
    return (
        <ul>
          <Li url={backArrow} text='reply button'/>
          <Li url={downloadButton} text='archive button'/>
          <Li url={rubbishButton} text='delete button'/>
        </ul>
    )
}

export default Ul