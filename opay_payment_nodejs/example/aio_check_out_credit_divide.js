/**
 * Created by ying.wu on 2017/6/27.
 */
const opay_payment = require('../lib/opay_payment.js');
//參數值為[PLEASE MODIFY]者，請在每次測試時給予獨特值
//若要測試非必帶參數請將base_param內註解的參數依需求取消註解 //
let base_param = {
    MerchantTradeNo: 'PLEASEMODIFY', //請帶20碼uid, ex: f0a0d7e9fae1bb72bc93
    MerchantTradeDate: '2017/02/13 15:45:30', //ex: 2017/02/13 15:45:30
    TotalAmount: '100',
    TradeDesc: '測試交易描述',
    ItemName: '測試商品等',
    ReturnURL: 'http://192.168.0.1',
    // ChooseSubPayment: '',
    // OrderResultURL: 'http://192.168.0.1/payment_result',
    // NeedExtraPaidInfo: '1',
    // ClientBackURL: 'https://www.google.com',
    // ItemURL: 'http://item.test.tw',
    // Remark: '交易備註',
    // HoldTradeAMT: '1',
    // StoreID: '',
    // UseRedeem: ''
};

let inst = '3,6,12,18,24'; //分期期數


let create = new opay_payment();
let htm = create.payment_client.aio_check_out_credit_divide(parameters = base_param, installment = inst);
console.log(htm);