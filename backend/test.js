
// import { ethers } from "ethers";

// import { NewClient, RPush, LPop } from "./library/redis/redis.js";
// async function main() {
//     const rediss = await NewClient()
//     for (let i = 0; i < 10; i++) {
//         let a = await RPush(rediss, "arthur", { test: "test" })
//         let arthur = await LPop(rediss, "arthur")
//         console.log(arthur, 'arthur')
//         if (arthur === null) {
//             console.log("deu errado")
//         }
//     }
// }

// import { MailSender } from "./library/email/mail.js";
// async function main2() {
//     console.log("oi")
//     const ms = new MailSender();
//     const payload = {
//         from: "",
//         to: "afa7789@gmail.com",
//         subject: "Teste",
//         text: "Testando",
//         html: "<b>Testando:?????</b>"
//     }
//     let info = await ms.sendMail(payload);
//     ms.previewMail(info);
//     console.log("test")
// }

import Web3 from "./library/web3/index.js"
// // testing ether transfer
// async function main3() {
//     let w = new Web3()
//     console.log("ready", w.ready());
//     console.log("main3");

//     const gas_limit = 100000;

//     const answer = await w.transferEther( //transferEther(to_address, send_token_amount, gas_limit) {
//         "0x972DAaA8fda2BCFee0212143712feB702c01F89F",
//         "0.02",
//         gas_limit
//     );

//     console.log("main3", {
//         status: answer.status,
//         context:"sending bnb",
//         hash: answer.hash ? answer.hash : null
//     })
// }

// import { getTokenPrice, calculateTokenAmmount, dolPrice } from './library/moralis/index.js'

// // testing token transfer
// async function main3_2() {
//     let w = new Web3()
//     console.log("ready", w.ready());
//     console.log("main3_2");

//     const value = 100 // 500 reais
//     const token_red = "0xeF0d760672FFd4A8023957227013D3F85D41EeBd"

//     const t_price_request = await getTokenPrice(token_red)
//     const t_price = t_price_request.value
//     const t_ammount = await calculateTokenAmmount(value, t_price)
//     console.log("value", value)
//     console.log("t_price", t_price)
//     console.log("t_ammount", t_ammount)

//     if (await w.hasToken(token_red, t_ammount)) {
//         console.log("entered here");
//         const gas_limit = 100000;
//         const answer = await w.sendToken(
//             token_red, // which token
//             (t_ammount).toString(), // token ammount
//             "0x972DAaA8fda2BCFee0212143712feB702c01F89F",
//             gas_limit
//         );
//         console.log("main3_2", answer)
//     } else {
//         console.log("not enough tokens")
//     }
// }

// // testing token swap
// async function main3_3() {
//     let w = new Web3()
//     console.log("ready", w.ready());
//     console.log("main3_3");

//     const value = 100 // 500 reais
//     const token_USDT = "0x337610d27c682E347C9cD60BD4b3b107C9d34dDd"

//     const t_price_request = await getTokenPrice(token_USDT) // this only works on mainnet
//     let t_price = t_price_request.value
//     t_price = 0.96 // this is an usual price for USDT

//     const t_ammount = await calculateTokenAmmount(value, t_price)

//     console.log("value", value)
//     console.log("t_price", t_price)
//     console.log("t_ammount", t_ammount)
//     const gas_limit = 100000;

//     if (await w.hasToken(token_USDT, t_ammount)) { // it shouldn't have.
//         console.log("entered here");
//         const answer = await w.sendToken(
//             token_USDT, // which token
//             (t_ammount).toString(), // token ammount
//             token_USDT,
//             gas_limit
//         );
//         console.log("main3_3", answer)
//     } else {
//         // this logic must have it's own function, and
//         // needs to be called here, and at the time of creating the transaction.
//         // otherwise the person who is adding funds, won't be able to
//         // reiceive the transaction.
//         // console.log("do not have enough tokens")
//         let WBNB = "0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd"
//         const bnb_price_request = await getTokenPrice(WBNB) // this only works on mainnet
//         let bnb_price = bnb_price_request.value
//         bnb_price = 416.7588348072215 // this is an usual price for USDT

//         // price of dollar
//         let d = await dolPrice().then(res => {
//             if (res.status) {
//                 return res.value
//             }
//         })

//         // account of wallet in BNB
//         let b = await w.balanceSendAccount()
//         b = ethers.utils.formatEther(b)
//         let b2 = b

//         // ammount of the wallet in BNB that can be sent in accord to the price and it the pix value
//         const bnb_ammount = await calculateTokenAmmount(value, bnb_price)

//         console.log("balance in real ?", b)
//         console.log("b??", b2, bnb_ammount)
//         // process.exit(1)

//         if (b2 >= bnb_ammount) {
//             let exchange_rate = await w.getTokenExchangeRate(WBNB, token_USDT, bnb_ammount)
//             console.log("ammount that will receive:", ethers.utils.formatUnits(exchange_rate[1].toString(), 18).toString());
//             // value, token_address, send_token_amount, to_address, gas_limit
//             let res = await w.swapForToken(
//                 bnb_ammount + "",
//                 exchange_rate[1].toString(),
//                 gas_limit * 2,
//                 token_USDT,
//                 "0x972DAaA8fda2BCFee0212143712feB702c01F89F",
//             )
//             // proceeds with a swap to the address
//             console.log("res", res.hash)

//             const receipt = await res.wait()

//             console.log("receipt", receipt)

//         } else {
//             console.log("rofl")
//             // otherwise, can't do it mate, not enough funds.
//         }
//     }
// }

async function main3_4(hash) {
    let w = new Web3()
    console.log("ready", w.ready());
    const answer = await w.getTransaction(hash)
    console.log("here:",answer,"\n")
    try{
        const receipt = await answer.wait()
        console.log("receipt", receipt)
        // console.log("ue", receipt)
        console.log("\nreceipt success?",receipt.status)
    }catch(e){
        console.log("receipt", e.receipt,"\n")
        // console.log("caught error",e)
        console.log("receipt error",e.receipt.status)
    }
}

// testing database
import Database from "./library/database/index.js";
async function main4() {
    let a = new Database()
    await a.queryAddAddresses
    console.log(await a.queryAddresses())
}


// import Wallet from 'ethereumjs-wallet'
// //getting public key from it.
// function main5(){
//     const privateKey = "c2e3774fa204adb00fb677c9de3616f6ed9a0705166390f704e4251a6974fd96"
//     // import hdkey from require('ethereumjs-wallet/hdkey')
//     // const privateKey = hdkey.fromMasterSeed('random')._hdkey._privateKey
//     // import EthUtil from 'ethereumjs-util'
//     // const privateKeyBuffer = EthUtil.toBuffer(privateKey);
//     // const wallet = Wallet['default'].fromPrivateKey(privateKeyBuffer);
//     // console.log(wallet.getPublicKeyString())
//     const buffer  = Buffer.from(privateKey, 'hex')
//     console.log(
//         Wallet['default'].fromPrivateKey(buffer).getAddress().toString('hex')
//     )

//     process.exit(0)
// // }

// import {getBalance} from './library/web3/helpers.js'

// async function main6(){
//     console.log(
//         await getBalance()
//     )
// }
// // await main6();

// main5();

// main();

// await main2();
// await main3();
// await main3_2();
// await main3_3();
// await main3_4("0x02a8b958d8cc761e679e60e12bc98a6a4ba811c79eb16fd7e84ab36b9d70015f");
await main3_4("0xae3713ed253d0bf1816f4ace7ac78ece37a7f5f29457575144b6b0cd9ee632ef");
// await main4();

// exit
process.exit(0)

