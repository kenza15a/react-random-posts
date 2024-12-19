import React from "react";
import ReCAPTCHA from "react-google-recaptcha";

const ReacaptchaComponent = ({ sitekey, onChange }) => {
  return (
    <>
      <div className="w-full flex flex-row justify-center items-center pl-8 md:pl-0">
        <ReCAPTCHA sitekey={sitekey} onChange={onChange} className="w-full" />
      </div>
    </>
  );
};

export default ReacaptchaComponent;
