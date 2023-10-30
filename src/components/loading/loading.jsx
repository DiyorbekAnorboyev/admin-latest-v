import React from "react";

const Loading = ({ dataName }) => {
  return (
    <div className="w-100 h-100 d-flex align-items-center justify-content-center">
      <div className="text-center">
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <p>{dataName} yuklanmoqda...</p>
      </div>
    </div>
  );
};

export default Loading;
