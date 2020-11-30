//
// A model for the soundfy media. The main target of discussion on the platform.
// Soundfy media includes albums, artists, playlists, tracks, shows, etc.
// This will act like a post and will be able to recieve comments, likes, etc.
//

import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const Model = mongoose.model;

export enum Type {
  ALBUM = 'album',
  ARTIST = 'artist',
  PLAYLIST = 'playlist',
  TRACK = 'track',
}

export interface IComment extends mongoose.Document {
  userId: string;
  comment: string;
}

export interface IMedia extends mongoose.Document {
  id: string;
  userLikes: [string];
  userComments: [IComment];
}

export const MediaSchema = new Schema({
  id: { type: String }, // This will be the id field in the spotify api.
  userLikes: [String], // User ID's of users who like the album.
  typeOfMedium: { type: String, enum: Type},
  userComments: [
    {
      userId: { type: String },
      comment: { type: String },
    },
  ],
});

export default Model<IMedia>('Media', MediaSchema);
