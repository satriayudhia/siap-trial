import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { IoMdArrowRoundForward } from "react-icons/io";
import { useHistory } from "react-router-dom";

//Assets
import Banner from "../assets/images/components-banner.png";
import Banner2 from "../assets/images/components-banner@2x.png";
import Banner3 from "../assets/images/components-banner@3x.png";
import Simulasi from "../assets/icons/icon-product-simulasi-dana.png";
import Simulasi2 from "../assets/icons/icon-product-simulasi-dana@2x.png";
import Simulasi3 from "../assets/icons/icon-product-simulasi-dana@3x.png";
import Tagihan from "../assets/icons/icon-product-tagihan.png";
import Tagihan2 from "../assets/icons/icon-product-tagihan@2x.png";
import Tagihan3 from "../assets/icons/icon-product-tagihan@3x.png";
import Pelunasan from "../assets/icons/icon-product-pelunasaan.png";
import Pelunasan2 from "../assets/icons/icon-product-pelunasaan@2x.png";
import Pelunasan3 from "../assets/icons/icon-product-pelunasaan@3x.png";
import Investasi from "../assets/icons/icon-product-investasi.png";
import Investasi2 from "../assets/icons/icon-product-investasi@2x.png";
import Investasi3 from "../assets/icons/icon-product-investasi@3x.png";
import Tunai from "../assets/icons/icon-product-dana-tunai.png";
import Tunai2 from "../assets/icons/icon-product-dana-tunai@2x.png";
import Tunai3 from "../assets/icons/icon-product-dana-tunai@3x.png";
import Haji from "../assets/icons/icon-product-dana-haji.png";
import Haji2 from "../assets/icons/icon-product-dana-haji@2x.png";
import Haji3 from "../assets/icons/icon-product-dana-haji@3x.png";
import Mobil from "../assets/icons/icon-product-mobil.png";
import Mobil2 from "../assets/icons/icon-product-mobil@2x.png";
import Mobil3 from "../assets/icons/icon-product-mobil@3x.png";
import Rumah from "../assets/icons/icon-product-rumah.png";
import Rumah2 from "../assets/icons/icon-product-rumah@2x.png";
import Rumah3 from "../assets/icons/icon-product-rumah@3x.png";

//Components
import LeftNavbar from "../components/LeftNavbar";
import TopNavbar from "../components/TopNavbar";
import HomeCard from "../components/HomeCard";
import HomeRightContent from "../components/HomeRightContent";

const Home = () => {
  const router = useHistory();

  return (
    <Container fluid>
      <Row>
        <LeftNavbar />
        <Col sm={10}>
          <TopNavbar />

          <Row className="home-content-container">
            <Col sm={6} style={{ paddingRight: "5%" }}>
              <img
                src={Banner}
                srcSet={`${Banner2} 866w, ${Banner3} 1314w`}
                className="banner-img"
              />

              <div className="home-title-container">
                <div>
                  <h2 className="home-title">Berita SIAP</h2>
                  <div className="home-sub-title">
                    Temukan Info menarik Tentang SIAP
                  </div>
                </div>
                <IoMdArrowRoundForward color="#0c135f" size={20} />
              </div>

              <div className="home-news-container">
                <HomeCard left={true} />
                <HomeCard right={true} />
                <HomeCard left={true} />
                <HomeCard right={true} />
              </div>
            </Col>

            <Col sm={6} className="home-right-content-all-container">
              <h2 className="home-title">Widget SIAP</h2>
              <div className="home-sub-title">
                Mempermudah anda dalam penghitungan di produk SIAP
              </div>

              <div className="home-right-content-container">
                <HomeRightContent
                  images={[Simulasi, Simulasi2, Simulasi3]}
                  title="Simulasi Pendanaan"
                  route={null}
                />
                <HomeRightContent
                  images={[Tagihan, Tagihan2, Tagihan3]}
                  title={`Bayar \n Tagihan`}
                  route={null}
                />
                <HomeRightContent
                  images={[Pelunasan, Pelunasan2, Pelunasan3]}
                  title="Simulasi Pelunasan"
                  route={null}
                />
              </div>

              <h2 className="home-title">Produk SIAP</h2>
              <div className="home-sub-title">kumpulan produk SIAP</div>

              <div className="home-right-content-container">
                <HomeRightContent
                  images={[Investasi, Investasi2, Investasi3]}
                  title={`SIAP \n Modalin`}
                  route={null}
                />
                <HomeRightContent
                  images={[Tunai, Tunai2, Tunai3]}
                  title={`SIAP \n Multiguna`}
                  route={null}
                />
                <HomeRightContent
                  images={[Haji, Haji2, Haji3]}
                  title={`SIAP \n Dana Haji`}
                  route={null}
                />
                <HomeRightContent
                  images={[Mobil, Mobil2, Mobil3]}
                  title={`SIAP \n Dana Mobil`}
                  route={() => router.push("/simulasi-dana-mobil")}
                />
                <HomeRightContent
                  images={[Rumah, Rumah2, Rumah3]}
                  title={`SIAP \n Dana Rumah`}
                  route={null}
                />
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
