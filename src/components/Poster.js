import React, { useEffect, useState } from 'react'
import one from "./img/one.jpg";
import two from "./img/two.jpg";
import thr from "./img/thr.jpg";
import fou from "./img/fou.jpg";
import fiv from "./img/fiv.jpg";
import six from "./img/six.jpg";
import sev from "./img/sev.jpg";
import eig from "./img/eig.jpg";
import nin from "./img/nin.jpg";
import { useDispatch, useSelector } from 'react-redux';
function Poster({ph}) {
    let val="";
    const [disp, setdisp] = useState(0);
    for(let i=2;i<ph.length;i++)
    {
         val+=ph[i];
    }
    const dispatch = useDispatch();
    // let magic = "Magic",ans=0;
      setTimeout(() => {
    setmagic("Chiroo") 
    }, 4000);
    // const handleclick = () => { ans++;}
   const [magic, setmagic] = useState(val);
    return (
        <div>
            You Are totally Authenticated 
          &nbsp;  {magic}
        </div>
      );
}

export default Poster
