const { model } = require("mongoose");

const { HoldingsSchema } = require('../schemas/HoldingsSchema');

// ✅ Correct usage — don't use `new`
const HoldingsModel = model("holding", HoldingsSchema);

module.exports = { HoldingsModel };
