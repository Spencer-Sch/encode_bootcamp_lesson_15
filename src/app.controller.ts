import { Controller, Get, Param } from '@nestjs/common'
import { AppService } from './app.service'

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Get()
    getHello(): string {
        return this.appService.getHello()
    }

    @Get('another-thing')
    getAnotherThing(): string {
        return this.appService.getAnotherThing()
    }

    @Get('contract-address')
    getContractAdress(): string {
        return this.appService.getContractAddress()
    }

    @Get('total-supply')
    getTotalSupply() {
        return this.appService.getTotalSupply()
    }

    @Get('token-balance/:address')
    getTokenBalance(@Param('address') address: string) {
        return this.appService.getTokenBalance(address)
    }
}
