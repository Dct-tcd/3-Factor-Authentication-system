import React, { useEffect, useState } from "react";
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

import { useSelector, useDispatch } from "react-redux";

function Thir({ list, ph }) {
  const [combi, setcombi] = useState("");
  const [val, setval] = useState(0);

  const dispatch = useDispatch();
  //   const { combo } = useSelector((state) => {
  //   return state;
  // });

  const [style1, setstyle1] = useState(0);
  const [style2, setstyle2] = useState(0);
  const [style3, setstyle3] = useState(0);
  const [style4, setstyle4] = useState(0);
  const [style5, setstyle5] = useState(0);
  const [style6, setstyle6] = useState(0);
  const [style7, setstyle7] = useState(0);
  const [style8, setstyle8] = useState(0);
  const [style9, setstyle9] = useState(0);
  //  useEffect(() => {
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

    dispatch({ type: "combo_change", payload: num });
  };

  const { combo } = useSelector((state) => {
    return state;
  });

  let finalCombo = "";

  useEffect(() => {
    for (let i = 0; i < 16; i++) {
      if (combo[i] != ",") finalCombo += combo[i];
    }

    list.forEach((ele) => {
      if (finalCombo == ele.combo && ph == "91" + ele.phone) setval(1);
    });
    console.log(finalCombo, val, ph, list);
  }, [combo.length == 16]);

  const nullclick = () => {
    combi = combi;
  };
  return (
    <div className="flex justify-center">
      {val == 1 ? (
        <Poster ph={ph} />
      ) : (
        <div>
          <div className="mb-2">Enter your combination :</div>
          <div
            className="flex justify-center flex-wrap"
            style={{ width: "40%", marginLeft: "30%",marginTop: window.screen.width >=1000 ? "5%" : window.screen.width>=700 ? "35%" : "175%" }}
          >
            <img
              src={one}
              className="w-32 h-32 border-solid   m-1 "
              style={{ border: style1 == 1 ? "solid" : "" }}
              onClick={() => {
                handleClick(1);
              }}
            ></img>
            <img
              src={two}
              className="w-32 h-32 focus:border-l-cyan-100 m-1"
              style={{ border: style2 == 1 ? "solid" : "" }}
              onClick={() => {
                handleClick(2);
              }}
            ></img>
            <img
              src={thr}
              style={{ border: style3 == 1 ? "solid" : "" }}
              className="w-32 h-32 focus:border-l-cyan-100 m-1"
              onClick={() => {
                handleClick(3);
              }}
            ></img>
            <img
              src={fou}
              className="w-32 h-32 focus:border-l-cyan-100 m-1"
              style={{ border: style4 == 1 ? "solid" : "" }}
              onClick={() => {
                handleClick(4);
              }}
            ></img>
            <img
              src={fiv}
              className="w-32 h-32 focus:border-l-cyan-100 m-1"
              style={{ border: style5 == 1 ? "solid" : "" }}
              onClick={() => {
                handleClick(5);
              }}
            ></img>
            <img
              src={six}
              className="w-32 h-32 focus:border-l-cyan-100 m-1"
              style={{ border: style6 == 1 ? "solid" : "" }}
              onClick={() => {
                handleClick(6);
              }}
            ></img>
            <img
              src={sev}
              className="w-32 h-32 focus:border-l-cyan-100 m-1"
              style={{ border: style7 == 1 ? "solid" : "" }}
              onClick={() => {
                handleClick(7);
              }}
            ></img>
            <img
              src={eig}
              className="w-32 h-32 focus:border-l-cyan-100 m-1"
              style={{ border: style8 == 1 ? "solid" : "" }}
              onClick={() => {
                handleClick(8);
              }}
            ></img>
            <img
              src={nin}
              className="w-32 h-32 focus:border-l-cyan-100 m-1"
              style={{ border: style9 == 1 ? "solid" : "" }}
              onClick={() => {
                handleClick(9);
              }}
            ></img>
          </div>
        </div>
      )}
    </div>
  );
}

export default Thir;
