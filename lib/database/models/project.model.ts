// import { Document, Schema, model, models } from "mongoose";

// export interface IProject {
//     _id: string;
//     imgUrl: string;
//     title: string;
//     price: number;
//     description: string;
// }

// const ItemSchema = new Schema({
//     type: { type: String, required: true, ref: 'ItemType'},
//     name: { type: String, required: true},
//     description: { type: String, required: true },
//     createdAt: { type: Date, default: Date.now },
//     imageUrl: { type: String, required: true },
//     price: { type: Number, required: true },
//     stock: { type: Number, required: true},
//     minOrder: { type: Number, required: true},
//     category: { type: Schema.Types.ObjectId, ref: 'ItemCategory' },
//     organizer: { type: Schema.Types.ObjectId, ref: 'User' },
// })

// const Item = models.Item || model('Item', ItemSchema);

// export default Item