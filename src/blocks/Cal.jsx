import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
function Calendar() {
  useEffect(()=>{
    (async function () {
      const cal = await getCalApi();
      cal("ui", {"styles":{"branding":{"brandColor":"#000000"}},"hideEventTypeDetails":false});
    })();
  }, [])
  return <Cal calLink="tony/30min" style={{width:"100%",height:"100%",overflow:"scroll"}} />;
}
export default Calendar;