import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

/*_id string pk
  Name string
  VTOPusername string
  RollNo string
  password string
  techStack array[]
  projects objectId[] projects
  activityLog [{month: string,commitsDone: int,pullRequests: int,issuesResolved: int}]
  isTopContributer bool*/

const activitySchema = new mongoose.Schema({
  month: { type: String, required: true },
  commitsDone: { type: Number, required: true },
  pullRequests: { type: Number, required: true },
  issuesResolved: { type: Number, required: true },
});

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  VTOPusername: {
    type: String,
    required: true,
  },
  RollNo: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  techstack: {
    type: [String],
    required: true,
  },
  projects: [
    {
      type: Schema.Types.ObjectId,
      ref: "projects",
    },
  ],
  activityLog: [activitySchema],
  isTopContributor: {
    type: Boolean,
    default: false,
  },
});

userSchema.plugin(mongooseAggregatePaginate);
export const users = mongoose.model("users", userSchema);
