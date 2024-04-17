import React from 'react';
import { Link } from 'react-router-dom';

const Track = props => {
  const { track } = props;

  return (
    <div className="md:w-1/2 px-4 mb-4">
      <div className="bg-white shadow-lg rounded-lg p-6">
        <div className="mb-4">
          <h5 className="text-xl font-bold">{track.artist_name}</h5>
          <p className="text-gray-700 text-base mt-2">
            <strong className="font-semibold">
              <i className="fas fa-play text-blue-500" /> Track
            </strong>
            : {track.track_name}
            <br />
            <strong className="font-semibold">
              <i className="fas fa-compact-disc text-blue-500" /> Album
            </strong>
            : {track.album_name}
          </p>
        </div>
        <Link
          to={`lyrics/track/${track.track_id}`}
          className="inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-200"
        >
          <i className="fas fa-chevron-right" /> View Lyrics
        </Link>
      </div>
    </div>
  );
};

export default Track;
