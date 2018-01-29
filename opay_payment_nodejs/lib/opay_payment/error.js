//noinspection BadExpressionStatementJS
/**
 * Created by ying.wu on 2017/6/12.
 */
// export {OPayError, OPayMissingOption, OPayInvalidMode, OPayInvalidParam, OPayInvoiceRuleViolate};

class OPayErrorDefinition extends Error{}
class OPayError extends OPayErrorDefinition{}
class OPayMissingOption extends OPayErrorDefinition{}
class OPayInvalidMode extends OPayErrorDefinition{}
class OPayInvalidParam extends OPayErrorDefinition{}
class OPayInvoiceRuleViolate extends OPayErrorDefinition{}

module.exports = {
    OPayErrorDefinition: OPayErrorDefinition,
    OPayError: OPayError,
    OPayMissingOption: OPayMissingOption,
    OPayInvalidMode: OPayInvalidMode,
    OPayInvalidParam: OPayInvalidParam,
    OPayInvoiceRuleViolate: OPayInvoiceRuleViolate
};