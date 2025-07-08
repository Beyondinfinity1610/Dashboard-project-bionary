import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

/* noOfUsers int
  projects objectId[] projects
  growth int
  users objectId[] users
  PRs_Merged int
  */

const dashboardSchema = new Schema({
  noOfUsers: {
    type: Number,
    required: true,
  },
  projects: [
    {
      type: Schema.Types.ObjectId,
      ref: "projects",
    },
  ],
  growth: {
    type: Number,
    required: true,
  },
  users: [
    {
      type: Schema.Types.ObjectId,
      ref: "users",
    },
  ],
  PRs_Merged: {
    type: Number,
    required: true,
  },
});

dashboardSchema.plugin(mongooseAggregatePaginate);
export const dashboard = mongoose.model("dashboard", dashboardSchema);
