import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';
import sImg from '../../images/apartment/apartment-plan.png'


const Plans = (props) => {
    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }

    return (
        <section className="apartment-plan text-center mt-135">
            <div className="container">
                <div className="section-title mb-50">
                    <h2>Apartment <span className="thin">Plans</span></h2>
                    <p>At vero eos et accusamus et iusto odio</p>
                </div>
                <div className="apartment-tab">
                    <ul className="nav nav-tabs justify-content-center mb-65" role="tablist">
                        <Nav tabs>
                            <NavItem>
                                <NavLink
                                    className={classnames({ active: activeTab === '1' })}
                                    onClick={() => { toggle('1'); }}
                                >
                                    Apartment
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    className={classnames({ active: activeTab === '2' })}
                                    onClick={() => { toggle('2'); }}
                                >

                                    Simplex
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    className={classnames({ active: activeTab === '3' })}
                                    onClick={() => { toggle('3'); }}
                                >

                                    Duplex
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    className={classnames({ active: activeTab === '4' })}
                                    onClick={() => { toggle('4'); }}
                                >

                                    Double Height
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </ul>
                    <TabContent activeTab={activeTab}>
                        <TabPane tabId="1">
                            <h3>Apartment Plan</h3>
                            <img src={sImg} alt="apartment plan" />
                            <div className="row text-left justify-content-center mt-40">
                                <div className="col-md-3">
                                    <ul className="apertment-list mr-75 rmr-0">
                                        <li>Floor <span>4</span></li>
                                        <li>Rooms <span>4</span></li>
                                        <li>Area m2 <span>9 10</span></li>
                                        <li>Parking <span>4</span></li>
                                    </ul>
                                </div>
                                <div className="col-md-5">
                                    <div className="amertment-content">
                                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur.</p>
                                        <p>quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur.</p>
                                    </div>
                                </div>
                            </div>
                        </TabPane>
                        <TabPane tabId="2">
                            <h3>Simplex Plan</h3>
                            <img src={sImg} alt="apartment plan" />
                            <div className="row text-left justify-content-center mt-40">
                                <div className="col-md-3">
                                    <ul className="apertment-list mr-75 rmr-0">
                                        <li>Floor <span>4</span></li>
                                        <li>Rooms <span>4</span></li>
                                        <li>Area m2 <span>9 10</span></li>
                                        <li>Parking <span>4</span></li>
                                    </ul>
                                </div>
                                <div className="col-md-5">
                                    <div className="amertment-content">
                                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur.</p>
                                        <p>quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur.</p>
                                    </div>
                                </div>
                            </div>
                        </TabPane>
                        <TabPane tabId="3">
                            <h3>Duplex Plan</h3>
                            <img src={sImg} alt="apartment plan" />
                            <div className="row text-left justify-content-center mt-40">
                                <div className="col-md-3">
                                    <ul className="apertment-list mr-75 rmr-0">
                                        <li>Floor <span>4</span></li>
                                        <li>Rooms <span>4</span></li>
                                        <li>Area m2 <span>9 10</span></li>
                                        <li>Parking <span>4</span></li>
                                    </ul>
                                </div>
                                <div className="col-md-5">
                                    <div className="amertment-content">
                                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur.</p>
                                        <p>quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur.</p>
                                    </div>
                                </div>
                            </div>
                        </TabPane>
                        <TabPane tabId="4">
                            <h3>Double Height Plan</h3>
                            <img src={sImg} alt="apartment plan" />
                            <div className="row text-left justify-content-center mt-40">
                                <div className="col-md-3">
                                    <ul className="apertment-list mr-75 rmr-0">
                                        <li>Floor <span>4</span></li>
                                        <li>Rooms <span>4</span></li>
                                        <li>Area m2 <span>9 10</span></li>
                                        <li>Parking <span>4</span></li>
                                    </ul>
                                </div>
                                <div className="col-md-5">
                                    <div className="amertment-content">
                                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur.</p>
                                        <p>quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur.</p>
                                    </div>
                                </div>
                            </div>
                        </TabPane>
                    </TabContent>
                </div>
            </div>
        </section>
    );
}

export default Plans;