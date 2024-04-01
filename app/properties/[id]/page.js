"use client";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import AddressIcon from "@/public/images/address.png";
import AgeIcon from "@/public/images/age.png";
import AreaIcon from "@/public/images/area.png";
import ConfigIcon from "@/public/images/configuration.png";
import FloorIcon from "@/public/images/address.png";
import LiftIcon from "@/public/images/floor.png";
import ParkingIcon from "@/public/images/parking.png";
import PowerIcon from "@/public/images/power.png";
import PriceIcon from "@/public/images/price.png";
import propertyImage from "@/public/images/property.jpg";
import Header from "@/app/components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBath,
  faBed,
  faChartArea,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

const PropertyDetails = () => {
  var property = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <Header />
      <div className="single_view">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="single_view_info">
                <i className="fa-solid fa-location-dot"></i>
                New Town, Kolkata
                <h1>Skyscraper Astha</h1>
              </div>
              <div className="property_bottom_info">
                <div className="single_property_area">
                  <span>
                    <FontAwesomeIcon icon={faChartArea} />
                  </span>
                  <div className="single_content_info">
                    <h4>326 SqFt</h4>
                    <p className="mb-0">Size</p>
                  </div>
                </div>
                <div className="single_property_area">
                  <span>
                    <FontAwesomeIcon icon={faBed} />
                  </span>
                  <div className="single_content_info">
                    <h4>3</h4>
                    <p className="mb-0"> Bedrooms</p>
                  </div>
                </div>
                <div className="single_property_area">
                  <span>
                    <FontAwesomeIcon icon={faBath} />
                  </span>
                  <div className="single_content_info">
                    <h4>2</h4>
                    <p className="mb-0"> Bathrooms</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="property_top_info">
                <div className="single_property_price">
                  <span>&#8377;</span>
                  <span className="price">85 Lac</span>
                  <p className="mb-0">@1287 per sq.ft</p>
                </div>
                <a href="/" className="post_properties">
                  Contact Now
                </a>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-lg-7">
              <div className="single_card">
                <h4>Overview Skyscraper Astha</h4>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="project_overview">
                      <div>
                        <Image src={AreaIcon} alt="" />
                      </div>
                      <div>
                        <span>Project Area</span>
                        <p className="mb-0">1077 - 1616 SQ. FT.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="project_overview">
                      <div>
                        <Image src={AddressIcon} alt="" />
                      </div>
                      <div>
                        <span>Address</span>
                        <p className="mb-0">New Town, Kolkata.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="project_overview">
                      <div>
                        <Image src={ConfigIcon} alt="" />
                      </div>
                      <div>
                        <span>Configuration</span>
                        <p className="mb-0">
                          2 Bedrooms , 2 Bathrooms, 3 Balconies
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="project_overview">
                      <div>
                        <Image src={PriceIcon} alt="" />
                      </div>
                      <div>
                        <span>Price</span>
                        <p className="mb-0">₹ 85 Lac+ Govt Charges & Tax</p>
                        <span>@ 6,115 per sq.ft.</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="project_overview">
                      <div>
                        <Image src={FloorIcon} alt="" />
                      </div>
                      <div>
                        <span>Floor Number</span>
                        <p className="mb-0">2nd of 4 Floors</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="project_overview">
                      <div>
                        <Image src={AgeIcon} alt="" />
                      </div>
                      <div>
                        <span>Property Age</span>
                        <p className="mb-0">5 to 10 Year Old</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="single_card">
                <Slider {...property}>
                  <Image src={propertyImage} alt="" />
                  <Image src={propertyImage} alt="" />
                  <Image src={propertyImage} alt="" />
                </Slider>
              </div>
            </div>
            <div className="col-lg-12 mt-4">
              <div className="single_card">
                <div className="row">
                  <div className="col-sm-12">
                    <h4>Amenities of Skyscraper Astha</h4>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="amenities-box">
                      <Image src={PowerIcon} alt="" />
                      Power Back Up
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="amenities-box">
                      <Image src={LiftIcon} alt="" />
                      Lift
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="amenities-box">
                      <Image src={ParkingIcon} alt="" />
                      Car parking
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="amenities-box">
                      <Image src={PowerIcon} alt="" />
                      Power Back Up
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="amenities-box">
                      <Image src={PowerIcon} alt="" />
                      Power Back Up
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="amenities-box">
                      <Image src={PowerIcon} alt="" />
                      Power Back Up
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="amenities-box">
                      <Image src={PowerIcon} alt="" />
                      Power Back Up
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="amenities-box">
                      <Image src={PowerIcon} alt="" />
                      Power Back Up
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12 mt-4">
              <div className="single_card">
                <div className="row">
                  <div className="col-sm-12">
                    <h4>Owner Details</h4>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-5">
                    <div className="owner_details_bg">
                      <div className="owner_image">
                        <Image src={propertyImage} alt="" />
                      </div>
                      <div className="owner_content">
                        <h3>Arafa El Sherief</h3>
                        <ul>
                          <li>
                            <i className="fa-solid fa-envelope"></i>
                            <span>arafaelsherief@gmail.com</span>
                          </li>
                          <li>
                            <i className="fa-solid fa-phone"></i>
                            <span>8547962152</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-7">
                    <div className="owner_details_bg">
                      <div className="row">
                        <div className="col-sm-6">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Name"
                          />
                        </div>
                        <div className="col-sm-6">
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Email"
                          />
                        </div>
                        <div className="col-sm-6">
                          <input
                            type="tel"
                            className="form-control"
                            placeholder="Phone Number"
                          />
                        </div>
                        <div className="col-sm-12">
                          <textarea
                            name=""
                            className="form-control"
                            id=""
                            rows="3"
                            placeholder="Message"
                          ></textarea>
                        </div>
                        <div className="col-sm-12 mt-2">
                          <a href="/" className="post_properties">
                            Submit Request
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 mt-4">
              <div className="single_card">
                <div className="rating_card">
                  <h4>Reviews & Ratings</h4>
                  <a href="/" className="post_properties">
                    Write a review
                  </a>
                </div>
                <div className="row">
                  <div className="col-lg-3">
                    <div className="ratings-summary">
                      <h3>4.5</h3>
                      <div className="star mt-1 mb-2">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                      </div>
                      <span>0 Reviews</span>
                    </div>
                  </div>
                  {/* <div className="col-lg-4">
                    <div className="overall-rating">
                      <ul className="reviews-box">
                        <li>
                          <span className="label">5</span>
                          <span className="item-list">
                            <span style={{ width: "0%" }}></span>
                          </span>
                          <span className="label">0 %</span>
                        </li>
                        <li>
                          <span className="label">4</span>
                          <span className="item-list">
                            <span style={{ width: "0%" }}></span>
                          </span>
                          <span className="label">0 %</span>
                        </li>
                        <li>
                          <span className="label">3</span>
                          <span className="item-list">
                            <span style={{ width: "0%" }}></span>
                          </span>
                          <span className="label">0 %</span>
                        </li>
                        <li>
                          <span className="label">2</span>
                          <span className="item-list">
                            <span style={{ width: "0%" }}></span>
                          </span>
                          <span className="label">0 %</span>
                        </li>
                        <li>
                          <span className="label">1</span>
                          <span className="item-list">
                            <span style={{ width: "0%" }}></span>
                          </span>
                          <span className="label">0 %</span>
                        </li>
                      </ul>
                    </div>
                  </div> */}
                </div>
                <div className="row mt-4">
                  <div className="col-lg-6">
                    <div className="view_review">
                      <div className="review_top_info">
                        <div className="review_profile">
                          <Image
                            src={propertyImage}
                            alt=""
                            style={{ width: "50px", height: "50px" }}
                          />
                        </div>
                        <div className="review_name">
                          <p className="mb-0">john doe</p>
                          <span>6 reviews</span>
                        </div>
                      </div>
                      <div className="review_middle_info">
                        <div className="star">
                          <FontAwesomeIcon icon={faStar} />
                          <FontAwesomeIcon icon={faStar} />
                          <FontAwesomeIcon icon={faStar} />
                          <FontAwesomeIcon icon={faStar} />
                          <FontAwesomeIcon icon={faStar} />
                        </div>
                        <div className="days">
                          <span>2 weeks ago</span>
                        </div>
                      </div>
                      <div className="review_bottom_info">
                        <p>
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Nihil numquam enim necessitatibus aut ex, modi
                          ratione facilis iusto fugit cum! Ab maiores sed quia
                          similique placeat quasi beatae qui quod.
                        </p>
                      </div>
                    </div>
                    <div className="view_review">
                      <div className="review_top_info">
                        <div className="review_profile">
                          <Image
                            src={propertyImage}
                            alt=""
                            style={{ width: "50px", height: "50px" }}
                          />
                        </div>
                        <div className="review_name">
                          <p className="mb-0">john doe</p>
                          <span>6 reviews</span>
                        </div>
                      </div>
                      <div className="review_middle_info">
                        <div className="star">
                          <FontAwesomeIcon icon={faStar} />
                          <FontAwesomeIcon icon={faStar} />
                          <FontAwesomeIcon icon={faStar} />
                          <FontAwesomeIcon icon={faStar} />
                          <FontAwesomeIcon icon={faStar} />
                        </div>
                        <div className="days">
                          <span>2 weeks ago</span>
                        </div>
                      </div>
                      <div className="review_bottom_info">
                        <p>
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Nihil numquam enim necessitatibus aut ex, modi
                          ratione facilis iusto fugit cum! Ab maiores sed quia
                          similique placeat quasi beatae qui quod.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PropertyDetails;
