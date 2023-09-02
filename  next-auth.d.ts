import NextAuth, { DefaultSession } from 'next-auth';
import { UserOperationDays } from '@/lib/app';

export enum UserPropertyStatusState {
  COMPLETE = 1,
  INCOMPLETE = 0,
}

export interface UserInfoProps {
  _id: string;
  id: string;
  email: string;
  owner: string | null;
  owner_phone: string | null;
  owner_address: string | null;
  business_name: string | null;
  business_logo: string | null;
  business_phone: string | null;
  business_address: string | null;
  store_slug: string | null;
  operation_times: UserOperationDays | null;
  group_id: string;
  longitude: null;
  latitude: null;
  kyc_id: null;
  kyc_verified: UserPropertyStatusState;
  is_verified: UserPropertyStatusState;
  onboarding_completed: UserPropertyStatusState;
  created_at: Date;
  updated_at: Date;
  access_token: string;
  iat: number;
  exp: number;
  password: string;
}

declare module 'next-auth' {
  type User = UserInfoProps;

  interface Session {
    access_token: string;
    user: UserInfoProps;
  }
}

declare module 'next-auth/jwt' {
  type JWT = UserInfoProps;
}
