import React from "react";
import Story from "./Story";
import Modal from "./Modal";
import Suggestions from "./Suggestions";
import "../styles/profile.css";
import OutsideClickHandler from "react-outside-click-handler/build/OutsideClickHandler";

export default function Profile() {
  const [showSuggestion, SetShowSuggestion] = React.useState(false);

  function handleSuggestion() {
    SetShowSuggestion(!showSuggestion);
  }

  const [showModal, SetShowModal] = React.useState(false);

  // function toogleModal() {
  //   SetShowModal(!showModal);
  // }
  // console.log(showModal);

  return (
    <main>
      <section className="section-one">
        <div className="one">
          <div className="circleOne"></div>
          <img
            className="profile-pic"
            src="https://images.unsplash.com/photo-1483726234545-481d6e880fc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Ym95fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
          />
        </div>
        <div className="two">
          <div className="rowone">
            <div className="username">
              santoshrks{" "}
              {/* <div onClick={() => SetShowModal(true)} id="checkModal">
              <OutsideClickHandler onOutsideClick={() => SetShowModal(false)}>
                <a href="#" className="link-4 link" id="angle">
                  <i class="fa-solid fa-ellipsis"></i>
                </a>
              </OutsideClickHandler>
            </div> */}
              <div onClick={() => SetShowModal(true)}>
                <OutsideClickHandler onOutsideClick={() => SetShowModal(false)}>
                  <a
                    href="#"
                    id="angle"
                    class="link-4 link username-mob-eclipse"
                  >
                    <svg
                      aria-label="Options"
                      class=""
                      color="#262626"
                      fill="#262626"
                      height="45px"
                      role="img"
                      viewBox="0 0 24 24"
                      width="45px"
                    >
                      <circle cx="12" cy="12" r="1.5"></circle>
                      <circle cx="6" cy="12" r="1.5"></circle>
                      <circle cx="18" cy="12" r="1.5"></circle>
                    </svg>
                  </a>
                </OutsideClickHandler>
              </div>
            </div>
            <div>
              <a className="link-1 link">Message</a>
            </div>
            <div>
              <a className="link-2 link">
                <i className="fa-solid fa-user"></i>
              </a>
            </div>
            <div onClick={handleSuggestion}>
              <a className="link-3 link">
                <i
                  className={
                    showSuggestion
                      ? "fa-solid fa-angle-up"
                      : "fa-solid fa-angle-down"
                  }
                ></i>
              </a>
            </div>
            {/* <div onClick={toogleModal} id="checkModal"> */}
            <div onClick={() => SetShowModal(true)}>
              <OutsideClickHandler onOutsideClick={() => SetShowModal(false)}>
                <a href="#" className="link-4 link" id="angle">
                  <i class="fa-solid fa-ellipsis"></i>
                </a>
              </OutsideClickHandler>
            </div>
          </div>
          <div className="rowtwo">
            <div>
              <span className="no">3</span>
              <span>post</span>
            </div>
            <div>
              <a href="#">
                <span className="no">180</span>
                <span>followers</span>
              </a>
            </div>
            <div>
              <a href="#">
                <span className="no">180</span>
                <span>following</span>
              </a>
            </div>
          </div>
          <div className="rowthree">
            <div className="rowname">Santosh Ganji</div>
            <div className="followed">
              <a href="#">
                Followed by
                <span>srk</span>
                <span>+23 more</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* for mobile */}
      <article>
        <div className="rowthreemob">
          <div className="rownamemob">Santosh Ganji</div>
          <div className="followed">
            <a href="#">
              Followed by
              <span>srk</span>
              <span>+23 more</span>
            </a>
          </div>
        </div>
      </article>
      <section className="story">
        <Story
          img="https://images.unsplash.com/photo-1621609764095-b32bbe35cf3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60"
          storytitle="story-1"
        />
        <Story
          img="https://images.unsplash.com/photo-1650476524572-74ee9d363e9c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60"
          storytitle="story-2"
        />
      </section>

      {/* {showModal && <Modal />} */}
      {showSuggestion && <Suggestions />}
      {showModal && <Modal />}
    </main>
  );
}
