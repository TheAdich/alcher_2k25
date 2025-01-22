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
                        <Image src="./cloudLeft.svg" width="1000" height="1000" />
                        <Image src="./cloudLeft.svg" width="1000" height="1000" />
                        <Image src="./cloudLeft.svg" width="1000" height="1000" />
                    </Marquee>
                </div>
                <div className={styles.teamclouds2}>
                    <Marquee direction="right" speed={30} >
                        <Image src="./cloudRight.svg" width="1000" height="1000" />
                        <Image src="./cloudRight.svg" width="1000" height="1000" />
                        <Image src="./cloudRight.svg" width="1000" height="1000" />
                    </Marquee>
                </div>
                <div className={styles.heading}>Team</div>
                <div className={styles.topsubheading}>“Unite for change, ignite hope, and
                    let people's voices shape our journey.“</div>
            </div>


            <section className={styles.section}>
                <h1 style={{ color: '#239E6D' }}>PUBLIC RELATIONS AND BRANDING </h1>
                <p className={styles.para}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique purus eu libero egestas, sed bibendum felis tincidunt. Proin ultricies viverra mollis. Nullam vel quam tortor. Duis egestas libero velit, vel ullamcorper ipsum condimentum ac. Suspendisse ac porttitor tellus. Nulla porttitor felis a scelerisque feugiat. Praesent faucibus libero ac velit interdum rutrum. Vestibulum viverra volutpat laoreet.</p>
                <div className={styles.persons}>
                    <div className={styles.profilecard}>
                        <div className={styles.profilephoto}>
                            <Image
                                src="/prbframe.png"
                                width={100}
                                height={100}
                                className={styles.profileframe}
                            />
                            <Image
                                src="/head.png"
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
                                    <p>sudhanshu@alcheringa.in</p>
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
                                    <p>+91 82929 67325</p>
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
                                    <p><a href="https://www.linkedin.com/in/sudhanshu-raj-727a1a204/?originalSubdomain=in" target='_blank'> VisitLinkedIn</a></p>
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
                            <Image
                                src="/head.png"
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
                                    <p>siddharth@alcheringa.in</p>
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
                                    <p>+91 73546 47811</p>
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
                                    <p><a href='https://www.linkedin.com/in/siddharth-shukla-876653276/?originalSubdomain=in' target='_blank'>VisitLinkedIn</a></p>
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
                            <Image
                                src="/head.png"
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
                                    <p>sulabh@alcheringa.in</p>
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
                                    <p>+91 83198 55908</p>
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
                                    <p><a href='https://www.linkedin.com/in/sulabh-napit-b415a1214/?originalSubdomain=in' target='_blank'>VisitLinkedIn</a></p>
                                </div>
                            </button>
                        </div>

                    </div>
                </div>
            </section>

            <section className={styles.section}>
                <h1 style={{ color: '#FB754C' }}>CORPORATE RELATIONS AND MARKETING </h1>
                <p className={styles.para}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique purus eu libero egestas, sed bibendum felis tincidunt. Proin ultricies viverra mollis. Nullam vel quam tortor. Duis egestas libero velit, vel ullamcorper ipsum condimentum ac. Suspendisse ac porttitor tellus. Nulla porttitor felis a scelerisque feugiat. Praesent faucibus libero ac velit interdum rutrum. Vestibulum viverra volutpat laoreet.</p>
                <div className={styles.persons}>
                    <div className={styles.profilecard}>
                        <div className={styles.profilephoto}>
                            <Image
                                src="/crmframe.png"
                                width={100}
                                height={100}
                                className={styles.profileframe}
                            />
                            <Image
                                src="/head.png"
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
                                    <p>prakrati@alcheringa.in</p>
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
                                    <p>+91 80837 21976</p>
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
                                    <p><a href='https://www.linkedin.com/in/prakrati-sahu-3748b127a/?originalSubdomain=in' target='_blank'>VisitLinkedIn</a></p>
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
                            <Image
                                src="/head.png"
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
                                    <p>vivek@alcheringa.in</p>
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
                                    <p>+91 70169 90353</p>
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
                                    <p><a href='https://www.linkedin.com/in/vi-pr/?originalSubdomain=in' target='_blank'>VisitLinkedIn</a></p>
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
                            <Image
                                src="/head.png"
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
                                    <p>kunal.k@alcheringa.in</p>
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
                                    <p>+91 62041 80280</p>
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
                                    <p><a href='https://www.linkedin.com/in/kishor-kunal-0478b5260/?originalSubdomain=in' target='_blank'>VisitLinkedIn</a></p>
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
                            <Image
                                src="/head.png"
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
                                    <p>Jayes@alcheringa.in</p>
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
                                    <p>+91 80023 57771</p>
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
                                    <p><a href='https://www.linkedin.com/in/jayes-ranjan-43711b259/?trk=public_profile_browsemap&originalSubdomain=in' target='_blank  '>VisitLinkedIn</a></p>
                                </div>
                            </button>
                        </div>

                    </div>
                </div>
            </section>


            <section className={styles.section}>
                <h1 style={{ color: '#D73849' }}>   Events </h1>
                <p className={styles.para}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique purus eu libero egestas, sed bibendum felis tincidunt. Proin ultricies viverra mollis. Nullam vel quam tortor. Duis egestas libero velit, vel ullamcorper ipsum condimentum ac. Suspendisse ac porttitor tellus. Nulla porttitor felis a scelerisque feugiat. Praesent faucibus libero ac velit interdum rutrum. Vestibulum viverra volutpat laoreet.</p>
                <div className={styles.persons}>
                    <div className={styles.profilecard}>
                        <div className={styles.profilephoto}>
                            <Image
                                src="/eventsframe.png"
                                width={100}
                                height={100}
                                className={styles.profileframe}
                            />
                            <Image
                                src="/head.png"
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
                                    <p>abhijeet@alcheringa.in</p>
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
                                    <p>+91 93367 29959</p>
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
                                    <p><a href='https://www.linkedin.com/in/abhijeet98/?trk=public_profile_browsemap&originalSubdomain=in' target='_blank'>VisitLinkedIn</a></p>
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
                            <Image
                                src="/head.png"
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
                                    <p>krishna@alcheringa.in</p>
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
                                    <p>+91 70496 06444</p>
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
                                    <p><a href='https://www.linkedin.com/in/krishna-agrawal-130b05250/?originalSubdomain=in' target='_blank'>VisitLinkedIn</a></p>
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
                            <Image
                                src="/head.png"
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
                                    <p>Pramit@alcheringa.in</p>
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
                                    <p>+91 86977 31037</p>
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
                                    <p><a href='https://www.linkedin.com/in/pramit-some-b336482ab/?originalSubdomain=in' >VisitLinkedIn</a></p>
                                </div>
                            </button>
                        </div>

                    </div>

                </div>
            </section>



            <section className={styles.section}>
                <h1 style={{ color: '#FE3989' }}>Creatives </h1>
                <p className={styles.para}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique purus eu libero egestas, sed bibendum felis tincidunt. Proin ultricies viverra mollis. Nullam vel quam tortor. Duis egestas libero velit, vel ullamcorper ipsum condimentum ac. Suspendisse ac porttitor tellus. Nulla porttitor felis a scelerisque feugiat. Praesent faucibus libero ac velit interdum rutrum. Vestibulum viverra volutpat laoreet.</p>
                <div className={styles.persons}>
                    <div className={styles.profilecard}>
                        <div className={styles.profilephoto}>
                            <Image
                                src="/creativesframe.png"
                                width={100}
                                height={100}
                                className={styles.profileframe}
                            />
                            <Image
                                src="/head.png"
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
                                    <p>creatives@alcheringa.in</p>
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
                                    <p>+91 70210 59025</p>
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
                                    <p><a href='https://www.linkedin.com/in/anmolsable/?originalSubdomain=in' target='_blank'>VisitLinkedIn</a></p>
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
                            <Image
                                src="/head.png"
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
                                    <p>creatives@alcheringa.in</p>
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
                                    <p>+91 88850 59696</p>
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
                                    <p><a href='https://www.linkedin.com/in/nikitasharma710/?originalSubdomain=in' target='_blank'>VisitLinkedIn</a></p>
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
                            <Image
                                src="/head.png"
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
                                    <p>creatives@alcheringa.in</p>
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
                                    <p>+91 70210 59025</p>
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
                                    <p><a href='https://www.linkedin.com/in/sai-sankeerth-veggalam/?trk=people_directory&originalSubdomain=in' target='_blank'>VisitLinkedIn</a></p>
                                </div>
                            </button>
                        </div>

                    </div>
                </div>
            </section>

            <section className={styles.section}>
                <h1 style={{ color: '#FE3989' }}>IITG MUN </h1>
                <p className={styles.para}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique purus eu libero egestas, sed bibendum felis tincidunt. Proin ultricies viverra mollis. Nullam vel quam tortor. Duis egestas libero velit, vel ullamcorper ipsum condimentum ac. Suspendisse ac porttitor tellus. Nulla porttitor felis a scelerisque feugiat. Praesent faucibus libero ac velit interdum rutrum. Vestibulum viverra volutpat laoreet.</p>
                <div className={styles.persons}>
                    <div className={styles.profilecard}>
                        <div className={styles.profilephoto}>
                            <Image
                                src="/creativesframe.png"
                                width={100}
                                height={100}
                                className={styles.profileframe}
                            />
                            <Image
                                src="/head.png"
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
                                    <p>iitgmun@alcheringa.in</p>
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
                                    <p>+91 80174 71933</p>
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
                                    <p><a href='https://www.linkedin.com/in/yoshita-banerjee-baaa6724b/?originalSubdomain=in' target='_blank'>VisitLinkedIn</a></p>
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
                            <Image
                                src="/head.png"
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
                                    <p>iitgmun@alcheringa.in</p>
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
                                    <p>+91 95791 45131</p>
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
                                <p><a href='https://www.linkedin.com/in/divya-mate-1394152b5/?originalSubdomain=in' target='_blank'>VisitLinkedIn</a></p>
                                </div>
                            </button>
                        </div>

                    </div>



                </div>
            </section>


            <section className={styles.section}>
                <h1 style={{ color: '#8F4BFF' }}>WEB AND APP OPERATIONS </h1>
                <p className={styles.para}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique purus eu libero egestas, sed bibendum felis tincidunt. Proin ultricies viverra mollis. Nullam vel quam tortor. Duis egestas libero velit, vel ullamcorper ipsum condimentum ac. Suspendisse ac porttitor tellus. Nulla porttitor felis a scelerisque feugiat. Praesent faucibus libero ac velit interdum rutrum. Vestibulum viverra volutpat laoreet.</p>
                <div className={styles.persons}>
                    <div className={styles.profilecard}>
                        <div className={styles.profilephoto}>
                            <Image
                                src="/webframe.png"
                                width={100}
                                height={100}
                                className={styles.profileframe}
                            />
                            <Image
                                src="/head.png"
                                width={100}
                                height={100}
                                className={styles.profileface}
                            />
                        </div>
                        <div className={styles.buttons}>
                            <button className={styles.bio}>
                                <h2>Himank Bohara</h2>
                                <p style={{ color: '#8F4BFF' }}> web</p>

                            </button>
                            <button className={styles.button}>
                                <Image
                                    src="/email.svg"
                                    width={100}
                                    height={100}
                                    className={styles.buttonimage}
                                />
                                <div className={styles.overlay} style={{ backgroundColor: '#8F4BFF' }}>
                                    <p>webops@alcheringa.in</p>
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
                                    <p>+91 89557 74322</p>
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
                                <p><a href='https://www.linkedin.com/in/himank-bohara/?originalSubdomain=in' target='_blank'>VisitLinkedIn</a></p>
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
                            <Image
                                src="/head.png"
                                width={100}
                                height={100}
                                className={styles.profileface}
                            />
                        </div>
                        <div className={styles.buttons}>
                            <button className={styles.bio}>
                                <h2>Shivam Gupta</h2>
                                <p style={{ color: '#8F4BFF' }}> web</p>

                            </button>
                            <button className={styles.button}>
                                <Image
                                    src="/email.svg"
                                    width={100}
                                    height={100}
                                    className={styles.buttonimage}
                                />
                                <div className={styles.overlay} style={{ backgroundColor: '#8F4BFF' }}>
                                    <p>webops@alcheringa.in</p>
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
                                    <p>+91 8085774946</p>
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
                                <p><a href='https://www.linkedin.com/in/shivam-gupta9370-/?originalSubdomain=in' target='_blank'>VisitLinkedIn</a></p>
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
                            <Image
                                src="/head.png"
                                width={100}
                                height={100}
                                className={styles.profileface}
                            />
                        </div>
                        <div className={styles.buttons}>
                            <button className={styles.bio}>
                                <h2>Jivesh Firke</h2>
                                <p style={{ color: '#8F4BFF' }}>app</p>

                            </button>
                            <button className={styles.button}>
                                <Image
                                    src="/email.svg"
                                    width={100}
                                    height={100}
                                    className={styles.buttonimage}
                                />
                                <div className={styles.overlay} style={{ backgroundColor: '#8F4BFF' }}>
                                    <p>webops@alcheringa.in</p>
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
                                    <p>+91 83080 77000</p>
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
                                <p><a href='https://www.linkedin.com/in/jiveshfirke/?originalSubdomain=in' target='_blank'>VisitLinkedIn</a></p>
                                </div>
                            </button>
                        </div>

                    </div>



                </div>
            </section>
            <section className={styles.section}>
                <h1 style={{ color: '#1F76FA' }}>Convenor and Finance HEAD </h1>
                <p className={styles.para}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique purus eu libero egestas, sed bibendum felis tincidunt. Proin ultricies viverra mollis. Nullam vel quam tortor. Duis egestas libero velit, vel ullamcorper ipsum condimentum ac. Suspendisse ac porttitor tellus. Nulla porttitor felis a scelerisque feugiat. Praesent faucibus libero ac velit interdum rutrum. Vestibulum viverra volutpat laoreet.</p>
                <div className={styles.persons}>
                    <div className={styles.profilecard}>
                        <div className={styles.profilephoto}>
                            <Image
                                src="/convenorframe.png"
                                width={100}
                                height={100}
                                className={styles.profileframe}
                            />
                            <Image
                                src="/head.png"
                                width={100}
                                height={100}
                                className={styles.profileface}
                            />
                        </div>
                        <div className={styles.buttons}>
                            <button className={styles.bio}>
                                <h2>Pradipta JiwanH</h2>
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
                                    <p>pradipta@alcheringa.in</p>
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
                                    <p>+91 70862 00153</p>
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
                                <p><a href='https://www.linkedin.com/in/pradipta-hazarika-486aba261/?originalSubdomain=in' target='_blank'>VisitLinkedIn</a></p>
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
                            <Image
                                src="/head.png"
                                width={100}
                                height={100}
                                className={styles.profileface}
                            />
                        </div>
                        <div className={styles.buttons}>
                            <button className={styles.bio}>
                                <h2>Astitva Jain</h2>
                                <p style={{ color: '#1F76FA' }}>Finance&AccountsHead</p>
                            </button>
                            <button className={styles.button}>
                                <Image
                                    src="/email.svg"
                                    width={100}
                                    height={100}
                                    className={styles.buttonimage}
                                />
                                <div className={styles.overlay} style={{ backgroundColor: '#1F76FA' }}>
                                    <p>astitva@alcheringa.in</p>
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
                                    <p>+91 85272 67283</p>
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
                                <p><a href='https://www.linkedin.com/in/astitva-jain-38979024b/?originalSubdomain=in' target='_blank'>VisitLinkedIn</a></p>
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
