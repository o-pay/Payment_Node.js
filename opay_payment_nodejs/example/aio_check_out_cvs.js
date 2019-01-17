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

let cvs_params = {
    StoreExpireDate: '7',
    Desc_1: '超商螢幕描述A',
    Desc_2: '超商螢幕描述B',
    Desc_3: '超商螢幕描述C',
    Desc_4: '超商螢幕描述D',
    PaymentInfoURL: 'http://192.168.0.1'
};

let client_redirect = 'http://192.168.0.1/payment_result';

let create = new opay_payment();
let htm = create.payment_client.aio_check_out_cvs(cvs_info = cvs_params, parameters = base_param, client_redirect_url = client_redirect);
console.log(htm);