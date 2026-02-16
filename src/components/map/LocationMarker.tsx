import { type LatLngExpression } from "leaflet";
import { useState } from "react";
import { Marker, Popup, useMapEvents } from "react-leaflet";

export default function LocationMarker() {
  const [position, setPosition] = useState<LatLngExpression | null>(null);

  const map = useMapEvents({
    click: () => {
      map.locate();
    },
    locationfound(e: any) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    },
  });

  return <>{position && <Marker position={position}>
    <Popup>
        موقعیت نهایی
    </Popup>
    </Marker>}</>;
}
