import { LoginPage } from "./webpages/authorization/login.page";
import { RegistrationPage } from "./webpages/authorization/registration.page";
import { DashboardPage } from "./webpages/dashboard/dashboard.page";
import { ProfileEditPage } from "./webpages/profile/profileEdit.page";
import { ContactsPage } from "./webpages/profile/contacts/contacts.page";
import { ContactEditPage } from "./webpages/profile/contacts/contactEdit.page";
import { ContactNewPage } from "./webpages/profile/contacts/contactNew.page";
import { ContactInfoPage } from "./webpages/profile/contacts/contactInfo.page";
import { CloudComputingPage } from "./webpages/cloud-computing/cloud-computing.page";
import { CloudComputingEditorPage } from "./webpages/cloud-computing/cloud-computingEditor.page";
import { ProfileInfoPage } from "./webpages/profile/profileInfo.page";
import { PaymentMethodsPage } from "./webpages/payment/paymentMethods.page";

export {
  LoginPage,
  RegistrationPage,
  DashboardPage,
  ProfileEditPage,
  ContactsPage,
  ContactNewPage,
  ContactInfoPage,
  ContactEditPage,
  CloudComputingPage,
  CloudComputingEditorPage,
  ProfileInfoPage,
  PaymentMethodsPage,
};

export type PagesFixtures = {
  loginPage: LoginPage;
  registrationPage: RegistrationPage;
  dashboardPage: DashboardPage;
  profileEditPage: ProfileEditPage;
  contactsPage: ContactsPage;
  contactNewPage: ContactNewPage;
  contactInfoPage: ContactInfoPage;
  contactEditPage: ContactEditPage;
  cloudComputingPage: CloudComputingPage;
  cloudComputingEditorPage: CloudComputingEditorPage;
  profileInfoPage: ProfileInfoPage;
  paymentMethodsPage: PaymentMethodsPage;
};
