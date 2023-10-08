import React from "react";

function Footer() {
    return (
        <footer className="footer" role="contentinfo">
            <div className="container">
                <div className="row">
                    <div className="col-sm-6">
                        <p className="mb-1">&copy; All Rights Reserved</p>
                        <div className="credits">
                            Made by Nicolas Porto with Bootstrap
                        </div>
                    </div>
                    <div className="col-sm-6 social text-md-right">
                        <a href="https://www.instagram.com/mawgsh" target="_blank"><span className="icofont-instagram"></span></a>
                        <a href="https://www.linkedin.com/in/mawgsh" target="_blank"><span className="icofont-linkedin"></span></a>
                        <a href="https://wa.me/554189017474" target="_blank"><span className="icofont-whatsapp"></span></a>
                        <a href="mailto:mano.oelasz@gmail.com" target="_blank"><span className="icofont-email"></span></a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;