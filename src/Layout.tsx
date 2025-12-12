import Sidebar from "./components/sidebar/Sidebar";
import Main from "./components/Main";
import './Layout.css'

function Layout() {
    return (
        <div className="portfolio-container">
            <aside className="sidebar">
                <Sidebar />
            </aside>
            <main className="main-content">
                <Main />
            </main>

        </div>
    )
}

export default Layout;