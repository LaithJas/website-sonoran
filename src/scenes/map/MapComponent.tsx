import React, { useEffect } from 'react';

declare global {
    interface Window {
        google: {
            maps: {
                Map: any;
                Marker: any;
            };
            initMap: () => void;
        };
    }
}

const MapComponent: React.FC = () => {
    useEffect(() => {
        // Define the initMap function
        function initMap(): void {
            const myLatLng = { lat: 33.41286600107683, lng: -111.87384797191163 };

            const map = new window.google.maps.Map(
                document.getElementById("map") as HTMLElement,
                {
                    zoom: 19,
                    center: myLatLng,
                }
            );

            new window.google.maps.Marker({
                position: myLatLng,
                map,
            });
        }

        // Attach the initMap function to the window object
        if (!window.google) {
            console.error("Google Maps API not loaded.");
            return;
        }

        window.google.initMap = initMap;

        // Load the Google Maps JavaScript API script
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyAaa1q_aPa90Lno-CvozJq4GWmKBLcLFAI&callback=initMap`;
        script.defer = true;
        script.async = true;
        document.head.appendChild(script);

        return () => {
            // Clean up: remove the script when the component unmounts
            document.head.removeChild(script);
            delete window.google.initMap;
        };
    }, []);

    return (
        <div id="map" style={{ width: '100%', height: '400px' }}></div>
    );
};

export default MapComponent;
