import { useCallback } from "react";
import { Button } from "@mui/material";
import BackgroundShadow from "./BackgroundShadow";
import PropTypes from "prop-types";
import "./MuicomByHtmltodesignF.css";

const MuicomByHtmltodesignF = ({ className = "" }) => {
  const onLinkBackToProductPageClick = useCallback(() => {
    window.open("https://mui.com/store/items/minimal-dashboard/");
  }, []);

  const onLinkBackToHomepageClick = useCallback(() => {
    window.open("https://mui.com/store/");
  }, []);

  const onLinkContainerClick = useCallback(() => {
    window.open("https://minimals.cc/");
  }, []);

  const onLinkContainer2Click = useCallback(() => {
    window.open("https://minimals.cc/");
  }, []);

  const onLinkButtonClick = useCallback(() => {
    window.open("https://minimals.cc/dashboard");
  }, []);

  const onLinkButton1Click = useCallback(() => {
    window.open("https://minimals.cc/dashboard/ecommerce");
  }, []);

  const onLinkButton2Click = useCallback(() => {
    window.open("https://minimals.cc/dashboard/analytics");
  }, []);

  const onLinkButton3Click = useCallback(() => {
    window.open("https://minimals.cc/dashboard/banking");
  }, []);

  const onLinkButton4Click = useCallback(() => {
    window.open("https://minimals.cc/dashboard/booking");
  }, []);

  const onLinkButton5Click = useCallback(() => {
    window.open("https://minimals.cc/dashboard/file");
  }, []);

  const onLinkButton6Click = useCallback(() => {
    window.open("https://minimals.cc/dashboard/file-manager");
  }, []);

  const onLinkButton12Click = useCallback(() => {
    window.open("https://minimals.cc/dashboard/mail");
  }, []);

  const onLinkButton22Click = useCallback(() => {
    window.open("https://minimals.cc/dashboard/chat");
  }, []);

  const onLinkButton32Click = useCallback(() => {
    window.open("https://minimals.cc/dashboard/calendar");
  }, []);

  const onLinkButton42Click = useCallback(() => {
    window.open("https://minimals.cc/dashboard/kanban");
  }, []);

  const onLinkButton7Click = useCallback(() => {
    window.open("https://minimals.cc/dashboard/permission");
  }, []);

  const onLinkButton13Click = useCallback(() => {
    window.open("https://minimals.cc/dashboard#disabled");
  }, []);

  const onLinkButton23Click = useCallback(() => {
    window.open("https://minimals.cc/dashboard#label");
  }, []);

  const onLinkButton33Click = useCallback(() => {
    window.open("https://minimals.cc/dashboard#caption");
  }, []);

  const onLinkButton43Click = useCallback(() => {
    window.open("https://www.google.com/");
  }, []);

  const onLinkButton52Click = useCallback(() => {
    window.open("https://minimals.cc/dashboard/blank");
  }, []);

  const onLinkContainer3Click = useCallback(() => {
    window.open("https://mui.com/store/items/minimal-dashboard/");
  }, []);

  return (
    <div className={`muicom-by-htmltodesign-f ${className}`}>
      <header className="header">
        <div className="horizontalborder">
          <div className="back-link-wrapper">
            <div
              className="link-back-to-product-page"
              onClick={onLinkBackToProductPageClick}
            >
              <img className="svg-icon" loading="lazy" alt="" src="/svg.svg" />
            </div>
          </div>
          <div className="home-link-wrapper">
            <div
              className="link-back-to-homepage"
              onClick={onLinkBackToHomepageClick}
            >
              <img
                className="svg-icon1"
                loading="lazy"
                alt=""
                src="/svg-1@2x.png"
              />
            </div>
          </div>
          <div className="spacer">
            <div className="color-rect" />
          </div>
          <div className="actions-wrapper">
            <Button
              className="linkmargin"
              disableElevation={true}
              variant="text"
              sx={{
                textTransform: "none",
                color: "#fff",
                fontSize: "15",
                borderRadius: "0px 0px 0px 0px",
                width: 172,
                height: 43,
              }}
            >
              Buy now
            </Button>
            <div className="link" onClick={onLinkContainerClick}>
              <a className="remove-frame">Remove frame</a>
              <div className="remove-icon-wrapper">
                <img
                  className="svg-icon2"
                  loading="lazy"
                  alt=""
                  src="/svg-2.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </header>
      <section className="html-body">
        <div className="container">
          <div className="verticalborder">
            <div className="container1">
              <div className="region-scrollable-content">
                <div className="link1" onClick={onLinkContainer2Click}>
                  <img
                    className="svg-icon3"
                    loading="lazy"
                    alt=""
                    src="/svg-3.svg"
                  />
                </div>
                <div className="nav-wrapper">
                  <div className="nav">
                    <div className="container2">
                      <div className="itemmargin">
                        <div className="item">
                          <b className="overview">overview</b>
                        </div>
                      </div>
                      <div className="container3">
                        <div className="container4">
                          <div
                            className="link-button"
                            onClick={onLinkButtonClick}
                          >
                            <div className="margin">
                              <div className="container5">
                                <img
                                  className="mask-group-icon"
                                  alt=""
                                  src="/mask-group.svg"
                                />
                              </div>
                            </div>
                            <div className="container6">
                              <div className="container7">
                                <b className="app">app</b>
                              </div>
                            </div>
                          </div>
                          <div
                            className="link-button1"
                            onClick={onLinkButton1Click}
                          >
                            <div className="margin1">
                              <div className="container8">
                                <img
                                  className="mask-group-icon1"
                                  loading="lazy"
                                  alt=""
                                  src="/mask-group-1.svg"
                                />
                              </div>
                            </div>
                            <div className="container9">
                              <div className="container10">
                                <a
                                  className="e-commerce"
                                  href="https://minimals.cc/dashboard/ecommerce"
                                  target="_blank"
                                >
                                  e-commerce
                                </a>
                              </div>
                            </div>
                          </div>
                          <div
                            className="link-button2"
                            onClick={onLinkButton2Click}
                          >
                            <div className="margin2">
                              <div className="container11">
                                <img
                                  className="mask-group-icon2"
                                  loading="lazy"
                                  alt=""
                                  src="/mask-group-2.svg"
                                />
                              </div>
                            </div>
                            <div className="container12">
                              <div className="container13">
                                <a className="analytics">analytics</a>
                              </div>
                            </div>
                          </div>
                          <div
                            className="link-button3"
                            onClick={onLinkButton3Click}
                          >
                            <div className="margin3">
                              <div className="container14">
                                <img
                                  className="mask-group-icon3"
                                  loading="lazy"
                                  alt=""
                                  src="/mask-group-3.svg"
                                />
                              </div>
                            </div>
                            <div className="container15">
                              <div className="container16">
                                <a className="banking">banking</a>
                              </div>
                            </div>
                          </div>
                          <div
                            className="link-button4"
                            onClick={onLinkButton4Click}
                          >
                            <div className="margin4">
                              <div className="container17">
                                <img
                                  className="mask-group-icon4"
                                  loading="lazy"
                                  alt=""
                                  src="/mask-group-4.svg"
                                />
                              </div>
                            </div>
                            <div className="container18">
                              <div className="container19">
                                <a
                                  className="booking"
                                  href="https://minimals.cc/dashboard/booking"
                                  target="_blank"
                                >
                                  booking
                                </a>
                              </div>
                            </div>
                          </div>
                          <div
                            className="link-button5"
                            onClick={onLinkButton5Click}
                          >
                            <div className="margin5">
                              <div className="container20">
                                <img
                                  className="mask-group-icon5"
                                  loading="lazy"
                                  alt=""
                                  src="/mask-group-5.svg"
                                />
                              </div>
                            </div>
                            <div className="container21">
                              <div className="container22">
                                <a
                                  className="file"
                                  href="https://minimals.cc/dashboard/file"
                                  target="_blank"
                                >
                                  file
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="container23">
                      <div className="itemmargin1">
                        <div className="item1">
                          <b className="management">management</b>
                        </div>
                      </div>
                      <div className="container24">
                        <div className="container25">
                          <div className="button">
                            <div className="margin6">
                              <div className="container26">
                                <img
                                  className="mask-group-icon6"
                                  loading="lazy"
                                  alt=""
                                  src="/mask-group-6.svg"
                                />
                              </div>
                            </div>
                            <div className="container27">
                              <div className="container28">
                                <div className="user">user</div>
                              </div>
                            </div>
                            <div className="imgmargin">
                              <div className="img">
                                <img
                                  className="image-wrapper-icon"
                                  loading="lazy"
                                  alt=""
                                  src="/frame.svg"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="button1">
                            <div className="margin7">
                              <div className="container29">
                                <img
                                  className="mask-group-icon7"
                                  loading="lazy"
                                  alt=""
                                  src="/mask-group-7.svg"
                                />
                              </div>
                            </div>
                            <div className="container30">
                              <div className="container31">
                                <div className="product">product</div>
                              </div>
                            </div>
                            <div className="imgmargin1">
                              <div className="img1">
                                <img
                                  className="frame-icon"
                                  alt=""
                                  src="/frame.svg"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="button2">
                            <div className="margin8">
                              <div className="container32">
                                <img
                                  className="mask-group-icon8"
                                  alt=""
                                  src="/mask-group-8.svg"
                                />
                              </div>
                            </div>
                            <div className="container33">
                              <div className="container34">
                                <a className="order">order</a>
                              </div>
                            </div>
                            <div className="imgmargin2">
                              <div className="img2">
                                <img
                                  className="frame-icon1"
                                  alt=""
                                  src="/frame.svg"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="button3">
                            <div className="margin9">
                              <div className="container35">
                                <img
                                  className="mask-group-icon9"
                                  alt=""
                                  src="/mask-group-9.svg"
                                />
                              </div>
                            </div>
                            <div className="container36">
                              <div className="container37">
                                <div className="invoice">invoice</div>
                              </div>
                            </div>
                            <div className="imgmargin3">
                              <div className="img3">
                                <img
                                  className="frame-icon2"
                                  alt=""
                                  src="/frame.svg"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="button4">
                            <div className="margin10">
                              <div className="container38">
                                <img
                                  className="mask-group-icon10"
                                  alt=""
                                  src="/mask-group-10.svg"
                                />
                              </div>
                            </div>
                            <div className="container39">
                              <div className="container40">
                                <div className="blog">blog</div>
                              </div>
                            </div>
                            <div className="imgmargin4">
                              <div className="img4">
                                <img
                                  className="frame-icon3"
                                  alt=""
                                  src="/frame.svg"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="button5">
                            <div className="margin11">
                              <div className="container41">
                                <img
                                  className="mask-group-icon11"
                                  alt=""
                                  src="/mask-group-11.svg"
                                />
                              </div>
                            </div>
                            <div className="container42">
                              <div className="container43">
                                <div className="job">job</div>
                              </div>
                            </div>
                            <div className="imgmargin5">
                              <div className="img5">
                                <img
                                  className="frame-icon4"
                                  alt=""
                                  src="/frame.svg"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="button6">
                            <div className="margin12">
                              <div className="container44">
                                <img
                                  className="mask-group-icon12"
                                  alt=""
                                  src="/mask-group-12.svg"
                                />
                              </div>
                            </div>
                            <div className="container45">
                              <div className="container46">
                                <div className="tour">tour</div>
                              </div>
                            </div>
                            <div className="imgmargin6">
                              <div className="img6">
                                <img
                                  className="frame-icon5"
                                  alt=""
                                  src="/frame.svg"
                                />
                              </div>
                            </div>
                          </div>
                          <div
                            className="link-button6"
                            onClick={onLinkButton6Click}
                          >
                            <div className="margin13">
                              <div className="container47">
                                <img
                                  className="mask-group-icon13"
                                  alt=""
                                  src="/mask-group-13.svg"
                                />
                              </div>
                            </div>
                            <div className="container48">
                              <div className="container49">
                                <a
                                  className="file-manager"
                                  href="https://minimals.cc/dashboard/file-manager"
                                  target="_blank"
                                >
                                  File Manager
                                </a>
                              </div>
                            </div>
                          </div>
                          <div
                            className="link-button7"
                            onClick={onLinkButton12Click}
                          >
                            <div className="margin14">
                              <div className="container50">
                                <img
                                  className="mask-group-icon14"
                                  alt=""
                                  src="/mask-group-14.svg"
                                />
                              </div>
                            </div>
                            <div className="container51">
                              <div className="container52">
                                <a
                                  className="mail"
                                  href="https://minimals.cc/dashboard/mail"
                                  target="_blank"
                                >
                                  mail
                                </a>
                              </div>
                            </div>
                            <div className="margin15">
                              <div className="overlay">
                                <b className="b">+32</b>
                              </div>
                            </div>
                          </div>
                          <div
                            className="link-button8"
                            onClick={onLinkButton22Click}
                          >
                            <div className="margin16">
                              <div className="container53">
                                <img
                                  className="mask-group-icon15"
                                  alt=""
                                  src="/mask-group-15.svg"
                                />
                              </div>
                            </div>
                            <div className="container54">
                              <div className="container55">
                                <a
                                  className="chat"
                                  href="https://minimals.cc/dashboard/chat"
                                  target="_blank"
                                >
                                  chat
                                </a>
                              </div>
                            </div>
                          </div>
                          <div
                            className="link-button9"
                            onClick={onLinkButton32Click}
                          >
                            <div className="margin17">
                              <div className="container56">
                                <img
                                  className="mask-group-icon16"
                                  alt=""
                                  src="/mask-group-16.svg"
                                />
                              </div>
                            </div>
                            <div className="container57">
                              <div className="container58">
                                <a className="calendar">calendar</a>
                              </div>
                            </div>
                          </div>
                          <div
                            className="link-button10"
                            onClick={onLinkButton42Click}
                          >
                            <div className="margin18">
                              <div className="container59">
                                <img
                                  className="mask-group-icon17"
                                  alt=""
                                  src="/mask-group-17.svg"
                                />
                              </div>
                            </div>
                            <div className="container60">
                              <div className="container61">
                                <a
                                  className="kanban"
                                  href="https://minimals.cc/dashboard/kanban"
                                  target="_blank"
                                >
                                  kanban
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="container62">
                      <div className="itemmargin2">
                        <div className="item2">
                          <b className="other-cases">other cases</b>
                        </div>
                      </div>
                      <div className="container63">
                        <div className="container64">
                          <div
                            className="link-button11"
                            onClick={onLinkButton7Click}
                          >
                            <div className="margin19">
                              <div className="container65">
                                <img
                                  className="mask-group-icon18"
                                  alt=""
                                  src="/mask-group-18.svg"
                                />
                              </div>
                            </div>
                            <div className="container66">
                              <div className="container67">
                                <a
                                  className="item-by-roles"
                                  href="https://minimals.cc/dashboard/permission"
                                  target="_blank"
                                >
                                  item by roles
                                </a>
                              </div>
                              <div className="only-admin-can-see-this-item">
                                <a
                                  className="only-admin-can"
                                  href="https://minimals.cc/dashboard/permission"
                                  target="_blank"
                                >
                                  Only admin can see this item
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="button7">
                            <div className="margin20">
                              <div className="container68">
                                <img
                                  className="mask-group-icon19"
                                  alt=""
                                  src="/mask-group-19.svg"
                                />
                              </div>
                            </div>
                            <div className="container69">
                              <div className="container70">
                                <div className="menu-level">menu level</div>
                              </div>
                            </div>
                            <div className="imgmargin7">
                              <div className="img7">
                                <img
                                  className="role-overlay-icon"
                                  alt=""
                                  src="/frame.svg"
                                />
                              </div>
                            </div>
                          </div>
                          <div
                            className="link-button12"
                            onClick={onLinkButton13Click}
                          >
                            <div className="margin21">
                              <div className="container71">
                                <img
                                  className="mask-group-icon20"
                                  alt=""
                                  src="/mask-group-20.svg"
                                />
                              </div>
                            </div>
                            <div className="container72">
                              <div className="container73">
                                <a
                                  className="item-disabled"
                                  href="https://minimals.cc/dashboard#disabled"
                                  target="_blank"
                                >
                                  item disabled
                                </a>
                              </div>
                            </div>
                          </div>
                          <div
                            className="link-button13"
                            onClick={onLinkButton23Click}
                          >
                            <div className="margin22">
                              <div className="container74">
                                <img
                                  className="mask-group-icon21"
                                  alt=""
                                  src="/mask-group-21.svg"
                                />
                              </div>
                            </div>
                            <div className="container75">
                              <div className="container76">
                                <a
                                  className="item-label"
                                  href="https://minimals.cc/dashboard#label"
                                  target="_blank"
                                >
                                  item label
                                </a>
                              </div>
                            </div>
                            <div className="margin23">
                              <div className="overlay1">
                                <div className="margin24">
                                  <div className="container77">
                                    <img
                                      className="img-icon"
                                      alt=""
                                      src="/img.svg"
                                    />
                                  </div>
                                </div>
                                <b className="new">NEW</b>
                              </div>
                            </div>
                          </div>
                          <div
                            className="link-button14"
                            onClick={onLinkButton33Click}
                          >
                            <div className="margin25">
                              <div className="container78">
                                <img
                                  className="mask-group-icon22"
                                  alt=""
                                  src="/mask-group-19.svg"
                                />
                              </div>
                            </div>
                            <div className="container79">
                              <div className="container80">
                                <a
                                  className="item-caption"
                                  href="https://minimals.cc/dashboard#caption"
                                  target="_blank"
                                >
                                  item caption
                                </a>
                              </div>
                              <div className="quisque-malesuada-placerat-nis">
                                <a
                                  className="quisque-malesuada-placerat"
                                  href="https://minimals.cc/dashboard#caption"
                                  target="_blank"
                                >
                                  Quisque malesuada placerat nis…
                                </a>
                              </div>
                            </div>
                          </div>
                          <div
                            className="link-button15"
                            onClick={onLinkButton43Click}
                          >
                            <div className="margin26">
                              <div className="container81">
                                <img
                                  className="mask-group-icon23"
                                  alt=""
                                  src="/mask-group-23.svg"
                                />
                              </div>
                            </div>
                            <div className="container82">
                              <div className="container83">
                                <a
                                  className="item-external-link"
                                  href="https://www.google.com/"
                                  target="_blank"
                                >
                                  item external link
                                </a>
                              </div>
                            </div>
                          </div>
                          <div
                            className="link-button16"
                            onClick={onLinkButton52Click}
                          >
                            <div className="margin27">
                              <div className="container84">
                                <img
                                  className="mask-group-icon24"
                                  alt=""
                                  src="/mask-group-24.svg"
                                />
                              </div>
                            </div>
                            <div className="container85">
                              <div className="container86">
                                <a
                                  className="blank"
                                  href="https://minimals.cc/dashboard/blank"
                                  target="_blank"
                                >
                                  blank
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bottom-border">
                  <div className="bottom-color-rect" />
                </div>
                <div className="avatar-wrapper-wrapper">
                  <div className="avatar-wrapper">
                    <div className="avatar-content-wrapper">
                      <div className="avatar-content">
                        <div className="container87">
                          <img
                            className="avatar-25jpg-icon"
                            alt=""
                            src="/avatar-25jpg@2x.png"
                          />
                        </div>
                        <div className="background">
                          <b className="free">Free</b>
                        </div>
                      </div>
                    </div>
                    <div className="profile-info-wrapper">
                      <div className="margin28">
                        <div className="container88">
                          <div className="heading-6">
                            <b className="jaydon-frankie">Jaydon Frankie</b>
                          </div>
                          <div className="container89">
                            <div className="demominimalscc">
                              demo@minimals.cc
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="link2" onClick={onLinkContainer3Click}>
                        <a
                          className="upgrade-to-pro"
                          href="https://mui.com/store/items/minimal-dashboard/"
                          target="_blank"
                        >
                          Upgrade to Pro
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="main">
            <div className="header1">
              <div className="container90">
                <div className="container91">
                  <div className="button8">
                    <input className="img8" type="radio" name="radioGroup-1" />
                  </div>
                  <div className="overlay2">
                    <b className="k">⌘K</b>
                  </div>
                </div>
                <div className="container92">
                  <div className="button9">
                    <div className="img9">
                      <img
                        className="user-badge-icon"
                        loading="lazy"
                        alt=""
                        src="/frame-8@2x.png"
                      />
                    </div>
                  </div>
                  <div className="button10">
                    <div className="container93">
                      <img
                        className="img-icon1"
                        loading="lazy"
                        alt=""
                        src="/img-2.svg"
                      />
                      <div className="background1">
                        <div className="badge-content">4</div>
                      </div>
                    </div>
                  </div>
                  <div className="button11">
                    <img
                      className="img-icon2"
                      loading="lazy"
                      alt=""
                      src="/img-3.svg"
                    />
                  </div>
                  <div className="container94">
                    <img
                      className="container-icon"
                      loading="lazy"
                      alt=""
                      src="/container@2x.png"
                    />
                  </div>
                  <div className="button12">
                    <div className="border">
                      <img
                        className="avatar-25jpg-icon1"
                        loading="lazy"
                        alt=""
                        src="/avatar-25jpg-1@2x.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="welcome-card">
              <div className="welcome-message">
                <div className="welcome-content">
                  <div className="background-parent">
                    <div className="background2">
                      <div className="welcome-title">
                        <div className="welcome-heading">
                          <h2 className="welcome-back-container">
                            <p className="welcome-back">Welcome back 👋</p>
                            <p className="jaydon-frankie1">Jaydon Frankie</p>
                          </h2>
                          <div className="welcome-paragraph">
                            <div className="margin29">
                              <div className="container95">
                                <p className="if-you-are-container">
                                  <span className="if-you-are">
                                    If you are going to use a passage of Lorem
                                  </span>
                                  <span className="ipsum-you-need">
                                    Ipsum, you need to be sure there isn't
                                  </span>
                                  <span className="anything">anything.</span>
                                </p>
                              </div>
                            </div>
                            <button className="button13">
                              <b className="go-now">Go Now</b>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="container96">
                        <img
                          className="svg-icon4"
                          loading="lazy"
                          alt=""
                          src="/svg-4.svg"
                        />
                      </div>
                    </div>
                    <div className="backgroundshadow">
                      <div className="container97">
                        <div className="container98">
                          <div className="container99">
                            <div className="blur">
                              <div className="cover-1jpg-parent">
                                <img
                                  className="cover-1jpg-icon"
                                  alt=""
                                  src="/cover-1jpg@2x.png"
                                />
                                <div className="gradient" />
                              </div>
                              <b className="featured-app">Featured App</b>
                              <h3 className="essential-tips-for">
                                10 Essential Tips for Healt…
                              </h3>
                              <div className="the-sun-slowly">
                                The sun slowly set over the horizon, pain…
                              </div>
                            </div>
                            <div className="item3">
                              <div className="background3" />
                            </div>
                            <div className="item4">
                              <div className="background4" />
                            </div>
                            <div className="item5">
                              <div className="background5" />
                            </div>
                            <div className="button14">
                              <img
                                className="img-icon3"
                                alt=""
                                src="/img-4.svg"
                              />
                            </div>
                            <div className="button15">
                              <img
                                className="img-icon4"
                                alt=""
                                src="/img-5.svg"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="container100">
                          <div className="container101">
                            <div className="blur1">
                              <img
                                className="cover-2jpg-icon"
                                loading="lazy"
                                alt=""
                                src="/cover-2jpg@2x.png"
                              />
                            </div>
                            <div className="gradient1" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="backgroundshadow-parent">
                    <BackgroundShadow
                      totalActiveUsers="Total Active Users"
                      userValue="/frame-9.svg"
                      countValue="+2.6%"
                      installedStatistics="18,765"
                      sVG="/svg-5@2x.png"
                    />
                    <BackgroundShadow
                      totalActiveUsers="Total Installed"
                      userValue="/frame-9.svg"
                      countValue="+0.2%"
                      installedStatistics="4,876"
                      sVG="/svg-6@2x.png"
                      propPadding="13.5px 23px 12px 24px"
                    />
                    <BackgroundShadow
                      totalActiveUsers="Total Downloads"
                      userValue="/frame-11.svg"
                      countValue="-0.1%"
                      installedStatistics="678"
                      sVG="/svg-7@2x.png"
                      propPadding="13.5px 23px 12px 24px"
                    />
                  </div>
                </div>
                <div className="download-chart">
                  <div className="chart-container">
                    <div className="backgroundshadow1">
                      <div className="container102">
                        <div className="container103">
                          <div className="container104">
                            <b className="current-download">Current Download</b>
                          </div>
                        </div>
                      </div>
                      <div className="container105">
                        <div className="svgjsline1746-parent">
                          <img className="svgjsline1746-icon" alt="" />
                          <img className="svgjsline1747-icon" alt="" />
                        </div>
                        <div className="axis-label">
                          <div className="svgjsg1731">
                            <img
                              className="svgjsg1732-icon"
                              alt=""
                              src="/svgjsg1732.svg"
                            />
                            <div className="tick-value">
                              <b className="y-axis-value">Total</b>
                            </div>
                            <b className="area-chart">188,245</b>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="backgroundshadow2">
                      <div className="area-container">
                        <div className="area-content">
                          <div className="area-label">
                            <b className="area-installed">Area Installed</b>
                            <div className="area-description">
                              <div className="margin30">
                                <div className="container106">
                                  <div className="button16">
                                    <b className="comparison-icon">2019</b>
                                    <div className="imgmargin8">
                                      <div className="img10">
                                        <img
                                          className="image-icon"
                                          alt=""
                                          src="/frame-12.svg"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="than-last-year">
                            (+43%) than last year
                          </div>
                        </div>
                      </div>
                      <div className="container107">
                        <div className="vertical-axis">
                          <div className="vertical-label">
                            <img className="svgjsrect1755-icon" alt="" />
                            <div className="bar-value">150</div>
                          </div>
                          <div className="horizontal-axis">120</div>
                        </div>
                        <div className="chart-number">
                          <div className="number-value">90</div>
                        </div>
                        <div className="chart-number1">
                          <div className="svgjstext1838">60</div>
                        </div>
                        <div className="chart-number2">
                          <div className="svgjstext1841">30</div>
                        </div>
                        <div className="svgjsline1756-parent">
                          <img className="svgjsline1756-icon" alt="" />
                          <img
                            className="svgjsg1777-icon"
                            alt=""
                            src="/svgjsg1777.svg"
                          />
                          <img
                            className="svgjsg1759-icon"
                            alt=""
                            src="/svgjsg1759@2x.png"
                          />
                          <div className="monthly-values">
                            <div className="svgjsline1786-parent">
                              <img className="svgjsline1786-icon" alt="" />
                              <img className="svgjsline1787-icon" alt="" />
                            </div>
                            <img
                              className="svgjsg1774-icon"
                              alt=""
                              src="/svgjsg1774.svg"
                            />
                          </div>
                        </div>
                        <div className="invoice-i-d-cell">
                          <div className="category-cell">
                            <div className="price-cell">0</div>
                            <div className="status-cell">
                              <div className="invoice-i-d-header">
                                <div className="category-header">Jan</div>
                                <div className="category-header1">Feb</div>
                                <div className="category-header2">Mar</div>
                                <div className="category-header3">Apr</div>
                                <div className="category-header4">May</div>
                                <div className="category-header5">
                                  <div className="price-header">Jun</div>
                                </div>
                                <div className="category-header6">
                                  <div className="svgjstext1809">Jul</div>
                                </div>
                                <div className="category-header7">Aug</div>
                                <div className="category-header8">Sep</div>
                                <div className="category-header9">Oct</div>
                                <div className="category-header10">Nov</div>
                                <div className="category-header11">Dec</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="status-header">
                    <div className="table-header-row">
                      <div className="backgroundshadow3">
                        <div className="container108">
                          <div className="container109">
                            <div className="container110">
                              <b className="new-invoice">New Invoice</b>
                            </div>
                          </div>
                        </div>
                        <div className="paid-status-cell">
                          <div className="region-scrollable-content1">
                            <div className="table">
                              <div className="mac-data-cell">
                                <div className="cell">
                                  <b className="invoice-id">Invoice ID</b>
                                </div>
                                <div className="cell1">
                                  <b className="category">Category</b>
                                </div>
                                <div className="cell2">
                                  <b className="price">Price</b>
                                </div>
                                <div className="cell3">
                                  <b className="status">Status</b>
                                </div>
                                <div className="cell4" />
                              </div>
                              <div className="body">
                                <div className="row">
                                  <div className="data">
                                    <div className="inv-1990">INV-1990</div>
                                  </div>
                                  <div className="data1">
                                    <div className="android">Android</div>
                                  </div>
                                  <div className="data2">
                                    <div className="div">$83.74</div>
                                  </div>
                                  <div className="data3">
                                    <div className="overlay3">
                                      <b className="paid">paid</b>
                                    </div>
                                  </div>
                                  <div className="data4">
                                    <div className="button17">
                                      <img
                                        className="img-icon5"
                                        alt=""
                                        src="/img-6.svg"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="row1">
                                  <div className="data5">
                                    <div className="inv-1991">INV-1991</div>
                                  </div>
                                  <div className="data6">
                                    <div className="mac">Mac</div>
                                  </div>
                                  <div className="data7">
                                    <div className="div1">$97.14</div>
                                  </div>
                                  <div className="data8">
                                    <div className="overlay4">
                                      <b className="out-of-date">out of date</b>
                                    </div>
                                  </div>
                                  <div className="data9">
                                    <div className="button18">
                                      <img
                                        className="img-icon6"
                                        alt=""
                                        src="/img-6.svg"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="row2">
                                  <div className="data10">
                                    <div className="inv-1992">INV-1992</div>
                                  </div>
                                  <div className="data11">
                                    <div className="windows">Windows</div>
                                  </div>
                                  <div className="data12">
                                    <div className="div2">$68.71</div>
                                  </div>
                                  <div className="data13">
                                    <div className="overlay5">
                                      <b className="progress">progress</b>
                                    </div>
                                  </div>
                                  <div className="data14">
                                    <div className="button19">
                                      <img
                                        className="img-icon7"
                                        alt=""
                                        src="/img-6.svg"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="row3">
                                  <div className="data15">
                                    <div className="inv-1993">INV-1993</div>
                                  </div>
                                  <div className="data16">
                                    <div className="android1">Android</div>
                                  </div>
                                  <div className="data17">
                                    <div className="div3">$85.21</div>
                                  </div>
                                  <div className="data18">
                                    <div className="overlay6">
                                      <b className="paid1">paid</b>
                                    </div>
                                  </div>
                                  <div className="data19">
                                    <div className="button20">
                                      <img
                                        className="img-icon8"
                                        alt=""
                                        src="/img-6.svg"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="row4">
                                  <div className="data-inv-1994">INV-1994</div>
                                  <div className="data-mac">Mac</div>
                                  <div className="data-5217">$52.17</div>
                                  <div className="data20">
                                    <div className="overlay7">
                                      <b className="paid2">paid</b>
                                    </div>
                                  </div>
                                  <div className="data-button">
                                    <img
                                      className="img-icon9"
                                      alt=""
                                      src="/img-6.svg"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="third-app-background">
                            <div className="button21">
                              <a className="view-all">View All</a>
                              <div className="dropbox-app-image">
                                <img
                                  className="img-icon10"
                                  alt=""
                                  src="/img-11.svg"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="backgroundshadow4">
                        <div className="container111">
                          <div className="container112">
                            <div className="container113">
                              <b className="top-related-applications">
                                Top Related Applications
                              </b>
                            </div>
                          </div>
                        </div>
                        <div className="container114">
                          <div className="region-scrollable-content2">
                            <div className="container115">
                              <div className="evernote-rating">
                                <div className="evernote-review-count">
                                  <div className="background6">
                                    <img
                                      className="ic-chromesvg-icon"
                                      alt=""
                                      src="/ic-chromesvg.svg"
                                    />
                                  </div>
                                </div>
                                <div className="container116">
                                  <div className="heading-61">
                                    <b className="chrome">Chrome</b>
                                  </div>
                                  <div className="container117">
                                    <img
                                      className="img-icon11"
                                      alt=""
                                      src="/img-12.svg"
                                    />
                                    <div className="margin31">
                                      <div className="mac1">Mac</div>
                                    </div>
                                    <div className="overlay8">
                                      <b className="free1">Free</b>
                                    </div>
                                  </div>
                                </div>
                                <div className="third-star">
                                  <div className="container118">
                                    <div className="img-4-stars">
                                      <div className="container119">
                                        <div className="container120">
                                          <img
                                            className="svg-icon5"
                                            alt=""
                                            src="/svg-8.svg"
                                          />
                                        </div>
                                      </div>
                                      <div className="container121">
                                        <div className="container122">
                                          <img
                                            className="svg-icon6"
                                            alt=""
                                            src="/svg-8.svg"
                                          />
                                        </div>
                                      </div>
                                      <div className="container123">
                                        <div className="container124">
                                          <img
                                            className="svg-icon7"
                                            alt=""
                                            src="/svg-8.svg"
                                          />
                                        </div>
                                      </div>
                                      <div className="container125">
                                        <div className="container126">
                                          <img
                                            className="svg-icon8"
                                            alt=""
                                            src="/svg-8.svg"
                                          />
                                        </div>
                                      </div>
                                      <div className="container127">
                                        <div className="container128">
                                          <img
                                            className="svg-icon9"
                                            alt=""
                                            src="/svg-12.svg"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="margin32">
                                      <div className="container129">
                                        <div className="k-reviews">
                                          9.91k reviews
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="evernote-rating1">
                                <div className="background-wrapper">
                                  <div className="background7">
                                    <img
                                      className="ic-drivesvg-icon"
                                      alt=""
                                      src="/ic-drivesvg.svg"
                                    />
                                  </div>
                                </div>
                                <div className="container130">
                                  <div className="heading-62">
                                    <b className="drive">Drive</b>
                                  </div>
                                  <div className="container131">
                                    <img
                                      className="img-icon12"
                                      alt=""
                                      src="/img-12.svg"
                                    />
                                    <div className="margin33">
                                      <div className="mac2">Mac</div>
                                    </div>
                                    <div className="overlay9">
                                      <b className="free2">Free</b>
                                    </div>
                                  </div>
                                </div>
                                <div className="container-wrapper">
                                  <div className="container132">
                                    <div className="img-35-stars">
                                      <div className="container133">
                                        <div className="container134">
                                          <img
                                            className="svg-icon10"
                                            alt=""
                                            src="/svg-8.svg"
                                          />
                                        </div>
                                      </div>
                                      <div className="container135">
                                        <div className="container136">
                                          <img
                                            className="svg-icon11"
                                            alt=""
                                            src="/svg-8.svg"
                                          />
                                        </div>
                                      </div>
                                      <div className="container137">
                                        <div className="container138">
                                          <img
                                            className="svg-icon12"
                                            alt=""
                                            src="/svg-8.svg"
                                          />
                                        </div>
                                      </div>
                                      <div className="container139">
                                        <div className="container140">
                                          <img
                                            className="svg-icon13"
                                            alt=""
                                            src="/svg-12.svg"
                                          />
                                        </div>
                                        <div className="container141">
                                          <div className="container142">
                                            <img
                                              className="svg-icon14"
                                              alt=""
                                              src="/svg-8.svg"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <div className="container143">
                                        <div className="container144">
                                          <img
                                            className="svg-icon15"
                                            alt=""
                                            src="/svg-12.svg"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="margin34">
                                      <div className="container145">
                                        <div className="k-reviews1">
                                          1.95k reviews
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="evernote-rating2">
                                <div className="background-container">
                                  <div className="background8">
                                    <img
                                      className="ic-dropboxsvg-icon"
                                      alt=""
                                      src="/ic-dropboxsvg.svg"
                                    />
                                  </div>
                                </div>
                                <div className="container146">
                                  <div className="heading-63">
                                    <b className="dropbox">Dropbox</b>
                                  </div>
                                  <div className="container147">
                                    <img
                                      className="img-icon13"
                                      alt=""
                                      src="/img-14.svg"
                                    />
                                    <div className="margin35">
                                      <div className="windows1">Windows</div>
                                    </div>
                                    <div className="overlay10">
                                      <b className="b1">$68.71</b>
                                    </div>
                                  </div>
                                </div>
                                <div className="container-container">
                                  <div className="container148">
                                    <div className="img-45-stars">
                                      <div className="container149">
                                        <div className="container150">
                                          <img
                                            className="svg-icon16"
                                            alt=""
                                            src="/svg-8.svg"
                                          />
                                        </div>
                                      </div>
                                      <div className="container151">
                                        <div className="container152">
                                          <img
                                            className="svg-icon17"
                                            alt=""
                                            src="/svg-8.svg"
                                          />
                                        </div>
                                      </div>
                                      <div className="container153">
                                        <div className="container154">
                                          <img
                                            className="svg-icon18"
                                            alt=""
                                            src="/svg-8.svg"
                                          />
                                        </div>
                                      </div>
                                      <div className="container155">
                                        <div className="container156">
                                          <img
                                            className="svg-icon19"
                                            alt=""
                                            src="/svg-8.svg"
                                          />
                                        </div>
                                      </div>
                                      <div className="container157">
                                        <div className="container158">
                                          <img
                                            className="svg-icon20"
                                            alt=""
                                            src="/svg-12.svg"
                                          />
                                        </div>
                                        <div className="container159">
                                          <div className="container160">
                                            <img
                                              className="svg-icon21"
                                              alt=""
                                              src="/svg-8.svg"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="margin36">
                                      <div className="container161">
                                        <div className="k-reviews2">
                                          9.12k reviews
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="evernote-rating3">
                                <div className="background-frame">
                                  <div className="background9">
                                    <img
                                      className="ic-evernotesvg-icon"
                                      alt=""
                                      src="/ic-evernotesvg.svg"
                                    />
                                  </div>
                                </div>
                                <div className="container162">
                                  <div className="heading-64">
                                    <b className="evernote">Evernote</b>
                                  </div>
                                  <div className="container163">
                                    <img
                                      className="img-icon14"
                                      alt=""
                                      src="/img-12.svg"
                                    />
                                    <div className="margin37">
                                      <div className="mac3">Mac</div>
                                    </div>
                                    <div className="overlay11">
                                      <b className="free3">Free</b>
                                    </div>
                                  </div>
                                </div>
                                <div className="container-frame">
                                  <div className="container164">
                                    <div className="img-35-stars1">
                                      <div className="container165">
                                        <div className="container166">
                                          <img
                                            className="svg-icon22"
                                            alt=""
                                            src="/svg-8.svg"
                                          />
                                        </div>
                                      </div>
                                      <div className="container167">
                                        <div className="container168">
                                          <img
                                            className="svg-icon23"
                                            alt=""
                                            src="/svg-8.svg"
                                          />
                                        </div>
                                      </div>
                                      <div className="container169">
                                        <div className="container170">
                                          <img
                                            className="svg-icon24"
                                            alt=""
                                            src="/svg-8.svg"
                                          />
                                        </div>
                                      </div>
                                      <div className="container171">
                                        <div className="container172">
                                          <img
                                            className="svg-icon25"
                                            alt=""
                                            src="/svg-12.svg"
                                          />
                                        </div>
                                        <div className="container173">
                                          <div className="container174">
                                            <img
                                              className="svg-icon26"
                                              alt=""
                                              src="/svg-8.svg"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <div className="container175">
                                        <div className="container176">
                                          <img
                                            className="svg-icon27"
                                            alt=""
                                            src="/svg-12.svg"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="margin38">
                                      <div className="container177">
                                        <div className="k-reviews3">
                                          6.98k reviews
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="evernote-rating4">
                                <div className="frame-div">
                                  <div className="background10">
                                    <img
                                      className="ic-githubsvg-icon"
                                      alt=""
                                      src="/ic-githubsvg.svg"
                                    />
                                  </div>
                                </div>
                                <div className="container178">
                                  <div className="heading-65">
                                    <b className="github">Github</b>
                                  </div>
                                  <div className="container179">
                                    <img
                                      className="img-icon15"
                                      alt=""
                                      src="/img-14.svg"
                                    />
                                    <div className="margin39">
                                      <div className="windows2">Windows</div>
                                    </div>
                                    <div className="overlay12">
                                      <b className="b2">$52.17</b>
                                    </div>
                                  </div>
                                </div>
                                <div className="container-wrapper1">
                                  <div className="container180">
                                    <div className="img-05-stars">
                                      <div className="container181">
                                        <div className="container182">
                                          <img
                                            className="svg-icon28"
                                            alt=""
                                            src="/svg-12.svg"
                                          />
                                        </div>
                                        <div className="container183">
                                          <div className="container184">
                                            <img
                                              className="svg-icon29"
                                              alt=""
                                              src="/svg-8.svg"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <div className="container185">
                                        <div className="container186">
                                          <img
                                            className="svg-icon30"
                                            alt=""
                                            src="/svg-12.svg"
                                          />
                                        </div>
                                      </div>
                                      <div className="container187">
                                        <div className="container188">
                                          <img
                                            className="svg-icon31"
                                            alt=""
                                            src="/svg-12.svg"
                                          />
                                        </div>
                                      </div>
                                      <div className="container189">
                                        <div className="container190">
                                          <img
                                            className="svg-icon32"
                                            alt=""
                                            src="/svg-12.svg"
                                          />
                                        </div>
                                      </div>
                                      <div className="container191">
                                        <div className="container192">
                                          <img
                                            className="svg-icon33"
                                            alt=""
                                            src="/svg-12.svg"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="margin40">
                                      <div className="container193">
                                        <div className="k-reviews4">
                                          8.49k reviews
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="backgroundshadow-group">
                      <div className="backgroundshadow5">
                        <div className="container194">
                          <div className="container195">
                            <div className="container196">
                              <b className="top-installed-countries">
                                Top Installed Countries
                              </b>
                            </div>
                          </div>
                        </div>
                        <div className="container197">
                          <div className="container198">
                            <div className="region-scrollable-content3">
                              <div className="container199">
                                <div className="container200">
                                  <div className="container201">
                                    <div className="imgmargin9">
                                      <div className="img11">
                                        <img
                                          className="frame-icon6"
                                          alt=""
                                          src="/frame-13.svg"
                                        />
                                      </div>
                                    </div>
                                    <div className="heading-66">
                                      <b className="germany">Germany</b>
                                    </div>
                                  </div>
                                  <div className="container202">
                                    <div className="imgmargin10">
                                      <div className="img12">
                                        <img
                                          className="frame-icon7"
                                          alt=""
                                          src="/frame-14.svg"
                                        />
                                      </div>
                                    </div>
                                    <div className="container203">
                                      <div className="k1">9.91k</div>
                                    </div>
                                  </div>
                                  <div className="container204">
                                    <div className="imgmargin11">
                                      <div className="img13">
                                        <img
                                          className="frame-icon8"
                                          alt=""
                                          src="/frame-15.svg"
                                        />
                                      </div>
                                    </div>
                                    <div className="container205">
                                      <div className="k2">1.95k</div>
                                    </div>
                                  </div>
                                  <div className="container206">
                                    <div className="imgmargin12">
                                      <div className="img14">
                                        <img
                                          className="frame-icon9"
                                          alt=""
                                          src="/frame-16.svg"
                                        />
                                      </div>
                                    </div>
                                    <div className="container207">
                                      <div className="k3">1.95k</div>
                                    </div>
                                  </div>
                                </div>
                                <div className="container208">
                                  <div className="container209">
                                    <div className="imgmargin13">
                                      <div className="img15">
                                        <img
                                          className="frame-icon10"
                                          alt=""
                                          src="/frame-17@2x.png"
                                        />
                                      </div>
                                    </div>
                                    <div className="heading-67">
                                      <b className="england">England</b>
                                    </div>
                                  </div>
                                  <div className="container210">
                                    <div className="imgmargin14">
                                      <div className="img16">
                                        <img
                                          className="frame-icon11"
                                          alt=""
                                          src="/frame-14.svg"
                                        />
                                      </div>
                                    </div>
                                    <div className="container211">
                                      <div className="k4">1.95k</div>
                                    </div>
                                  </div>
                                  <div className="container212">
                                    <div className="imgmargin15">
                                      <div className="img17">
                                        <img
                                          className="frame-icon12"
                                          alt=""
                                          src="/frame-15.svg"
                                        />
                                      </div>
                                    </div>
                                    <div className="container213">
                                      <div className="k5">9.12k</div>
                                    </div>
                                  </div>
                                  <div className="container214">
                                    <div className="imgmargin16">
                                      <div className="img18">
                                        <img
                                          className="frame-icon13"
                                          alt=""
                                          src="/frame-16.svg"
                                        />
                                      </div>
                                    </div>
                                    <div className="container215">
                                      <div className="k6">9.12k</div>
                                    </div>
                                  </div>
                                </div>
                                <div className="container216">
                                  <div className="container217">
                                    <div className="imgmargin17">
                                      <div className="img19">
                                        <img
                                          className="frame-icon14"
                                          alt=""
                                          src="/frame-21.svg"
                                        />
                                      </div>
                                    </div>
                                    <div className="heading-68">
                                      <b className="france">France</b>
                                    </div>
                                  </div>
                                  <div className="container218">
                                    <div className="imgmargin18">
                                      <div className="img20">
                                        <img
                                          className="frame-icon15"
                                          alt=""
                                          src="/frame-14.svg"
                                        />
                                      </div>
                                    </div>
                                    <div className="container219">
                                      <div className="k7">9.12k</div>
                                    </div>
                                  </div>
                                  <div className="container220">
                                    <div className="imgmargin19">
                                      <div className="img21">
                                        <img
                                          className="frame-icon16"
                                          alt=""
                                          src="/frame-15.svg"
                                        />
                                      </div>
                                    </div>
                                    <div className="container221">
                                      <div className="k8">6.98k</div>
                                    </div>
                                  </div>
                                  <div className="container222">
                                    <div className="imgmargin20">
                                      <div className="img22">
                                        <img
                                          className="frame-icon17"
                                          alt=""
                                          src="/frame-16.svg"
                                        />
                                      </div>
                                    </div>
                                    <div className="container223">
                                      <div className="k9">6.98k</div>
                                    </div>
                                  </div>
                                </div>
                                <div className="container224">
                                  <div className="container225">
                                    <div className="imgmargin21">
                                      <div className="img23">
                                        <img
                                          className="frame-icon18"
                                          alt=""
                                          src="/frame-25@2x.png"
                                        />
                                      </div>
                                    </div>
                                    <div className="heading-69">
                                      <b className="korean">Korean</b>
                                    </div>
                                  </div>
                                  <div className="container226">
                                    <div className="imgmargin22">
                                      <div className="img24">
                                        <img
                                          className="frame-icon19"
                                          alt=""
                                          src="/frame-14.svg"
                                        />
                                      </div>
                                    </div>
                                    <div className="container227">
                                      <div className="k10">6.98k</div>
                                    </div>
                                  </div>
                                  <div className="container228">
                                    <div className="imgmargin23">
                                      <div className="img25">
                                        <img
                                          className="frame-icon20"
                                          alt=""
                                          src="/frame-15.svg"
                                        />
                                      </div>
                                    </div>
                                    <div className="container229">
                                      <div className="k11">8.49k</div>
                                    </div>
                                  </div>
                                  <div className="container230">
                                    <div className="imgmargin24">
                                      <div className="img26">
                                        <img
                                          className="frame-icon21"
                                          alt=""
                                          src="/frame-16.svg"
                                        />
                                      </div>
                                    </div>
                                    <div className="container231">
                                      <div className="k12">8.49k</div>
                                    </div>
                                  </div>
                                </div>
                                <div className="container232">
                                  <div className="container233">
                                    <div className="imgmargin25">
                                      <div className="img27">
                                        <img
                                          className="frame-icon22"
                                          alt=""
                                          src="/frame-29.svg"
                                        />
                                      </div>
                                    </div>
                                    <div className="heading-610">
                                      <b className="usa">USA</b>
                                    </div>
                                  </div>
                                  <div className="container234">
                                    <div className="imgmargin26">
                                      <div className="img28">
                                        <img
                                          className="frame-icon23"
                                          alt=""
                                          src="/frame-14.svg"
                                        />
                                      </div>
                                    </div>
                                    <div className="container235">
                                      <div className="k13">8.49k</div>
                                    </div>
                                  </div>
                                  <div className="container236">
                                    <div className="imgmargin27">
                                      <div className="img29">
                                        <img
                                          className="frame-icon24"
                                          alt=""
                                          src="/frame-15.svg"
                                        />
                                      </div>
                                    </div>
                                    <div className="container237">
                                      <div className="k14">2.03k</div>
                                    </div>
                                  </div>
                                  <div className="container238">
                                    <div className="imgmargin28">
                                      <div className="img30">
                                        <img
                                          className="frame-icon25"
                                          alt=""
                                          src="/frame-16.svg"
                                        />
                                      </div>
                                    </div>
                                    <div className="container239">
                                      <div className="k15">2.03k</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="backgroundshadow6">
                        <div className="container240">
                          <div className="container241">
                            <div className="container242">
                              <b className="top-authors">Top Authors</b>
                            </div>
                          </div>
                        </div>
                        <div className="container243">
                          <div className="container244">
                            <div className="author-info">
                              <div className="container245">
                                <img
                                  className="avatar-1jpg-icon"
                                  alt=""
                                  src="/avatar-1jpg@2x.png"
                                />
                              </div>
                            </div>
                            <div className="container246">
                              <div className="heading-611">
                                <b className="jayvion-simon">Jayvion Simon</b>
                              </div>
                              <div className="container247">
                                <div className="imgmargin29">
                                  <div className="img31">
                                    <img
                                      className="frame-icon26"
                                      alt=""
                                      src="/frame-33.svg"
                                    />
                                  </div>
                                </div>
                                <div className="k16">9.91k</div>
                              </div>
                            </div>
                            <div className="author-rating">
                              <div className="img32">
                                <img
                                  className="frame-icon27"
                                  alt=""
                                  src="/frame-34.svg"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="container248">
                            <div className="container-wrapper2">
                              <div className="container249">
                                <img
                                  className="avatar-3jpg-icon"
                                  alt=""
                                  src="/avatar-3jpg@2x.png"
                                />
                              </div>
                            </div>
                            <div className="container250">
                              <div className="heading-612">
                                <b className="deja-brady">Deja Brady</b>
                              </div>
                              <div className="container251">
                                <div className="imgmargin30">
                                  <div className="img33">
                                    <img
                                      className="frame-icon28"
                                      alt=""
                                      src="/frame-33.svg"
                                    />
                                  </div>
                                </div>
                                <div className="k17">9.12k</div>
                              </div>
                            </div>
                            <div className="img-wrapper">
                              <div className="img34">
                                <img
                                  className="frame-icon29"
                                  alt=""
                                  src="/frame-36.svg"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="container252">
                            <div className="container-wrapper3">
                              <div className="container253">
                                <img
                                  className="avatar-2jpg-icon"
                                  alt=""
                                  src="/avatar-2jpg@2x.png"
                                />
                              </div>
                            </div>
                            <div className="container254">
                              <div className="heading-613">
                                <b className="lucian-obrien">Lucian Obrien</b>
                              </div>
                              <div className="container255">
                                <div className="imgmargin31">
                                  <div className="img35">
                                    <img
                                      className="frame-icon30"
                                      alt=""
                                      src="/frame-33.svg"
                                    />
                                  </div>
                                </div>
                                <div className="k18">1.95k</div>
                              </div>
                            </div>
                            <div className="img-container">
                              <div className="img36">
                                <img
                                  className="frame-icon31"
                                  alt=""
                                  src="/frame-38.svg"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="background-group">
                        <div className="background11">
                          <div className="container256">
                            <div className="conversion-chart">
                              <img className="svgjsline1921-icon" alt="" />
                              <img className="svgjsline1922-icon" alt="" />
                            </div>
                            <div className="conversion-chart-axis">
                              <div className="svgjsg1905">
                                <img
                                  className="svgjsg1906-icon"
                                  alt=""
                                  src="/svgjsg1906.svg"
                                />
                                <img
                                  className="svgjsg1916-icon"
                                  alt=""
                                  src="/svgjsg1916.svg"
                                />
                                <div className="conversion-chart-data-point">
                                  <img
                                    className="svgjscircle1913-icon"
                                    alt=""
                                  />
                                  <b className="conversion-chart-data">48%</b>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="conversion-chart-title-contain">
                            <div className="margin41">
                              <div className="container257">
                                <div className="container258">
                                  <b className="conversion-chart-title">
                                    38,566
                                  </b>
                                </div>
                                <div className="container259">
                                  <b className="conversion">Conversion</b>
                                </div>
                              </div>
                            </div>
                          </div>
                          <img
                            className="img-icon16"
                            alt=""
                            src="/img-17.svg"
                          />
                        </div>
                        <div className="background12">
                          <div className="container260">
                            <div className="applications-chart">
                              <img className="svgjsline1945-icon" alt="" />
                              <img className="svgjsline1946-icon" alt="" />
                            </div>
                            <div className="applications-chart-axis">
                              <div className="svgjsg1929">
                                <img
                                  className="svgjsg1930-icon"
                                  alt=""
                                  src="/svgjsg1906.svg"
                                />
                                <div className="svgjsg1936">
                                  <img
                                    className="svgjsg1940-icon"
                                    alt=""
                                    src="/svgjsg1940.svg"
                                  />
                                  <div className="applications-chart-data-point">
                                    <img
                                      className="svgjscircle1937-icon"
                                      alt=""
                                    />
                                    <b className="applications-chart-data">
                                      75%
                                    </b>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="applications-chart-title-conta">
                            <div className="margin42">
                              <div className="container261">
                                <div className="container262">
                                  <b className="applications-chart-title">
                                    55,566
                                  </b>
                                </div>
                                <div className="container263">
                                  <b className="applications">Applications</b>
                                </div>
                              </div>
                            </div>
                          </div>
                          <img
                            className="img-icon17"
                            alt=""
                            src="/img-18.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <input className="button22" type="radio" name="radioGroup-1" />
        </div>
      </section>
    </div>
  );
};

MuicomByHtmltodesignF.propTypes = {
  className: PropTypes.string,
};

export default MuicomByHtmltodesignF;
