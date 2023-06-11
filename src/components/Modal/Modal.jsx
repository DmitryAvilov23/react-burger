import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import ModalStyles from './Modal.module.css';
import ModalOverlay from './components/Overlay/Modal-Overlay';


const modalRoot = document.getElementById("react-modals");

class Modal extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount = () => {
        document.addEventListener('keydown', this.closeByKey); 
    }

    closeByKey = (event) => {
        if(event.key === 'Escape') this.props.onClose();
    };

    componentWillUnmount = () => {
        document.removeEventListener('keyDown', this.closeByKey)
    }

    render() {
        const { children, onClose, title } = this.props;
        
        return ReactDOM.createPortal((
            <>
                <div className={ModalStyles.modal + ' p-10'}>
                    <button className={ModalStyles.modal__closeBtn} onClick={onClose}>
                        <CloseIcon type="primary" />
                    </button>

                    { title && (<h2 className="text text_type_main-large">
                                    { title }
                                </h2>)}
                    <div className={ModalStyles.modal__content}>
                        { children }
                    </div>
                </div>

                <ModalOverlay onClose={onClose}/>
            </>
        ), modalRoot);
    }
}

Modal.protoType = {
    children: PropTypes.element,
    onClose: PropTypes.bool,
    title: PropTypes.string
}

export default Modal;