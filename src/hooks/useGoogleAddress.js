import { useState, useEffect } from 'react';

const useGoogleAddress = (address) => {
  const [map, setMap] = useState({});
  const API = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${process.env.GOOGLE_MAPS_API_KEY}`;

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(API);
      const jsonRes = await res.json();
      setMap(jsonRes.results[0].geometry.location);
    }
    fetchData();
  }, []);

  return map;
}

export { useGoogleAddress }