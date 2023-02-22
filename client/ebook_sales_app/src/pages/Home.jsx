import React, { useEffect } from "react";
import PayWithCardModal from "../components/PayWithCardModal";

export default function Home() {
    const [showModal, setShowModal] = React.useState(false);

    const handleOpenModalClick = () => {
        setShowModal(true);
    };

    const handleCloseModalClick = () => {
        setShowModal(false);
    };
    return (
        <div className="home-container">
            <div className="left">
                <div className="text">
                    <h2 className="web">Web Development Ebook</h2>
                    <p className="learn">
                        Learn web development from beginner to master{" "}
                    </p>
                    <button className="pay" onClick={handleOpenModalClick}>
                        Pay $25
                    </button>
                    <PayWithCardModal
                        showModalProps={showModal}
                        closeModalProps={handleCloseModalClick}
                    />
                </div>
            </div>
            <div className="right">
                <img
                    src={process.env.PUBLIC_URL + "undraw_bookshelves.svg"}
                    alt="ebook logo"
                />
            </div>
        </div>
    );
}
