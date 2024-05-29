import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import authImage from "../../assets/images/registration.png";
import RegistrationForm from "./RegistrationForm";
import LogInForm from "./logInForm";
import "./styles.sass";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const AuthPage = () => {
  const [value, setValue] = React.useState(0);
  const phoneMask = "+998 (00) 000-00-00";
  const Mask = [
    {
      mask: phoneMask,
    },
  ];

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className='authPage'>
      <div className='container'>
        <div className='authPageContainer'>
          <div className='authPageImage'>
            <p className='text'>Добро пожаловать!</p>
            <img
              src={authImage}
              alt='authImage'
              className='img'
            />
          </div>
          <div className='tabsBlock'>
            <Box sx={{ width: "100%" }}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label='basic tabs example'
                >
                  <Tab
                    label='Roʻyxatdan oʻtish'
                    {...a11yProps(0)}
                  />
                  <Tab
                    label='Tizimga kirish'
                    {...a11yProps(1)}
                  />
                </Tabs>
              </Box>
              <CustomTabPanel
                value={value}
                index={0}
              >
                <RegistrationForm />
              </CustomTabPanel>
              <CustomTabPanel
                value={value}
                index={1}
              >
                <LogInForm />
              </CustomTabPanel>
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
