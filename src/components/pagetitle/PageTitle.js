import React from 'react'
import { Link } from 'react-router-dom'

const PageTitle = (props) => {
    return (
        <section className="banner-section mt-110 rmt-70">
            <div className="container">
                <div className="banner-inner">
                    <div className="page-title">
                        <h2>{props.pageTitle}</h2>
                        <span>{props.pagesub}</span>
                    </div>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">{props.pagesub}</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </section>
    )
}

export default PageTitle;