import mongoose from 'mongoose'

import mongoosepaginate from 'mongoose-aggregate-paginate-v2'

const videoSchema = new mongoose.Schema(
    {
        videofile : {
            type: String, //cloudnary file
            required: true
        },
        thumbnail : {
            type: String, //cloudnary file
            required: true
        },
        title : {
            type: String,
            required: true
        },
        description : {
            type: String,
            required: true
        },
        duration : {
            type: Number, //cloudnary file
            required: true
        },
        views : {
            type: Number,
            default: 0
        },
        isPublished : {
            type: Boolean,
            default: true
        },
        owner:
        {
            type: mongoose.Schema.ObjectId(),
            ref: "user"
        }
    },
    {
        timestamps: true
    }
)

videoSchema.plugin(mongoosepaginate)
export const video = mongoose.model("video", videoSchema)