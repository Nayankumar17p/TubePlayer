import mongoose, { Schema } from 'mongoose';
import mongooseAggregatePaginate from 'mongoose-aggregate-paginate-v2';

const subscriptionSchema = new Schema(
    {
        subscriber:{
            type:Schema.types.ObjectID,
            ref: "User"
        },
        channel:{
            type:Schema.types.ObjectID,
            ref: "User"
        }
        
    },{ timestamps: true }
)
  
 

subscriptionSchema.plugin(mongooseAggregatePaginate);

export const Subscription = mongoose.model('Subscription', subscriptionSchema);


