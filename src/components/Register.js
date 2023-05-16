import React, { useEffect, useState } from "react";
import { db } from "../config/firebase";
import {
  getDocs,
  collection,
  addDoc,
  deleteDoc,
  updateDoc,
  doc,
  query,
  orderBy,
  limit,
  uid,
} from "firebase/firestore";
import one from "./img/one.jpg";
import two from "./img/two.jpg";
import thr from "./img/thr.jpg";
import fou from "./img/fou.jpg";
import fiv from "./img/fiv.jpg";
import six from "./img/six.jpg";
import sev from "./img/sev.jpg";
import eig from "./img/eig.jpg";
import nin from "./img/nin.jpg";
import Poster from "./Poster";

function Register() {
  // useState

  const [style1, setstyle1] = useState(0);
  const [style2, setstyle2] = useState(0);
  const [style3, setstyle3] = useState(0);
  const [style4, setstyle4] = useState(0);
  const [style5, setstyle5] = useState(0);
  const [style6, setstyle6] = useState(0);
  const [style7, setstyle7] = useState(0);
  const [style8, setstyle8] = useState(0);
  const [style9, setstyle9] = useState(0);
  const [regcombo, setregcombo] = useState("");

  // const [one, setone] = useState(0);
  // const [two, settwo] = useState(0);
  // const [thr, setthr] = useState(0);
  // const [fou, setfou] = useState(0);
  // const [fiv, setfiv] = useState(0);
  // const [dix, setsix] = useState(0);
  // const [sev, setsev] = useState(0);
  // const [eig, seteig] = useState(0);
  // const [nin, setnin] = useState(0);
  const [ph, setph] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const messagesCollectionRef = collection(db, "messages");

  const handleClick = (num) => {
    // setstyle`${num}`()
    if (num == 1) setstyle1(1);
    if (num == 2) setstyle2(1);
    if (num == 3) setstyle3(1);
    if (num == 4) setstyle4(1);
    if (num == 5) setstyle5(1);
    if (num == 6) setstyle6(1);
    if (num == 7) setstyle7(1);
    if (num == 8) setstyle8(1);
    if (num == 9) setstyle9(1);

    // dispatch({ type: "combo_change", payload: num });
  };
  //   const handlesubmit = () => {
  const register = async (e) => {
    // alert(1);
    // console.log("222");
    e.preventDefault();
    const ans = new Date().toLocaleString();
    await addDoc(messagesCollectionRef, {
      createdAt: ans,
      email: email,
      password: password,
      phone:ph,
      combo:regcombo,
    });
    console.log(1);
    alert("Registered Mate");
    // getlist();
  };
//   console.log(regcombo);
  //   }
  return (
    <div className="flex justify-center m-5">
      <form onSubmit={register}>
        <div className=" flex   justify-center ">
          <div className="mt-48 ">
            <label>Email</label>

            <input
              className=" border p-1  border-cyan-400 rounded m-4 "
              onChange={(e) => setemail(e.target.value)}
            />
            <br />
            <label>Password</label>
            <input
              className=" border p-1 border-cyan-400 rounded m-4 "
              onChange={(e) => setpassword(e.target.value)}
            />

            <br />
            <label>Phone Number</label>
            <input
              className=" border p-1 border-cyan-400 rounded m-4 "
              onChange={(e) => setph(e.target.value)}
            />
            <div className="flex justify-around">
              {" "}
              {/* <button className="p-2 bg-blue-600   rounded-lg text-gray-100 ">
          submit
        </button> */}
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          Select 5 Images : <div
            className="flex justify-center flex-wrap "
            style={{ width: "40%" }}
          >
              
        
            <img
              src={one}
              className="w-32 h-32 border-solid pointer-events-auto  m-1 "
              style={{ border: style1 == 1 ? "solid" : "" }}
              onClick={() => {
                setregcombo(regcombo + "1");
                handleClick(1);
              }}
            ></img>
            <img
              src={two}
              className="w-32 h-32 focus:border-l-cyan-100 m-1"
              style={{ border: style2 == 1 ? "solid" : "" }}
              onClick={() => {
                setregcombo(regcombo + "2");
                handleClick(2);
              }}
            ></img>
            <img
              src={thr}
              style={{ border: style3 == 1 ? "solid" : "" }}
              className="w-32 h-32 focus:border-l-cyan-100 m-1"
              onClick={() => {
                setregcombo(regcombo + "3");
                handleClick(3);
              }}
            ></img>
            <img
              src={fou}
              className="w-32 h-32 focus:border-l-cyan-100 m-1"
              style={{ border: style4 == 1 ? "solid" : "" }}
              onClick={() => {
                setregcombo(regcombo + "4");
                handleClick(4);
              }}
            ></img>
            <img
              src={fiv}
              className="w-32 h-32 focus:border-l-cyan-100 m-1"
              style={{ border: style5 == 1 ? "solid" : "" }}
              onClick={() => {
                setregcombo(regcombo + "5");
                handleClick(5);
              }}
            ></img>
            <img
              src={six}
              className="w-32 h-32 focus:border-l-cyan-100 m-1"
              style={{ border: style6 == 1 ? "solid" : "" }}
              onClick={() => {
                setregcombo(regcombo + "6");
                handleClick(6);
              }}
            ></img>
            <img
              src={sev}
              className="w-32 h-32 focus:border-l-cyan-100 m-1"
              style={{ border: style7 == 1 ? "solid" : "" }}
              onClick={() => {
                setregcombo(regcombo + "7");
                handleClick(7);
              }}
            ></img>
            <img
              src={eig}
              className="w-32 h-32 focus:border-l-cyan-100 m-1"
              style={{ border: style8 == 1 ? "solid" : "" }}
              onClick={() => {
                setregcombo(regcombo + "8");
                handleClick(8);
              }}
            ></img>
            <img
              src={nin}
              className="w-32 h-32 focus:border-l-cyan-100 m-1"
              style={{ border: style9 == 1 ? "solid" : "" }}
              onClick={() => {
                setregcombo(regcombo + "9");
                handleClick(9);
              }}
            ></img>
          </div>
        </div>
          <div className="flex justify-center">        
            <button
        //   style={{ display: buttonvis }}
          className="p-2 bg-blue-600 mt-12 mb-12 flex justify-center rounded-lg text-gray-100 mr-3"
        //   onClick={handle2}
        >Register</button>
        </div>

      </form>
    </div>
  );
}

export default Register;
