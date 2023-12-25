import React from 'react';

export default function footer() {
    return (
        <div>
            <section className='container py-5'>
                <div className='row'>
                    <div className='col-lg-2 col-sm-12'>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item"><h5>Top Products</h5></li>
                            <li className="list-group-item">Manage Website</li>
                            <li className="list-group-item">Manage Reputation</li>
                            <li className="list-group-item">Power Tools</li>
                            <li className="list-group-item">Marketing Service</li>
                        </ul>
                    </div>
                    <div className='col-lg-2 col-sm-12'>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item"><h5>Quick Links</h5></li>
                            <li className="list-group-item">Jobs</li>
                            <li className="list-group-item">Brand Assets</li>
                            <li className="list-group-item">Investor Relations</li>
                            <li className="list-group-item">Terms of Service</li>
                        </ul>
                    </div>
                    <div className='col-lg-2 col-sm-12'>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item"><h5>Features</h5></li>
                            <li className="list-group-item">Jobs</li>
                            <li className="list-group-item">Brand Assets</li>
                            <li className="list-group-item">Investor Relations</li>
                            <li className="list-group-item">Terms of Service</li>
                        </ul>
                    </div>
                    <div className='col-lg-2 col-sm-12'>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item"><h5>Resources</h5></li>
                            <li className="list-group-item">Guides</li>
                            <li className="list-group-item">Research</li>
                            <li className="list-group-item">Experts</li>
                            <li className="list-group-item">Agencies</li>
                        </ul>
                    </div>
                    <div className='col-lg-4 col-sm-12'>
                        <h5 className='list-group-item pt-2'>Newsletter</h5>
                        <div className='py-4 form-text fw-medium' id="emailHelp">You can trust us, we only send promo offers.</div>
                        <form className="d-flex flex-row">
                            <div className="col-auto w-75">
                                <input type="password" className="form-control" placeholder="Your email address" />
                            </div>
                            <div className="col-auto">
                                <button type="submit" className="btn btn-primary mb-3">Submit</button>
                            </div>
                        </form>

                    </div>
                </div>
            </section>
        </div>
    )
}
