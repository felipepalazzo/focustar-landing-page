import Widget from "react-focustar";

import img1 from "../assets/hero/desk.png";
import img2 from "../assets/hero/desk.png";

export default function Header() {
  return (
    <header>
      <nav>
        <div className="logo">
          <div className="icon logo"></div>
          <h3>Picnote</h3>
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
              { x: "33%", y: "20%" },
              { x: "46%", y: "62%" },
              { x: "80%", y: "56%" },
            ],
            new: [
              { x: "10%", y: "10%" },
              { x: "10%", y: "10%" },
              { x: "10%", y: "10%" },
            ],
          }}
          legend={[
            "Highlight any detail",
            "In any image",
            "In under 2 minutes",
          ]}
        />
        <div className="buttons">
          <a href="https://github.com/felipepalazzo/react-focustar" target="_blank" className="cta disabled">Coming soon</a>
        </div>
        <p className="caption">
          Available for Wordpress, other platforms coming later
        </p>
      </div>

      <div className="overlap">&nbsp;</div>
    </header>
  );
}
