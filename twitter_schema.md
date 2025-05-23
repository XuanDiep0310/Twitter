import { ObjectId } from 'mongodb'

enum UserVerifyStatus {
  Unverified, // chưa xác thực email, mặc định = 0
  Verified, // đã xác thực email
  Banned // bị khoá
}

interface User {
  _id: ObjectId
  name: string
  email: string
  date_of_birth: Date
  password: string
  created_at: Date
  updated_at: Date
  email_verify_token: string // jwt hoặc '' nếu đã xác thực email
  forgot_password_token: string // jwt hoặc '' nếu đã xác thực email
  verify: UserVerifyStatus

  bio: string // optional
  location: string // optional
  website: string // optional
  username: string // optional
  avatar: string // optional
  cover_photo: string // optional
}

interface RefreshToken {
  _id: ObjectId
  token: string
  created_at: Date
  user_id: ObjectId
}

interface Follower {
  _id: ObjectId
  user_id: ObjectId
  followed_user_id: ObjectId
  created_at: Date
}

interface Tweet {
  _id: ObjectId
  user_id: ObjectId
  type: TweetType
  audience: TweetAudience
  content: string
  parent_id: ObjectId | null // null nếu tweet gốc
  hashtags: ObjectId[]
  mentions: ObjectId[]
  medias: ObjectId[] // ảnh, video
  guest_views: number
  user_views: number
  created_at: Date
  updated_at: Date
}

interface Media {
  url: string
  type: MediaType
}
enum MediaType {
  Image,
  Video
}
enum TweetAudience {
  Everyone,
  TwitterCircle
}
enum TweetType {
  Tweet,
  Retweet,
  QuoteTweet,
  Comment
}

interface Bookmark {
  _id: ObjectId
  user_id: ObjectId
  tweet_id: ObjectId
  created_at: Date
}

interface Like {
  _id: ObjectId
  user_id: ObjectId
  tweet_id: ObjectId
  created_at: Date
}

interface Hashtag {
  _id: ObjectId
  name: string
  created_at: Date
}