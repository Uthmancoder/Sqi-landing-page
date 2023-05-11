import './Navbar.css'
function Sqinav() {
    return (
        <div className="nav-flex">
            <img className="logo" src="https://edu.sqi.ng/wp-content/uploads/2019/01/co.jpg" alt=""></img>
            <div className="drops">
                <div className='sqiabt'>
                    <p className="about mx-3 fw-bold ">About</p>
                    <div className='aboutdrop  bg-light'>
                        <div className='shadow py-4 px-3  aboutsqi'>
                            <h6>Our Story</h6>
                            <h6 className="my-2">Our Team</h6>
                        </div>
                    </div>
                </div>
                <div className='sqiprog'>
                    <p className="about mx-3 fw-bold ">Programmes</p>
                    <div className='aboutdrop'>
                        <div className='shadow py-3 px-3  text-center programmes bg-light'>
                            <h6>National Innovation Diploma</h6>
                            <h6 className='my-3'>Professional Diploma Programme</h6>
                            <h6>Executive Professional</h6>
                            <h6 className='my-3'>Certificate Programme</h6>
                        </div>
                    </div>
                </div>
                <div className='sqiprog'>
                <p className="about mx-3 fw-bold ">Admissions</p>
                    <div className='aboutdrop'>
                        <div className='shadow py-3 px-3 text-center programmes  bg-light'>
                            <h6 className=''>Apply for a programme</h6>
                            <h6 className='my-3'>Mode of study</h6>
                            <h6 >Tutuion</h6>
                            <h6 className='my-3'>Frequently asked questions</h6>
                        </div>
                    </div>
                </div>
                 <div className='sqiabt'>
                  <p className="about mx-3 fw-bold ">E-Portal</p>
                    <div className='aboutdrop'>
                        <div className='shadow py-3 px-3  aboutsqi  bg-light'>
                            <h6>Student</h6>
                            <h6 className="my-2">Staff</h6>
                        </div>
                    </div>
                </div>
                
                <p className="about mx-3 fw-bold ">Sqi Scholarship</p>
                <p className="about mx-3 fw-bold ">News</p>
            </div>
        </div>
    )
};
export default Sqinav;