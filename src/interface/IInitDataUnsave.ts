interface IWebAppUser {
  id: Number;
  is_bot: Boolean;
  first_name: String;
  last_name: String;
  username: String;
  language_code: String;
  is_premium: Boolean;
  added_to_attachment_menu: Boolean;
  allows_write_to_pm: Boolean;
  photo_url: String;
}

interface IWebAppChat {
  id: Number;
  type: String;
  title: String;
  username: String;
  photo_url: String
}

interface IWebAppInitData {
  query_id:	String;
  user:	IWebAppUser;
  receiver: IWebAppUser;
  chat: IWebAppChat;
  chat_type: String;
  chat_instance: String;
  start_param: String;
  can_send_after: Number;
  auth_date: Number;
  hash: String;
  signature: String;
}

export interface IInitDataUnsave {
  initDataUnsafe: IWebAppInitData;
}