import { useMemo } from "react";
import PropTypes from "prop-types";

const Data = ({
  className = "",
  iNV1990,
  android,
  propPadding,
  propPadding1,
  propMinWidth,
}) => {
  const dataStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const data1Style = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  const androidStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div
      className={`self-stretch flex flex-row items-start justify-start pt-[23.2px] px-4 pb-[22px] relative text-left text-sm text-muicom-ebony-clay font-muicom-public-sans-bold-12-title border-b-[0.7px] border-dashed border-muicom-porcelain ${className}`}
      style={dataStyle}
    >
      <div className="relative leading-[22px] inline-block min-w-[60px]">
        {iNV1990}
      </div>
      <div
        className="w-[143.9px] !m-[0] absolute h-full top-[0px] right-[-143.8px] bottom-[0px] box-border flex flex-row items-start justify-start pt-[23.2px] px-4 pb-[22px] z-[1] border-b-[0.7px] border-dashed border-muicom-porcelain"
        style={data1Style}
      >
        <div
          className="relative leading-[22px] inline-block min-w-[52px]"
          style={androidStyle}
        >
          {android}
        </div>
      </div>
    </div>
  );
};

Data.propTypes = {
  className: PropTypes.string,
  iNV1990: PropTypes.string,
  android: PropTypes.string,

  /** Style props */
  propPadding: PropTypes.any,
  propPadding1: PropTypes.any,
  propMinWidth: PropTypes.any,
};

export default Data;
