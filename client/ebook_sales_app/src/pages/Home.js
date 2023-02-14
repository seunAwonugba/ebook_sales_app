import React, { useEffect } from "react";
import service from "../service/service";

export default function Home() {
    const getHomePage = async () => {
        try {
            const response = await service.get("/");
            console.log(response.data);
        } catch (error) {
            if (error.response) {
                // Request made but the server responded with an error
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else if (error.request) {
                // Request made but no response is received from the server.
                console.log(error.request);
            } else {
                // Error occured while setting up the request
                console.log("Error", error.message);
            }
        }
    };

    useEffect(() => {
        getHomePage();
    }, []);
    return (
        <div className="home-container">
            <div className="left">
                <div className="text">
                    <h2 className="web">Web Development Ebook</h2>
                    <p className="learn">
                        Learn web development from beginner to master{" "}
                    </p>
                    <button class="pay">Pay with card</button>
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
