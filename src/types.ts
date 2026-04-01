export interface IdpayPaymentResponse {
  id: string;
  link: string;
}

export interface IdpayVerifyResponse {
  status: number;
  track_id: number;
  id: string;
  order_id: string;
  amount: number;
  date: number;
  payment: {
    track_id: string;
    amount: number;
    card_no: string;
    hashed_card_no: string;
    date: number;
  };
  verify: {
    date: number;
  };
}

export interface IdpayTransaction {
  id: string;
  order_id: string;
  amount: number;
  status: number;
  date: number;
  description: string;
}

export interface IdpayLink {
  id: string;
  name: string;
  amount: number;
  description: string;
  link: string;
  status: number;
}

export interface IdpayError {
  error_code: number;
  error_message: string;
}
