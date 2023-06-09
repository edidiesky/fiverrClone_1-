import React, { useState, useEffect } from "react";
import styled from "styled-components";
// import { FaSearch } from "react-icons/fa";
// import { getAllCustomersOrder } from "../../../Features";
// import { useSelector, useDispatch } from "react-redux";
import TableCard from "./TableCard";
// import Links from "./Links";
// import Pagination from "./Pagination";
import { Table } from "../pages/styles";
// import Message from "../../../components/loaders/Message";
// import LoaderIndex from "../../../components/loaders/index";
import { projectData } from "../../../data";
import { orderData } from "../../../data/Order";

export default function Order() {
  // const dispatch = useDispatch();

  // const { isLoading, orders } = useSelector((store) => store.order);

  // useEffect(() => {
  //   window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  //   dispatch(getAllCustomersOrder());
  // }, []);

  return (
    <>
      {/* {isLoading && <LoaderIndex loading={isLoading} />} */}
      <OrdersContainer>
        <Table>
          <div className="TableTop">
            <div className="TableTopRight">
              <h3>Recent Orders</h3>
            </div>
            <div className="TableTopLeft"></div>
          </div>
          <div className="TableContainer">
            <table className="tableWrapper">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Date</th>
                  <th>customer's Name</th>
                  <th>Paid</th>
                  <th>Status</th>
                  <th>Action</th>
                  <th>items</th>

                  <th>See Details</th>

                </tr>
              </thead>
              <tbody>
                {orderData?.slice(0, 3).map((x) => {
                  return <TableCard x={x} key={x?._id} type="orders" />;
                })}
              </tbody>
            </table>
          </div>
        </Table>
      </OrdersContainer>
    </>
  );
}

const OrdersContainer = styled.div`
  width: 100%;
`;
