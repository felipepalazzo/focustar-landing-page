export default function Header() {
    return 	<header>
    <nav>
        <div className="logo">
            <div className="icon logo"></div>
            <h3>Focustar</h3>
        </div>
    </nav>

    <div className="container">
        <div id="card-0"></div>
        <div id="card-1"></div>
        <div className="buttons">
            <div className="cta secondary">Donate</div>
            <div className="cta">Add to my website</div>
        </div>
        <p className="caption">Currently available as a React component. <a href="#roadmap">More options coming soon</a>.</p>
    </div>

    <div className="overlap">&nbsp;</div>
</header>
}