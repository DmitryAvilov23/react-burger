import React from 'react';

import ModalStyles from '../../Modal.module.css';

class ModalOverlay extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { onClose } = this.props;

        return (
            <div className={ModalStyles.overlay} onClick={onClose}></div>
        )
    }
}

export default ModalOverlay;