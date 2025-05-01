import React from 'react'
import { Modal } from 'react-bootstrap'

const OrderTracker = (props) => {
    let { show, setShow } = props;
    return (
        <>
            <Modal
                show={show}
                
                className='order-tracker'
                centered
            >


            </Modal>
        </>
    )
}

export default OrderTracker
