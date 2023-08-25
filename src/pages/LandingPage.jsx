import React from "react";
import { ContactUs, Footer, Jumbotron, LatestNews, Navbar } from "../components/ui";

function LandingPage() {
    return (
        <div className="body">
            <main>
                <Navbar />
                <Jumbotron />
                <LatestNews/>
                <ContactUs />
            </main>
            <Footer />
        </div>
    )
}

export default LandingPage;