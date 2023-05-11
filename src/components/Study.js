import './Navbar.css'
function Study() {
    return (
        <div>
            <div className="row d-flex align-items-center justify-content-center container-fluid">
                <div className="col-6 text-start">
                    <h1 className="stdh1 fw-bolder">Study to become a global talent</h1>
                    <h6 className = "fs-5 text-start my-5">Learn new tech skills using world-class curriculum and top industry experts.</h6>
                    <button className="startnow fw-bold"> Start Now </button>
                </div>
                <div className="col-6">
                    <img className="img-fluid w-100 h-100 boy" src="https://i0.wp.com/edu.sqi.ng/wp-content/uploads/2023/03/sqimodel.png?w=578&ssl=1" ></img>
                </div>
            </div>
        </div>
    )
}
export default Study;