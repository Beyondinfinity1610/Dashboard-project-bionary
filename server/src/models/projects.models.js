import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

/*projectId string pk
  teamMembers objectId[] users
  projectDescription string
  techStackUsed array[]
  commitsDone int
  pullRequests int
  createdAt date
  updatedAt date
  status string*/

const projectsSchema = new Schema(
  {
    projectId: {
      type: String,
      required: true,
    },
    teamMembers: [
      {
        type: Schema.Types.ObjectId,
        ref: "users",
      },
    ],
    projectDescription: {
      type: String,
    },
    techStackUsed: {
      type: [String],
      required: true,
    },
    commitsDone: {
      type: Number,
      min: 0,
    },
    pullRequests: {
      type: Number,
      min: 0,
    },
    status: {
      type: String,
      enum: ["active", "completed", "on-hold"],
      default: "active",
    },
    topContributors: [string],
  },
  { timestamps: true }
);

projectsSchema.plugin(mongooseAggregatePaginate);
export const projects = mongoose.model("projects", projectsSchema);
