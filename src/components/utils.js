const PUBLIC_URL =  process.env.PUBLIC_URL;

/** URL used to connect to the back-end of the application, picking between the
 * appropiate both for development and for production
 */
const BACKEND_URL =
  process.env.NODE_ENV === "production"
    ? "https://planes-de-estudio-backend.herokuapp.com/"
    : "http://localhost:5000/api";

export { PUBLIC_URL, BACKEND_URL };
