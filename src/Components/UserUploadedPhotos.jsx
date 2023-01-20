import "./userUploadedPhotos.css";
import React from "react";

const UserUploadedPhotos = () => {
  return (
    <div className="UserUploadedPhotos">
      <div className="UserUploadedPhotosWrapper">
        <img
          src="https://www.bricesuazo.com/assets/img/logo.png"
          alt=""
          className="userUploadedPhoto"
        />
        <img
          src="https://github.com/bricesuazo.png"
          alt=""
          className="userUploadedPhoto"
        />
        <img
          src="https://pbs.twimg.com/media/FAC_oMlVkAkIlVL?format=jpg&name=large"
          alt=""
          className="userUploadedPhoto"
        />
        <img
          src="https://pbs.twimg.com/media/E_epGHkVQAENkNj?format=jpg&name=large"
          alt=""
          className="userUploadedPhoto"
        />
        <img
          src="https://pbs.twimg.com/media/E_KiIYIVIAMdZej?format=jpg&name=large"
          alt=""
          className="userUploadedPhoto"
        />
        <img
          src="https://pbs.twimg.com/media/E-0h1L4UUAAPvCi?format=jpg&name=medium"
          alt=""
          className="userUploadedPhoto"
        />
      </div>
    </div>
  );
};

export default UserUploadedPhotos;
