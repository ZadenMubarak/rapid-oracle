// import { MetaMaskSDK } from '@metamask/sdk';
import { ethers } from 'ethers';
import {MetaMaskSDK} from '@metamask/sdk'

export class AppStateService {

    constructor () {
        if (typeof AppStateService.instance === 'object') {
            console.log("instance returned");
            return AppStateService.instance;
        }
        AppStateService.instance = this;

        console.log("instance created");
        const MMSDK = new MetaMaskSDK();
        this.ethereum = window.ethereum.getSDKProviderState;
        this.provider = new ethers.getDefaultProvider(this.ethereum);
        this.walletAddress = "";
        this.connected = false;
    }

    async connectToMetaMask() {
        if (window.ethereum) {
          try {
           
            await window.ethereum.request({ method: 'eth_requestAccounts', params:[] });
            // this.walletAddress = this.accounts[0];
            
          } catch (error) {
            console.error(error);
          }
        } else {
          console.log('MetaMask extension not detected');
        }
      } 
}