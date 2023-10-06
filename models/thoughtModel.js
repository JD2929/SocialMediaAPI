const { Schema, Types } = require('mongoose');
const reactionSchema = require('./reactionModel');

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
        },
        users: [
            {
                type: Schema.Types.ObjectId,
                ref: 'users',
            },
        ],
        reactions: [reactionSchema],
    },
);

const Thought = model('thought')