import React, {useState} from 'react';
import './InterestingCard.scss'
import Divider from "../../assets/images/card_hr.png";
import cn from "classnames";
import {useNavigate} from "react-router-dom";

const InterestingCard = (props) => {
    const {imgSource, text, date} = props;

    const navigate = useNavigate();

    const [isOver, setIsOver] = useState(false);

    const displayBg = cn('d-flex flex-column align-items-center justify-content-center px-3 interestingCard__dataWrapper',
        {
            'bg-white': isOver === true,
            'bg-inherit': isOver === false,
            'activeCardDate': isOver === true,
            'interestingCard__link': isOver === true,
        }
    );

    const displayCardLink = cn('interestingCard__text',
        {
            'interestingCard__link': isOver === true
        }
    );

    const displayCardDate = cn('interestingCard__date',
        {
            'activeCardDate': isOver === true
        }
    );

    return (
        <div className='interestingCard fw-medium'>
            <img src={imgSource} alt="interestingInBlog_img" className='w-100'
                 onMouseOver={() => setIsOver(true)}
                 onMouseOut={() => setIsOver(false)}
            />
            <div className={displayBg}
                 onMouseOver={() => setIsOver(true)}
                 onMouseOut={() => setIsOver(false)}
            >
                <img src={Divider} alt="divider" className='interestingCard__divider'/>
                <span className={displayCardLink} onClick={() => navigate('post_page')}>{text}</span>
                <p className={displayCardDate}>{date}</p>
            </div>
        </div>
    );
};

export default InterestingCard;
