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
                                <h2>Sam Jose</h2>
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
                                    <p>VisitLinkedIn</p>
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
                                    <p>VisitLinkedIn</p>
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
                                    <p>VisitLinkedIn</p>
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
                                <h2>Sam Jose</h2>
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
                                    <p>VisitLinkedIn</p>
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
                                    <p>VisitLinkedIn</p>
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
                                    <p>VisitLinkedIn</p>
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
                                <h2>Sam Jose</h2>
                                <p style={{ color: '#FE3989' }}>Creative1</p>

                            </button>
                            <button className={styles.button}>
                                <Image
                                    src="/email.svg"
                                    width={100}
                                    height={100}
                                    className={styles.buttonimage}
                                />
                                <div className={styles.overlay} style={{ backgroundColor: '#fe3988b4' }}>
                                    <p>VisitLinkedIn</p>
                                </div>
                            </button>
                            <button className={styles.button}>
                                <Image
                                    src="/phonenumber.svg"
                                    width={100}
                                    height={100}
                                    className={styles.buttonimage}
                                />
                                <div className={styles.overlay} style={{ backgroundColor: '#fe3988b4' }}>
                                    <p>VisitLinkedIn</p>
                                </div>
                            </button >
                            <button className={styles.button}>
                                <Image
                                    src="/linkdin.svg"
                                    width={100}
                                    height={100}
                                    className={styles.buttonimage}
                                />
                                <div className={styles.overlay} style={{ backgroundColor: '#fe3988b4' }}>
                                    <p>VisitLinkedIn</p>
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
                                <h2>Sam Jose</h2>
                                <p style={{ color: '#FE3989' }}>Creative1</p>

                            </button>
                            <button className={styles.button}>
                                <Image
                                    src="/email.svg"
                                    width={100}
                                    height={100}
                                    className={styles.buttonimage}
                                />
                                <div className={styles.overlay} style={{ backgroundColor: '#fe3988b4' }}>
                                    <p>VisitLinkedIn</p>
                                </div>
                            </button>
                            <button className={styles.button}>
                                <Image
                                    src="/phonenumber.svg"
                                    width={100}
                                    height={100}
                                    className={styles.buttonimage}
                                />
                                <div className={styles.overlay} style={{ backgroundColor: '#fe3988b4' }}>
                                    <p>VisitLinkedIn</p>
                                </div>
                            </button >
                            <button className={styles.button}>
                                <Image
                                    src="/linkdin.svg"
                                    width={100}
                                    height={100}
                                    className={styles.buttonimage}
                                />
                                <div className={styles.overlay} style={{ backgroundColor: '#fe3988b4' }}>
                                    <p>VisitLinkedIn</p>
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
                                <h2>Sam Jose</h2>
                                <p style={{ color: '#FE3989' }}>Creative1</p>

                            </button>
                            <button className={styles.button}>
                                <Image
                                    src="/email.svg"
                                    width={100}
                                    height={100}
                                    className={styles.buttonimage}
                                />
                                <div className={styles.overlay} style={{ backgroundColor: '#fe3988b4' }}>
                                    <p>VisitLinkedIn</p>
                                </div>
                            </button>
                            <button className={styles.button}>
                                <Image
                                    src="/phonenumber.svg"
                                    width={100}
                                    height={100}
                                    className={styles.buttonimage}
                                />
                                <div className={styles.overlay} style={{ backgroundColor: '#fe3988b4' }}>
                                    <p>VisitLinkedIn</p>
                                </div>
                            </button >
                            <button className={styles.button}>
                                <Image
                                    src="/linkdin.svg"
                                    width={100}
                                    height={100}
                                    className={styles.buttonimage}
                                />
                                <div className={styles.overlay} style={{ backgroundColor: '#fe3988b4' }}>
                                    <p>VisitLinkedIn</p>
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
                                <h2>Sam Jose</h2>
                                <p style={{ color: '#FB754C' }}>Crm</p>

                            </button>
                            <button className={styles.button}>
                                <Image
                                    src="/email.svg"
                                    width={100}
                                    height={100}
                                    className={styles.buttonimage}
                                />
                                <div className={styles.overlay} style={{ backgroundColor: '#FB754C' }}>
                                    <p>VisitLinkedIn</p>
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
                                    <p>VisitLinkedIn</p>
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
                                    <p>VisitLinkedIn</p>
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
                                <h2>Sam Jose</h2>
                                <p style={{ color: '#FB754C' }}>Crm</p>

                            </button>
                            <button className={styles.button}>
                                <Image
                                    src="/email.svg"
                                    width={100}
                                    height={100}
                                    className={styles.buttonimage}
                                />
                                <div className={styles.overlay} style={{ backgroundColor: '#FB754C' }}>
                                    <p>VisitLinkedIn</p>
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
                                    <p>VisitLinkedIn</p>
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
                                    <p>VisitLinkedIn</p>
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
                                <h2>Sam Jose</h2>
                                <p style={{ color: '#FB754C' }}>Crm</p>

                            </button>
                            <button className={styles.button}>
                                <Image
                                    src="/email.svg"
                                    width={100}
                                    height={100}
                                    className={styles.buttonimage}
                                />
                                <div className={styles.overlay} style={{ backgroundColor: '#FB754C' }}>
                                    <p>VisitLinkedIn</p>
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
                                    <p>VisitLinkedIn</p>
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
                                    <p>VisitLinkedIn</p>
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
                                <h2>Sam Jose</h2>
                                <p style={{ color: '#FB754C' }}>Crm</p>

                            </button>
                            <button className={styles.button}>
                                <Image
                                    src="/email.svg"
                                    width={100}
                                    height={100}
                                    className={styles.buttonimage}
                                />
                                <div className={styles.overlay} style={{ backgroundColor: '#FB754C' }}>
                                    <p>VisitLinkedIn</p>
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
                                    <p>VisitLinkedIn</p>
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
                                    <p>VisitLinkedIn</p>
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
                                <h2>Sam Jose</h2>
                                <p style={{ color: '#D73849' }}>Event</p>
                            </button>
                            <button className={styles.button}>
                                <Image
                                    src="/email.svg"
                                    width={100}
                                    height={100}
                                    className={styles.buttonimage}
                                />
                                <div className={styles.overlay} style={{ backgroundColor: '#D73849' }}>
                                    <p>VisitLinkedIn</p>
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
                                    <p>VisitLinkedIn</p>
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
                                    <p>VisitLinkedIn</p>
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
                                <h2>Sam Jose</h2>
                                <p style={{ color: '#D73849' }}>Event</p>
                            </button>
                            <button className={styles.button}>
                                <Image
                                    src="/email.svg"
                                    width={100}
                                    height={100}
                                    className={styles.buttonimage}
                                />
                                <div className={styles.overlay} style={{ backgroundColor: '#D73849' }}>
                                    <p>VisitLinkedIn</p>
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
                                    <p>VisitLinkedIn</p>
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
                                    <p>VisitLinkedIn</p>
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
                                <h2>Sam Jose</h2>
                                <p style={{ color: '#D73849' }}>Event</p>
                            </button>
                            <button className={styles.button}>
                                <Image
                                    src="/email.svg"
                                    width={100}
                                    height={100}
                                    className={styles.buttonimage}
                                />
                                <div className={styles.overlay} style={{ backgroundColor: '#D73849' }}>
                                    <p>VisitLinkedIn</p>
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
                                    <p>VisitLinkedIn</p>
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
                                    <p>VisitLinkedIn</p>
                                </div>
                            </button>
                        </div>

                    </div>

                </div>
            </section>

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
                                <h2>Sam Jose</h2>
                                <p style={{ color: '#239E6D' }}>Convenor</p>
                            </button>
                            <button className={styles.button}>
                                <Image
                                    src="/email.svg"
                                    width={100}
                                    height={100}
                                    className={styles.buttonimage}
                                />
                                <div className={styles.overlay} style={{ backgroundColor: '#239E6D' }}>
                                    <p>VisitLinkedIn</p>
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
                                    <p>VisitLinkedIn</p>
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
                                    <p>VisitLinkedIn</p>
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
                                <h2>Sam Jose</h2>
                                <p style={{ color: '#239E6D' }}>Convenor</p>
                            </button>
                            <button className={styles.button}>
                                <Image
                                    src="/email.svg"
                                    width={100}
                                    height={100}
                                    className={styles.buttonimage}
                                />
                                <div className={styles.overlay} style={{ backgroundColor: '#239E6D' }}>
                                    <p>VisitLinkedIn</p>
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
                                    <p>VisitLinkedIn</p>
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
                                    <p>VisitLinkedIn</p>
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
                                <h2>Sam Jose</h2>
                                <p style={{ color: '#239E6D' }}>Convenor</p>
                            </button>
                            <button className={styles.button}>
                                <Image
                                    src="/email.svg"
                                    width={100}
                                    height={100}
                                    className={styles.buttonimage}
                                />
                                <div className={styles.overlay} style={{ backgroundColor: '#239E6D' }}>
                                    <p>VisitLinkedIn</p>
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
                                    <p>VisitLinkedIn</p>
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
                                    <p>VisitLinkedIn</p>
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
                                <h2>Sam Jose</h2>
                                <p style={{ color: '#FE3989' }}>mun</p>

                            </button>
                            <button className={styles.button}>
                                <Image
                                    src="/email.svg"
                                    width={100}
                                    height={100}
                                    className={styles.buttonimage}
                                />
                                <div className={styles.overlay} style={{ backgroundColor: '#fe3988b4' }}>
                                    <p>VisitLinkedIn</p>
                                </div>
                            </button>
                            <button className={styles.button}>
                                <Image
                                    src="/phonenumber.svg"
                                    width={100}
                                    height={100}
                                    className={styles.buttonimage}
                                />
                                <div className={styles.overlay} style={{ backgroundColor: '#fe3988b4' }}>
                                    <p>VisitLinkedIn</p>
                                </div>
                            </button >
                            <button className={styles.button}>
                                <Image
                                    src="/linkdin.svg"
                                    width={100}
                                    height={100}
                                    className={styles.buttonimage}
                                />
                                <div className={styles.overlay} style={{ backgroundColor: '#fe3988b4' }}>
                                    <p>VisitLinkedIn</p>
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
                                <h2>Sam Jose</h2>
                                <p style={{ color: '#FE3989' }}>mun</p>

                            </button>
                            <button className={styles.button}>
                                <Image
                                    src="/email.svg"
                                    width={100}
                                    height={100}
                                    className={styles.buttonimage}
                                />
                                <div className={styles.overlay} style={{ backgroundColor: '#fe3988b4' }}>
                                    <p>VisitLinkedIn</p>
                                </div>
                            </button>
                            <button className={styles.button}>
                                <Image
                                    src="/phonenumber.svg"
                                    width={100}
                                    height={100}
                                    className={styles.buttonimage}
                                />
                                <div className={styles.overlay} style={{ backgroundColor: '#fe3988b4' }}>
                                    <p>VisitLinkedIn</p>
                                </div>
                            </button >
                            <button className={styles.button}>
                                <Image
                                    src="/linkdin.svg"
                                    width={100}
                                    height={100}
                                    className={styles.buttonimage}
                                />
                                <div className={styles.overlay} style={{ backgroundColor: '#fe3988b4' }}>
                                    <p>VisitLinkedIn</p>
                                </div>
                            </button>
                        </div>

                    </div>


                
                </div>
            </section>


            <section className={styles.section}>
                <h1 style={{ color:'#8F4BFF' }}>WEB AND APP OPERATIONS </h1>
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
                                <h2>Sam Jose</h2>
                                <p style={{ color:'#8F4BFF' }}> web</p>

                            </button>
                            <button className={styles.button}>
                                <Image
                                    src="/email.svg"
                                    width={100}
                                    height={100}
                                    className={styles.buttonimage}
                                />
                                <div className={styles.overlay} style={{ backgroundColor: '#8F4BFF' }}>
                                    <p>VisitLinkedIn</p>
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
                                    <p>VisitLinkedIn</p>
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
                                    <p>VisitLinkedIn</p>
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
                                <h2>Sam Jose</h2>
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
                                    <p>VisitLinkedIn</p>
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
                                    <p>VisitLinkedIn</p>
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
                                    <p>VisitLinkedIn</p>
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
