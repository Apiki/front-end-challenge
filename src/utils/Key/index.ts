import { randomBytes } from "crypto";

const generateKey = () => randomBytes(16).toString("hex");

export { generateKey };
