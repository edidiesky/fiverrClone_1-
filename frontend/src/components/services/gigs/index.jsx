import React, { useState } from "react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import styled from "styled-components";
import { projectData } from "../../../data";
import Card from "../../common/Card";
import FilterTypes from "../top/FilterTypes";

export default function GigsIndex() {
  const [delivertime, setDeliveryTime] = useState(false);
  return (
    <GigsIndexContent>
      <div className="w-100 flex gap-1 column">
        <div className="w-100 flex item-center justify-space">
          <h5 className="fs-18 text-grey2">
            30,260 services available
          </h5>
          <h5 className="fs-18 flex item-center gap-1 text-light text-grey2">
            Sort By{" "}
            <FilterOptions>
              <div
                className="w-100 fs-18 flex item-center gap-1 text-extra-bold text-dark text-center"
                onClick={() => setDeliveryTime(!delivertime)}
              >
                Best selling{" "}
                {delivertime ? (
                  <BiChevronUp className="fs-18" />
                ) : (
                  <BiChevronDown className="fs-18" />
                )}
              </div>
              {delivertime && (
                <div className="w-100 filters">
                  <FilterTypes type={"selling"} setDeliveryTime={setDeliveryTime}/>
                </div>
              )}
            </FilterOptions>
          </h5>
        </div>
        <div className="w-100 projectwrapper">
          {projectData.map((x, index) => {
            return <Card x={x} index={index} />;
          })}
        </div>
      </div>
    </GigsIndexContent>
  );
}

const GigsIndexContent = styled.div`
  .projectwrapper {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap: 2rem;
  }
`;

const FilterOptions = styled.div`
  padding: 1.2rem 1rem;
  border-radius: 6px;
  position: relative;
  .bottom {
    background-color: #fff;
  }
  .filters {
    position: absolute;
    min-width: 270px;
    top: 120%;
    max-height: 400px;
    z-index: 30000;
    left: -100%;
    border-radius: 6px;
    padding: 2rem 2rem;
    background-color: #fff;
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
  }
  &:hover {
    background-color: rgba(0, 0, 0, 0.06);
  }
  label {
    border-radius: 5px;
    padding:1rem;
    &:hover {
      background-color: rgba(0, 0, 0, 0.06);
    }
  }
`;