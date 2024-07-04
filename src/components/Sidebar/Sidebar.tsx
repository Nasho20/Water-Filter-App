import styles from "./Sidebar.module.scss";
import { Link, adminLinks } from "./links";
import { SettingsIcon, LogoutIcon, BlueFilterLogo } from "../../assets";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { setUser } from "../../store/slices/authSlice";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
// import { i18n } from "@lingui/core";

export default function Sidebar() {
  // const { token, role } = useAppSelector((state: any) => state.auth);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  let links: Link[] = adminLinks;
  // switch (role) {
  //   case "super_admin":
  //     links = super_adminLinks;
  //     break;
  //   case "admin":
  //     links = adminLinks;
  //     break;
  //   case "clinic":
  //     links = clinicLinks;
  //     break;
  //   case "receptionist":
  //     links = receptionistLinks;
  //     break;
  //   case "team_leader":
  //     links = team_leadLinks;
  //     break;
  //   default:
  //     break;
  // }

  let image;

  const handleLoggout = async () => {
    localStorage.removeItem("token");
    dispatch(
      setUser({
        token: null,
        role: null,
        userId: null,
      })
    );
    navigate("/");
  };

  return (
    <div className={`${styles.sidebar} d-flex fd-column ai-start`}>
      <div className="d-flex align-items-center gap-3">
        <div className={`${styles.logo} d-flex p-2 rounded`}>
          <img src={BlueFilterLogo} className="img-res" alt="" />
        </div>
        <div>
          <h4 className={`${styles.logoTitle} pt-4`}>Blue Filter</h4>
        </div>
      </div>
      <div className={`${styles.links} pt-4`}>
        {links.map((link, index) => (
          <>
            {link.type === "link" && (
              <div key={index}>
                <NavLink
                  end
                  key={`link-${index}-${link.name}`}
                  className={`fw-400 ai-center ${styles.sidebar_link}`}
                  to={link.path}
                >
                  <div className="d-flex ps-3 gap-4">
                    <p>{link.icon}</p>
                    <p className={`${styles.menu_text}`}>{link.name}</p>
                  </div>
                </NavLink>
              </div>
            )}
          </>
        ))}
      </div>
      <div className={`${styles.bottom_links}`}>
        <NavLink
          end
          key={`link-setup`}
          className={`fw-400 ai-center ${styles.sidebar_link}`}
          to={"/admin/setup"}
        >
          <div className="d-flex ps-3 gap-4">
            <p>
              <SettingsIcon />
            </p>
            <p className={`${styles.menu_text}`}>Setup</p>
          </div>
        </NavLink>
        <NavLink
          key={`link-setup`}
          className={`fw-400 ai-center pointer-cursor ${styles.sidebar_link}`}
          onClick={handleLoggout}
          to={"/"}
        >
          <div className="d-flex ps-3 gap-4">
            <p>
              <LogoutIcon />
            </p>
            <p className={`${styles.menu_text}`}>Logout</p>
          </div>
        </NavLink>
      </div>
    </div>
  );
}
