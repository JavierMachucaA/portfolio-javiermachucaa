import Sidebar from "../sidebar/Sidebar";
import Main from "../main/Main";
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