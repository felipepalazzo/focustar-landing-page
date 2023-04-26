import Widget from "react-focustar";

import img1 from "../assets/hero/desk.png";
import img2 from "../assets/hero/desk.png";

export default function Header() {
  return (
    <header>
      <nav>
        <div className="logo">
          <div className="icon logo"></div>
          <h3>Focustar</h3>
        </div>
      </nav>

      <div className="container">
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
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            "Class aptent taciti sociosqu ad litora torquent",
            "Integer ut sem nec sem fringilla suscipit eget viverra nunc",
          ]}
        />
        <div className="buttons">
          <div className="cta secondary">Donate</div>
          <div className="cta">Add to my website</div>
        </div>
        <p className="caption">
          Currently available as a React component.{" "}
          <a href="#roadmap">More options coming soon</a>.
        </p>
      </div>

      <div className="overlap">&nbsp;</div>
    </header>
  );
}
