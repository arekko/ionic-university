export interface LoginUser {
  username: string;
  password: string;
}

export interface RegisterUser {
  username: string;
  email: string;
  password: string;
}

export interface LoginResponse {
  message: string;
  token: string;
  user: User;
}

export interface User {
  user_id: number;
  username: string;
  email: string;
  time_created: string;
}

export interface RegisterUserData {
  username: string;
  password: string;
  email: string;
  full_name?: string;
}
export interface RegisterResponse {
  message: string;
  user_id: number;
}
