import chair from "../../../media/chair.jpg";
import "./About.css";
export default function About() {
  document.title="AlokMeds | About"
  return (
    <div className="about__section">
      <div className="about__container">
        <div className="about__content-section">
          <div className="about__title">
            <h1>Dr Alok Dubey</h1>
          </div>
          <div className="about__content">
            <h3>Professor of Pedodontics at Jazan University</h3>
            <h3>Worked in Rungta College as Reader</h3>
            <h3>Actively involved in important Medical Researches</h3>
          </div>
        </div>
        <div className="about__image-section">
          <img alt="" className="img-fluid" src={chair} />
        </div>
      </div>
    </div>
  );
}