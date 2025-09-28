# Twitter Clone Backend

## Giới thiệu

Đây là dự án backend mô phỏng các chức năng cơ bản của mạng xã hội Twitter, được xây dựng với Node.js, Express, TypeScript và MongoDB. Dự án tập trung vào các thao tác liên quan đến người dùng như đăng ký, đăng nhập, xác thực email, đặt lại mật khẩu, cập nhật thông tin cá nhân và hệ thống theo dõi (follow/unfollow).

## Tính năng chính

- **Đăng ký & Đăng nhập**: Người dùng có thể đăng ký tài khoản mới, đăng nhập bằng email & mật khẩu.
- **Quên mật khẩu & Đặt lại mật khẩu**: Hỗ trợ gửi token qua email để khôi phục mật khẩu.
- **Xác thực email**: Gửi email xác thực khi đăng ký, xác thực tài khoản.
- **Cập nhật thông tin cá nhân**: Cho phép cập nhật tên, email, ngày sinh, ảnh đại diện, tiểu sử, website, v.v...
- **Theo dõi & Bỏ theo dõi**: Xây dựng hệ thống follower/following giống Twitter.
- **Quản lý token (JWT)**: Sử dụng Access Token, Refresh Token, Email Verify Token, Forgot Password Token.
- **Middleware xác thực & xác thực dữ liệu**: Kiểm tra đầu vào, xác thực token và bảo vệ các route quan trọng.
- **Thông báo lỗi rõ ràng**: Hệ thống thông báo lỗi chi tiết và dễ hiểu.

## Kiến trúc hệ thống

- **Express.js**: Framework chính để xây dựng API RESTful.
- **MongoDB**: Cơ sở dữ liệu NoSQL lưu trữ thông tin người dùng, token, follower,...
- **TypeScript**: Giúp tăng độ an toàn khi phát triển.
- **Cấu trúc thư mục rõ ràng**:
  - `src/controllers`: Điều phối luồng xử lý của từng API.
  - `src/services`: Xử lý logic nghiệp vụ, giao tiếp với database.
  - `src/models`: Định nghĩa schema cho các đối tượng (user, token, follower).
  - `src/middlewares`: Các middleware cho xác thực, kiểm tra dữ liệu, xử lý lỗi,...
  - `src/utils`: Các hàm tiện ích (JWT, validation, crypto).

## Một số schema tiêu biểu

```typescript
// User
interface User {
  _id: ObjectId
  name: string
  email: string
  date_of_birth: Date
  password: string
  created_at: Date
  updated_at: Date
  email_verify_token: string
  forgot_password_token: string
  verify: UserVerifyStatus
  bio?: string
  location?: string
  website?: string
  username?: string
  avatar?: string
  cover_photo?: string
}

// RefreshToken
interface RefreshToken {
  _id: ObjectId
  token: string
  created_at: Date
  user_id: ObjectId
}
```

## Cách sử dụng

### 1. Cài đặt

```bash
git clone https://github.com/XuanDiep0310/Twitter.git
cd Twitter
npm install
```

### 2. Thiết lập biến môi trường

Tạo file `.env` và khai báo các biến sau:

```
DB_USERNAME=your_db_username
DB_PASSWORD=your_db_password
JWT_SECRET=your_jwt_secret
```

### 3. Chạy server

```bash
npm run dev
# hoặc
npm start
```

Mặc định server chạy ở port `3000` (có thể thay đổi trong `src/index.ts`).

### 4. API Endpoints

- `POST /users/register`: Đăng ký tài khoản
- `POST /users/login`: Đăng nhập
- `POST /users/verify-email`: Xác thực email
- `POST /users/forgot-password`: Quên mật khẩu
- `POST /users/reset-password`: Đặt lại mật khẩu
- `GET /users/me`: Lấy thông tin cá nhân
- `PATCH /users/me`: Cập nhật thông tin cá nhân
- `POST /users/follow`: Theo dõi người dùng
- `POST /users/unfollow`: Bỏ theo dõi

## Công nghệ sử dụng

- Node.js
- Express.js
- TypeScript
- MongoDB
- JWT
- dotenv
- express-validator
- lodash
