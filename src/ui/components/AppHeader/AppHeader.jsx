import React from "react";
import { CgWebsite } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";
import { useAuthContext } from "../../../context/AuthContext";
import { removeToken } from "../../../helpers";

import HeaderWrapper from "./AppHeader.stayles";

const AppHeader = () => {
  const { user, setUser } = useAuthContext();
  const navigate = useNavigate();

  const handleLogout = () => {
    removeToken();
    setUser(undefined);
    navigate("/signin", { replace: true });
  };

  return (
    <HeaderWrapper>
      <div className="header_space">
        <Button className="header_space_brand" href="/" type="link">
          <CgWebsite size={64} />
        </Button>
        <div className="auth_buttons">
          {user ? (
            <>
              <Button className="auth_button_login" href="/profile" type="link">
                {user.username}
              </Button>
              <Button
                className="auth_button_signUp"
                type="primary"
                onClick={handleLogout}
              >
                Logout
              </Button>
            </>
          ) : (
            <>
              <Button
                className="auth_button_login"
                href="/signin"
                type="primary">
                Login
              </Button>
              <Button
                className="auth_button_signUp"
                href="/signup"
                type="primary"
              >
                SignUp
              </Button>
            </>
          )}
        </div>
      </div>
    </HeaderWrapper>
  );
};

export default AppHeader;
