import React from 'react'
import styles from "./teams.module.css";
import Image from 'next/image';
import Marquee from "react-fast-marquee";
import { Color } from 'three';
const page = () => {
    return (
        <div className={styles.teams}>
            <div className={styles.teamclouds}>
                <div className={styles.teamclouds1}>
                    <Marquee speed={10} >
                        <Image src="/cloudLeft.png" width="1000" height="1000" />
                        <Image src="/cloudLeft.png" width="1000" height="1000" />
                        <Image src="/cloudLeft.png" width="1000" height="1000" />
                    </Marquee>
                </div>
                <div className={styles.teamclouds2}>
                    <Marquee direction="right" speed={30} >
                        <Image src="/cloudRight.png" width="1000" height="1000" />
                        <Image src="/cloudRight.png" width="1000" height="1000" />
                        <Image src="/cloudRight.png" width="1000" height="1000" />
                    </Marquee>
                </div>
                <div className={styles.heading}>Team</div>
                <div className={styles.topsubheading}>“Unite for change, ignite hope, and
                    let people's voices shape our journey.“</div>
            </div>


            <section className={styles.section}>
                <h1 style={{ color: '#239E6D' }}>PUBLIC RELATIONS AND BRANDING </h1>
                <p className={styles.para}>The Public Relations and Branding Team is tasked with managing outreach and communication. They connect with colleges, media outlets, and external organizations to maximize participation and publicity. They also handle press releases, media coverage, and social media campaigns, while running campus ambassador programs to expand the fest’s reach.</p>
                <div className={styles.persons}>
                    <div className={styles.profilecard}>
                        <div className={styles.profilephoto}>
                            <Image
                                src="/prbframe.png"
                                width={100}
                                height={100}
                                className={styles.profileframe}
                            />
                            <img
                                src="/sudhanshu.png"
                                width={100}
                                height={100}
                                className={styles.profileface}
                            />
                        </div>
                        <div className={styles.buttons}>
                            <button className={styles.bio}>
                                <h2>Sudhanshu Raj</h2>
                                <p style={{ color: '#239E6D' }}>Public Relations Head</p>
                            </button>
                            <button className={styles.button}>
                                <Image
                                    src="/email.svg"
                                    width={100}
                                    height={100}
                                    className={styles.buttonimage}
                                />
                                <div className={styles.overlay} style={{ backgroundColor: '#239E6D' }}>
                                   <a href='mailto:sudhanshu@alcheringa.in'> <p>sudhanshu@alcheringa.in</p></a>
                                </div>
                            </button>
                            <button className={styles.button}>
                                <Image
                                    src="/phonenumber.svg"
                                    width={100}
                                    height={100}
                                    className={styles.buttonimage}
                                />
                                <div className={styles.overlay} style={{ backgroundColor: '#239E6D' }}>
                                   <a href='+91 88129 23115'> <p>+91 88129 23115                                   </p></a>
                                </div>
                            </button>
                            <button className={styles.button}>
                                <Image
                                    src="/linkdin.svg"
                                    width={100}
                                    height={100}
                                    className={styles.buttonimage}
                                />
                                <div className={styles.overlay} style={{ backgroundColor: '#239E6D' }}>
                                    <p><a href="https://www.linkedin.com/in/sudhanshu-raj-727a1a204/?originalSubdomain=in" target='_blank'> Visit LinkedIn</a></p>
                                </div>
                            </button>
                        </div>

                    </div>


                    <div className={styles.profilecard}>
                        <div className={styles.profilephoto}>
                            <Image
                                src="/prbframe.png"
                                width={100}
                                height={100}
                                className={styles.profileframe}
                            />
                            <img
                                src="/sidharth.png"
                                width={100}
                                height={100}
                                className={styles.profileface}
                            />
                        </div>
                        <div className={styles.buttons}>
                            <button className={styles.bio}>
                                <h2>Siddharth Shukla</h2>
                                <p style={{ color: '#239E6D' }}>Public Relations Head</p>
                            </button>
                            <button className={styles.button}>
                                <Image
                                    src="/email.svg"
                                    width={100}
                                    height={100}
                                    className={styles.buttonimage}
                                />
                                <div className={styles.overlay} style={{ backgroundColor: '#239E6D' }}>
                                   <a href='mailto:siddharth@alcheringa.in'> <p>siddharth@alcheringa.in</p></a>
                                </div>
                            </button>
                            <button className={styles.button}>
                                <Image
                                    src="/phonenumber.svg"
                                    width={100}
                                    height={100}
                                    className={styles.buttonimage}
                                />
                                <div className={styles.overlay} style={{ backgroundColor: '#239E6D' }}>
                                     <a href='tel:+91 97070 49872'><p>+91 97070 49872
                                     </p></a>
                                </div>
                            </button>
                            <button className={styles.button}>
                                <Image
                                    src="/linkdin.svg"
                                    width={100}
                                    height={100}
                                    className={styles.buttonimage}
                                />
                                <div className={styles.overlay} style={{ backgroundColor: '#239E6D' }}>
                                    <p><a href='https://www.linkedin.com/in/siddharth-shukla-876653276/?originalSubdomain=in' target='_blank'>Visit LinkedIn</a></p>
                                </div>
                            </button>
                        </div>

                    </div>

                    <div className={styles.profilecard}>
                        <div className={styles.profilephoto}>
                            <Image
                                src="/prbframe.png"
                                width={100}
                                height={100}
                                className={styles.profileframe}
                            />
                            <img
                                src="/sulabh.png"
                                width={100}
                                height={100}
                                className={styles.profileface}
                            />
                        </div>
                        <div className={styles.buttons}>
                            <button className={styles.bio}>
                                <h2>Sulabh Napit</h2>
                                <p style={{ color: '#239E6D' }}>Media & Outreach Head</p>
                            </button>
                            <button className={styles.button}>
                                <Image
                                    src="/email.svg"
                                    width={100}
                                    height={100}
                                    className={styles.buttonimage}
                                />
                                <div className={styles.overlay} style={{ backgroundColor: '#239E6D' }}>
                                   <a href='mailto:sulabh@alcheringa.in'><p>sulabh@alcheringa.in</p></a>
                                </div>
                            </button>
                            <button className={styles.button}>
                                <Image
                                    src="/phonenumber.svg"
                                    width={100}
                                    height={100}
                                    className={styles.buttonimage}
                                />
                                <div className={styles.overlay} style={{ backgroundColor: '#239E6D' }}>
                                     <a href='tel:+91 83198 55908'><p>+91 83198 55908</p> </a>
                                </div>
                            </button>
                            <button className={styles.button}>
                                <Image
                                    src="/linkdin.svg"
                                    width={100}
                                    height={100}
                                    className={styles.buttonimage}
                                />
                                <div className={styles.overlay} style={{ backgroundColor: '#239E6D' }}>
                                    <p><a href='https://www.linkedin.com/in/sulabh-napit-b415a1214/?originalSubdomain=in' target='_blank'>Visit LinkedIn</a></p>
                                </div>
                            </button>
                        </div>

                    </div>
                </div>
            </section>

            <section className={styles.section}>
                <h1 style={{ color: '#FB754C' }}>CORPORATE RELATIONS AND MARKETING </h1>
                <p className={styles.para}>The Corporate Relations and Marketing Team takes care of acquiring sponsorships and partnerships with companies. They play a crucial role in securing the financial and resource backing needed for the festival. Additionally, they promote Alcheringa through well-planned marketing strategies, ensuring it attracts participants and visitors from across the country.</p>
                <div className={styles.persons}>
                    <div className={styles.profilecard}>
                        <div className={styles.profilephoto}>
                            <Image
                                src="/crmframe.png"
                                width={100}
                                height={100}
                                className={styles.profileframe}
                            />
                            <img
                                src="/prakrati.png"
                                width={100}
                                height={100}
                                className={styles.profileface}
                            />
                        </div>
                        <div className={styles.buttons}>
                            <button className={styles.bio}>
                                <h2>Prakrati Sahu</h2>
                                <p style={{ color: '#FB754C' }}>CRM Head</p>

                            </button>
                            <button className={styles.button}>
                                <Image
                                    src="/email.svg"
                                    width={100}
                                    height={100}
                                    className={styles.buttonimage}
                                />
                                <div className={styles.overlay} style={{ backgroundColor: '#FB754C' }}>
                                   <a href='mailto:prakrati@alcheringa.in'><p>prakrati@alcheringa.in</p></a>
                                </div>
                            </button>
                            <button className={styles.button}>
                                <Image
                                    src="/phonenumber.svg"
                                    width={100}
                                    height={100}
                                    className={styles.buttonimage}
                                />
                                <div className={styles.overlay} style={{ backgroundColor: '#FB754C' }}>
                                    <a href='tel:+91 80837 21976'><p>+91 80837 21976</p> </a>
                                </div>
                            </button >
                            <button className={styles.button}>
                                <Image
                                    src="/linkdin.svg"
                                    width={100}
                                    height={100}
                                    className={styles.buttonimage}
                                />
                                <div className={styles.overlay} style={{ backgroundColor: '#FB754C' }}>
                                    <p><a href='https://www.linkedin.com/in/prakrati-sahu-3748b127a/?originalSubdomain=in' target='_blank'>Visit LinkedIn</a></p>
                                </div>
                            </button>
                        </div>

                    </div>


                    <div className={styles.profilecard}>
                        <div className={styles.profilephoto}>
                            <Image
                                src="/crmframe.png"
                                width={100}
                                height={100}
                                className={styles.profileframe}
                            />
                            <img
                                src="/vivek.png"
                                width={100}
                                height={100}
                                className={styles.profileface}
                            />
                        </div>
                        <div className={styles.buttons}>
                            <button className={styles.bio}>
                                <h2>Prajapati VivekM</h2>
                                <p style={{ color: '#FB754C' }}>CRM Head</p>

                            </button>
                            <button className={styles.button}>
                                <Image
                                    src="/email.svg"
                                    width={100}
                                    height={100}
                                    className={styles.buttonimage}
                                />
                                <div className={styles.overlay} style={{ backgroundColor: '#FB754C' }}>
                                   <a href='mailto:vivek@alcheringa.in'><p>vivek@alcheringa.in</p></a>
                                </div>
                            </button>
                            <button className={styles.button}>
                                <Image
                                    src="/phonenumber.svg"
                                    width={100}
                                    height={100}
                                    className={styles.buttonimage}
                                />
                                <div className={styles.overlay} style={{ backgroundColor: '#FB754C' }}>
                                     <a href='tel:+91 70169 90353'> <p>+91 70169 90353</p> </a>
                                </div>
                            </button >
                            <button className={styles.button}>
                                <Image
                                    src="/linkdin.svg"
                                    width={100}
                                    height={100}
                                    className={styles.buttonimage}
                                />
                                <div className={styles.overlay} style={{ backgroundColor: '#FB754C' }}>
                                    <p><a href='https://www.linkedin.com/in/vi-pr/?originalSubdomain=in' target='_blank'>Visit LinkedIn</a></p>
                                </div>
                            </button>
                        </div>

                    </div>


                    <div className={styles.profilecard}>
                        <div className={styles.profilephoto}>
                            <Image
                                src="/crmframe.png"
                                width={100}
                                height={100}
                                className={styles.profileframe}
                            />
                            <img
                                src="/kishor.png"
                                width={100}
                                height={100}
                                className={styles.profileface}
                            />
                        </div>
                        <div className={styles.buttons}>
                            <button className={styles.bio}>
                                <h2>Kishor Kunal</h2>
                                <p style={{ color: '#FB754C' }}>CRM Head</p>

                            </button>
                            <button className={styles.button}>
                                <Image
                                    src="/email.svg"
                                    width={100}
                                    height={100}
                                    className={styles.buttonimage}
                                />
                                <div className={styles.overlay} style={{ backgroundColor: '#FB754C' }}>
                                   <a href='mailto:kunal.k@alcheringa.in'><p>kunal.k@alcheringa.in</p></a>
                                </div>
                            </button>
                            <button className={styles.button}>
                                <Image
                                    src="/phonenumber.svg"
                                    width={100}
                                    height={100}
                                    className={styles.buttonimage}
                                />
                                <div className={styles.overlay} style={{ backgroundColor: '#FB754C' }}>
                                   <a href='tel:+91 62041 80280'>  <p>+91 62041 80280</p> </a>
                                </div>
                            </button >
                            <button className={styles.button}>
                                <Image
                                    src="/linkdin.svg"
                                    width={100}
                                    height={100}
                                    className={styles.buttonimage}
                                />
                                <div className={styles.overlay} style={{ backgroundColor: '#FB754C' }}>
                                    <p><a href='https://www.linkedin.com/in/kishor-kunal-0478b5260/?originalSubdomain=in' target='_blank'>Visit LinkedIn</a></p>
                                </div>
                            </button>
                        </div>

                    </div>

                    <div className={styles.profilecard}>
                        <div className={styles.profilephoto}>
                            <Image
                                src="/crmframe.png"
                                width={100}
                                height={100}
                                className={styles.profileframe}
                            />
                            <img
                                src="/jayes.png"
                                width={100}
                                height={100}
                                className={styles.profileface}
                            />
                        </div>
                        <div className={styles.buttons}>
                            <button className={styles.bio}>
                                <h2>Jayes Ranjan</h2>
                                <p style={{ color: '#FB754C' }}>CRM Head</p>

                            </button>
                            <button className={styles.button}>
                                <Image
                                    src="/email.svg"
                                    width={100}
                                    height={100}
                                    className={styles.buttonimage}
                                />
                                <div className={styles.overlay} style={{ backgroundColor: '#FB754C' }}>
                                   <a href='mailto:Jayes@alcheringa.in'><p>Jayes@alcheringa.in</p></a>
                                </div>
                            </button>
                            <button className={styles.button}>
                                <Image
                                    src="/phonenumber.svg"
                                    width={100}
                                    height={100}
                                    className={styles.buttonimage}
                                />
                                <div className={styles.overlay} style={{ backgroundColor: '#FB754C' }}>
                                    <a href='tel:+91 80023 57771'> <p>+91 80023 57771</p> </a>
                                </div>
                            </button >
                            <button className={styles.button}>
                                <Image
                                    src="/linkdin.svg"
                                    width={100}
                                    height={100}
                                    className={styles.buttonimage}
                                />
                                <div className={styles.overlay} style={{ backgroundColor: '#FB754C' }}>
                                    <p><a href='https://www.linkedin.com/in/jayes-ranjan-43711b259/?trk=public_profile_browsemap&originalSubdomain=in' target='_blank  '>Visit LinkedIn</a></p>
                                </div>
                            </button>
                        </div>

                    </div>
                </div>
            </section>


            <section className={styles.section}>
                <h1 style={{ color: '#D73849' }}>   Events </h1>
                <p className={styles.para}>The Events Team is responsible for planning and managing all the cultural, competitive, and informal events of Alcheringa. They ensure that everything runs smoothly, from scheduling to venue arrangements, while also coordinating with participants, judges, and performers. They handle on-ground logistics such as stage setup, sound systems, and lighting to deliver seamless event execution.</p>
                <div className={styles.persons}>
                    <div className={styles.profilecard}>
                        <div className={styles.profilephoto}>
                            <Image
                                src="/eventsframe.png"
                                width={100}
                                height={100}
                                className={styles.profileframe}
                            />
                            <img
                                src="/abhijeeth.png"
                                width={100}
                                height={100}
                                className={styles.profileface}
                            />
                        </div>
                        <div className={styles.buttons}>
                            <button className={styles.bio}>
                                <h2>Abhijeet Ghosh</h2>
                                <p style={{ color: '#D73849' }}>Events Management Head</p>
                            </button>
                            <button className={styles.button}>
                                <Image
                                    src="/email.svg"
                                    width={100}
                                    height={100}
                                    className={styles.buttonimage}
                                />
                                <div className={styles.overlay} style={{ backgroundColor: '#D73849' }}>
                                   <a href='mailto:abhijeet@alcheringa.in'><p>abhijeet@alcheringa.in</p></a>
                                </div>
                            </button>
                            <button className={styles.button}>
                                <Image
                                    src="/phonenumber.svg"
                                    width={100}
                                    height={100}
                                    className={styles.buttonimage}
                                />
                                <div className={styles.overlay} style={{ backgroundColor: '#D73849' }}>
                                   <a href='tel:+91 93367 29959'>  <p>+91 93367 29959</p> </a>
                                </div>
                            </button>
                            <button className={styles.button}>
                                <Image
                                    src="/linkdin.svg"
                                    width={100}
                                    height={100}
                                    className={styles.buttonimage}
                                />
                                <div className={styles.overlay} style={{ backgroundColor: '#D73849' }}>
                                    <p><a href='https://www.linkedin.com/in/abhijeet98/?trk=public_profile_browsemap&originalSubdomain=in' target='_blank'>Visit LinkedIn</a></p>
                                </div>
                            </button>
                        </div>

                    </div>


                    <div className={styles.profilecard}>
                        <div className={styles.profilephoto}>
                            <Image
                                src="/eventsframe.png"
                                width={100}
                                height={100}
                                className={styles.profileframe}
                            />
                            <img
                                src="/krishna.png"
                                width={100}
                                height={100}
                                className={styles.profileface}
                            />
                        </div>
                        <div className={styles.buttons}>
                            <button className={styles.bio}>
                                <h2>Krishna Agarwal</h2>
                                <p style={{ color: '#D73849' }}>Pronites Head</p>
                            </button>
                            <button className={styles.button}>
                                <Image
                                    src="/email.svg"
                                    width={100}
                                    height={100}
                                    className={styles.buttonimage}
                                />
                                <div className={styles.overlay} style={{ backgroundColor: '#D73849' }}>
                                   <a href='mailto:krishna@alcheringa.in'><p>krishna@alcheringa.in</p></a>
                                </div>
                            </button>
                            <button className={styles.button}>
                                <Image
                                    src="/phonenumber.svg"
                                    width={100}
                                    height={100}
                                    className={styles.buttonimage}
                                />
                                <div className={styles.overlay} style={{ backgroundColor: '#D73849' }}>
                                   <a href='tel:+91 70496 06444'>  <p>+91 70496 06444</p></a>
                                </div>
                            </button>
                            <button className={styles.button}>
                                <Image
                                    src="/linkdin.svg"
                                    width={100}
                                    height={100}
                                    className={styles.buttonimage}
                                />
                                <div className={styles.overlay} style={{ backgroundColor: '#D73849' }}>
                                    <p><a href='https://www.linkedin.com/in/krishna-agrawal-130b05250/?originalSubdomain=in' target='_blank'>Visit LinkedIn</a></p>
                                </div>
                            </button>
                        </div>

                    </div>

                    <div className={styles.profilecard}>
                        <div className={styles.profilephoto}>
                            <Image
                                src="/eventsframe.png"
                                width={100}
                                height={100}
                                className={styles.profileframe}
                            />
                            <img
                                src="/pramit.png"
                                width={100}
                                height={100}
                                className={styles.profileface}
                            />
                        </div>
                        <div className={styles.buttons}>
                            <button className={styles.bio}>
                                <h2>Pramit Some</h2>
                                <p style={{ color: '#D73849' }}>Campaigns Head</p>
                            </button>
                            <button className={styles.button}>
                                <Image
                                    src="/email.svg"
                                    width={100}
                                    height={100}
                                    className={styles.buttonimage}
                                />
                                <div className={styles.overlay} style={{ backgroundColor: '#D73849' }}>
                                   <a href='mailto:Pramit@alcheringa.in'><p>Pramit@alcheringa.in</p></a>
                                </div>
                            </button>
                            <button className={styles.button}>
                                <Image
                                    src="/phonenumber.svg"
                                    width={100}
                                    height={100}
                                    className={styles.buttonimage}
                                />
                                <div className={styles.overlay} style={{ backgroundColor: '#D73849' }}>
                                     <a href='tel:+91 86977 31037'> <p>+91 86977 31037</p></a>
                                </div>
                            </button>
                            <button className={styles.button}>
                                <Image
                                    src="/linkdin.svg"
                                    width={100}
                                    height={100}
                                    className={styles.buttonimage}
                                />
                                <div className={styles.overlay} style={{ backgroundColor: '#D73849' }}>
                                    <p><a href='https://www.linkedin.com/in/pramit-some-b336482ab/?originalSubdomain=in' >Visit LinkedIn</a></p>
                                </div>
                            </button>
                        </div>

                    </div>

                </div>
            </section>



            <section className={styles.section}>
                <h1 style={{ color: '#FE3989' }}>Creatives </h1>
                <p className={styles.para}>The Creatives Team is in charge of designing all the visual elements of the fest, including posters, banners, stage backdrops, and merchandise. They work to create a cohesive and visually appealing theme for the festival, ensuring the branding stands out. Collaborating closely with other teams, they also create promotional materials to grab attention and reflect the identity of Alcheringa.</p>
                <div className={styles.persons}>
                    <div className={styles.profilecard}>
                        <div className={styles.profilephoto}>
                            <Image
                                src="/creativesframe.png"
                                width={100}
                                height={100}
                                className={styles.profileframe}
                            />
                            <img
                                src="/Anmole.png"
                                width={100}
                                height={100}
                                className={styles.profileface}
                            />
                        </div>
                        <div className={styles.buttons}>
                            <button className={styles.bio}>
                                <h2>Anmol Sable</h2>
                                <p style={{ color: '#FE3989' }}>Creatives Head</p>

                            </button>
                            <button className={styles.button}>
                                <Image
                                    src="/email.svg"
                                    width={100}
                                    height={100}
                                    className={styles.buttonimage}
                                />
                                <div className={styles.overlay} style={{ backgroundColor: '#FE3989' }}>
                                   <a href='mailto:creatives@alcheringa.in'><p>creatives@alcheringa.in</p></a>
                                </div>
                            </button>
                            <button className={styles.button}>
                                <Image
                                    src="/phonenumber.svg"
                                    width={100}
                                    height={100}
                                    className={styles.buttonimage}
                                />
                                <div className={styles.overlay} style={{ backgroundColor: '#FE3989' }}>
                                    <a href='tel:+91 70210 59025'> <p>+91 70210 59025</p></a>
                                </div>
                            </button >
                            <button className={styles.button}>
                                <Image
                                    src="/linkdin.svg"
                                    width={100}
                                    height={100}
                                    className={styles.buttonimage}
                                />
                                <div className={styles.overlay} style={{ backgroundColor: '#FE3989' }}>
                                    <p><a href='https://www.linkedin.com/in/anmolsable/?originalSubdomain=in' target='_blank'>Visit LinkedIn</a></p>
                                </div>
                            </button>
                        </div>

                    </div>


                    <div className={styles.profilecard}>
                        <div className={styles.profilephoto}>
                            <Image
                                src="/creativesframe.png"
                                width={100}
                                height={100}
                                className={styles.profileframe}
                            />
                            <img
                                src="/nikitha.png"
                                width={100}
                                height={100}
                                className={styles.profileface}
                            />
                        </div>
                        <div className={styles.buttons}>
                            <button className={styles.bio}>
                                <h2>Nikita Sharma</h2>
                                <p style={{ color: '#FE3989' }}>Digital Media Head</p>

                            </button>
                            <button className={styles.button}>
                                <Image
                                    src="/email.svg"
                                    width={100}
                                    height={100}
                                    className={styles.buttonimage}
                                />
                                <div className={styles.overlay} style={{ backgroundColor: '#FE3989' }}>
                                   <a href='mailto:creatives@alcheringa.in'><p>creatives@alcheringa.in</p></a>
                                </div>
                            </button>
                            <button className={styles.button}>
                                <Image
                                    src="/phonenumber.svg"
                                    width={100}
                                    height={100}
                                    className={styles.buttonimage}
                                />
                                <div className={styles.overlay} style={{ backgroundColor: '#FE3989' }}>
                                     <a href='tel:+91 88850 59696'> <p>+91 88850 59696</p></a>
                                </div>
                            </button >
                            <button className={styles.button}>
                                <Image
                                    src="/linkdin.svg"
                                    width={100}
                                    height={100}
                                    className={styles.buttonimage}
                                />
                                <div className={styles.overlay} style={{ backgroundColor: '#FE3989' }}>
                                    <p><a href='https://www.linkedin.com/in/nikitasharma710/?originalSubdomain=in' target='_blank'>Visit LinkedIn</a></p>
                                </div>
                            </button>
                        </div>

                    </div>


                    <div className={styles.profilecard}>
                        <div className={styles.profilephoto}>
                            <Image
                                src="/creativesframe.png"
                                width={100}
                                height={100}
                                className={styles.profileframe}
                            />
                            <img
                                src="/sankeerth.png"
                                width={100}
                                height={100}
                                className={styles.profileface}
                            />
                        </div>
                        <div className={styles.buttons}>
                            <button className={styles.bio}>
                                <h2>Sai Sankeerth V</h2>
                                <p style={{ color: '#FE3989' }}>Web-Design Head</p>

                            </button>
                            <button className={styles.button}>
                                <Image
                                    src="/email.svg"
                                    width={100}
                                    height={100}
                                    className={styles.buttonimage}
                                />
                                <div className={styles.overlay} style={{ backgroundColor: '#FE3989' }}>
                                   <a href='mailto:creatives@alcheringa.in'><p>creatives@alcheringa.in</p></a>
                                </div>
                            </button>
                            <button className={styles.button}>
                                <Image
                                    src="/phonenumber.svg"
                                    width={100}
                                    height={100}
                                    className={styles.buttonimage}
                                />
                                <div className={styles.overlay} style={{ backgroundColor: '#FE3989' }}>
                                  <a href='tel:+91 70210 59025'>   <p>+91 70210 59025</p> </a>
                                </div>
                            </button >
                            <button className={styles.button}>
                                <Image
                                    src="/linkdin.svg"
                                    width={100}
                                    height={100}
                                    className={styles.buttonimage}
                                />
                                <div className={styles.overlay} style={{ backgroundColor: '#FE3989' }}>
                                    <p><a href='https://www.linkedin.com/in/sai-sankeerth-veggalam/?trk=people_directory&originalSubdomain=in' target='_blank'>Visit LinkedIn</a></p>
                                </div>
                            </button>
                        </div>

                    </div>
                </div>
            </section>

            <section className={styles.section}>
                <h1 style={{ color: '#FE3989' }}>IITG MUN </h1>
                <p className={styles.para}>The IIT MUN (Model United Nations) team at Alcheringa organizes debates and discussions simulating the United Nations. Delegates represent different countries, tackling global issues like climate change, international security, and human rights. The event promotes diplomacy, public speaking, and problem-solving among participants.</p>
                <div className={styles.persons}>
                    <div className={styles.profilecard}>
                        <div className={styles.profilephoto}>
                            <Image
                                src="/creativesframe.png"
                                width={100}
                                height={100}
                                className={styles.profileframe}
                            />
                            <img
                                src="/yoshita.png"
                                width={100}
                                height={100}
                                className={styles.profileface}
                            />
                        </div>
                        <div className={styles.buttons}>
                            <button className={styles.bio}>
                                <h2>Yoshita Banerjee</h2>
                                <p style={{ color: '#FE3989' }}>MUN Secretary General</p>

                            </button>
                            <button className={styles.button}>
                                <Image
                                    src="/email.svg"
                                    width={100}
                                    height={100}
                                    className={styles.buttonimage}
                                />
                                <div className={styles.overlay} style={{ backgroundColor: '#FE3989' }}>
                                   <a href='mailto:iitgmun@alcheringa.in'><p>iitgmun@alcheringa.in</p></a>
                                </div>
                            </button>
                            <button className={styles.button}>
                                <Image
                                    src="/phonenumber.svg"
                                    width={100}
                                    height={100}
                                    className={styles.buttonimage}
                                />
                                <div className={styles.overlay} style={{ backgroundColor: '#FE3989' }}>
                                      <a href='tel:+91 80174 71933'> <p>+91 80174 71933</p>  </a>
                                </div>
                            </button >
                            <button className={styles.button}>
                                <Image
                                    src="/linkdin.svg"
                                    width={100}
                                    height={100}
                                    className={styles.buttonimage}
                                />
                                <div className={styles.overlay} style={{ backgroundColor: '#FE3989' }}>
                                    <p><a href='https://www.linkedin.com/in/yoshita-banerjee-baaa6724b/?originalSubdomain=in' target='_blank'>Visit LinkedIn</a></p>
                                </div>
                            </button>
                        </div>

                    </div>


                    <div className={styles.profilecard}>
                        <div className={styles.profilephoto}>
                            <Image
                                src="/creativesframe.png"
                                width={100}
                                height={100}
                                className={styles.profileframe}
                            />
                            <img
                                src="/divya.png"
                                width={100}
                                height={100}
                                className={styles.profileface}
                            />
                        </div>
                        <div className={styles.buttons}>
                            <button className={styles.bio}>
                                <h2>Divya Mate </h2>
                                <p style={{ color: '#FE3989' }}>MUN Director General</p>

                            </button>
                            <button className={styles.button}>
                                <Image
                                    src="/email.svg"
                                    width={100}
                                    height={100}
                                    className={styles.buttonimage}
                                />
                                <div className={styles.overlay} style={{ backgroundColor: '#FE3989' }}>
                                   <a href='mailto:iitgmun@alcheringa.in'><p>iitgmun@alcheringa.in</p></a>
                                </div>
                            </button>
                            <button className={styles.button}>
                                <Image
                                    src="/phonenumber.svg"
                                    width={100}
                                    height={100}
                                    className={styles.buttonimage}
                                />
                                <div className={styles.overlay} style={{ backgroundColor: '#FE3989' }}>
                                    <a href='tel:+91 95791 45131'>  <p>+91 95791 45131</p> </a>
                                </div>
                            </button >
                            <button className={styles.button}>
                                <Image
                                    src="/linkdin.svg"
                                    width={100}
                                    height={100}
                                    className={styles.buttonimage}
                                />
                                <div className={styles.overlay} style={{ backgroundColor: '#FE3989' }}>
                                <p><a href='https://www.linkedin.com/in/divya-mate-1394152b5/?originalSubdomain=in' target='_blank'>Visit LinkedIn</a></p>
                                </div>
                            </button>
                        </div>

                    </div>



                </div>
            </section>


            <section className={styles.section}>
                <h1 style={{ color: '#8F4BFF' }}>WEB AND APP OPERATIONS </h1>
                <p className={styles.para}>The App and Web Operations Team focuses on developing and maintaining Alcheringa’s digital platforms, including the app and website. They ensure that these platforms are user-friendly and support features like event registration, scheduling, and updates. Their role is critical in delivering a smooth digital experience and addressing any technical issues that arise.</p>
                <div className={styles.persons}>
                    <div className={styles.profilecard}>
                        <div className={styles.profilephoto}>
                            <Image
                                src="/webframe.png"
                                width={100}
                                height={100}
                                className={styles.profileframe}
                            />
                            <img
                                src="/himank.png"
                                width={100}
                                height={100}
                                className={styles.profileface}
                            />
                        </div>
                        <div className={styles.buttons}>
                            <button className={styles.bio}>
                                <h2>Himank Bohara</h2>
                                <p style={{ color: '#8F4BFF' }}> WebOps</p>

                            </button>
                            <button className={styles.button}>
                                <Image
                                    src="/email.svg"
                                    width={100}
                                    height={100}
                                    className={styles.buttonimage}
                                />
                                <div className={styles.overlay} style={{ backgroundColor: '#8F4BFF' }}>
                                   <a href='mailto:webops@alcheringa.in'><p>webops@alcheringa.in</p></a>
                                </div>
                            </button>
                            <button className={styles.button}>
                                <Image
                                    src="/phonenumber.svg"
                                    width={100}
                                    height={100}
                                    className={styles.buttonimage}
                                />
                                <div className={styles.overlay} style={{ backgroundColor: '#8F4BFF' }}>
                                    <a href='tel:+91 89557 74322'>   <p>+91 89557 74322</p> </a>
                                </div>
                            </button >
                            <button className={styles.button}>
                                <Image
                                    src="/linkdin.svg"
                                    width={100}
                                    height={100}
                                    className={styles.buttonimage}
                                />
                                <div className={styles.overlay} style={{ backgroundColor: '#8F4BFF' }}>
                                <p><a href='https://www.linkedin.com/in/himank-bohara/?originalSubdomain=in' target='_blank'>Visit LinkedIn</a></p>
                                </div>
                            </button>
                        </div>

                    </div>

                    <div className={styles.profilecard}>
                        <div className={styles.profilephoto}>
                            <Image
                                src="/webframe.png"
                                width={100}
                                height={100}
                                className={styles.profileframe}
                            />
                            <img
                                src="/shivam.png"
                                width={100}
                                height={100}
                                className={styles.profileface}
                            />
                        </div>
                        <div className={styles.buttons}>
                            <button className={styles.bio}>
                                <h2>Shivam Gupta</h2>
                                <p style={{ color: '#8F4BFF' }}> WebOps</p>

                            </button>
                            <button className={styles.button}>
                                <Image
                                    src="/email.svg"
                                    width={100}
                                    height={100}
                                    className={styles.buttonimage}
                                />
                                <div className={styles.overlay} style={{ backgroundColor: '#8F4BFF' }}>
                                   <a href='mailto:webops@alcheringa.in'><p>webops@alcheringa.in</p></a>
                                </div>
                            </button>
                            <button className={styles.button}>
                                <Image
                                    src="/phonenumber.svg"
                                    width={100}
                                    height={100}
                                    className={styles.buttonimage}
                                />
                                <div className={styles.overlay} style={{ backgroundColor: '#8F4BFF' }}>
                                   <a href='tel:+91 8085774946'>   <p>+91 8085774946</p></a>
                                </div>
                            </button >
                            <button className={styles.button}>
                                <Image
                                    src="/linkdin.svg"
                                    width={100}
                                    height={100}
                                    className={styles.buttonimage}
                                />
                                <div className={styles.overlay} style={{ backgroundColor: '#8F4BFF' }}>
                                <p><a href='https://www.linkedin.com/in/shivam-gupta9370-/?originalSubdomain=in' target='_blank'>Visit LinkedIn</a></p>
                                </div>
                            </button>
                        </div>

                    </div>

                    <div className={styles.profilecard}>
                        <div className={styles.profilephoto}>
                            <Image
                                src="/webframe.png"
                                width={100}
                                height={100}
                                className={styles.profileframe}
                            />
                            <img
                                src="/jivesh.png"
                                width={100}
                                height={100}
                                className={styles.profileface}
                            />
                        </div>
                        <div className={styles.buttons}>
                            <button className={styles.bio}>
                                <h2>Jivesh Firke</h2>
                                <p style={{ color: '#8F4BFF' }}>AppOps</p>

                            </button>
                            <button className={styles.button}>
                                <Image
                                    src="/email.svg"
                                    width={100}
                                    height={100}
                                    className={styles.buttonimage}
                                />
                                <div className={styles.overlay} style={{ backgroundColor: '#8F4BFF' }}>
                                   <a href='mailto:webops@alcheringa.in'><p>webops@alcheringa.in</p></a>
                                </div>
                            </button>
                            <button className={styles.button}>
                                <Image
                                    src="/phonenumber.svg"
                                    width={100}
                                    height={100}
                                    className={styles.buttonimage}
                                />
                                <div className={styles.overlay} style={{ backgroundColor: '#8F4BFF' }}>
                                    <a href='tel:+91 83080 77000'>     <p>+91 83080 77000</p></a>
                                </div>
                            </button >
                            <button className={styles.button}>
                                <Image
                                    src="/linkdin.svg"
                                    width={100}
                                    height={100}
                                    className={styles.buttonimage}
                                />
                                <div className={styles.overlay} style={{ backgroundColor: '#8F4BFF' }}>
                                <p><a href='https://www.linkedin.com/in/jiveshfirke/?originalSubdomain=in' target='_blank'>Visit LinkedIn</a></p>
                                </div>
                            </button>
                        </div>

                    </div>



                </div>
            </section>
            <section className={styles.section}>
                <h1 style={{ color: '#1F76FA' }}>CONVENOR AND FINANCE HEAD </h1>
                <p className={styles.para}>The Finance Head and Convenor are essential to Alcheringa’s success. The Finance Head oversees budgeting, resource allocation, and transparency in financial transactions, ensuring a balance between income and expenses. The Convenor leads all teams, aligns efforts with the fest’s goals, and serves as the link between the organizing committee and the institute administration, ensuring smooth coordination and execution. Together, they ensure the festival runs seamlessly.</p>
                <div className={styles.persons}>
                    <div className={styles.profilecard}>
                        <div className={styles.profilephoto}>
                            <Image
                                src="/convenorframe.png"
                                width={100}
                                height={100}
                                className={styles.profileframe}
                            />
                            <img
                                src="/pradiptha.png"
                                width={100}
                                height={100}
                                className={styles.profileface}
                            />
                        </div>
                        <div className={styles.buttons}>
                            <button className={styles.bio}>
                                <h2>Pradipta Hazarika</h2>
                                <p style={{ color: '#1F76FA' }}>Convenor</p>
                            </button>
                            <button className={styles.button}>
                                <Image
                                    src="/email.svg"
                                    width={100}
                                    height={100}
                                    className={styles.buttonimage}
                                />
                                <div className={styles.overlay} style={{ backgroundColor: '#1F76FA' }}>
                                   <a href='mailto:pradipta@alcheringa.in'><p>pradipta@alcheringa.in</p></a>
                                </div>
                            </button>
                            <button className={styles.button}>
                                <Image
                                    src="/phonenumber.svg"
                                    width={100}
                                    height={100}
                                    className={styles.buttonimage}
                                />
                                <div className={styles.overlay} style={{ backgroundColor: '#1F76FA' }}>
                                    <a href='tel:+91 70862 00153'>   <p>+91 70862 00153</p></a>
                                </div>
                            </button>
                            <button className={styles.button}>
                                <Image
                                    src="/linkdin.svg"
                                    width={100}
                                    height={100}
                                    className={styles.buttonimage}
                                />
                                <div className={styles.overlay} style={{ backgroundColor: '#1F76FA' }}>
                                <p><a href='https://www.linkedin.com/in/pradipta-hazarika-486aba261/?originalSubdomain=in' target='_blank'>Visit LinkedIn</a></p>
                                </div>
                            </button>
                        </div>

                    </div>


                    <div className={styles.profilecard}>
                        <div className={styles.profilephoto}>
                            <Image
                                src="/convenorframe.png"
                                width={100}
                                height={100}
                                className={styles.profileframe}
                            />
                            <img
                                src="/astitva.png"
                                width={100}
                                height={100}
                                className={styles.profileface}
                            />
                        </div>
                        <div className={styles.buttons}>
                            <button className={styles.bio}>
                                <h2>Astitva Jain</h2>
                                <p style={{ color: '#1F76FA' }}>Finance & Accounts Head</p>
                            </button>
                            <button className={styles.button}>
                                <Image
                                    src="/email.svg"
                                    width={100}
                                    height={100}
                                    className={styles.buttonimage}
                                />
                                <div className={styles.overlay} style={{ backgroundColor: '#1F76FA' }}>
                                   <a href='mailto:astitva@alcheringa.in'><p>astitva@alcheringa.in</p></a>
                                </div>
                            </button>
                            <button className={styles.button}>
                                <Image
                                    src="/phonenumber.svg"
                                    width={100}
                                    height={100}
                                    className={styles.buttonimage}
                                />
                                <div className={styles.overlay} style={{ backgroundColor: '#1F76FA' }}>
                                    <a href='tel:+91 85272 67283'>    <p>+91 85272 67283</p></a>
                                </div>
                            </button>
                            <button className={styles.button}>
                                <Image
                                    src="/linkdin.svg"
                                    width={100}
                                    height={100}
                                    className={styles.buttonimage}
                                />
                                <div className={styles.overlay} style={{ backgroundColor: '#1F76FA' }}>
                                <p><a href='https://www.linkedin.com/in/astitva-jain-38979024b/?originalSubdomain=in' target='_blank'>Visit LinkedIn</a></p>
                                </div>
                            </button>
                        </div>

                    </div>

                </div>
            </section>
        </div>
    )
}

export default page
