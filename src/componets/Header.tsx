export function Header(){
    return(
        <div className="row bg-light">
        <div className="col offset-lg-1 bg-light">
            <nav className="navbar navbar-expand-lg ">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Food market</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-link active" aria-current="page" href="#">Shop</a>
                            <a className="nav-link" href="#">Shoping cart</a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    </div>
    )
}