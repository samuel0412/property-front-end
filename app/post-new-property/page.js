"use client";
import React, { useState } from "react";
import { getPropertiesListedFor } from "../services/properties";
import { useEffect } from "react";

function PostNewProperty() {
  const [step, setStep] = useState(1);
  const [propertyListedFor, setPropertyListedFor] = useState();
  const [propertyListedForValue, setPropertyListedForValue] = useState("");
  console.log("............propertyListedForValue", propertyListedForValue);
  const postPropertyStepper = () => {
    setStep(step + 1);
  };
  const getPropertiesListedForHandler = async () => {
    try {
      const res = await getPropertiesListedFor();
      if (res.ack === 1) {
        setPropertyListedFor(res.data);
      }
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    getPropertiesListedForHandler();
  }, []);
  return (
    <div>
      <div className="details_bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="details_left">
                <div
                  className={step >= 1 ? `step_active step_wrap` : `step_wrap`}
                >
                  <div className="step_name">
                    <h6>Basic Details</h6>
                    <small>Step 1</small>
                  </div>
                </div>
                <div
                  className={step >= 2 ? `step_active step_wrap` : `step_wrap`}
                >
                  <div className="step_name">
                    <h6>Location Details</h6>
                    <small>Step 2</small>
                  </div>
                </div>
                <div
                  className={step >= 3 ? `step_active step_wrap` : `step_wrap`}
                >
                  <div className="step_name">
                    <h6>Property Profile</h6>
                    <small>Step 3</small>
                  </div>
                </div>
                <div
                  className={step >= 4 ? `step_active step_wrap` : `step_wrap`}
                >
                  <div className="step_name">
                    <h6>Photos</h6>
                    <small>Step 4</small>
                  </div>
                </div>
                <div
                  className={step >= 5 ? `step_active step_wrap` : `step_wrap`}
                >
                  <div className="step_name">
                    <h6>Pricing & Others</h6>
                    <small>Step 5</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="details_right">
                {step === 1 && (
                  <>
                    <h4 className="mb-1">Welcome back</h4>
                    <h5>Fill out basic details</h5>
                    <div className="preference_widget">
                      <h6>I'm looking to</h6>
                      {/* <div className="basic_tag active_widget">
                        <span>Sell</span>
                      </div>
                      <div className="basic_tag">
                        <span>Rent / Lease</span>
                      </div>
                      <div className="basic_tag">
                        <span>PG</span>
                      </div> */}
                      <div style={{ width: "30%" }}>
                        <select
                          className="form-select form-control"
                          aria-label="Default select example"
                          onChange={(e) =>
                            setPropertyListedForValue(e.target.value)
                          }
                        >
                          <option selected>Open this select menu</option>
                          {propertyListedFor?.map((item, index) => {
                            return (
                              <>
                                <option value={item} key={index}>
                                  {item}
                                </option>
                              </>
                            );
                          })}
                        </select>
                      </div>
                    </div>
                    <div className="preference_widget">
                      <h6>What kind of property do you have?</h6>
                      <div className="mb-3">
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="Residential"
                            value="option1"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="Residential"
                          >
                            Residential
                          </label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="Commercial"
                            value="option2"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="Commercial"
                          >
                            Commercial
                          </label>
                        </div>
                      </div>
                      <div className="basic_tag">
                        <span>Flat/Apartment</span>
                      </div>
                      <div className="basic_tag">
                        <span>Independent House / Villa</span>
                      </div>
                      <div className="basic_tag">
                        <span>1 RK/ Studio Apartment</span>
                      </div>
                      <div className="basic_tag">
                        <span>Serviced Apartment</span>
                      </div>
                      <div className="basic_tag">
                        <span>Other</span>
                      </div>
                    </div>
                    <div className="search-btn pt-5">
                      <button onClick={postPropertyStepper}>Continue</button>
                    </div>
                  </>
                )}
                *
                {step === 2 && (
                  <>
                    <h4 className="mb-1">Where is your property located?</h4>
                    <span>
                      An accurate location helps you connect with the right
                      buyers
                    </span>
                    <div className="row mt-5">
                      <div className="col-sm-6">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="City"
                        />
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Apartment Society"
                        />
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Locality"
                        />
                        <input
                          type="text"
                          className="form-control"
                          placeholder="House No. (Optional)"
                        />
                      </div>
                    </div>
                    <div className="search-btn pt-5">
                      <button onClick={() => setStep(step - 1)}>Back</button>
                      <button
                        onClick={postPropertyStepper}
                        style={{ marginLeft: "10px" }}
                      >
                        Continue
                      </button>
                    </div>
                  </>
                )}
                {step === 3 && (
                  <>
                    <h4 className="mb-1">Tell us about your property</h4>
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="preference_widget">
                          <h6>Add Room Details</h6>
                          <small className="d-block mb-2">
                            No. of Bedrooms
                          </small>
                          <div className="basic_tag">
                            <span>1</span>
                          </div>
                          <div className="basic_tag">
                            <span>2</span>
                          </div>
                          <div className="basic_tag">
                            <span>3</span>
                          </div>
                          <div className="basic_tag">
                            <span>4</span>
                          </div>
                          <small className="d-block mt-3 mb-2">
                            No. of Bathrooms
                          </small>
                          <div className="basic_tag">
                            <span>1</span>
                          </div>
                          <div className="basic_tag">
                            <span>2</span>
                          </div>
                          <div className="basic_tag">
                            <span>3</span>
                          </div>
                          <div className="basic_tag">
                            <span>4</span>
                          </div>
                          <small className="d-block mt-3 mb-2">
                            No. of Balconies
                          </small>
                          <div className="basic_tag">
                            <span>0</span>
                          </div>
                          <div className="basic_tag">
                            <span>1</span>
                          </div>
                          <div className="basic_tag">
                            <span>2</span>
                          </div>
                          <div className="basic_tag">
                            <span>3</span>
                          </div>
                        </div>
                        <div className="preference_widget">
                          <h6>Add Area Details</h6>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Carpet Area sq.ft."
                          />
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Build-up Area sq.ft."
                          />
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Super Build-up Area sq.ft."
                          />
                        </div>
                        <div className="preference_widget">
                          <h6>Floor Details</h6>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Total Floors"
                          />
                          <select
                            className="form-select form-control"
                            aria-label="Default select example"
                          >
                            <option selected>Open this select menu</option>
                            <option value="Basement">Basement</option>
                            <option value="Lower Ground">Lower Ground</option>
                            <option value="Ground">Ground</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="preference_widget">
                          <h6>Availability Status</h6>
                          <div className="basic_tag">
                            <span>Ready to move</span>
                          </div>
                          <div className="basic_tag">
                            <span>Under construction</span>
                          </div>
                        </div>
                        <div className="preference_widget">
                          <h6>Ownership</h6>
                          <div className="basic_tag">
                            <span>Freehold</span>
                          </div>
                          <div className="basic_tag">
                            <span>Leasehold</span>
                          </div>
                          <div className="basic_tag">
                            <span>Co-operative society</span>
                          </div>
                          <div className="basic_tag">
                            <span>Power of Attorney</span>
                          </div>
                        </div>
                        <div className="preference_widget">
                          <h6 className="mb-0">Price Details</h6>
                          <div className="row">
                            <div className="col-sm-7">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Expected Price"
                              />
                            </div>
                            <div className="col-sm-5">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Price per sq.ft."
                              />
                            </div>
                          </div>
                          <div className="form-check form-check-inline mt-4">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="inlineCheckbox1"
                              value="option1"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="inlineCheckbox1"
                            >
                              All inclusive price
                            </label>
                          </div>
                          <div className="form-check form-check-inline">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="inlineCheckbox2"
                              value="option2"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="inlineCheckbox2"
                            >
                              Tax and Govt. charges excluded
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="inlineCheckbox2"
                              value="option2"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="inlineCheckbox2"
                            >
                              Price Negotiable
                            </label>
                          </div>
                        </div>
                        <div className="preference_widget">
                          <h6 className="mb-0">
                            What makes your property unique
                          </h6>
                          <textarea
                            name=""
                            id=""
                            rows="5"
                            className="form-control"
                            placeholder="Share some details about your property like spacious rooms, well maintained facilities.."
                          ></textarea>
                        </div>
                      </div>
                    </div>
                    <div className="search-btn pt-5">
                      <button onClick={() => setStep(step - 1)}>Back</button>
                      <button
                        onClick={postPropertyStepper}
                        style={{ marginLeft: "10px" }}
                      >
                        Continue
                      </button>
                    </div>
                  </>
                )}
                {step === 4 && (
                  <>
                    <h4 className="mb-1">
                      Add photos of your property <em>(Optional)</em>
                    </h4>
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="file_input form-control p-0">
                          <input type="file" className="form-control p-0 m-0" />
                          <span>
                            <i className="fa-solid fa-upload"></i>
                            <small>Drag and drop your photos here</small>
                            <button className="mt-3 post_properties">
                              Upload Photos Now
                            </button>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="row mt-4">
                      <div className="col-sm-4">
                        <div className="view_img">
                          <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuKmzjYulECD9I4ERduqu7FQ9b9l0_N1Ib2ocC1tCsGQ&s"
                            alt=""
                          />
                          <button className="delete_img">
                            <i className="fa-solid fa-xmark"></i>
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="search-btn pt-5">
                      <button onClick={() => setStep(step - 1)}>Back</button>

                      <button
                        type="button"
                        onClick={postPropertyStepper}
                        style={{ marginLeft: "10px" }}
                      >
                        Continue
                      </button>
                    </div>
                  </>
                )}
                {step === 5 && (
                  <>
                    <h4 className="mb-1">Add amenities/unique features</h4>
                    <div className="preference_widget">
                      <h6>
                        Other rooms <em>(Optional)</em>
                      </h6>
                      <div className="basic_tag active_widget">
                        <span>Pooja Room</span>
                      </div>
                      <div className="basic_tag">
                        <span>Study Room</span>
                      </div>
                      <div className="basic_tag">
                        <span>Store Room</span>
                      </div>
                    </div>
                    <div className="preference_widget">
                      <h6>
                        Furnishing <em>(Optional)</em>
                      </h6>
                      <div className="basic_tag active_widget">
                        <span>Furnished</span>
                      </div>
                      <div className="basic_tag">
                        <span>Semi-Furnished</span>
                      </div>
                      <div className="basic_tag">
                        <span>Un-Furnished</span>
                      </div>
                    </div>
                    <div className="preference_widget">
                      <h6>Amenities</h6>
                      <div className="basic_tag active_widget">
                        <span>Maintenance Staff</span>
                      </div>
                      <div className="basic_tag">
                        <span>Water Storage</span>
                      </div>
                      <div className="basic_tag">
                        <span>Security / Fire Alarm</span>
                      </div>
                    </div>
                    <div className="preference_widget">
                      <h6>Property Features</h6>
                      <div className="basic_tag active_widget">
                        <span>High Ceiling Height</span>
                      </div>
                      <div className="basic_tag">
                        <span>False Ceiling Lighting</span>
                      </div>
                      <div className="basic_tag">
                        <span>Piped-gas</span>
                      </div>
                    </div>
                    <div className="preference_widget">
                      <h6>Society/Building feature</h6>
                      <div className="basic_tag active_widget">
                        <span>Water softening plant</span>
                      </div>
                      <div className="basic_tag">
                        <span>Shopping Centre</span>
                      </div>
                      <div className="basic_tag">
                        <span>Fitness Centre / GYM</span>
                      </div>
                    </div>
                    <div className="preference_widget">
                      <h6>Additional Features</h6>
                      <div className="basic_tag active_widget">
                        <span>Separate entry for servant room</span>
                      </div>
                      <div className="basic_tag">
                        <span>Waste Disposal</span>
                      </div>
                      <div className="basic_tag">
                        <span>No open drainage around</span>
                      </div>
                    </div>
                    <div className="preference_widget">
                      <h6>Water Source</h6>
                      <div className="basic_tag active_widget">
                        <span>Municipal corporation</span>
                      </div>
                      <div className="basic_tag">
                        <span>Borewell/Tank</span>
                      </div>
                      <div className="basic_tag">
                        <span>24*7 Water</span>
                      </div>
                    </div>
                    <div className="preference_widget">
                      <h6>Overlooking</h6>
                      <div className="basic_tag active_widget">
                        <span>Pool</span>
                      </div>
                      <div className="basic_tag">
                        <span>Park/Garden</span>
                      </div>
                      <div className="basic_tag">
                        <span>Club</span>
                      </div>
                    </div>
                    <div className="preference_widget">
                      <h6>Other Features</h6>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="inlineCheckbox2"
                          value="option2"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="inlineCheckbox2"
                        >
                          In a gated society
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="inlineCheckbox2"
                          value="option2"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="inlineCheckbox2"
                        >
                          Corner Property
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="inlineCheckbox2"
                          value="option2"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="inlineCheckbox2"
                        >
                          Pet Friendly
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="inlineCheckbox2"
                          value="option2"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="inlineCheckbox2"
                        >
                          Wheelchair friendly
                        </label>
                      </div>
                    </div>
                    <div className="preference_widget">
                      <h6>Property facing</h6>
                      <div className="basic_tag active_widget">
                        <span>North</span>
                      </div>
                      <div className="basic_tag">
                        <span>South</span>
                      </div>
                      <div className="basic_tag">
                        <span>East</span>
                      </div>
                      <div className="basic_tag">
                        <span>West</span>
                      </div>
                      <div className="basic_tag">
                        <span>North-East</span>
                      </div>
                    </div>
                    <div className="preference_widget">
                      <h6>Type of flooring</h6>
                      <select
                        className="form-select form-control"
                        aria-label="Default select example"
                      >
                        <option selected>Open this select menu</option>
                        <option value="Marble">Marble</option>
                        <option value="Concrete">Concrete</option>
                        <option value="Polished concrete">
                          Polished concrete
                        </option>
                        <option value="1">Granite</option>
                      </select>
                    </div>
                    <div className="preference_widget">
                      <h6>Width of facing road</h6>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter the width in feet"
                      />
                    </div>
                    <div className="preference_widget">
                      <h6>Location Advantages</h6>
                      <div className="basic_tag active_widget">
                        <span>Close to Metro Station</span>
                      </div>
                      <div className="basic_tag">
                        <span>Close to School</span>
                      </div>
                      <div className="basic_tag">
                        <span>Close to Hospital</span>
                      </div>
                      <div className="basic_tag">
                        <span>Close to Market</span>
                      </div>
                      <div className="basic_tag">
                        <span>Close to Mall</span>
                      </div>
                    </div>
                    <div className="preference_widget">
                      <h6>Suggest a Property Feature</h6>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter your USP’s here"
                      />
                    </div>
                    <div className="search-btn pt-5">
                      <button onClick={() => setStep(step - 1)}>Back</button>
                      <button style={{ marginLeft: "10px" }}>Submit</button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostNewProperty;
