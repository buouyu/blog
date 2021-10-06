const express = require("express");
const router = express.Router();
const bannerSer = require('../../services/projectSer')
const { asyncHandler } = require("../getSendResult");

router.get(
  "/",
  asyncHandler(async (req, res) => {
    
    return await bannerSer.getBanners();
  })
);



module.exports = router;
