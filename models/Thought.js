const { Schema, Types } = require('mongoose');
const reactionSchema = require('./Reaction');
const dateFormat = require('../utils/dateFormat');

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            maxlength: 280,
            minlength: 1,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: timeStamp => dateFormat(timeStamp)

        },
        username: {
            type: String,
            required: true
        },

        reactions: [reactionSchema],
    },
    {
        toJSON: { 
            virtuals: true,
            getters: true
        },
        id: false, 
    }
);

thoughtSchema.virtual('reactionCount').get (function(){
    return this.reactions.length
})

const Thought = ('thought', thoughtSchema)

module.exports = Thought;