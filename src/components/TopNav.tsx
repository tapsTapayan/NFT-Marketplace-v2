import React, { useEffect, useRef, useState } from "react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { Link, useLocation } from "react-router-dom";
import { useAnchorWallet } from "@solana/wallet-adapter-react";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import CurrencyToggle from "./CurrencyToggle";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import styled from "styled-components";
import { RouteName } from "../constant/routeNames";
import MobileNavigation from "./NavBar/MobileNavigation";
import Navigation from "./NavBar/Navigation";

interface TopNavProps {
  showCurrencyToggle?: boolean;
}

const ROUTES = [
  { url: RouteName.multipleCurrencyMarketplace, name: "Dao Projects" },
  { url: RouteName.ClaimQubes, name: "Claim Qubes" },
];

// const OTHER_LAYOUT_ROUTES = [
//   { url: RouteName.customToken, name: "Custom Token Marketplace" },
//   { url: RouteName.multipleCollection, name: "Multi Collection Marketplace" },
//   { url: RouteName.marketplaceWithUrl, name: "Marketplace With URL" },
//   {
//     url: RouteName.multipleCurrencyMarketplace,
//     name: "Multi Currency Marketplace",
//   },
//   { url: RouteName.multipleCurrencySell, name: "Multi Currency Sell" },
// ];
const DROP_DOWN_MENU = [
  { url: RouteName.HomeDesignFilter, name: "Community Collection" },
  { url: RouteName.MyCollection, name: "My Collection" },
  // { url: RouteName.marketplaceWithUrl, name: "Marketplace With URL" },
  // {
  //   url: RouteName.multipleCurrencyMarketplace,
  //   name: "Multi Currency Marketplace",
  // },
  // { url: RouteName.multipleCurrencySell, name: "Multi Currency Sell" },
  // { url: RouteName.activityView, name: "Marketplace Activity" },
];

