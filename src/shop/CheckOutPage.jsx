
import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import '../components/modal.css'
import { useLocation, useNavigate } from 'react-router-dom';

const CheckOutPage = () => {
    const [show, setShow] = useState(false);
    const [activeTab, setActiveTab] = useState("visa");

    const handleTabChange = (tabId) => {
        setActiveTab(tabId)
    }

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    //direct to home page
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";

    const handleOrderConfirm = () => {
        alert("Your Order is placed successfully")
        localStorage.removeItem("cart");
        navigate(from, { replace: true })
    }

    return (
        <div className='modalCard'>
            <Button variant="primary" className="py-2" onClick={handleShow}>Proceed to Checkout</Button>

            <Modal
                show={show}
                onHide={handleClose}
                animation={false}
                className='modal fade'
                centered>
                <div className='modal-dialog'>
                    <h5 className="px-3 mb-3">Select Your Payment Method</h5>
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className="tabs mt-3">
                                <ul className='nav nav-tabs' id='myTab' role='tablist'>
                                    <li className='nav-item' role='presentation'>
                                        <a className={`nav-link ${activeTab === "visa" ? "active" : ""}`}
                                            id='visa-tab'
                                            data-toggle="tab"
                                            role='tab'
                                            aria-controls='visa'
                                            aria-selected={activeTab === "visa"}
                                            onClick={() => handleTabChange("visa")}
                                            href="#visa"><img src="https://i.imgur.com/sB4jftM.png" alt="" width="80" /></a>
                                    </li>
                                </ul>

                                {/* contents */}
                                <div className="tab-content" id="myTabContent">
                                    {/* Visa Content */}
                                    <div className={`tab-pana fade ${activeTab === "visa" ? "show active" : ""}`}
                                        id='visa'
                                        role='tabpanal'
                                        aria-labelledby='visa-tab'
                                    >
                                        {/* visa tab content */}
                                        <div className="mt-4 mx-4">
                                            <div className="text-center">
                                                <h5>Creadit Card</h5>
                                            </div>
                                            <div className="form mt-3">
                                                <div className="inputbox">
                                                    <input type="text" name="name" id="name" className='form-control' required />
                                                    <span>Cardholder Name</span>
                                                </div>
                                                <div className="inputbox">
                                                    <input type="text" name="number" id="number" className='form-control' min="1" max="999" required />
                                                    <span>Card Number</span><i className='fa fa-eye'></i>
                                                </div>
                                                <div className="d-flex flex-row">
                                                    <div className="inputbox">
                                                        <input type="text" name="number" id="number" className='form-control' min="1" max="999" required />
                                                        <span>Expiry Date</span>
                                                    </div>
                                                    <div className="inputbox">
                                                        <input type="text" name="number" id="number" className='form-control' min="1" max="999" required />
                                                        <span>CVV</span>
                                                    </div>
                                                </div>
                                                <div className="px-5 pay">
                                                    <button className='btn btn-success btn-block' onClick={handleOrderConfirm}>Order</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <p className="mt-3 px-4 p-Desclaimer"><em>Payment Disclaimer: </em> In no event shall payment or partial payment by
                                    Owner for any material or service</p>
                            </div>
                        </div>
                    </div>
                </div>

            </Modal>
        </div>
    )
}

export default CheckOutPage