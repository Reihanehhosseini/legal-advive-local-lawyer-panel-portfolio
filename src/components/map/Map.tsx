
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import LocationMarker from "./LocationMarker";


export default function Map() {


  return (
    <MapContainer
      center={[32.6588891771765, 51.671623860659246]}
      zoom={10}
      style={{ height: "192px", width: "100%" }}
      className="rounded-2xl"
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[32.6588891771765, 51.671623860659246]}>
        <Popup>
          شما اینجا هستید
        </Popup>
      </Marker>
      <LocationMarker/>
    </MapContainer>
  );
}
