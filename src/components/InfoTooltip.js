import successIconPath from '../images/success-icon.svg';
import errorIconPath from '../images/error-icon.svg';

function InfoTooltip({ isOpen, onClose, isSuccess }) {

    return (
        <div 
            className={`
                popup
                ${ isOpen? 'popup_opened' : ''} 
                ${ onClose? '' : 'popup_opened'}
            `}  
        >
            <div className="popup__container popup__container_infotooltip">
                <button 
                    onClick={onClose} 
                    className="popup__close-button hover-opacity" 
                    type="button"
                />
                <img 
                    className="popup__image" 
                    alt="иконка"
                    src={isSuccess? successIconPath : errorIconPath} 
                    
                />
                <h2 className="popup__title">
                    { isSuccess? 
                        ('Вы успешно зарегистрировались!') 
                        : 
                        ('Что-то пошло не так! Попробуйте ещё раз.')}
                </h2>
            </div>
        </div>
    );
  }
  
  export default InfoTooltip;