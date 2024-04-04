import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import propertyImage from "@/public/images/property.jpg";
import Slider from "react-slick";
import { getPropertiesList } from "../../services/properties";

const ListProperties = () => {
  const [getData, setGetData] = useState([]);
  const [page, setPage] = useState(1);
  const [ele, setEle] = useState(100);
  var property = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const propertiesList = async () => {
    try {
      const res = await getPropertiesList(ele, page);
      console.log("res", res.data);
      setGetData(res.data);
      // if (res.ack === 1) {
      //   setBookedSpaceData(res);
      // }
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    propertiesList();
  }, []);
  return (
    <>
      {getData &&
        getData.map((item, i) => {
          return (
            <Link
              key={i}
              href={"/properties/2"}
              style={{ textDecoration: "none", color: "#000" }}
            >
              <div className="inner_card">
                <span className="featured_tag">featured</span>
                <div className="row align-items-center">
                  <div className="col-sm-5">
                    <div className="inner_card_img">
                      <Slider {...property}>
                        {item?.Albums?.map((album, j) => {
                          return (
                            // <Image
                            //   width={100}
                            //   height={200}
                            //   key={j}
                            //   src={album?.url}
                            //   alt={album?.altText}
                            // />
                            <Image src={propertyImage} alt="" />
                          );
                        })}
                      </Slider>
                      <div className="inner_card_img_inner"></div>
                    </div>
                  </div>
                  <div className="col-sm-7">
                    <div className="inner_card_content">
                      <div className="inner_card_header">
                        <h4>{item?.name}</h4>
                        <span>
                          {item?.Location}
                          {/* 6035 W North Ave, Chicago, IL, United States */}
                        </span>
                      </div>
                      <div className="inner_card_info">
                        <div className="inner_card_info_area">
                          <i className="fa-solid fa-chart-area"></i>
                          <span>
                            {item?.carpetArea}
                            {item?.areaUnit}
                          </span>
                        </div>
                        <div className="inner_card_info_area">
                          <i className="fa-solid fa-city"></i>
                          <span>{item?.availibility}</span>
                        </div>
                        <div className="inner_card_info_area">
                          <i className="fa-solid fa-bed"></i>
                          <span>{item?.numOfBhk}</span>
                        </div>
                        <div className="inner_card_info_area">
                          <i className="fa-solid fa-bath"></i>
                          <span>{item?.numOfToilet}</span>
                        </div>
                      </div>
                      <div className="inner_card_near pt-1">
                        <p className="mb-0">Near By :</p>
                        {item?.Place?.map((place, k) => {
                          return (
                            <div key={k} className="inner_card_nearby">
                              <span>{place}</span>
                            </div>
                          );
                        })}
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
    </>
  );
};

export default ListProperties;
