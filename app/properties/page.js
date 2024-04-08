"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import banner from "@/public/images/banner.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationCrosshairs,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import Header from "../components/Header";
import ListProperties from "../components/properties-listing/ListProperties";
import { getAmenities, getPropertyStatus } from "../services/properties";

const PropertiesView = () => {
  const [amenities, setAmenities] = useState([]);
  const [active, setActive] = useState(false);
  const [storeData, setStoreData] = useState([]);

  const propertyType = ["Flat", "House", "Plot", "office"];
  const propertyStatus = ["Ready_to_move", "Under_Construction"];
  const noOfBedRoom = ["1 BHK", "2 BHK", "3 BHK", "4 BHK", "5 BHK"];

  function removeUnderScore(value) {
    try {
      let v = value.replace(/_/g, " ");
      return v;
    } catch (error) {
      console.log(error);
    }
  }
  const getAllAmenities = async () => {
    try {
      const res = await getAmenities();
      setAmenities(res.data);
    } catch (e) {
      console.error(e);
    }
  };
  const handleChange = (item) => {
    console.log("x", item);
  };
  useEffect(() => {
    getAllAmenities();
  }, []);
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
                        {propertyType &&
                          propertyType.map((property, i) => {
                            return (
                              <div
                                key={i}
                                className={
                                  active
                                    ? "tags_property active_widget"
                                    : "tags_property"
                                }
                                onClick={() => handleChange(property)}
                              >
                                <i className="fa-solid fa-plus"></i>
                                <span>{property}</span>
                              </div>
                            );
                          })}
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
                        {noOfBedRoom &&
                          noOfBedRoom.map((room, i) => {
                            return (
                              <div
                                key={i}
                                className="tags_property active_widget"
                              >
                                <i className="fa-solid fa-plus"></i>
                                <span>{removeUnderScore(room)}</span>
                              </div>
                            );
                          })}
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
                        {propertyStatus &&
                          propertyStatus.map((status, i) => {
                            return (
                              <div
                                key={i}
                                className="tags_property active_widget"
                              >
                                <i className="fa-solid fa-plus"></i>
                                <span>{removeUnderScore(status)}</span>
                              </div>
                            );
                          })}
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
                        {amenities &&
                          amenities.map((amenities, k) => {
                            return (
                              <div
                                key={k}
                                className="tags_property active_widget"
                              >
                                <i className="fa-solid fa-plus"></i>
                                <span>{amenities?.name}</span>
                              </div>
                            );
                          })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="row">
                <div className="col-sm-12">
                  <ListProperties />
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
