import express from "express";
import send_reservation from "../controller/reservation.js";

const router = express.Router();

router.post("/reservation/send", ()=>{
    console.log("Reservation")
});

export default router;
