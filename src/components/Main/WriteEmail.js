import user from '../../assets/icons/user.png'
import backArrow from '../../assets/icons/back-arrow.png'
import downArrow from '../../assets/icons/down-arrow.png'
import resize from '../../assets/icons/resize.png'
import bin from '../../assets/icons/rubbish-bin-delete-button.png'

const WriteEmail = () => {
    return (
        <div className="container">
            <img className='userIcon' src={user}></img>
            <div className='text-container'>
                <div className='header'>
                    <img className='back-arrow' src={backArrow}></img>
                    <img className='down-arrow' src='https://www.gstatic.com/images/icons/material/system/2x/arrow_drop_down_black_20dp.png'></img>
                    <p className='senderInfo'>Freepick Company (noreply@freepick.com)</p>
                    <img className='resize' src={resize}></img>
                </div>
                <textarea className="text" rows="15" cols="100" ></textarea>
                <div className='footer'>
                    <div>
                        <img className='more-btn' src='https://www.gstatic.com/images/icons/material/system/1x/more_horiz_black_20dp.png'></img>
                    </div>
                    <div className='button-container'>
                        <button className='send-btn'>Send</button>
                        <button className='down-arrow-btn'><img className='down-arrow-png' src='https://www.gstatic.com/images/icons/material/system/2x/arrow_drop_down_black_20dp.png'></img></button>
                        <img className='text-icons' src='https://www.gstatic.com/images/icons/material/system/2x/text_format_black_20dp.png'></img>
                        <img className='text-icons' src='https://www.gstatic.com/images/icons/material/system/2x/attach_file_black_20dp.png'></img>
                        <img className='text-icons' src='https://www.gstatic.com/images/icons/material/system/2x/insert_link_black_20dp.png'></img>
                        <img className='text-icons' src='https://www.gstatic.com/images/icons/material/system/2x/insert_emoticon_black_20dp.png'></img>
                        <img className='text-icons' src='https://www.gstatic.com/images/icons/material/system/2x/drive_black_20dp.png'></img>
                        <img className='text-icons' src='https://www.gstatic.com/images/icons/material/system/2x/insert_photo_black_20dp.png'></img>
                        <img className='text-icons' src='https://www.gstatic.com/images/icons/material/system/2x/lock_clock_black_20dp.png'></img>
                        <img className='text-icons' src='https://www.gstatic.com/images/icons/material/system/2x/ink_pen_black_20dp.png'></img>
                        <div className='delete-container'>
                            <img className='text-icons right-icons' src='https://www.gstatic.com/images/icons/material/system/2x/more_vert_black_20dp.png'></img>
                            <img className='text-icons right-icons'src={bin}></img>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default WriteEmail