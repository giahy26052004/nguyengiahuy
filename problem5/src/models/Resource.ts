import mongoose, { Document, Schema } from "mongoose";

export interface IResource extends Document {
  name: string;
  description: string;
  createdAt: Date;
}

const ResourceSchema: Schema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model<IResource>("Resource", ResourceSchema);
