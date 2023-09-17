import Widget from "react-focustar";

import img1 from "../assets/hero/desk.png";
import img2 from "../assets/hero/desk.png";

export default function Features() {
  return (
    <section className="pricing">
      <div className="container">

        <div className="banner">
          <p>
            <b>Features and pricing</b>
          </p>
          <p className="caption">
            Unlock all features with a one-time purchase
          </p>

          <div class="cards">
            <ul>
              <li>
                <p>Free</p>
                <p>Basic</p>
              </li>
              <li>
                <p>Image markers</p>
                <p>Up to 2</p>
              </li>
              <li>
                <p>Compare images</p>
                <div className="icon feature-no">&nbsp;</div>
              </li>
              <li>
                <p>Watermark free</p>
                <div className="icon feature-no">&nbsp;</div>
              </li>
              <li>
                <a href="#TODO" class="cta buttons disabled secondary">Coming soon</a>
              </li>
            </ul>

            <ul>
              <li>
                <p>$3</p>
                <p>Premium</p>
              </li>
              <li>
                <p>Image markers</p>
                <p>Up to 8</p>
              </li>
              <li>
                <p>Compare images</p>
                <div className="icon feature-yes">&nbsp;</div>
              </li>
              <li>
                <p>Watermark free</p>
                <div className="icon feature-yes">&nbsp;</div>
              </li>
              <li>
                <a href="#TODO" class="cta buttons disabled primary">Coming soon</a>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
