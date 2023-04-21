import React from "react";
import styled from "styled-components";
import {
  FaFacebook,
  FaGlobe,
  FaInstagram,
  FaLinkedinIn,
  FaMap,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";

export default function Copyright() {
  return (
    <CopyrightContent>
      <div className="copyrightWrapper w-90 auto flex item-center">
        <div className="left flex item-center gap-2">
          <svg
            width="89"
            height="27"
            viewBox="0 0 89 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill="var(--grey-2)">
              <path d="m81.6 13.1h-3.1c-2 0-3.1 1.5-3.1 4.1v9.3h-6v-13.4h-2.5c-2 0-3.1 1.5-3.1 4.1v9.3h-6v-18.4h6v2.8c1-2.2 2.3-2.8 4.3-2.8h7.3v2.8c1-2.2 2.3-2.8 4.3-2.8h2zm-25.2 5.6h-12.4c.3 2.1 1.6 3.2 3.7 3.2 1.6 0 2.7-.7 3.1-1.8l5.3 1.5c-1.3 3.2-4.5 5.1-8.4 5.1-6.5 0-9.5-5.1-9.5-9.5 0-4.3 2.6-9.4 9.1-9.4 6.9 0 9.2 5.2 9.2 9.1 0 .9 0 1.4-.1 1.8zm-5.7-3.5c-.1-1.6-1.3-3-3.3-3-1.9 0-3 .8-3.4 3zm-22.9 11.3h5.2l6.6-18.3h-6l-3.2 10.7-3.2-10.8h-6zm-24.4 0h5.9v-13.4h5.7v13.4h5.9v-18.4h-11.6v-1.1c0-1.2.9-2 2.2-2h3.5v-5h-4.4c-4.3 0-7.2 2.7-7.2 6.6v1.5h-3.4v5h3.4z"></path>
            </g>
            <g fill="#1dbf73">
              <path d="m85.3 27c2 0 3.7-1.7 3.7-3.7s-1.7-3.7-3.7-3.7-3.7 1.7-3.7 3.7 1.7 3.7 3.7 3.7z"></path>
            </g>
          </svg>
          <p className="text-center">© Fiverr International Ltd. 2023</p>
        </div>
        <div className="left flex item-center gap-3">
          <div className="w-100 flex item-center">
            <div className="icon">
              <FaFacebook />
            </div>
            <div className="icon">
              <FaTwitter />
            </div>
            <div className="icon">
              <FaLinkedinIn />
            </div>
            <div className="icon">
              <FaPinterest />
            </div>
            <div className="icon">
              <FaInstagram />
            </div>
          </div>
          <div className="w-100 flex item-center gap-1">
            <div className="flex item-center gap-1 fs-14 text-grey2 text-bold">
              <FaGlobe className="fs-20 text-grey2"/>
              English
            </div>
            <div className="flex item-center gap-1 fs-14 text-grey2 text-bold">
              $ USD
            </div>
          </div>
        </div>
      </div>
    </CopyrightContent>
  );
}


const CopyrightContent = styled.div`
  width: 100%;
  margin: 0 auto;
  z-index: 50;
  position: relative;
  background: #fff;
  border-top: 1px solid rgba(0, 0, 0, 0.09);  
  .icon {
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    display: grid;
    place-items: center;
    background-color: transparent;
    svg {
      font-size: 20px;
      color: var(--grey-1);
    }
    &:hover {
      background-color: var(--light-grey);
    }
  }
  .left {
    @media (max-width: 480px) {
      flex-direction: column;
      gap: 3rem;
      align-items: flex-start;
    }
  }
  .copyrightWrapper {
    padding: 2rem 0;
    display: flex;
    border-top: 1px solid rgba(0, 0, 0, 0.09);
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
    @media (max-width: 780px) {
      flex-direction: column;
      gap: 3rem;
      align-items: flex-start;
    }
    p {
      font-size: 14px;
      font-weight: 600;
      color: var(--grey-2);
      text-align: center;
      width: 100%;
    }
  }
`;
