import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  InputGroup,
  FormControl,
  Button,
} from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import NumberFormat from "react-number-format";

//Assets
import Mobil from "../assets/icons/icon-product-mobil.png";
import Mobil2 from "../assets/icons/icon-product-mobil@2x.png";
import Mobil3 from "../assets/icons/icon-product-mobil@3x.png";

//Configs
import { API } from "../configs/API";

//Components
import LeftNavbar from "../components/LeftNavbar";
import TopNavbar from "../components/TopNavbar";
import ModalLoading from "../components/ModalLoading";

const SimulasiDanaMobil = () => {
  const [loading, setLoading] = useState(false);
  const [areaDomiciles, setAreaDomiciles] = useState(null);
  const [areaID, setAreaID] = useState(null);
  const [cityBranches, setCityBranches] = useState(null);
  const [cityID, setCityID] = useState(null);
  const [plateCodes, setPlateCodes] = useState(null);
  const [plateID, setPlateID] = useState(null);
  const [brands, setBrands] = useState(null);
  const [brandID, setBrandID] = useState(null);
  const [models, setModels] = useState(null);
  const [modelID, setModelID] = useState(null);
  const [types, setTypes] = useState(null);
  const [typeID, setTypeID] = useState(null);
  const [years, setYears] = useState(null);
  const [yearID, setYearID] = useState(null);
  const [bpkbOwn, setBpkbOwn] = useState(null);
  const [insurances, setInsurances] = useState(null);
  const [insuranceID, setInsuranceID] = useState(null);
  const [maxLoan, setMaxLoan] = useState(null);
  const [loan, setLoan] = useState(null);

  const router = useHistory();

  const getAreaDomicile = async () => {
    try {
      setLoading(true);
      const res = await API.get("danamobil/master/area");
      console.log(res);
      setAreaDomiciles(res.data.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const getBranch = async () => {
    try {
      setLoading(true);
      const body = { area_id: areaID };
      const res = await API.post("danamobil/master/branch", body);
      console.log(res);
      setCityBranches(res.data.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const getPlateCode = async () => {
    try {
      setLoading(true);
      const res = await API.get("danamobil/master/plate-code");
      console.log(res);
      setPlateCodes(res.data.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const getBrands = async () => {
    try {
      setLoading(true);
      const body = { branch_id: cityID };
      const res = await API.post("danamobil/master/merk", body);
      console.log(res);
      setBrands(res.data.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const getModels = async () => {
    try {
      setLoading(true);
      const body = { merk_id: brandID };
      const res = await API.post("danamobil/master/model", body);
      console.log(res);
      setModels(res.data.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const getTypes = async () => {
    try {
      setLoading(true);
      const body = { model_id: modelID };
      const res = await API.post("danamobil/master/type", body);
      console.log(res);
      setTypes(res.data.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const getYears = async () => {
    try {
      setLoading(true);
      const body = {
        merk_id: brandID,
        model_id: modelID,
        type_id: typeID,
      };
      const res = await API.post("danamobil/master/year", body);
      console.log(res);
      setYears(res.data.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const getInsurances = async () => {
    try {
      setLoading(true);
      const res = await API.get("/danamobil/master/insurance");
      console.log(res);
      setInsurances(res.data.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const getMaxLoan = async () => {
    try {
      setLoading(true);
      const body = {
        branch_id: cityID,
        merk_id: brandID,
        model_id: modelID,
        type_id: typeID,
        year: yearID,
      };

      const res = await API.post("danamobil/simulations/calculator", body);
      console.log(res);
      setMaxLoan(res.data.data.max_loan);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getAreaDomicile();
  }, []);

  useEffect(() => {
    setCityBranches(null);
    setCityID(null);
    setPlateCodes(null);
    setPlateID(null);
    setBrands(null);
    setBrandID(null);
    setModels(null);
    setModelID(null);
    setTypes(null);
    setTypeID(null);
    setYears(null);
    setYearID(null);
    setBpkbOwn(null);
    setInsurances(null);
    setInsuranceID(null);
    setMaxLoan(null);
    setLoan(null);
    areaID !== null && getBranch();
  }, [areaID]);

  useEffect(() => {
    setPlateCodes(null);
    setPlateID(null);
    setBrands(null);
    setBrandID(null);
    setModels(null);
    setModelID(null);
    setTypes(null);
    setTypeID(null);
    setYears(null);
    setYearID(null);
    setBpkbOwn(null);
    setInsurances(null);
    setInsuranceID(null);
    setMaxLoan(null);
    setLoan(null);
    cityID !== null && getPlateCode();
  }, [cityID]);

  useEffect(() => {
    setBrands(null);
    setBrandID(null);
    setModels(null);
    setModelID(null);
    setTypes(null);
    setTypeID(null);
    setYears(null);
    setYearID(null);
    setBpkbOwn(null);
    setInsurances(null);
    setInsuranceID(null);
    setMaxLoan(null);
    setLoan(null);
    cityID !== null && getBrands();
  }, [plateID]);

  useEffect(() => {
    setModels(null);
    setModelID(null);
    setTypes(null);
    setTypeID(null);
    setYears(null);
    setYearID(null);
    setBpkbOwn(null);
    setInsurances(null);
    setInsuranceID(null);
    setMaxLoan(null);
    setLoan(null);
    brandID !== null && getModels();
  }, [brandID]);

  useEffect(() => {
    setTypes(null);
    setTypeID(null);
    setYears(null);
    setYearID(null);
    setBpkbOwn(null);
    setInsurances(null);
    setInsuranceID(null);
    setMaxLoan(null);
    setLoan(null);
    modelID !== null && getTypes();
  }, [modelID]);

  useEffect(() => {
    setBpkbOwn(null);
    setInsurances(null);
    setInsuranceID(null);
    setMaxLoan(null);
    setLoan(null);
    typeID !== null && getYears();
  }, [typeID]);

  useEffect(() => {
    setInsurances(null);
    setInsuranceID(null);
    setMaxLoan(null);
    setLoan(null);
    bpkbOwn !== null && getInsurances();
  }, [bpkbOwn]);

  useEffect(() => {
    setMaxLoan(null);
    setLoan(null);
    cityID && brandID && modelID && typeID && yearID && getMaxLoan();
  }, [insuranceID]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      let timeout = setTimeout(() => {
        setLoading(false);
        clearTimeout(timeout);
      }, 3500);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <>
      <ModalLoading show={loading} handleClose={() => setLoading(false)} />
      <Container fluid>
        <Row>
          <LeftNavbar />
          <Col sm={10}>
            <TopNavbar />

            <Row className="simulation-row-container">
              <Col sm={12}>
                <IoMdArrowRoundBack
                  size={22}
                  className="simulation-back-arrow"
                  onClick={() => router.push("/")}
                />
                <div className="simulation-form-container">
                  <div className="simulation-header-container">
                    <div>
                      <h1 className="simulation-title">
                        Simulasi Pendanaan Mobil
                      </h1>
                      <div className="simulation-sub-title">
                        Simulasi pendanaan untuk memberikan gambaran
                      </div>
                    </div>
                    <img
                      src={Mobil}
                      srcSet={`${Mobil2} 866w, ${Mobil3} 1314w`}
                      className="simulation-car-img"
                    />
                  </div>

                  <Form onSubmit={(e) => handleSubmit(e)}>
                    <Row className="simulation-row-form">
                      <Col sm={6} className="simulation-col-left">
                        <label>Wilayah Domisili</label>

                        <div className="rail-select">
                          <div className="select-side">
                            <IoIosArrowDown size={25} color="#253999" />
                          </div>

                          <Form.Control
                            as="select"
                            value={areaID}
                            onChange={(e) => setAreaID(e.target.value)}
                            disabled={!areaDomiciles}
                          >
                            <option value={null}>Pilih Wilayah</option>
                            {areaDomiciles &&
                              areaDomiciles.map((domicile) => (
                                <option
                                  key={domicile.area_id}
                                  value={domicile.area_id}
                                >
                                  {domicile.area_name}
                                </option>
                              ))}
                          </Form.Control>
                        </div>
                      </Col>

                      <Col sm={6} className="simulation-col-left">
                        <label>Kota Domisili</label>

                        <div className="rail-select">
                          <div className="select-side">
                            <IoIosArrowDown size={25} color="#253999" />
                          </div>

                          <Form.Control
                            as="select"
                            value={cityID}
                            onChange={(e) => setCityID(e.target.value)}
                            disabled={!cityBranches}
                          >
                            <option value={null}>Pilih Wilayah</option>
                            {cityBranches &&
                              cityBranches.map((city) => (
                                <option
                                  key={city.branch_id}
                                  value={city.branch_id}
                                >
                                  {city.city}
                                </option>
                              ))}
                          </Form.Control>
                        </div>
                      </Col>
                    </Row>

                    <Row className="simulation-row-form">
                      <Col sm={6} className="simulation-col-left">
                        <label>Plat Nomor</label>

                        <div className="rail-select">
                          <div className="select-side">
                            <IoIosArrowDown size={25} color="#253999" />
                          </div>

                          <Form.Control
                            as="select"
                            value={plateID}
                            onChange={(e) => setPlateID(e.target.value)}
                            disabled={!plateCodes}
                          >
                            <option value={null}>Pilih Plat Nomor</option>
                            {plateCodes &&
                              plateCodes.map((plate) => (
                                <option key={plate} value={plate}>
                                  {plate}
                                </option>
                              ))}
                          </Form.Control>
                        </div>
                      </Col>

                      <Col sm={6} className="simulation-col-left">
                        <label>Brand Kendaraan</label>

                        <div className="rail-select">
                          <div className="select-side">
                            <IoIosArrowDown size={25} color="#253999" />
                          </div>

                          <Form.Control
                            as="select"
                            value={brandID}
                            onChange={(e) => setBrandID(e.target.value)}
                            disabled={!brands}
                          >
                            <option value={null}>Pilih Brand</option>
                            {brands &&
                              brands.map((brand) => (
                                <option
                                  key={brand.merk_id}
                                  value={brand.merk_id}
                                >
                                  {brand.description}
                                </option>
                              ))}
                          </Form.Control>
                        </div>
                      </Col>
                    </Row>

                    <Row className="simulation-row-form">
                      <Col sm={6} className="simulation-col-left">
                        <label>Model Mobil</label>

                        <div className="rail-select">
                          <div className="select-side">
                            <IoIosArrowDown size={25} color="#253999" />
                          </div>

                          <Form.Control
                            as="select"
                            value={modelID}
                            onChange={(e) => setModelID(e.target.value)}
                            disabled={!models}
                          >
                            <option value={null}>Pilih Model</option>
                            {models &&
                              models.map((model) => (
                                <option
                                  key={model.model_id}
                                  value={model.model_id}
                                >
                                  {model.description}
                                </option>
                              ))}
                          </Form.Control>
                        </div>
                      </Col>

                      <Col sm={6} className="simulation-col-left">
                        <label>Tipe Mobil</label>

                        <div className="rail-select">
                          <div className="select-side">
                            <IoIosArrowDown size={25} color="#253999" />
                          </div>

                          <Form.Control
                            as="select"
                            value={typeID}
                            onChange={(e) => setTypeID(e.target.value)}
                            disabled={!types}
                          >
                            <option value={null}>Pilih tipe</option>
                            {types &&
                              types.map((type) => (
                                <option key={type.type_id} value={type.type_id}>
                                  {type.description}
                                </option>
                              ))}
                          </Form.Control>
                        </div>
                      </Col>
                    </Row>

                    <Row className="simulation-row-form">
                      <Col sm={6} className="simulation-col-left">
                        <label>Tahun Kendaraan</label>

                        <div className="rail-select">
                          <div className="select-side">
                            <IoIosArrowDown size={25} color="#253999" />
                          </div>

                          <Form.Control
                            as="select"
                            value={yearID}
                            onChange={(e) => setYearID(e.target.value)}
                            disabled={!years}
                          >
                            <option value={null}>Pilih Tahun</option>
                            {years &&
                              Object.values(years).map((year) => (
                                <option key={year.year} value={year.year}>
                                  {year.year}
                                </option>
                              ))}
                          </Form.Control>
                        </div>
                      </Col>

                      <Col sm={6} className="simulation-col-left">
                        <label>Atas Nama BPKB</label>

                        <div className="rail-select">
                          <div className="select-side">
                            <IoIosArrowDown size={25} color="#253999" />
                          </div>

                          <Form.Control
                            as="select"
                            value={bpkbOwn}
                            onChange={(e) => setBpkbOwn(e.target.value)}
                            disabled={!yearID}
                          >
                            <option value={null}>Pribadi/Keluarga</option>
                            <option value="Pribadi">Pribadi</option>
                            <option value="Keluarga">Keluarga</option>
                          </Form.Control>
                        </div>
                      </Col>
                    </Row>

                    <Row className="simulation-row-form">
                      <Col sm={6} className="simulation-col-left">
                        <label>Asuransi</label>

                        <div className="rail-select">
                          <div className="select-side">
                            <IoIosArrowDown size={25} color="#253999" />
                          </div>

                          <Form.Control
                            as="select"
                            value={insuranceID}
                            onChange={(e) => setInsuranceID(e.target.value)}
                            disabled={!insurances}
                          >
                            <option value={null}>Pilih Asuransi</option>
                            {insurances &&
                              insurances.map((insurance) => (
                                <option key={insurance} value={insurance}>
                                  {insurance}
                                </option>
                              ))}
                          </Form.Control>
                        </div>
                      </Col>

                      <Col sm={6} className="simulation-col-left">
                        <label>Pengajuan pokok pinjaman</label>

                        <div className="rail-select">
                          <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                              <InputGroup.Text>Rp</InputGroup.Text>
                            </InputGroup.Prepend>
                            {/* <FormControl
                            className="input-text"
                            type="number"
                            max={maxLoan}
                            placeholder="Masukan jumlah nominal"
                          /> */}

                            <NumberFormat
                              disabled={!maxLoan}
                              value={loan}
                              thousandSeparator="."
                              decimalSeparator=","
                              className="form-control input-text"
                              // type="number"
                              max={maxLoan}
                              onChange={(e) => setLoan(e.target.value)}
                              // onBlur={() => checkTotal()}
                              // customInput={TextField}
                            />
                          </InputGroup>

                          <div className="maximum-container">
                            <div className="maximum-text">
                              *Maksimal pokok pembayaran berdasarkan data asset
                            </div>

                            <div className="maximum-price">
                              {maxLoan == null ? (
                                "Rp. xx.xxx.xxx"
                              ) : (
                                <NumberFormat
                                  value={maxLoan}
                                  displayType={"text"}
                                  thousandSeparator="."
                                  decimalSeparator=","
                                  prefix={"Rp. "}
                                />
                              )}
                            </div>
                          </div>
                        </div>
                      </Col>
                    </Row>

                    <Row className="simulation-btn-container">
                      <Button
                        className="calculation-btn"
                        disabled={
                          !areaID ||
                          !cityID ||
                          !plateID ||
                          !brandID ||
                          !modelID ||
                          !typeID ||
                          !yearID ||
                          !bpkbOwn ||
                          !insuranceID ||
                          !loan ||
                          parseInt(loan.replace(/\./g, "")) > maxLoan
                        }
                        type="submit"
                        onClick={(e) => handleSubmit(e)}
                      >
                        Kalkulasikan
                      </Button>
                    </Row>
                  </Form>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SimulasiDanaMobil;
