import { MetaMaskSDK } from '@metamask/sdk';

export class AppStateService {

    constructor () {
        if (typeof AppStateService.instance === 'object') {
            console.log("instance returned");
            return AppStateService.instance;
        }
        AppStateService.instance = this;

        console.log("instance created");
        const MMSDK = new MetaMaskSDK();
        this.ethereum = MMSDK.getProvider();
        this.provider = new ethers.BrowserProvider(this.ethereum);
        this.walletAddress = "";
        this.connected = false;
    }

    async connectToMetaMask() {
        try {
          if(!this.ethereum){
            alert("Please install Metamask and configure Hedera Testnet")
            throw Error("Metamask not installed");
        }
  
          const accounts = await this.ethereum.request({ method: 'eth_requestAccounts' });
          alert(`Connected to: ${accounts[0]}`);
          this.walletAddress = accounts[0];
          this.walletConnected = true;
  
          const event = new Event("loggedIn");
          window.dispatchEvent(event);
          return true;
          
        } catch (error) {
          alert("Could not connect to wallet.");
          console.log(error);
          return false;
        }
  
  
  
      }
}