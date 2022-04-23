import React from "react";
import PostImage from "./PostImage";
import TaggedImage from "./TaggedImage";
import "../styles/tab2.css";

export default function Tab() {
  const [toggleState, SettoggleState] = React.useState(1);
  function toggleTab(index) {
    SettoggleState(index);
  }

  return (
    <div>
      <div class="tab ">
        <hr />

        <div
          class={toggleState === 1 ? "tabs posts-tab active-tabs " : "  tabs"}
          onClick={() => toggleTab(1)}
        >
          <svg
            aria-label=""
            class="_8-yf5 "
            color="#262626"
            fill="#262626"
            height="12"
            role="img"
            viewBox="0 0 24 24"
            width="12"
          >
            <rect
              fill="none"
              height="18"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              width="18"
              x="3"
              y="3"
            ></rect>
            <line
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              x1="9.015"
              x2="9.015"
              y1="3"
              y2="21"
            ></line>
            <line
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              x1="14.985"
              x2="14.985"
              y1="3"
              y2="21"
            ></line>
            <line
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              x1="21"
              x2="3"
              y1="9.015"
              y2="9.015"
            ></line>
            <line
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              x1="21"
              x2="3"
              y1="14.985"
              y2="14.985"
            ></line>
          </svg>
          <span>POSTS</span>
        </div>

        <div
          class={toggleState === 2 ? "tabs tagged-tab active-tabs" : "  tabs"}
          onClick={() => toggleTab(2)}
        >
          <svg
            aria-label=""
            class="_8-yf5 "
            color="#8e8e8e"
            fill="#8e8e8e"
            height="12"
            role="img"
            viewBox="0 0 24 24"
            width="12"
          >
            <path
              d="M10.201 3.797L12 1.997l1.799 1.8a1.59 1.59 0 001.124.465h5.259A1.818 1.818 0 0122 6.08v14.104a1.818 1.818 0 01-1.818 1.818H3.818A1.818 1.818 0 012 20.184V6.08a1.818 1.818 0 011.818-1.818h5.26a1.59 1.59 0 001.123-.465z"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            ></path>
            <path
              d="M18.598 22.002V21.4a3.949 3.949 0 00-3.948-3.949H9.495A3.949 3.949 0 005.546 21.4v.603"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            ></path>
            <circle
              cx="12.072"
              cy="11.075"
              fill="none"
              r="3.556"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            ></circle>
          </svg>
          <span>TAGGED</span>
        </div>
      </div>

      {/* <!-- for mobile --> */}
      <div className="tab-mob">
        <div className="post">
          <span>3</span>
          <div className="do">post</div>
        </div>
        <div className="follow">
          <span>180</span>
          <div className="do">followers</div>
        </div>
        <div className="followings">
          <span>180</span>
          <div className="do">following</div>
        </div>
      </div>

      <div className="tab-mob-2">
        <div
          class={
            toggleState === 1
              ? "tabs posts-tab active-tabs tabborder"
              : "  tabs tabborder"
          }
          onClick={() => toggleTab(1)}
        >
          <svg
            aria-label="Posts"
            className="_8-yf5 "
            color="#0095f6"
            fill="#0095f6"
            height="24"
            role="img"
            viewBox="0 0 24 24"
            width="24"
          >
            <rect
              fill="none"
              height="18"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              width="18"
              x="3"
              y="3"
            ></rect>
            <line
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              x1="9.015"
              x2="9.015"
              y1="3"
              y2="21"
            ></line>
            <line
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              x1="14.985"
              x2="14.985"
              y1="3"
              y2="21"
            ></line>
            <line
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              x1="21"
              x2="3"
              y1="9.015"
              y2="9.015"
            ></line>
            <line
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              x1="21"
              x2="3"
              y1="14.985"
              y2="14.985"
            ></line>
          </svg>
        </div>
        <div
          class={
            toggleState === 2
              ? "tabs tagged-tab active-tabs tabborder"
              : "  tabs tabborder"
          }
          onClick={() => toggleTab(2)}
        >
          <svg
            aria-label="Tagged"
            className="_8-yf5 "
            color="#8e8e8e"
            fill="#8e8e8e"
            height="24"
            role="img"
            viewBox="0 0 24 24"
            width="24"
          >
            <path
              d="M10.201 3.797L12 1.997l1.799 1.8a1.59 1.59 0 001.124.465h5.259A1.818 1.818 0 0122 6.08v14.104a1.818 1.818 0 01-1.818 1.818H3.818A1.818 1.818 0 012 20.184V6.08a1.818 1.818 0 011.818-1.818h5.26a1.59 1.59 0 001.123-.465z"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            ></path>
            <path
              d="M18.598 22.002V21.4a3.949 3.949 0 00-3.948-3.949H9.495A3.949 3.949 0 005.546 21.4v.603"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            ></path>
            <circle
              cx="12.072"
              cy="11.075"
              fill="none"
              r="3.556"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            ></circle>
          </svg>
        </div>
      </div>

      <div className="gallerycontent">
        {/* <div className="gallery content active-content"> */}
        <div
          className={
            toggleState === 1
              ? "gallery content  active-content"
              : "gallery content "
          }
        >
          <PostImage img="https://images.unsplash.com/photo-1509118796018-30cc4ce216f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1885&q=80" />
          <PostImage img="https://images.unsplash.com/photo-1509118796018-30cc4ce216f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1885&q=80" />
          <PostImage img="https://images.unsplash.com/photo-1509118796018-30cc4ce216f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1885&q=80" />
          <PostImage img="https://images.unsplash.com/photo-1509118796018-30cc4ce216f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1885&q=80" />
          <PostImage img="https://images.unsplash.com/photo-1509118796018-30cc4ce216f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1885&q=80" />
        </div>
        {/* <div className="gallery content"> */}
        <div
          className={
            toggleState === 2
              ? "gallery content  active-content"
              : "gallery  content"
          }
        >
          <TaggedImage img="https://images.unsplash.com/photo-1650486279379-872587305131?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60" />
          <TaggedImage img="https://images.unsplash.com/photo-1650486279379-872587305131?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60" />
          <TaggedImage img="https://images.unsplash.com/photo-1650486279379-872587305131?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60" />
          <TaggedImage img="https://images.unsplash.com/photo-1650486279379-872587305131?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60" />
        </div>
      </div>
   
    </div>
  );
}
