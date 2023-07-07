import React from "react";
import Mouse from "../components/Mouse";
import Navigation from "../components/Navigation";
import Logo from "../components/Logo";
import ContactForm from "../components/ContactForm";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Buttons from "../components/Buttons";

const Contact = () => {
  return (
    <main>
      <Mouse />
      <div className="contact">
        <Navigation />
        <Logo />
        <ContactForm />
        <div className="contact-infos">
          <div className="adress">
            <div className="content">
              <h4>adresse</h4>
              <p>12 rue Laplace</p>
              <p>75014 Paris</p>
            </div>
          </div>
          <div className="phone">
            <div className="content">
              <h4>Téléphone</h4>
              <CopyToClipboard text="0654675430" className="hover">
                <p
                  style={{ cursor: "pointer" }}
                  className="clipboard"
                  onClick={() => alert("Téléphone copié !")}
                >
                  06 54 67 54 30
                </p>
              </CopyToClipboard>
            </div>
          </div>

          <div className="email">
            <div className="content">
              <h4>Email</h4>
              <CopyToClipboard text="delanglebob38@gmail.com" className="hover">
                <p
                  style={{ cursor: "pointer" }}
                  className="clipboard"
                  onClick={() => alert("email copié !")}
                >
                  delanglebob38@gmail.com
                </p>
              </CopyToClipboard>
            </div>
          </div>
          <div className="credits">
            <p>Delangle Bob - 2022</p>
          </div>
        </div>
        <Buttons left={"/projet-4"} />
      </div>
    </main>
  );
};

export default Contact;
