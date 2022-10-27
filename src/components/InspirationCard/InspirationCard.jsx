import React, {useState} from 'react';
import './InspirationCard.scss';
import LikeIcon from "../../assets/images/like_icon.png";
import CommentIcon from "../../assets/images/comment_icon.png";
import cn from "classnames";

const InspirationCard = (props) => {
    const {imgSource} = props;
    const [isOver, setIsOver] = useState(false);

    const display = cn(
        {
            'd-block': isOver === true,
            ' d-lg-none': isOver === false
        }
    );

    return (
        <div className='inspirationCard'>
            <img src={imgSource} alt="card_img" className='w-100'
                 onMouseOver={() => setIsOver(true)}
                 onMouseOut={() => setIsOver(false)}
            />
            <div>

                <div
                    className={display}
                    onMouseOver={() => setIsOver(true)}
                    onMouseOut={() => setIsOver(false)}
                >
                    <div className='inspirationCard__statistic d-flex align-items-center justify-content-lg-between'>
                        <p className='d-none d-lg-block m-0 inspirationCard__sign'>@decorinsta</p>

                        <div className='d-flex align-items-center'>
                            <img src={LikeIcon} alt="LikeIcon" className='inspirationCard__likeIcon'/>
                            <span className='inspirationCard__likeCount inspirationCard__statisticText'>68</span>
                            <img src={CommentIcon} alt="CommentIcon"
                                 className='inspirationCard__commentIcon'/>
                            <span className='inspirationCard__statisticText'>143</span>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InspirationCard;
