import React from "react";
import { AnimatePresence } from "framer-motion";
import { useNavigate, Link } from "react-router-dom";
import { AiOutlineCheck } from "react-icons/ai";
import moment from "moment";
import Delete from "./DeleteModal";
import { FaTimes } from "react-icons/fa";
import { getGigs, getUser } from "../../../Features";
import { useSelector, useDispatch } from "react-redux";
import { MdEdit } from "react-icons/md";
import { BsTrash } from "react-icons/bs";
export default function TableCards({ x, type }) {
  const { deleteGigModalAlert, GigsDetails } = useSelector(
    (store) => store.gigs
  );
    const {userAlert } = useSelector(
      (store) => store.user
    );
  let createddate = moment(x?.createdAt);
  createddate = createddate.format("MMMM Do YYYY");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // delete product function
  const handleDeleteProduct = () => {
    dispatch(getGigs(x));
  };

  // Handling Order Navigation
  const handleOrderNav = () => {
    navigate(`/order/${x?._id}`);
  };

  // edit product function
  const handleEditProduct = () => {
    navigate(`/dashboard/create-gig/${x?._id}`);
  };

  // delete user function
  const handleDeleteUser = () => {
    dispatch(getUser(x));
  };

  // edit user function
  const handleEditUser = () => {
    navigate(`/dashboard/users/${x?._id}`);
  };

  if (type === "users") {
    return (
      <>
        {/* <Delete type="users" /> */}
        <AnimatePresence
          initial="false"
          exitBeforeEnter={true}
          onExitComplete={() => null}
        >
          {userAlert && <Delete type={'users'} />}
        </AnimatePresence>
        <tr key={x?._id}>
          <td>{x?._id}</td>
          <td>
            <div className="flex fs-12 text-bold item-center gap-2">
              <img src={x.image} alt="" className="avatar" />
              {x?.username}
            </div>
          </td>
          <td>{x?.email}</td>
          <td>{x?.country}</td>
          <td>
            <h5
              className={
                x?.role === "seller"
                  ? "fs-12 text-bold capitalize seller"
                  : x?.role === "admin"
                  ? "fs-12 text-bold capitalize admin"
                  : "fs-12 text-bold capitalize "
              }
            >
              {x?.role}
            </h5>
          </td>
          <td>
            <div className="action">
              <div className="icons" onClick={handleDeleteUser}>
                <BsTrash />
              </div>
              <div className="icons" onClick={handleEditUser}>
                <MdEdit />
              </div>
            </div>
          </td>
        </tr>
      </>
    );
  }
  if (type === "orders") {
    return (
      <tr key={x?._id}>
        <td>{x?._id}</td>
        <td>{createddate}</td>
        {/* <td>
          {x?.createdBy?.firstname} {x?.createdBy?.lastname}
        </td> */}
        <td>
          {" "}
          <div className="flex item-center gap-2">
            <h5 className="fs-12 text-bold family1">Edidiong</h5>
            <div className="">
              {x?.image && (
                <img
                  src={x?.image[0]}
                  alt="images"
                  className="flex item-center justify-center avatar"
                />
              )}
            </div>
          </div>
        </td>

        <td>${x?.TotalShoppingPrice}</td>
        <td>
          <div className="flex item-center">
            {x?.isPaid ? (
              <div className="tablespan true">Paid</div>
            ) : (
              <div className="tablespan false">Not Paid</div>
            )}
          </div>
        </td>
        <td>
          <div className="flex item-center">
            {x?.isDelivered ? (
              <div className="tablespan true">Delivered</div>
            ) : (
              <div className="tablespan false">Not Delivered</div>
            )}
          </div>
        </td>
        <td>50</td>
        <td>Totals</td>
      </tr>
    );
  }

  return (
    <>
      <AnimatePresence
        initial="false"
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
        {deleteGigModalAlert && <Delete />}
      </AnimatePresence>
      <tr key={x?._id}>
        <td>{x?._id}</td>
        <td>
          <div className="cartProduct">
            <div className="imageWrapper">
              {x?.image && <img src={x?.image[0]} alt="images" />}
            </div>
          </div>
        </td>
        <td>{x?.title}</td>
        <td>${x?.price}</td>
        <td>{x?.countInStock}</td>
        {/* <td>{x?.brand}</td> */}
        <td>
          <div className="action">
            <div className="icons" onClick={handleDeleteProduct}>
              <BsTrash />
            </div>
            <div className="icons" onClick={handleEditProduct}>
              <MdEdit />
            </div>
          </div>
        </td>
      </tr>
    </>
  );
}
