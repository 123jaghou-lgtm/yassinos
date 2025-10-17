import React from 'react';

const MapPlaceholder: React.FC = () => {
  return (
    <div className="relative bg-gray-300 dark:bg-gray-700 rounded-lg h-96 w-full flex items-center justify-center text-center p-4">
      {/* 
        This is a placeholder for Google Maps.
        To implement, you would use a library like '@react-google-maps/api'.
        You'll need a Google Maps API key.

        Example usage:
        <GoogleMap
          mapContainerStyle={{ height: '100%', width: '100%' }}
          center={{ lat: 35.17, lng: -2.93 }}
          zoom={13}
        >
          {BUSINESSES.map(business => (
            <Marker key={business.id} position={business.coordinates} />
          ))}
        </GoogleMap>
      */}
      <div className="z-10 bg-black bg-opacity-50 p-6 rounded-lg">
          <h3 className="text-2xl font-bold text-white">الخريطة التفاعلية</h3>
          <p className="text-gray-200 mt-2">تكامل خرائط جوجل يتطلب مفتاح API.</p>
          <p className="text-gray-200">هذه مجرد معاينة بصرية.</p>
      </div>
      <img 
        src="https://picsum.photos/seed/nador-map/1200/600" 
        alt="Map of Nador" 
        className="absolute top-0 left-0 w-full h-full object-cover rounded-lg opacity-50"
      />
    </div>
  );
};

export default MapPlaceholder;