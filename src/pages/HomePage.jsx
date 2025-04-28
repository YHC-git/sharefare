import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: 37.7749, // Your default lat
  lng: -122.4194 // Your default lng
};

const HomePage = () => {
  return (
    <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        <Marker position={center} />
        {/* Add more markers or functionality as needed */}
      </GoogleMap>
    </LoadScript>
  );
};

export default HomePage;
