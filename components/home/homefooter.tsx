"use client";
import { useState, useEffect } from "react";
import { Separator } from "@/components/ui/separator";
interface Location {
  latitude: number;
  longitude: number;
}
function HomeFooter() {
  const [mensen, setMensen] = useState("loading..");
  const [location, setLocation] = useState<Location>({
    latitude: 0,
    longitude: 0,
  });

  const fetchApiData = async ({ latitude, longitude }: Location) => {
    const res = await fetch(
      `https://geocode.maps.co/reverse?lat=${latitude}&lon=${longitude}&api_key=679f8a976744d763836007cul19af78`
    );
    const data = await res
      .json()
      .then((val) => val.display_name)
      .then((val) => val.split(","))
      .then((val) => val[val.length - 1]);
    setMensen(data);
  };

  useEffect(() => {
    if ("geolocation" in navigator) {
      // Retrieve latitude & longitude coordinates from `navigator.geolocation` Web API
      navigator.geolocation.getCurrentPosition(({ coords }) => {
        const { latitude, longitude } = coords;
        setLocation({ latitude, longitude });
      });
    }
  }, []);

  useEffect(() => {
    // Fetch data from API if `location` object is set
    if (location) {
      fetchApiData(location);
    }
  }, [location]);
  return (
    <footer className="fixed bottom-0 w-full bg-gray-100 p-4">
      <div className="pb-1">{mensen}</div>
      <Separator />
      <div className="flex justify-between gap-3 pt-1">
        <div className="flex gap-4">
          <div>Advertising</div>
          <div>Business</div>
          <div>How Search works</div>
        </div>
        <div className="flex gap-3">
          <div>Privacy</div>
          <div>Terms</div>
          <div>Settings</div>
        </div>
      </div>
    </footer>
  );
}

export default HomeFooter;
