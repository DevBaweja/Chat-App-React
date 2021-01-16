function App() {
    return (
        <div className="app">
            <div className="container">
                {/* <!-- Header --> */}
                <header className="header"></header>
                {/* <!-- /Header --> */}

                {/* <!-- Navbar --> */}
                <nav className="navbar"></nav>
                {/* <!-- /Navbar --> */}

                {/* <!-- Main --> */}
                <main className="main">
                    {/* <!-- Chat Panel --> */}
                    <div className="chat-panel"></div>
                    {/* <!-- Chat Box --> */}
                    <div className="chat-box"></div>
                    {/* <!-- Chat Profile --> */}
                    <div className="chat-profile"></div>
                </main>
                {/* <!-- /Main --> */}

                {/* <!-- Footer --> */}
                <footer className="footer">
                    <div className="copyright">&copy; Chat Fuel. All rights reserved.</div>
                    <div className="created-by">
                        <p>
                            Created by
                            <span className="developers"> Jayesh </span>
                            &#38;
                            <span className="developers"> Dev </span>
                            with
                        </p>
                        <svg
                            className="created-by--svg"
                            dangerouslySetInnerHTML={{
                                __html: '<use xlink:href="svg/sprite.svg#icon-heart"></use>',
                            }}
                        ></svg>
                    </div>
                </footer>
                {/* <!-- /Footer --> */}
            </div>
            {/* <!-- /Container --> */}

            {/* <!-- Loading --> */}
            <div className="loading"></div>
            {/* <!-- /Loading --> */}

            {/* <!-- Guide --> */}
            <div className="guide"></div>
            {/* <!-- /Guide --> */}

            {/* <!-- Alerts --> */}
            <div className="alerts"></div>
            {/* <!-- /Alerts --> */}

            {/* <!-- Forms --> */}
            <div className="forms"></div>
            {/* <!-- /Forms --> */}

            {/* <!-- Dropdowns --> */}
            <div className="dropdowns"></div>
            {/* <!-- /Dropdowns --> */}
        </div>
    );
}

export default App;
