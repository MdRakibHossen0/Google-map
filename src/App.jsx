// import { Map } from "@vis.gl/react-google-maps";
import "./App.css";
import { GoogleMap, LoadScript } from '@react-google-maps/api';
// import { googleMapAPIKey } from "./map-api-key";

const containerStyle = {
  width: '500px',
  height: '400px',
};

const center = {
  lat: 23.8103,  // Example: Dhaka
  lng: 90.4125,
};
function App() {
  return (
    <>
      {/* <Map
        style={{ width: "100vw", height: "100vh" }}
        defaultCenter={{ lat: 22.54992, lng: 0 }}
        defaultZoom={15}
        gestureHandling={"greedy"}
        disableDefaultUI={true}
      /> */}
      {/* react googles map */}
      {/* google map key problem search this youtube How to Get Google Maps API for FREE (No Billing Required) | Step-by-Step
      Guide | 2025 */}
      <LoadScript googleMapsApiKey={"AIzaSyAQEJmp9Bs7XnOsfqCHG0CSXtqZ_8XpVLU"}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={12}
        ></GoogleMap>
      </LoadScript>
    </>
  );
}

export default App;
