import mongoose from 'mongoose';

const Model = mongoose.model('User');

export const createUser = (user) => new Model(user)

export const findUser = (query, opt) => Model.find(query, opt)

export const findOneUser = (query, opt) => Model.findOne(query, opt)

export const deleteUser = (query) => Model.remove(query)
