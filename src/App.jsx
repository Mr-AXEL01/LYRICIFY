import { useEffect, useState } from "react";

const App = () => {
    const accessToken = ""; //Replace with your Access Token obtained from Spotify API
    const [songData, setSongData] = useState(null);

    useEffect(() => {
        fetch(
            "https://api.spotify.com/v1/search?q=sweet%20child%20o%20mine%20artist:guns%20n%20roses&type=track&limit=1",
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            }
        )
            .then((response) => response.json())
            .then((data) => setSongData(data.tracks.items[0]));
    }, []);

    return (
        <div className="App">
           app.jsx
        </div>
    );
};

export default App;
