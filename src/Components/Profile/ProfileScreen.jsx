import React, { useState } from "react";
import { useSelector } from "react-redux";
import { usePaystackPayment } from "react-paystack";
import { v4 as uuidv4 } from "uuid";
import { selectUser } from "../../features/userSlice";
import Navigation from "../Home/Navigation/Navigation";
import Footer from "../HomePage/Footer";
import { auth } from "../SignUp/firebase";
import "./ProfileScreen.css";
// import PlanScreen from "./PlanScreen";
import db from "../SignUp/firebase";

const ProfileScreen = (props) => {
  const user = useSelector(selectUser);
  const signoutHandler = () => {
    auth.signOut();
  };

  //paystack
  const config = {
    // reference: uuidv4(),
    // plan: "PLN_dr0a0pyjdv2m5a1",
    email: user.email,
    // amount: 20000, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
    publicKey: "pk_test_814eb5c18487e8a834f0f9ddffc0f7f28fdd9dee",
  };

  // you can call this function anything

  const PaystackHookExample = () => {
    const [reference, setReference] = useState(uuidv4());
    const [plans, setPlans] = useState("");

    const initializePayment = usePaystackPayment({
      ...config,
      plan: plans,
      reference: reference,
    });

    const onSuccess = (reference) => {
      // Implementation for whatever you want to do with reference and after success call.
      // setPlans("");
      console.log(reference);
    };

    // you can call this function anything
    const onClose = () => {
      // setPlans("");
      // implementation for  whatever you want to do when the Paystack dialog closed.
      console.log("closed");
    };
    const writeToDb = () => {
      db.collection("customers").add({
        uid: user.uid,
        paystack_plan: plans,
        human: true,
      });
    };

    const handlePayment = (typeOfPlan) => {
      const plans = {
        basic: "PLN_cvpog1eut4q7fya", // 2900
        standard: "PLN_9aujnb9omyo0qpv", //3600
        premium: "PLN_dr0a0pyjdv2m5a1", //4400
      };

      // setReference
      setReference(uuidv4());
      setPlans(plans[typeOfPlan]);

      //
      // init
      initializePayment(onSuccess, onClose);
    };

    return (
      <div>
        <div className="planscreen_plan">
          <div className="planscreen_info">
            <h3>Basic plan</h3>
            <h5>720p</h5>
          </div>
          <div className="planscreen_btn">
            <button
              onClick={() => {
                handlePayment("basic") && writeToDb();
              }}
            >
              Basic
            </button>
          </div>
          <div className="planscreen_info">
            <h3>Basic plan</h3>
            <h5>1080p</h5>
          </div>
          <button
            onClick={() => {
              handlePayment("standard");
            }}
          >
            Standard
          </button>
          <div className="planscreen_info">
            <h3>Basic plan</h3>
            <h5>4k + HDR</h5>
          </div>
          <button
            onClick={() => {
              handlePayment("premium");
            }}
          >
            Premium
          </button>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="profilescreen">
        <Navigation />
        <div className="profile_screen-body">
          <h1>Edit profile</h1>
          <div className="profile_screen-info">
            <img
              src="https://i.pinimg.com/originals/b6/77/cd/b677cd1cde292f261166533d6fe75872.png"
              alt="profile-avatar"
            />
            <div className="profile_screen-details">
              <h2>{user.email}</h2>
              <div className="profile_screen-plans">
                <h3>Plans</h3>
                <PaystackHookExample />

                <button
                  onClick={signoutHandler}
                  className="profile_screen-signout"
                >
                  Sign out
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProfileScreen;
