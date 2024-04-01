"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import banner from "@/public/images/banner.jpg";
import propertyImage from "@/public/images/property.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationCrosshairs,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import Header from "../components/Header";

const PropertiesView = () => {
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
      {/* <div className="banner-sec">
        <Image src={banner} alt="banner" />
      </div> */}

      <Header />
      <div className="banner-search-sec" style={{ backgroundColor: "#F4F5F7" }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="banner_search">
                <div className="tab-content" id="pills-tabContent">
                  <div className="search-area">
                    <div className="select_properties">
                      <select name="" className="form-select form-control">
                        <option selected disabled>
                          All Residential
                        </option>
                        <option value="Buy">Buy</option>
                        <option value="Rent">Rent</option>
                        <option value="Commercial">Commercial</option>
                        <option value="Plots">Plots</option>
                      </select>
                    </div>
                    <div className="search-input">
                      <FontAwesomeIcon icon={faMagnifyingGlass} />
                      <input
                        type="text"
                        name=""
                        className="form-control"
                        placeholder="Search here"
                      />
                      <div className="location-icon">
                        <FontAwesomeIcon icon={faLocationCrosshairs} />
                      </div>
                    </div>
                    <div className="search-btn">
                      <button>Search</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="inner-page">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="left_panel">
                <div className="accordion" id="accordionPanelsStayOpenExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseOne"
                        aria-expanded="true"
                        aria-controls="panelsStayOpen-collapseOne"
                      >
                        Type of property
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseOne"
                      className="accordion-collapse collapse show"
                    >
                      <div className="accordion-body">
                        <div className="tags_property active_widget">
                          <i className="fa-solid fa-plus"></i>
                          <span>Residential Apartment</span>
                        </div>
                        <div className="tags_property">
                          <i className="fa-solid fa-plus"></i>
                          <span>Residential Land</span>
                        </div>
                        <div className="tags_property">
                          <i className="fa-solid fa-plus"></i>
                          <span>Independent/Builder Floor</span>
                        </div>
                        <div className="tags_property">
                          <i className="fa-solid fa-plus"></i>
                          <span>1 RK/ Studio Apartment</span>
                        </div>
                        <div className="tags_property">
                          <i className="fa-solid fa-plus"></i>
                          <span>Independent House/Villa</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseTwo"
                        aria-expanded="true"
                        aria-controls="panelsStayOpen-collapseTwo"
                      >
                        No. of Bedrooms
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseTwo"
                      className="accordion-collapse collapse show"
                    >
                      <div className="accordion-body">
                        <div className="tags_property">
                          <i className="fa-solid fa-plus"></i>
                          <span>1 RK/1 BHK</span>
                        </div>
                        <div className="tags_property">
                          <i className="fa-solid fa-plus"></i>
                          <span>2 BHK</span>
                        </div>
                        <div className="tags_property">
                          <i className="fa-solid fa-plus"></i>
                          <span>3 BHK</span>
                        </div>
                        <div className="tags_property">
                          <i className="fa-solid fa-plus"></i>
                          <span>4 BHK</span>
                        </div>
                        <div className="tags_property">
                          <i className="fa-solid fa-plus"></i>
                          <span>5 BHK</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseThree"
                        aria-expanded="true"
                        aria-controls="panelsStayOpen-collapseThree"
                      >
                        Construction Status
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseThree"
                      className="accordion-collapse collapse show"
                    >
                      <div className="accordion-body">
                        <div className="tags_property">
                          <i className="fa-solid fa-plus"></i>
                          <span>New Launch</span>
                        </div>
                        <div className="tags_property">
                          <i className="fa-solid fa-plus"></i>
                          <span>Under Construction</span>
                        </div>
                        <div className="tags_property">
                          <i className="fa-solid fa-plus"></i>
                          <span>Ready to move</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseFour"
                        aria-expanded="true"
                        aria-controls="panelsStayOpen-collapseFour"
                      >
                        Localities
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseFour"
                      className="accordion-collapse collapse show"
                    >
                      <div className="accordion-body">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="Airport"
                          />
                          <label className="form-check-label" htmlFor="Airport">
                            Old Airport Road
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="Whitefield"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="Whitefield"
                          >
                            Whitefield
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="Main"
                          />
                          <label className="form-check-label" htmlFor="Main">
                            Main Road
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="Bazar"
                          />
                          <label className="form-check-label" htmlFor="Bazar">
                            Bazar
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseFive"
                        aria-expanded="true"
                        aria-controls="panelsStayOpen-collapseFive"
                      >
                        Amenities
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseFive"
                      className="accordion-collapse collapse show"
                    >
                      <div className="accordion-body">
                        <div className="tags_property">
                          <i className="fa-solid fa-plus"></i>
                          <span>Parking</span>
                        </div>
                        <div className="tags_property">
                          <i className="fa-solid fa-plus"></i>
                          <span>Lift</span>
                        </div>
                        <div className="tags_property">
                          <i className="fa-solid fa-plus"></i>
                          <span>Swimming Pool</span>
                        </div>
                        <div className="tags_property">
                          <i className="fa-solid fa-plus"></i>
                          <span>Power Backup</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="row">
                <div className="col-sm-12">
                  {Array.from({ length: 20 }).map((item, index) => {
                    return (
                      <Link
                        key={index}
                        href={"/properties/2"}
                        style={{ textDecoration: "none", color: "#000" }}
                      >
                        <div className="inner_card">
                          <span className="featured_tag">featured</span>
                          <div className="row align-items-center">
                            <div className="col-sm-5">
                              <div className="inner_card_img">
                                <Slider {...property}>
                                  <Image src={propertyImage} alt="" />
                                  <Image src={propertyImage} alt="" />
                                  <Image src={propertyImage} alt="" />
                                </Slider>
                                <div className="inner_card_img_inner"></div>
                              </div>
                            </div>
                            <div className="col-sm-7">
                              <div className="inner_card_content">
                                <div className="inner_card_header">
                                  <h4>Folium By Sumadhura Phase 2</h4>
                                  <span>
                                    6035 W North Ave, Chicago, IL, United States
                                  </span>
                                </div>
                                <div className="inner_card_info">
                                  <div className="inner_card_info_area">
                                    <i className="fa-solid fa-chart-area"></i>
                                    <span>326 SqFt</span>
                                  </div>
                                  <div className="inner_card_info_area">
                                    <i className="fa-solid fa-city"></i>
                                    <span>Ready to Move</span>
                                  </div>
                                  <div className="inner_card_info_area">
                                    <i className="fa-solid fa-bed"></i>
                                    <span>3</span>
                                  </div>
                                  <div className="inner_card_info_area">
                                    <i className="fa-solid fa-bath"></i>
                                    <span>1</span>
                                  </div>
                                </div>
                                <div className="inner_card_near pt-1">
                                  <p className="mb-0">Near By :</p>
                                  <div className="inner_card_nearby">
                                    <span>Whitefield Metro station</span>
                                  </div>
                                  <div className="inner_card_nearby">
                                    <span>Shopping Mall</span>
                                  </div>
                                </div>
                                <div className="inner_card_price">
                                  <div className="inner_card_number">
                                    <p>View Number</p>
                                  </div>
                                  <div className="inner_card_price_sub">
                                    <span>₹1.96 - 3.07 Cr</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
                <div className="col-sm-12">
                  <ul
                    className="reactPaginate"
                    role="navigation"
                    aria-label="Pagination"
                  >
                    <li className="previous disabled">
                      <Link
                        href={""}
                        className=" "
                        tabIndex="-1"
                        role="button"
                        aria-disabled="true"
                        aria-label="Previous page"
                        rel="prev"
                      >
                        &lt;
                      </Link>
                    </li>
                    <li className="selected">
                      <Link
                        href={""}
                        rel="canonical"
                        role="button"
                        tabIndex="-1"
                        aria-label="Page 1 is your current page"
                        aria-current="page"
                      >
                        1
                      </Link>
                    </li>
                    <li className="">
                      <Link
                        href={""}
                        rel="canonical"
                        role="button"
                        tabIndex="-1"
                        aria-label="Page 1 is your current page"
                        aria-current="page"
                      >
                        2
                      </Link>
                    </li>
                    <li className="next disabled">
                      <Link
                        href={""}
                        className=" "
                        tabIndex="-1"
                        role="button"
                        aria-disabled="true"
                        aria-label="Next page"
                        rel="next"
                      >
                        &gt;
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PropertiesView;
