type VerificationCodeMailPayload = {
  username: string;
  code: string;
  expirationTime: string;
};

type ContactMailPayload = {
  email: string;
  contactNumber: string;
  message: string;
};

export type ContactMailTemplate = {
  name: "contact-mail";
  data: ContactMailPayload;
};

export type RegisterVerificationCodeMailTemplate = {
  name: "register-verification-code";
  data: VerificationCodeMailPayload;
};

export type ResetPasswordVerificationCodeMailTemplate = {
  name: "reset-password-verification-code";
  data: VerificationCodeMailPayload;
};

export type MailTemplate =
  | RegisterVerificationCodeMailTemplate
  | ResetPasswordVerificationCodeMailTemplate
  | ContactMailTemplate;

export type MailParams = { subject: string; template: MailTemplate };
