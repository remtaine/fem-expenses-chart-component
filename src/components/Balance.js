import React from "react";
import PropTypes from "prop-types";
import Logo from "../images/logo.svg";

function Balance(props) {
  return (
    <div className="flex justify-between">
      <div className="text-fem-600">
        <h2 className="text-xs">My balance</h2>
        <h3 className="font-bold text-xl">$921.48</h3>
      </div>
      <img src={Logo} alt="" className="" />
    </div>
  );
}

Balance.propTypes = {};

export default Balance;
