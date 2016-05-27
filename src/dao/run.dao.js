import mongoose from 'mongoose';

const Model = mongoose.model('Run');

export const createRun = (run) => new Model(run)

export const findRun = (query, opt) => Model.find(query, opt).populate('user', 'name')

export const findOneRun = (query, opt) => Model.findOne(query, opt)

export const deleteRun = (query) => Model.delete(query)
