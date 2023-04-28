import Widget from "react-focustar";

import img1 from "../assets/hero/desk.png";
import img2 from "../assets/hero/desk.png";

export default function Features() {
  return (
    <section className="features">
      <div className="container">
        <ul className="features">
          <li>
            <div className="icon engage">&nbsp;</div>
            <p>
              <b>Engage your visitors</b>
            </p>
            <p className="caption">
              Convey information information in a fun, interactive, and easy
              way. Your visitors will love it.
            </p>
          </li>

          <li>
            <div className="icon detail">&nbsp;</div>
            <p>
              <b>Highlight the details</b>
            </p>
            <p className="caption">
              Use our placeable dots and legends to highlight important details
              and give more context.
            </p>
          </li>

          <li>
            <div className="icon quick">&nbsp;</div>
            <p>
              <b>Quick and easy</b>
            </p>
            <p className="caption">
              Ready to deploy in two minutes. Upload the image, select points of
              focus, and write the caption.
            </p>
          </li>

          <li>
            <div className="icon responsive">&nbsp;</div>
            <p>
              <b>Fully responsive</b>
            </p>
            <p className="caption">
              Are your visitors on mobile too? Not to worry, our widget is full
              responsive!
            </p>
          </li>
        </ul>

        <div className="banner">
          <p>
            <b>Also available: compare images like never before</b>
          </p>
          <p className="caption">
            Easily compare images, all while keeping the easy to use focus
            points.
          </p>

          <Widget
          images={{
            old: img1,
            new: img2,
          }}
          dots={{
            old: [
              { x: 10, y: 10 },
              { x: 100, y: 90 },
              { x: 400, y: 390 },
            ],
            new: [
              { x: 150, y: 50 },
              { x: 200, y: 80 },
            ],
          }}
          legend={[
            "Highlight relevant details",
            "Even between two different images",
            "With our comparative component",
          ]}
        />
        </div>
      </div>
    </section>
  );
}
