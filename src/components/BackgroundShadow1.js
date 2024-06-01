import { useMemo } from "react";
import PropTypes from "prop-types";

const BackgroundShadow = ({
  className = "",
  heading6TotalActiveUsers,
  prop,
  heading318765,
  container,
  propMinWidth,
  propMinWidth1,
}) => {
  const heading6Style = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const heading3Style = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  return (
    <div
      className={`flex-1 shadow-[0px_0px_2px_rgba(145,_158,_171,_0.2),_0px_12px_24px_-4px_rgba(145,_158,_171,_0.12)] rounded-2xl bg-muicom-nero overflow-hidden flex flex-col items-start justify-start p-6 box-border gap-[16px] min-w-[243px] max-w-full text-left text-sm text-muicom-ebony-clay font-muicom-public-sans-bold-12-title ${className}`}
    >
      <div
        className="relative leading-[22px] font-semibold inline-block min-w-[120px]"
        style={heading6Style}
      >
        {heading6TotalActiveUsers}
      </div>
      <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq450:flex-wrap">
        <div className="flex flex-col items-start justify-start gap-[8px]">
          <div className="flex flex-row items-start justify-start gap-[8px]">
            <img
              className="h-6 w-6 relative min-h-[24px]"
              loading="lazy"
              alt=""
              src="/frame-9.svg"
            />
            <b className="relative leading-[22px] font-semibold inline-block min-w-[43px]">
              {prop}
            </b>
          </div>
          <b
            className="relative text-13xl leading-[48px] font-bold inline-block min-w-[104.3px] mq450:text-lgi mq450:leading-[29px] mq1050:text-7xl mq1050:leading-[38px]"
            style={heading3Style}
          >
            {heading318765}
          </b>
        </div>
        <div className="w-[60px] flex flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border">
          <img
            className="self-stretch h-9 relative max-w-full overflow-hidden shrink-0 object-cover"
            loading="lazy"
            alt=""
            src={container}
          />
        </div>
      </div>
    </div>
  );
};

BackgroundShadow.propTypes = {
  className: PropTypes.string,
  heading6TotalActiveUsers: PropTypes.string,
  prop: PropTypes.string,
  heading318765: PropTypes.string,
  container: PropTypes.string,

  /** Style props */
  propMinWidth: PropTypes.any,
  propMinWidth1: PropTypes.any,
};

export default BackgroundShadow;
