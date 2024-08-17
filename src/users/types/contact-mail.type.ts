import { ContactMailTemplate } from "../../mail";

export type ContactMailParams = {
  subject: string;
  template: ContactMailTemplate;
};
