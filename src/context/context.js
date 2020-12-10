// *** NO LONGER IN USE *** //

// import { createContext } from "react";
// import React, { useState, useEffect } from "react";
// import Client from "../contentful";

// export const ContentfulContext = createContext({});

// export const ContentfulProvider = (props) => {
//   const [value, setValue] = useState({});

//   useEffect(() => {
//     Client.getEntries().then((res) => setValue(res.items[0]));
//   }, []);

//   return (
//     <ContentfulContext.Provider value={value}>
//       {props.children}
//     </ContentfulContext.Provider>
//   );
// };
