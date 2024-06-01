import { Button } from "@mui/material";
import PropTypes from "prop-types";

const Header = ({ className = "" }) => {
  return (
    <header
      className={`self-stretch bg-muicom-shark flex flex-row items-start justify-start shrink-0 [debug_commit:bf4bc93] top-[0] z-[99] sticky max-w-full text-left text-smi text-muicom-science-blue font-muicom-ibm-plex-sans-semibold-13 ${className}`}
    >
      <div className="flex-1 box-border flex flex-row items-end justify-start pt-[13.5px] pb-[13px] pr-[23px] pl-6 max-w-full border-b-[0.7px] border-solid border-muicom-botticelli">
        <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[4.4px]">
          <div className="flex flex-row items-start justify-start gap-[17.9px]">
            <img
              className="h-[33.5px] w-[33.5px] relative rounded-lg min-h-[34px]"
              loading="lazy"
              alt=""
              src="/link--back-to-product-page.svg"
            />
            <img
              className="self-stretch w-24 relative max-h-full object-contain min-h-[33px]"
              loading="lazy"
              alt=""
              src="/link--back-to-homepage--svg@2x.png"
            />
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[20.2px] box-border max-w-full">
          <div className="self-stretch h-px relative" />
        </div>
        <div className="w-[306.7px] flex flex-row items-end justify-start gap-[16px]">
          <Button
            className="h-[42.3px] flex-1 shadow-[0px_2px_0.5px_#3399ff_inset,_0px_-3px_1px_#0061c2_inset,_0px_2px_4px_rgba(11,_13,_14,_0.1)]"
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#fff",
              fontSize: "15",
              background: "#0073e6",
              borderRadius: "8px",
              "&:hover": { background: "#0073e6" },
              height: 42.3,
            }}
          >
            Buy now
          </Button>
          <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[3.7px]">
            <div className="rounded-lg flex flex-row items-start justify-start py-[5.9px] px-2 gap-[11px]">
              <a className="[text-decoration:none] relative leading-[23px] font-semibold text-[inherit] inline-block min-w-[88px] whitespace-nowrap">
                Remove frame
              </a>
              <div className="flex flex-col items-start justify-start pt-[2.4px] px-0 pb-0">
                <img
                  className="w-[18px] h-[18px] relative"
                  alt=""
                  src="/svg1.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;
