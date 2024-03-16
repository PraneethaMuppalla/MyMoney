import React, { useState, useEffect } from "react";

import axiosInstance from "../../utils/constants";
import ProfileDetails from "./ProfileDetails";
import IncompleteProfile from "./IncompleteProfile";
import CompleteProfile from "./CompleteProfile";

const SecondNavBar = () => {
  const [isProfileComplete, setIsProfileComplete] = useState(false);
  const [userDetails, setUserDetails] = useState({});

  const [showUserDetails, setShowUserDetails] = useState(false);
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const getUserDetails = async () => {
    try {
      const response = await axiosInstance.get("/user/get-details");
      // setIsProfileComplete(response.data.)
      if (response?.data?.user?.isProfileComplete === true) {
        setIsProfileComplete(true);
      }
      console.log(response.data?.user?.profilePicture);
      const nameFromBackend = response?.data?.user?.name;
      const imageUrlFromBackend = response.data?.user?.profilePicture;
      setName(nameFromBackend);
      setImageUrl(imageUrlFromBackend);
    } catch (err) {
      console.error(err);
    }
  };
  const updateUserDetails = async (name, profilePicture) => {
    try {
      let profilePic = profilePicture ? profilePicture : null;
      const response = await axiosInstance.put("/user/update-details", {
        name,
        profilePic,
      });
      console.log(response);
      hideUserDetailsHandler();
      getUserDetails();
    } catch (err) {
      console.error(err);
      alert("Update failed");
    }
  };

  const showUserDetailsHandler = () => {
    setShowUserDetails(true);
  };

  const hideUserDetailsHandler = () => {
    setShowUserDetails(false);
  };

  useEffect(() => {
    getUserDetails();
  }, []);

  console.log(name);
  return (
    <>
      <nav className="h-12 md:h-14  px-6 md:px-20 lg:px-40 bottom-shadow bg-white flex items-center">
        {!isProfileComplete && (
          <IncompleteProfile showDetails={showUserDetailsHandler} />
        )}
        {isProfileComplete && (
          <CompleteProfile name={name} imageUrl={imageUrl} />
        )}
      </nav>
      {showUserDetails && (
        <ProfileDetails
          onClose={hideUserDetailsHandler}
          name={name}
          imageUrl={imageUrl}
          onUpdate={updateUserDetails}
        />
      )}
    </>
  );
};

export default SecondNavBar;
