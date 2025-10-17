import React, { useState } from 'react';
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from '@react-google-maps/api';
import { Business } from '../types';

const containerStyle = {
  width: '100%',
  height: '100%',
  borderRadius: '0.5rem',
};

const center = {
  lat: 35.17,
  lng: -2.93
};

interface InteractiveMapProps {
  businesses: Business[];
}

const InteractiveMap: React.FC<InteractiveMapProps> = ({ businesses }) => {
  const { isLoaded, loadError } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.API_KEY || "", // Fallback to empty string
  });

  const [selectedBusiness, setSelectedBusiness] = useState<Business | null>(null);

  if (loadError) {
    return <div>La carte n'a pas pu être chargée.</div>;
  }

  if (!isLoaded) {
    return (
        <div className="flex items-center justify-center w-full h-full bg-gray-200 dark:bg-gray-700 rounded-lg">
            <p className="text-gray-600 dark:text-gray-300">Chargement de la carte...</p>
        </div>
    );
  }

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={13}
      options={{
        disableDefaultUI: true,
        zoomControl: true,
      }}
    >
      {businesses.map((business) => (
        <Marker
          key={business.id}
          position={business.coordinates}
          onClick={() => setSelectedBusiness(business)}
        />
      ))}

      {selectedBusiness && (
        <InfoWindow
          position={selectedBusiness.coordinates}
          onCloseClick={() => setSelectedBusiness(null)}
        >
          <div className="p-2 text-left">
            <h4 className="font-bold text-gray-800">{selectedBusiness.name}</h4>
            <p className="text-sm text-gray-600">{selectedBusiness.address}</p>
            <a href={`https://www.google.com/maps?q=${selectedBusiness.coordinates.lat},${selectedBusiness.coordinates.lng}`} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-xs">
              Itinéraire
            </a>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
};

export default InteractiveMap;