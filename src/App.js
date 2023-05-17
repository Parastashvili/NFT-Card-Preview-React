import "./Reset.css";
import "./App.css";
import avatar from "./images/image-avatar.png";
import ethereum from "./images/icon-ethereum.svg";
import clock from "./images/icon-clock.svg";

function App() {
  return (
    <main className="container">
      <section className="innerContainer">
        <div>
          <div id="nftimg"></div>
          <div className="nft_dsc">
            <h1 className="nft_name">Equilibrium #3429</h1>
            <p className="nft_about">
              Our Equilibrium collection promotes balance and calm.
            </p>
            <div className="priceandtime">
              <div className="innerPriceandtime">
                <img id="ethereum" src={ethereum} alt="ethereum-icon" />
                <h4 className="pricetxt">0.041 ETH</h4>
              </div>
              <div className="innerPriceandtime">
                <img id="clock" src={clock} alt="clock-icon" />
                <h6 className="timeouttxt">3 days left</h6>
              </div>
            </div>
          </div>
          <div className="craetionSection">
            <img id="avatar" src={avatar} alt="avatar" />
            <p className="creation">Creation of</p>
            <h2 className="creationName">Jules Wyvern</h2>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
