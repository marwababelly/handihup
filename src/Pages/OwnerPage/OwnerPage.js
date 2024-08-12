import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import style from "./OwnerPage.module.css";
import instagram from "../../assets/instagram.png";
import facebook from "../../assets/facebook.png";
import Rana1 from "../../assets/photo_2024-08-10_10-36-15.jpg";
import Rana2 from "../../assets/person-2_np9x5l.jpg";
import Bana from "../../assets/person-3_ipa0mj.jpg";
import Omar from "../../assets/person-4_t9nxjt.jpg";
import axios from "axios";

const OwnerPage = () => {
  const ownerDetails = [
    {
      id: 1,
      ownerName: "Rana Alhaj Ahmad",
      ownerProjects: ["Pottery"],
      ownerImage: Rana1,
      ownerAccounts: {
        facebook: (
          <a href="https://www.facebook.com/rana.alhajj.ahmad?mibextid=ZbWKwL">
            <img src={facebook} alt="facebook" />
          </a>
        ),
        instagram: (
          <a href="https://www.instagram.com/feather.rana?igsh=ajVzY3hjNTVueW5h">
            <img src={instagram} alt="instagram" />
          </a>
        ),
      },
    },
    {
      id: 2,
      ownerName: "Bana",
      ownerProjects: ["Body Splashes"],
      ownerImage: Bana,
      ownerAccounts: {
        facebook: (
          <a href="https://www.facebook.com/marwa.babelly.18">
            <img src={facebook} alt="facebook" />
          </a>
        ),
        instagram: (
          <a href="https://www.instagram.com/marwababelly/">
            <img src={instagram} alt="instagram" />
          </a>
        ),
      },
    },
    {
      id: 3,
      ownerName: "Rana Alhaj Ahmad",
      ownerProjects: ["Font art"],
      ownerImage: Rana2,
      ownerAccounts: {
        facebook: (
          <a href="https://www.facebook.com/marwa.babelly.18">
            <img src={facebook} alt="facebook" />
          </a>
        ),
        instagram: (
          <a href="https://www.instagram.com/marwababelly/">
            <img src={instagram} alt="instagram" />
          </a>
        ),
      },
    },
    {
      id: 4,
      ownerName: "Omar",
      ownerProjects: ["Rings"],
      ownerImage: Omar,
      ownerAccounts: {
        facebook: (
          <a href="https://www.facebook.com/marwa.babelly.18">
            <img src={facebook} alt="facebook" />
          </a>
        ),
        instagram: (
          <a href="https://www.instagram.com/marwababelly/">
            <img src={instagram} alt="instagram" />
          </a>
        ),
      },
    },
  ];

  const [getOwner, setGetOwner] = useState([]);

  useEffect(() => {
    const fetchOwner = async () => {
      try {
        const response = await axios.get(`the URL${ownerOfProduct}`);
        setGetOwner(response.data);
      } catch (error) {
        console.error("Error Fetching Owner: ", error);
      }
    };
    fetchOwner();
  }, []);

  const { ownerOfProduct } = useParams();
  const owner = ownerDetails.find(
    (p) => p.ownerName === String(ownerOfProduct)
  );
  if (!owner) return <div>Owner Page is not found</div>;

  return (
    <>
      <div className={style.allContainer}>
        <div className={style.container}>
          <>
            <h2 className={style.ownerName}>
              Owner Name: {"   "}
              <h1 className={style.specificName}> {owner.ownerName}</h1>
            </h2>
            <img
              className={style.image}
              src={owner.ownerImage}
              alt="owner image"
            />
            <div className={style.list}>
              <h4>Owner Projects:</h4>
              <ul>
                {owner.ownerProjects.map((li) => (
                  <li className={style.ul}>
                    {" * "}
                    {li}
                  </li>
                ))}
              </ul>
            </div>
            <div className={style.ownerAccounts}>
              <h5>Owner Account For Concat:</h5>
              <ul>
                <li> Facebook Account: {owner.ownerAccounts.facebook}</li>
                <li>Instagram Account: {owner.ownerAccounts.instagram}</li>
              </ul>
            </div>
          </>
        </div>
      </div>
    </>
  );
};

export default OwnerPage;
