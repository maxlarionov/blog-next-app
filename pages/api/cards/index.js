import { cards } from "../../../app/Data";


export default function handler(req, res) {
  res.status(200).json(cards)
}
