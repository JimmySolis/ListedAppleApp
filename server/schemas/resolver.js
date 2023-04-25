const { AuthenticationError } = require('apollo-server-express');
const { User, List } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        users: async () => {
            return User.find().populate('lists');
        },
        user: async (parents, { username}) => {
            return User.findOne({ username }).populate('lists');
        },
        lists: async (parents, { username }) => {
            const params = username ? { username } : {};
            return List.find(params).sort({ createdAt: -1});
        },
        list: async (parent, {listId}) => {
            return List.findOneAndReplace({ _id: listId });
        },
        me: async (parent, args, context) => {
            if (context.user) {
                return User.findOne({ _id: context.user_id}).populate('lists')
            }
            throw new AuthenticationError('You need to be logged in!')
        },
        myInfo: async (parent, args, context) => {
            if (context.user) {
                return User.findOne({ _id: context.user_id}).populate('info')
            }
            throw new AuthenticationError('You need to be logged in!')
        },
    },

    Mutation: {
        addUser: async (parent, { email, password }) => {
            const user = await User.create({ email, password });
            const token = signToken(email);
            return { token, email };
        },
        login: async ( parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user){
                throw new AuthenticationError('No user found with this email address')
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentails');
            }

            const token = signToken(user);

            return { token, user };
        },
        addList: async (parent, { listName }, context) => {
            if(context.user){
                const list  = await List.create({
                    listName,
                    listMaker: context.user.username
                });

                await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $addToSet: { lists: list._id }},
                );

                return list;
            }
            throw new AuthenticationError('You need to be logged in!');
        },
        addGift: async (parent, { listId , giftName, giftUrl }, context) => {
            if(context.user){
              return List.findOneAndUpdate(
                { _id: listId},
                {
                  $addToSet: { 
                    gifts: {giftName, giftUrl, giftMaker: context.user.username },
                }
              },
              {   
                new: true ,
                runValidators: true,
              }
            );
         }
        throw new AuthenticationError('You need to be logged in!');
        },
        addInfo: async (parent,  { infoId, firstName, lastName, shirtSize, shoeSize, pantsSize, favColor, favNameToBeCalled,  favNFLTeam, favCollegeTeam, favSoccerTeam, gender}, context) => {
            if(context.user){
              return List.findOneAndUpdate(
                {_id : infoId },
                {
                  $addToSet: { 
                    info: { firstName, lastName, shirtSize, shoeSize, pantsSize, favColor, favNameToBeCalled, favNFLTeam, favCollegeTeam, favSoccerTeam, gender },
                }
              },
              {   
                new: true ,
                runValidators: true,
              }
            );
         }
        throw new AuthenticationError('You need to be logged in!');
        },
        removeUser: async (parent, { username, password }, context) => {
            if(context.user) {
                const deletedUser = await User.findOneAndDelete({
                   _id: context.user._id,
                   email,
                   password 
                })
            }
            throw new AuthenticationError('You need to be logged in!')
        },
        removeList: async (parent, { listId }, context) => {
            if(context.user){
                const list = await List.findOneAndDelete({
                    _id: listId,
                    listMaker: context.user.username
                });

                await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $pull: { lists: list._id}}
                )
            }
        },
        removeGift: async (parent, { listId, giftId }, context) => {
            if(context.user){
                return List.findOneAndUpdate(
                    { _id: listId },
                    { 
                        $pull: { 
                            gifts: {
                                _id: giftId,
                                giftMaker: context.user.username,
                            },
                        },
                    },
                    { new: true }
                );
            }
            throw new AuthenticationError('You need to be logged in!');
        }
    }
};

module.exports = resolvers