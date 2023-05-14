import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth, googleProvider } from "../config/firebase";
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
import Sec from "./sec";
import Thir from "./thir";

function Fir({ AuthStatus, setAuthStatus ,Id ,setId}) {
  const [AuthStatus2, setAuthStatus2] = useState("")
    const [email, setemail] = useState("");
  const [list, setlist] = useState([]);
  const [password, setpassword] = useState("");
  //   const [AuthStatus, setAuthStatus] = useState("UnAuthenticated");
  const [error, seterror] = useState(false);

  const handlesubmit = (e) => {
    e.preventDefault();
    console.log(email, "   crr ", password);
    //  register();
    list.forEach((ele) => {
      if (ele.email == email && ele.password == password)
        {setAuthStatus("Authenticated1");
    //    setId(ele.id);
    }
      // console.log(1);
    });
    // if (AuthStatus=="Authenticated1")
    AuthStatus!="Authenticated1"?seterror(true):seterror(false);
    console.log(Id);
    getlist();
    //  signin(email,password);
  };
  //   const signin = async (email, password) => {
  //     try {
  //       await signInWithEmailAndPassword(auth, email, password, googleProvider);
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   };
  const messagesCollectionRef = collection(db, "messages");

  const register = async () => {
    const ans = new Date().toLocaleString();
    await addDoc(messagesCollectionRef, {
      createdAt: ans,
      email: email,
      password: password,
      phone:"",
      combo:"",
    });
    getlist();
  };
  const getlist = async () => {
    try {
      // Query
      // conversationReference
      // const chatQuery = conversationReference.orderByChild("createdAt"). limitToLast(20);
      const q = query(messagesCollectionRef, orderBy("createdAt"));
      // console.log(username, "1");
      const data = await getDocs(q);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      //   console.log(chatQuery);
      //   filteredData.sort((a, b) => a.createdAt.toMillis() - b.createdAt.toMillis()) ;
      console.log(filteredData);
      setlist(filteredData);
    } catch (err) {
      console.error(err);
    }

    // window.scrollTo({ left: 0, bottom: 0, behavior: "smooth" });
    // document.getElementById("dummy").scrollIntoView(false,{ behaviour: "smooth" });
  };
  setTimeout(() => {
    seterror(false);
  }, 3000);

  // console.log(list);
  return (
    <div>
      {AuthStatus == "Authenticated1" ? (
        <Sec list={list} AuthStatus={AuthStatus2} setAuthStatus={setAuthStatus2} />
      ) : (
        <div className=" flex   justify-center ">
    
        <form onSubmit={handlesubmit}  className="mt-48 ">
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
          <h1
            className="text-red-600"
            style={{visibility:`${error==true?"visible":"hidden"}`}}

            // visibility={"hidden"}
          >
            Incorrect credentials
          </h1>
          <div className="flex justify-around">
            {" "}
            <button className="p-2 bg-blue-600   rounded-lg text-gray-100 ">
              Submit
            </button>
        
          </div>
        </form>
        
        </div>
      )}
      
      {/* <button className="p-2  bg-blue-600   rounded-lg text-gray-100 ">
              Register
        </button> */}
    </div>
  );
}
export default Fir;
