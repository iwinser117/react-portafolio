// src/hooks/useGeoLocation.js
import {
    useState,
    useEffect
} from 'react';

export const useGeoLocation = () => {
    const [country, setCountry] = useState(null);
    const [countryCode, setCountryCode] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Opciones gratuitas: ipapi.co, ip-api.com, geojs.io
        fetch('https://ipapi.co/json/')
            .then(res => res.json())
            .then(data => {
                setCountry(data.country_name); // "Colombia"
                setCountryCode(data.country_code); // "CO"
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, []);

    return {
        country,
        countryCode,
        loading
    };
};