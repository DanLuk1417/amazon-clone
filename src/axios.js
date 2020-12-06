import axios from "axios";

const instance = axios.create({
    // In order to get https in the firebase, the plan must be upgraded to Blaze plan - it is free, but a card must be entered. Then the deployment in the functions is done, and the link that is obtained is entered here instead of the localhost
    // this url is fake-must bi right one - looks something like this ->"https://us-central1-clone-b30e2.cloudfunctions.net/api"
    baseURL: "https://clone-b30e2--amazon-clone-y01wpxji.web.app" //istice 12-12
    //"http://localhost:5001/clone-b30e2/us-central1/api" // The API (cloud function) URL
});

export default instance;