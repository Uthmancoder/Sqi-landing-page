import { Button } from "bootstrap"

function Glance() {
    return (
        <div>
            <div className="imagediv">
                <img className="w-100 h-100" src="https://i0.wp.com/edu.sqi.ng/wp-content/uploads/2020/02/SQI-CLASS-SHOT.jpg?fit=768%2C469&ssl=1"></img>
                <div className="changecolor row d-flex align-items-center justify-content-center px-3">
                    <div className="col-6"></div>
                    <div className="text-light text-start col-6">
                        <h3> SCICT AT A GLANCE</h3>
                        <h6>SQI College of ICT offers both <span className="text-primary">National Diploma</span> and <span className="text-primary">Professional Certificate programmes</span>.</h6>
                        <h6 className="my-4">The diploma Certificate conforms with the standard National Diploma Certificate obtained in Polytechnics while the Professional certificate is the certificate you earn after taking a professional course here at SQI.</h6>
                        <h6>You can use the Diploma certificate to seek admissions into the University through Direct Entry or for Higher National Diploma (HND). While the professional Certificate is recognized worldwide not as a degree but as a proof of having undergone professional training in the field for which the certificate is issued.</h6>
                        <button className="learnmore my-4">Learn More</button>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Glance