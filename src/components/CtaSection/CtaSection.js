import React from 'react'

const CtaSection = (props) => {

    const SubmitHandler = (e) => {
        e.preventDefault()
    }

    return (
        <section className="call-action">
            <div className="container">
                <div className="call-action-inner">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="section-title text-white rmb-35">
                            <h6>get quote</h6>
                            <h2>call for action</h2>
                        </div>
                        </div>
                        <div className="col-lg-6">
                            <form onSubmit={SubmitHandler} className="subscribe">
                                <input type="email" placeholder="enter your mail" required/>
                                <button type="submit" className="theme-btn style-two">subscribe</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CtaSection;