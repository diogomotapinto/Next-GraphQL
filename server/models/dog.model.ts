import mongoose, { Schema, Document } from "mongoose";
import { IPerson } from "./person.model";

export interface IDog extends Document {
  name: string;
  owner: IPerson["_id"];
}

const DogSchema: Schema = new Schema({
  name: { type: String, required: true },
  owner: { type: Schema.Types.ObjectId, required: true },
});

export default mongoose.model<IDog>("Dog", DogSchema);
