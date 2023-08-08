import "../styles/ContactPage.css";

export default function ContactPage() {
  return (
    <div className="ContactPage">
      <div className="ContactHeader">
        <p>Contact</p>
      </div>
      <div className="ContactContent">
        <div className="contactContent">
          <div className="contactHeader">
            <p>Authors and Contributors</p>
          </div>
          <div className="contactInfo">
            <li>
              <span>Michael Neonov</span> - main contact
              <span className="linkToContact"> (two.nellon@gmail.com)</span>
            </li>
            <li>
              <span>Diok Anarbaev</span> - web developer
            </li>
          </div>
        </div>
        <div className="contactContent">
          <div className="contactHeader">
            <p>Donators</p>
          </div>
          <div className="donateInfo">
            <p>Everyone can support this project on Donate page</p>
          </div>
        </div>
      </div>
    </div>
  );
}
