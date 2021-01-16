import React from 'react';

import Header from './components/header.component';
import Navbar from './components/navbar.component';
import ChatPanel from './components/chat-panel/chat-panel.component';
import ChatBox from './components/chat-box/chat-box.component';
import ChatProfile from './components/chat-profile/chat-profile.component';
import Footer from './components/footer.component';
import Loading from './components/loading.component';
import Guide from './components/guide.component';
import Alerts from './components/alerts.component';
import Forms from './components/forms.component';
import Dropdowns from './components/dropdowns.component';

class App extends React.Component {
    render() {
        return (
            <div className="app">
                <div className="container">
                    <Header />
                    <Navbar />

                    {/* <!-- Main --> */}
                    <main className="main">
                        <ChatPanel />
                        <ChatBox />
                        <ChatProfile />
                    </main>
                    {/* <!-- /Main --> */}

                    <Footer />
                </div>
                {/* <!-- /Container --> */}
                <Loading />
                <Guide />
                <Alerts />
                <Forms />
                <Dropdowns />
            </div>
        );
    }
}

export default App;
