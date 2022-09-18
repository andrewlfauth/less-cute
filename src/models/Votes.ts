import { mongoose } from "../db"

const VotesSchema = mongoose.Schema({
  totalVotes: Number,
  candidates: Object
})

const Votes = mongoose.models.Votes || mongoose.model("Votes", VotesSchema)

export default Votes