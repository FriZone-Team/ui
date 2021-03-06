import React, { useState } from "react";
import { Row, Col, Container, Form, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Trans } from "react-i18next";
import ButtonWithLoading from "../../../components/ButtonWithLoading";
import { signInByProvider } from "../../../api";
import ByProvider from "./by-provider";

//swiper
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Autoplay } from "swiper";

// Import Swiper styles
import "swiper/swiper-bundle.min.css";
import "swiper/components/navigation/navigation.scss";

//img
import logo from "../../../assets/images/logo-full.png";
import login1 from "../../../assets/images/login/1.png";
import login2 from "../../../assets/images/login/2.png";
import login3 from "../../../assets/images/login/3.png";

// install Swiper modules
SwiperCore.use([Navigation, Autoplay]);

const SignIn = () => {
  let history = useHistory();
  let [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <section className="sign-in-page">
        <div id="container-inside">
          <div id="circle-small"></div>
          <div id="circle-medium"></div>
          <div id="circle-large"></div>
          <div id="circle-xlarge"></div>
          <div id="circle-xxlarge"></div>
        </div>
        <Container className="p-0">
          <Row className="no-gutters">
            <Col md="6" className="text-center pt-5">
              <div className="sign-in-detail text-white">
                <Link className="sign-in-logo mb-5" to="#">
                  <Image src={logo} className="img-fluid" alt="logo" />
                </Link>
                <div className="sign-slider overflow-hidden ">
                  <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                      delay: 2000,
                      disableOnInteraction: false,
                    }}
                    className="list-inline m-0 p-0 "
                  >
                    <SwiperSlide>
                      <Image
                        src={login1}
                        className="img-fluid mb-4"
                        alt="logo"
                      />
                      <h4 className="mb-1 text-white">
                        <Trans i18nKey="signin_banner_1_title" />
                      </h4>
                      <p>
                        <Trans i18nKey="signin_banner_1_description" />
                      </p>
                    </SwiperSlide>
                    <SwiperSlide>
                      <Image
                        src={login2}
                        className="img-fluid mb-4"
                        alt="logo"
                      />
                      <h4 className="mb-1 text-white">
                        <Trans i18nKey="signin_banner_2_title" />
                      </h4>
                      <p>
                        <Trans i18nKey="signin_banner_2_description" />
                      </p>
                    </SwiperSlide>
                    <SwiperSlide>
                      <Image
                        src={login3}
                        className="img-fluid mb-4"
                        alt="logo"
                      />
                      <h4 className="mb-1 text-white">
                        <Trans i18nKey="signin_banner_3_title" />
                      </h4>
                      <p>
                        <Trans i18nKey="signin_banner_3_description" />
                      </p>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </Col>
            <Col md="6" className="bg-white pt-5 pt-5 pb-lg-0 pb-5">
              <div className="sign-in-from">
                <h1 className="mb-0">
                  <Trans i18nKey="signin_title" />
                </h1>
                <p>
                  <Trans i18nKey="signin_description" />.
                </p>
                <Form className="mt-4">
                  <Form.Group className="form-group">
                    <Form.Label>
                      <Trans i18nKey="email_address" />
                    </Form.Label>
                    <Form.Control
                      type="email"
                      className="mb-0"
                      id="exampleInputEmail1"
                      placeholder="Enter email"
                      disabled={isLoading}
                    />
                  </Form.Group>
                  <Form.Group className="form-group">
                    <Form.Label>
                      <Trans i18nKey="password" />
                    </Form.Label>
                    <Link to="/auth/recoverpw" className="float-end">
                      <Trans i18nKey="forgot_password" /> ?
                    </Link>
                    <Form.Control
                      type="password"
                      className="mb-0"
                      id="exampleInputPassword1"
                      placeholder="Password"
                      disabled={isLoading}
                    />
                  </Form.Group>
                  <div className="d-inline-block w-100">
                    <Form.Check className="d-inline-block mt-2 pt-1">
                      <Form.Check.Input
                        type="checkbox"
                        className="me-2"
                        id="customCheck11"
                      />
                      <Form.Check.Label>
                        <Trans i18nKey="remember_me" />
                      </Form.Check.Label>{" "}
                    </Form.Check>
                    <ButtonWithLoading
                      variant="primary"
                      type="button"
                      className="float-end"
                      onClick={() => history.push("/")}
                      isLoading={isLoading}
                    >
                      <Trans i18nKey="signin" />
                    </ButtonWithLoading>
                  </div>
                  <div className="sign-info">
                    <span className="iq-question dark-color d-inline-block line-height-2">
                      <Trans i18nKey="signup_question" /> ?{" "}
                      <Link to="/auth/sign-up">
                        <Trans i18nKey="signup" />
                      </Link>
                    </span>
                    <ByProvider
                      isLoading={isLoading}
                      setIsLoading={setIsLoading}
                      onSuccess={signInByProvider}
                    />
                  </div>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default SignIn;
