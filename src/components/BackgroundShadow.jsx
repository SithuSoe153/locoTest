import { useMemo } from "react";
import PropTypes from "prop-types";

const BackgroundShadow = ({
  className = "",
  totalActiveUsers,
  userValue,
  countValue,
  installedStatistics,
  sVG,
  propPadding,
}) => {
  const backgroundShadowStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div
      className={`flex-1 shadow-[0px_0px_2px_rgba(145,_158,_171,_0.2),_0px_12px_24px_-4px_rgba(145,_158,_171,_0.12)] rounded-2xl bg-muicom-nero overflow-hidden flex flex-col items-start justify-start py-6 pr-[23px] pl-6 box-border gap-[16px] min-w-[243px] max-w-full text-left text-sm text-muicom-ebony-clay font-muicom-public-sans-bold-12-title ${className}`}
      style={backgroundShadowStyle}
    >
      <div className="relative leading-[22px] font-semibold">
        {totalActiveUsers}
      </div>
      <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq450:flex-wrap">
        <div className="flex flex-col items-start justify-start gap-[8px]">
          <div className="flex flex-row items-start justify-start gap-[8px]">
            <img
              className="h-6 w-6 relative min-h-[24px]"
              loading="lazy"
              alt=""
              src={userValue}
            />
            <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
              <b className="relative leading-[22px] font-semibold">
                {countValue}
              </b>
            </div>
          </div>
          <b className="relative text-13xl leading-[48px] font-bold mq450:text-lgi mq450:leading-[29px] mq975:text-7xl mq975:leading-[38px]">
            {installedStatistics}
          </b>
        </div>
        <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
          <div className="flex flex-row items-start justify-start min-h-[36px]">
            <img
              className="h-9 w-[60px] relative object-cover"
              loading="lazy"
              alt=""
              src={sVG}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

BackgroundShadow.propTypes = {
  className: PropTypes.string,
  totalActiveUsers: PropTypes.string,
  userValue: PropTypes.string,
  countValue: PropTypes.string,
  installedStatistics: PropTypes.string,
  sVG: PropTypes.string,

  /** Style props */
  propPadding: PropTypes.any,
};

export default BackgroundShadow;