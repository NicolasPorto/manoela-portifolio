import React from "react";
import AOS from 'aos';
import Header from '../components/Header.js'
import Footer from '../components/Footer.js'

function Contact(){
    AOS.init();
    const enviarEmail = async () => {
        try {
          const response = await fetch("/enviar-email", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            }
          });
      
          if (response.ok) {
            const responseData = await response.json();
            console.log(responseData.message);
          } else {
            console.error("Erro ao enviar o email.", response);
          }
        } catch (error) {
          console.error("Erro ao enviar o email:", error);
        }
      };
    return(
       <>
       <Header/>
       <main id="main">
            <div className="site-section pb-0 site-portfolio">
                <div className="container">
                    <div className="row mb-5 align-items-end">
                        <div className="col-md-6" data-aos="fade-up">
                            <h2>Contato</h2>
                            <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam necessitatibus incidunt ut
                            officiis explicabo inventore.
                            </p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6 mb-5 mb-md-0" data-aos="fade-up">
                            <form onSubmit={enviarEmail} className="php-email-form">
                                <div className="row">
                                    <div className="col-md-6 form-group">
                                        <label htmlFor="name">Nome</label>
                                        <input type="text" name="name" className="form-control" id="name" data-rule="minlen:4" data-msg="Insira no minimo 4 caracteres." />
                                        <div className="validate" />
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <label htmlFor="name">Email</label>
                                        <input type="email" className="form-control" name="email" id="email" data-rule="email" data-msg="Insira um e-mail válido." />
                                        <div className="validate" />
                                    </div>
                                    <div className="col-md-12 form-group">
                                        <label htmlFor="name">Assunto</label>
                                        <input type="text" className="form-control" name="subject" id="subject" data-rule="minlen:4" data-msg="Insira no minimo 8 caracteres." />
                                        <div className="validate" />
                                    </div>
                                    <div className="col-md-12 form-group">
                                        <label htmlFor="name">Mensagem</label>
                                        <textarea className="form-control" name="message" id="message" cols={30} rows={10} data-rule="required" data-msg="Insira uma mensagem :D." defaultValue={""} />
                                        <div className="validate" />
                                    </div>
                                    <div className="col-md-12 mb-3">
                                    <div className="loading">Loading</div>
                                    <div className="sent-message">Sua mensagem foi enviada. Obrigada!</div>
                                    </div>
                                        <div className="col-md-6 form-group">
                                        <input type="submit" className="readmore d-block w-100"  onClick={enviarEmail} defaultValue="Send Message" />
                                    </div>
                                </div>
                            </form>
                        </div>

                        <div className="col-md-4 ml-auto order-2" data-aos="fade-up">
                            <ul className="list-unstyled">
                                <li className="mb-3">
                                    <strong className="d-block mb-1">Celular</strong>
                                    <span>+55 41 8901-7474</span>
                                </li>
                                <li className="mb-3">
                                    <strong className="d-block mb-1">Email</strong>
                                    <span>mano.oelasz@gmail.com</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        <br/><br/><br/><br/>
        <Footer/>

        <script src="../../forms/sendEmail.js"></script>
       </>
    )
}

export default Contact;