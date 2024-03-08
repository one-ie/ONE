/* First make sure that you have installed the package */

/* If you are using yarn */
// yarn add @calcom/embed-react

/* If you are using npm */
// npm install @calcom/embed-react

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
export default function MyComponent() {
useEffect(()=>{
    (async function () {
      const cal = await getCalApi();
      cal("ui", {"theme":"dark","styles":{"branding":{"brandColor":"#000000"}},"hideEventTypeDetails":false});
    })();
  }, [])
  return <Cal calLink="rick/get-rick-rolled" style={{width:"100%",height:"100%",overflow:"scroll"}} />;
};

