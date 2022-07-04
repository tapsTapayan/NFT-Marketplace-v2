import { useRef } from "react";
import { CandyShop } from "@liqnft/candy-shop-sdk";
import { Orders } from "../public/Orders";
import { Stat } from "../public/Stat";
import { useAnchorWallet } from "@solana/wallet-adapter-react";
import { PublicKey, Cluster } from "@solana/web3.js";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const CANDY_SHOP_CREATOR_ADDRESS = new PublicKey(
  process.env.REACT_APP_CANDY_SHOP_CREATOR_ADDRESS!
);
const CANDY_SHOP_TREASURY_MINT = new PublicKey(
  process.env.REACT_APP_CANDY_SHOP_TREASURY_MINT!
);
const CANDY_SHOP_PROGRAM_ID = new PublicKey(
  process.env.REACT_APP_CANDY_SHOP_PROGRAM_ID!
);
const NETWORK = process.env.REACT_APP_SOLANA_NETWORK! as Cluster;

const DesContainer = styled.div`
  width: 100%;

  .candy-filter {
    color: #000;
  }
`;

const MarketplaceWithFilter: React.FC = () => {
  const wallet = useAnchorWallet();

  const candyShopRef = useRef<CandyShop>(
    new CandyShop(
      CANDY_SHOP_CREATOR_ADDRESS,
      CANDY_SHOP_TREASURY_MINT,
      CANDY_SHOP_PROGRAM_ID,
      NETWORK
    )
  );

  return (
    <>
      <DesContainer>
        <Stat candyShop={candyShopRef.current} title={""} description={""} />
        <Orders
          wallet={wallet}
          candyShop={candyShopRef.current}
          walletConnectComponent={<WalletMultiButton />}
          // configure filter by collection
          filters={[
            {
              name: "Structural Legacies",
              collectionId: "1",
              identifier: [-354695101, -1775657236],
              qubeClaims :"",
              description:
                "INTRODUCING HOMEQUBE’S STRUCTURAL LEGACY SYSTEM. EACH STRUCTURAL IS UNIQUE. WE GENERATED 2500 UNIQUE COMBINATIONS (WITHOUT CANTILEVER) FROM OUR SYSTEMS ARCHITECTURE PLATFORM (SAP). THIS LEGACY SYSTEM CAN BE USED TO BUILD LIMITLESS DESIGN CONFIGURATIONS FOR FLAT TOPOGRAPHIES AND UP TO 3 STORY HOUSING, ALLOWING OPEN ARCHITECTURE. OUR COMPOSITE MIX IS MORE SUSTAINABLE, WEATHER RESILIENT, AND EMITS MUCH LESS CARBON THAN REINFORCED CONCRETE/STEEL, AND CAN BE ERGONOMICALLY ASSEMBLED AT THE SITE.",
            },
            {
              name: "Home Designs",
              collectionId: "2",
              identifier: 1462698944,
              qubeClaims :"",
              description:
                "YOU CAN PLACE VARIOUS HOME DESIGNS HERE THAT FIT SYSTEM ARCHITECTURE BOTTOMS-UP APPROACHES.",
            },
            {
              name: "SYSTEM ARCHITECTURE",
              collectionId: "3",
              identifier: -16541584,
              qubeClaims :"",
              description:
                "YOU CAN PLACE VARIOUS HOME DESIGNS “PARTS” THAT FIT SYSTEM ARCHITECTURE BOTTOMS-UP APPROACHES. ",
            },

            {
              name: "PRODUCTS",
              collectionId: "4",
              identifier: [-1434943395, 393799738],
              qubeClaims :"",
              description:
                "YOU CAN PLACE VARIOUS “PRODCUTS” THAT FIT SYSTEM ARCHITECTURE BOTTOMS-UP APPROACHES.",
            },
            // { name: 'Puppies + Shibas', collectionId: '4', identifier: [1235887132, 2036309415] },
            // { name: 'Purple Puppies', collectionId: '4', identifier: 2036309415, attribute: { backgrounds: 'gradient_purple' } }
          ]}
          defaultFilter={{ collection: "1", shop: "" }}
        />
      </DesContainer>
    </>
  );
};

export default MarketplaceWithFilter;
