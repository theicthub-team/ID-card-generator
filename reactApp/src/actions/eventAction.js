import { CREATE_EVENT } from "./types";
import idgenerator from "../api/idgenerator";

export const createEvent = (eventInfo) => (dispatch) => {
  console.log(eventInfo);
  dispatch({ type: CREATE_EVENT });

  //   idgenerator
  //     .post("user/login", eventInfo)
  //     .then((response) => {
  //       dispatch({ type: SIGN_IN_SUCCESS, payload: response.data });
  //       history.push("/dashboard");
  //     })
  //     .catch((err) => {
  //       let errorMsg = "";

  //       try {
  //         errorMsg = err.response.data.detail;
  //       } catch (error) {
  //         errorMsg = err.message;
  //       }

  //       dispatch({ type: SIGN_IN_FAIL, payload: errorMsg });
  //       console.clear();
  //     });
};
