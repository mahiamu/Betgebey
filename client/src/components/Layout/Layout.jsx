import React, { useContext, useEffect } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import UserDetailContext from "../../context/UserDetailContext";
import { useMutation } from "react-query";
import { createUser } from "../../utils/api";
import useFavourites from "../../hooks/useFavourites";
import useBookings from "../../hooks/useBookings";
import Login from "../user/Login";

const Layout = () => {
  useFavourites();
  useBookings();

  const { setUserDetails } = useContext(UserDetailContext);

  // Mock user details, you can replace this with your own logic
  const isAuthenticated = false; // Replace with your authentication logic
  const user = { email: "example@example.com" }; // Replace with actual user details

  const { mutate } = useMutation({
    mutationKey: [user?.email],
    mutationFn: (token) => createUser(user?.email, token),
  });

  useEffect(() => {
    const getTokenAndRegister = async () => {
      // Replace this with your token fetching logic
      const token = "mock_token"; // Replace with actual token logic
      localStorage.setItem("access_token", token);
      setUserDetails((prev) => ({ ...prev, token }));
      mutate(token);
    };

    if (isAuthenticated) {
      getTokenAndRegister();
    }
  }, [isAuthenticated]);

  return (
    <>
      <div style={{ background: "var(--black)", overflow: "hidden" }}>
        <Header />
        <Login />
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
