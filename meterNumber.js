const mongoose = require('mongoose');
const meterSchema = new mongoose.Schema({
    meterNumber: {
        type: String,
        required: [true, 'Enter meter number'],
        maxlength:[6, 'Meter number should not exceed 6 digits']
    },
    createdAt: {
        type: Date,
        default: Date.now(),
      },
})
meterSchema.method('toJSON', function(){
    const { __v, ...object } = this.toObject();
    const { _id:id, ...result } = object;
    return { ...result, id };
});

module.exports =  mongoose.model('MeterNumber', meterSchema);