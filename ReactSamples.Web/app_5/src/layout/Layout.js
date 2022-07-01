import SideNav from "./UpperNav";
import UpperNav from "./SideNav";

//all css, font and images are loaded in the public/index.html
function Layout(props) {
    return (
        <div id="wrapper">
            <UpperNav />

            <div className="d-flex flex-column" id="content-wrapper">
                <div id="content">

                    <SideNav/>

                    { props.children }

                </div>

                <footer className="bg-white sticky-footer">
                    <div className="container my-auto">
                        <div className="text-center my-auto copyright">
                            <span>Copyright © Brand 2022</span>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
}

export default Layout;
