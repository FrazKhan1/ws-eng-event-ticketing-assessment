import { Router } from "express";
import { authenticate } from "../middleware/auth.js";

const router = Router();

// Waitlist management — uses booking status extension pattern
//
// A "WAITLISTED" booking represents a user's position in the queue.
// When capacity opens, promote by updating status to "CONFIRMED".
//
// TODO: Complete join/leave/position endpoints

export default router;
