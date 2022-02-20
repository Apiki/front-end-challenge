import "./style.css";
import aliAd from "../../../assets/aliAd.png";
import englishAd from "../../../assets/englishAd.png";
import nvidiaAd from "../../../assets/nvidiaAd.png";
import realityAd from "../../../assets/realityAd.png";
import soubAd from "../../../assets/soubAd.png";
import spotifyAd from "../../../assets/spotifyAd.png";
import whatsapp from "../../../assets/whatsapp.png";
import twitter from "../../../assets/twitter.png";
import linkedin from "../../../assets/linkedin.png";
import facebook from "../../../assets/facebook.png";
import telegram from "../../../assets/telegram.png";

function AdCards() {
  return (
    <>
      <div>
        <h1>Ofertas Exclusivas!</h1>
        <section class="container grid grid-template-columns">
          <div class="item">
            <img src={aliAd} alt="Aliexpress Ad" />
            <p>AliExpress Compre Fácil</p>
          </div>
          <div class="item">
            <img src={englishAd} alt="English Ad" />
            <p>Aprenda Inglês Online</p>
          </div>
          <div class="item">
            <img src={nvidiaAd} alt="Nvidia Ad" />
            <p>Acelere sua criatividade</p>
          </div>
          <div class="item">
            <img src={soubAd} alt="Soub! Ad" />
            <p>Melhores Preços</p>
          </div>
          <div class="item">
            <img src={spotifyAd} alt="Spotify Ad" />
            <p>Encontre Sua Música</p>
          </div>
          <div class="item">
            <img src={realityAd} alt="Reality Ad" />
            <p>Realidade Violada</p>
          </div>
        </section>
      </div>

      <div>
        <h1>Compartilhe</h1>
        <section class="grid">
          <div class="item">
            <img src={whatsapp} alt="Whatsapp icon" />
          </div>
          <div class="item">
            <img src={twitter} alt="Twitter icon" />
          </div>
          <div class="item">
            <img src={linkedin} alt="Linkedin icon" />
          </div>
          <div class="item">
            <img src={facebook} alt="Facebook icon" />
          </div>
          <div class="item">
            <img src={telegram} alt="Telegram icon" />
          </div>
        </section>
      </div>
    </>
  );
}

export default AdCards;
