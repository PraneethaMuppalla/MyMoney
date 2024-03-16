import React, { useState, useRef } from "react";
import Modal from "../Layout/Modal";

const ProfileDetails = (props) => {
  const [imageUrl, setImageUrl] = useState("");
  const nameInputRef = useRef();

  const changeProfilePicHandler = (e) => {
    setImageUrl(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const name = nameInputRef.current.value;
    const profilePicture = imageUrl.length > 0 ? imageUrl : null;
    props.onUpdate(name, profilePicture);
  };

  return (
    <Modal onClose={props.onClose}>
      <form onSubmit={submitHandler}>
        <div>
          <div className=" h-24 w-24  mx-auto">
            <img
              src={imageUrl ? imageUrl : props.imageUrl}
              className="h-full w-full rounded-[50%] border-2  border-green-700"
              alt="Profile Pic"
            />
          </div>
        </div>

        <div className=" mb-3">
          <label htmlFor="name" className="block para-font  text-base">
            Name
          </label>
          <input
            type="text"
            className="mt-3 block w-full px-3 py-2 border-2  rounded-md text-sm 
            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 required:"
            ref={nameInputRef}
            required
          />
        </div>
        <div className=" mb-3">
          <label htmlFor="imageUrl" className="block para-font  text-base">
            Profile Picture
          </label>
          <input
            type="url"
            className="mt-3 block w-full px-3 py-2 border-2  rounded-md text-sm 
            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 required:"
            value={imageUrl && imageUrl}
            onChange={changeProfilePicHandler}
          />
        </div>
        <button
          className="block para-font rounded text-white w-full py-2 text-base brand-bg-color mt-6 mb-4"
          type="submit"
        >
          Submit
        </button>
      </form>
    </Modal>
  );
};

export default ProfileDetails;
