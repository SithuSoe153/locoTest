import { useMemo } from "react";
import PropTypes from "prop-types";
import "./BackgroundShadow.css";

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
      className={`backgroundshadow7 ${className}`}
      style={backgroundShadowStyle}
    >
      <div className="total-active-users">{totalActiveUsers}</div>
      <div className="user-count">
        <div className="user-number">
          <div className="value-container">
            <img
              className="user-value-icon"
              loading="lazy"
              alt=""
              src={userValue}
            />
            <div className="count-label">
              <b className="count-value">{countValue}</b>
            </div>
          </div>
          <b className="installed-statistics">{installedStatistics}</b>
        </div>
        <div className="download-statistics">
          <div className="container264">
            <img className="svg-icon34" loading="lazy" alt="" src={sVG} />
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