const TopNav: React.FC<TopNavProps> = ({ showCurrencyToggle = false }) => {
  const wallet = useAnchorWallet();

  const [open, setOpen] = useState(false);
  const [open_sub, setOpen_sub] = useState(false);
  const anchorRef = useRef<HTMLLIElement>(null);
  const anchorRef_sub = useRef<HTMLLIElement>(null);

  const { pathname } = useLocation();

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleToggle_sub = () => {
    setOpen_sub((prevOpen) => !prevOpen);
  };

  const handleClose = (event: any) => {
    if (anchorRef.current?.contains(event.target)) return;
    setOpen(false);
  };

  const handleClose_sub = (event: any) => {
    if (anchorRef_sub.current?.contains(event.target)) return;
    setOpen_sub(false);
  };

  const handleListKeyDown = (event: any) => {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  };
  const handleListKeyDown_sub = (event: any) => {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen_sub(false);
    }
  };

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current?.focus();
    }
    prevOpen.current = open;
  }, [open]);

  return (
    <HeaderBar className="navbar navbar-expand-lg HeaderBar">
      <Logo>
        <Link to={RouteName.HomePage}>
          <img alt="" src="/Rework-Logo.svg" />
        </Link>
      </Logo>
      <Menu>
        <DropdownAnchor
          ref={anchorRef}
          onClick={handleToggle}
          className={
            DROP_DOWN_MENU.some((item) => item.url === pathname) ? "active" : ""
          }
        >
          Collection <i className="icon-down fas fa-chevron-down" />
          <Popper
            open={open}
            anchorEl={anchorRef.current}
            role={undefined}
            transition
            disablePortal
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList autoFocusItem={open} onKeyDown={handleListKeyDown}>
                  {DROP_DOWN_MENU.map((item) => (
                    <MenuItem
                      className={
                        item.url === pathname ? "active active-submenu" : ""
                      }
                      key={item.url}
                    >
                      <Link to={item.url}>{item.name}</Link>
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Popper>
        </DropdownAnchor>
        {ROUTES.map((item) => (
          <li key={item.url} className={pathname === item.url ? "active" : ""}>
            <Link to={item.url}>{item.name}</Link>
          </li>
        ))}
        {/* <li className="mx-3">
          <a
            href="https://www.homeqube.ai/"
            key={"homeqube"}
            target="_blank"
            rel="noreferrer"
          >
            HOMEQUBE.AI
          </a>
        </li> */}
        <DropdownAnchor_Sub ref={anchorRef_sub} onClick={handleToggle_sub}>
          Other Products <i className="icon-down fas fa-chevron-down" />
          <Popper
            open={open_sub}
            anchorEl={anchorRef_sub.current}
            role={undefined}
            transition
            disablePortal
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose_sub}>
                <MenuList
                  autoFocusItem={open_sub}
                  onKeyDown={handleListKeyDown_sub}
                >
                  <MenuItem>
                    <a
                      href="https://www.qube.homeqube.com/"
                      key={"homeqube"}
                      target="_blank"
                      rel="noreferrer"
                      className="qube-text"
                    >
                      QUBE.HOMEQUBE{" "}
                      <i className="fas fa-solid fa-arrow-right mx-2" />
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="https://www.homeqube.com/"
                      key={"homeqube"}
                      target="_blank"
                      rel="noreferrer"
                      className="qube-text"
                    >
                      HOMEQUBE.COM{" "}
                      <i className="fas fa-solid fa-arrow-right mx-3" />
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="https://www.homeqube.ai/"
                      key={"homeqube"}
                      target="_blank"
                      rel="noreferrer"
                      className="qube-text"
                    >
                      HOMEQUBE.AI{" "}
                      <i className="fas fa-solid fa-arrow-right mx-3" />
                    </a>
                  </MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Popper>
        </DropdownAnchor_Sub>
        <li>
          <a
            href="https://t.me/homeqube"
            key={"telegram"}
            target="_blank"
            rel="noreferrer"
          >
            <img src="/telegram2.svg" alt="" />
          </a>
          <a
            href="https://discord.gg/JhQXmjm59e"
            key={"telegram"}
            target="_blank"
            rel="noreferrer"
          >
            <img src="/discord2.svg" alt="" className="mx-3" />
          </a>
        </li>
      </Menu>
      {/* <MobileNavigation />
      <Navigation /> */}
      {showCurrencyToggle && <CurrencyToggle />}
      <Wallet>
        {wallet ? (
          <ConnectButton className="wallet-width" />
        ) : (
          <ConnectButton className="wallet-width-connect">
            Connect Wallet
          </ConnectButton>
        )}
      </Wallet>
    </HeaderBar>
  );
};

const HeaderBar = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  background-color: #0a0909;
  backdrop-filter: blur(5px);
  padding-right: 4%;
  padding-left: 4%;
`;

const DropdownAnchor = styled.li`
  cursor: pointer;
  font-family: "Rajdhani";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  text-transform: uppercase;

  &:hover {
    color: rgb(131, 146, 161);
  }

  > div {
    z-index: 1000;
  }

  .MuiList-root {
    margin-top: 30px;
    background: #3f3f4b;
    width: auto;
    height: auto;
    z-index: 4;

    a {
      padding-top: 4px;
      padding-bottom: 4px;
      color: #fff;
      font-family: "Rajdhani";
      font-style: normal;
      font-weight: 700;
      font-size: 18px;

      &:hover {
        border-bottom: 0px;
        color: #fff;
      }
    }
  }
`;
const DropdownAnchor_Sub = styled.li`
  cursor: pointer;
  font-family: "Rajdhani";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  text-transform: uppercase;

  &:hover {
    color: rgb(131, 146, 161);
  }

  > div {
    z-index: 1000;
  }

  .MuiList-root {
    margin-top: 30px;
    background: #3f3f4b;
    width: auto;
    height: auto;

    a {
      padding-top: 4px;
      padding-bottom: 4px;
      color: #fff;
      font-family: "Rajdhani";
      font-style: normal;
      font-weight: 700;
      font-size: 18px;

      &:hover {
        border-bottom: 0px;
        color: #fff;
      }
    }
  }
`;

const Wallet = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  .wallet-adapter-button {
    margin: 0 auto;
    line-height: 1rem;
  }
`;

const ConnectButton = styled(WalletMultiButton)`
  padding: 6px 16px;
  border-radius: 50rem !important;
  background-color: #f4f4f8;
  margin: 0 auto;
  margin-top: 1.5rem !important;
  font-family: "Rajdhani", sans-serif !important;
  width: 169px;
  height: 56px;
  color: #040f24;
  font-style: normal;
  font-weight: 700;

  text-align: center;
  text-transform: uppercase;
`;

const Logo = styled.div`
  flex: 0 0 auto;
  margin-right: 10px;

  img {
    height: 3rem;
  }
`;

const Menu = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  flex: 1 0 auto;
  margin-bottom: 0;
  padding-left: 10%;
  gap: 6%;

  li {
    margin: 0 12px;

    color: #fff;
    font-family: "Rajdhani";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;

    a {
      color: #fff;
      list-style-image: none;
      list-style-position: outside;
      list-style-type: none;
      outline: none;
      text-decoration: none;
      text-size-adjust: 100%;
      touch-action: manipulation;
      transition: color 0.3s;
      text-transform: uppercase;

      img {
        max-height: 50px;
      }
    }

    a:hover,
    a:active {
      color: rgb(131, 146, 161);
      border-bottom: 4px solid var(--title-text-color);
    }
  }
`;

export default TopNav;
