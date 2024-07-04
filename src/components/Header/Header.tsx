// react imports
import React, { useEffect } from "react";

// project imports
import { dateWithMonthText } from "../../helpers/general";
import {
  NotificationIcon,
  LanguagesIcon,
  ProfilePicture,
  SearchIcon,
} from "../../assets";
import styles from "./Header.module.scss";

// 3rd party
import { useNavigate } from "react-router-dom";
import PageHeader from "./PageHeader/PageHeader";
// import { i18n } from "@lingui/core";
// import { Trans } from "@lingui/macro"

const notifications = [
  {
    id: "1",
    image:
      "https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=Red&facialHairType=Blank&clotheType=ShirtVNeck&clotheColor=Black&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light",
    title: "You have an update in Order #28742",
    time: "11 hours ago",
    type: "Order List",
    is_read: true,
  },
  {
    id: "2",
    image:
      "https://avataaars.io/?avatarStyle=Circle&topType=LongHairNotTooLong&accessoriesType=Blank&hairColor=Black&facialHairType=Blank&clotheType=GraphicShirt&clotheColor=Black&graphicType=SkullOutline&eyeType=Hearts&eyebrowType=RaisedExcited&mouthType=Twinkle&skinColor=Light",
    title: "You have an update in Task #55245",
    time: "11 hours ago",
    type: "Tasks",
    is_read: false,
  },
  {
    id: "3",
    image:
      "https://avataaars.io/?avatarStyle=Circle&topType=LongHairNotTooLong&accessoriesType=Blank&hairColor=Black&facialHairType=Blank&clotheType=GraphicShirt&clotheColor=Black&graphicType=SkullOutline&eyeType=Hearts&eyebrowType=RaisedExcited&mouthType=Twinkle&skinColor=Light",
    title: "You have an update in Order #28732",
    time: "11 hours ago",
    type: "Order List",
    is_read: true,
  },
  {
    id: "4",
    image:
      "https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=Red&facialHairType=Blank&clotheType=ShirtVNeck&clotheColor=Black&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light",
    title: "You have an update in Order #24742",
    time: "11 hours ago",
    type: "Order List",
    is_read: false,
  },
  {
    id: "5",
    image:
      "https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=Red&facialHairType=Blank&clotheType=ShirtVNeck&clotheColor=Black&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light",
    title: "You have an update in Order #28772",
    time: "11 hours ago",
    type: "Order List",
    is_read: false,
  },
];

export default function Header() {
  const navigate = useNavigate();

  return (
    <>
      <div className="row my-4 border-bottom mx-5">
        <div className="d-flex justify-content-between">
          <div className="pt-2" style={{ marginLeft: 160, marginRight: 0 }}>
            {/* {dateWithMonthText(new Date())} */}
            <PageHeader />
          </div>

          {/* {dateWithMonthText(new Date())} */}
          <div className="d-flex">
            <div>
              <label className={styles.searchBar}>
                <input
                  type="search"
                  placeholder="Search here"
                  className={`p-2 bg-white ${styles.searchBar}`}
                />
              </label>
            </div>
            <div className="d-flex pt-2">
              <button
                className={`${styles.notification_btn}`}
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <NotificationIcon color="#ccc" width={24} height={24} />
              </button>
              <ul className="dropdown-menu">
                <li className="text-end p-1 pe-3 border-bottom pointer-cursor">
                  <span className="text-primary">Mark all as read</span>
                </li>
                {notifications?.map((item: any) => (
                  <li key={item.id}>
                    <div
                      className={`row m-0 border-bottom border-2 border-light-subtle ${
                        item.is_read ? "" : "bg-primary-subtle"
                      } ${styles.notification_block}`}
                    >
                      <div className="col-sm-2 col-xs-12 pt-3">
                        <img src={item.image} width={60} />
                      </div>
                      <div className="col-sm-10 col-xs-12 pt-3 pb-4">
                        <p
                          className={
                            item.is_read
                              ? `text-body-tertiary fw-semibold`
                              : `text-secondary-emphasis fw-semibold`
                          }
                        >
                          {item.title}
                        </p>
                        <p className="text-body-tertiary">
                          {item.time} &#x2022; {item.type}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
                <li
                  className="text-center pt-2 pointer-cursor"
                  onClick={() => {
                    navigate("/notifications");
                  }}
                >
                  <span className="text-warning">View All Notifications</span>
                </li>
              </ul>
              <span
                className={`text-white bg-danger p-1 rounded-circle ${styles.notification_number}`}
              >
                8
              </span>
            </div>
            <div className="d-flex flex-direction-row gap-2">
              <img
                src={ProfilePicture}
                width={40}
                height={40}
                className="rounded-circle"
              />
              <div className="d-flex flex-column pe-4 text-nowrap">
                <h6>John Doe</h6>
                <p className="text-secondary">Administrator</p>
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
