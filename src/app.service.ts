import { Injectable } from '@nestjs/common'
import * as tokenJson from './assets/MyToken.json'
import { ethers } from 'ethers'

const CONTRACT_ADDRESS = '0xF4c6d10D4568f6CD84FfEe1A28754388182EFA47'

@Injectable()
export class AppService {
    contract: ethers.Contract
    provider: ethers.Provider
    wallet: ethers.Wallet
    constructor() {
        this.provider = new ethers.InfuraProvider('sepolia')
        this.wallet = new ethers.Wallet(process.env.PRIVATE_KEY ?? '', this.provider)
        this.contract = new ethers.Contract(CONTRACT_ADDRESS, tokenJson.abi, this.wallet)
    }

    getHello(): string {
        return 'Hello World!'
    }

    getAnotherThing(): string {
        return 'Another thing'
    }

    getContractAddress(): string {
        return CONTRACT_ADDRESS
    }

    getTotalSupply() {
        return this.contract.totalSupply()
    }

    getTokenBalance(address: string) {
        this.contract.balanceOf(address)
    }
}
