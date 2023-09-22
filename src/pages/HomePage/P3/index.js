import React, { useContext, useEffect, useState } from 'react'
import './P3.sass'
import { databaseContext } from '../../../context/databaseContext/databse.context'
import { Query } from 'appwrite'
import Slider from '../../../components/Slider'
import { Link, useNavigate } from 'react-router-dom'

export default function P3() {
    const navigate = useNavigate()
    const database = useContext(databaseContext)

    const [event, setEvents] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            return await database.listDocuments("itmeet", "events", [
                Query.equal("type", ["post"])
            ])
        }
        fetchData().then((value) => {
            setEvents(value.documents)
        }).catch(err => {
            alert(err)
        })
    }, [])

    return (
        <div className='P3'>
            <section
                className="section mainevents"
                data-section="section3"
                name="section3"
                id="section3"
            >
                <div className="container-fluid">
                    <div className="row roww">
                        <div className="col-md-12">
                            <div className="section-heading">
                                <h2 className="wow animate__bounceIn" data-wow-duration="1s">
                                    Our Events
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>


                <div className='carousel'>
                    <Slider >
                        {
                            event.map(element => {

                                return (
                                    <div className="item" key={element.id}>
                                        <img src={element.photo} alt="Event #2" />
                                        <div className="down-content">
                                            <h4>{element.title}</h4>
                                            <p>
                                                {element.description}
                                            </p>
                                            <div className="more-btn">
                                                <div onClick={() => {
                                                    navigate(`/event/${element.title}`)
                                                }}>
                                                    More <i className="fa fa-angle-double-right"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </Slider>
                </div>
                {/* <a
                    className="viewallbtn wow animate__fadeInUp"
                    data-wow-duration="1s"
                    href="/allEvents"
                >View all Events <i className="fa fa-angle-double-right"></i>
                </a> */}
                <a href='/allEvents'>
                <div className="container-fluid">
                    <div className="row roww">
                        <div className="col-md-12">
                            <div className="boxed-button">
                                <h2 className="wow animate__bounceIn" data-wow-duration="1s">
                                    View All Events
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
                </a>
            </section >
        </div>
    )
}
