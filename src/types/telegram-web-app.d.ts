// telegram.d.ts
export {};

declare global {
  interface IWebAppUser {
    id: number;
    is_bot: boolean;
    first_name: string;
    last_name?: string;
    username?: string;
    language_code?: string;
    is_premium?: boolean;
    added_to_attachment_menu?: boolean;
    allows_write_to_pm?: boolean;
    photo_url?: string;
  }

  interface IWebAppChat {
    id: number;
    type: string;
    title: string;
    username?: string;
    photo_url?: string;
  }

  interface IWebAppInitData {
    query_id?: string;
    user?: IWebAppUser;
    receiver?: IWebAppUser;
    chat?: IWebAppChat;
    chat_type?: string;
    chat_instance?: string;
    start_param?: string;
    can_send_after?: number;
    auth_date?: number;
    hash?: string;
    signature?: string;
    [key: string]: any;
  }

  interface TelegramWebApp {
    initData: string;
    initDataUnsafe: IWebAppInitData;
    version: string;
    platform: string;
    colorScheme: 'light' | 'dark';
    themeParams: {
      bg_color: string;
      button_color: string;
      button_text_color: string;
      hint_color: string;
      link_color: string;
      secondary_bg_color: string;
      text_color: string;
    };
    close: () => void;
    sendData: (data: string) => void;
    expand: () => void;
    isExpanded: boolean;
    isClosingConfirmationEnabled: boolean;
    enableClosingConfirmation: () => void;
    disableClosingConfirmation: () => void;
    onEvent: (eventType: string, callback: () => void) => void;
    offEvent: (eventType: string, callback: () => void) => void;
    ready: () => void;
    MainButton: {
      text: string;
      color: string;
      textColor: string;
      isVisible: boolean;
      isProgressVisible: boolean;
      isActive: boolean;
      show: () => void;
      hide: () => void;
      enable: () => void;
      disable: () => void;
      setParams: (params: { text?: string; color?: string; text_color?: string }) => void;
      onClick: (callback: () => void) => void;
    };
    BackButton: {
      isVisible: boolean;
      show: () => void;
      hide: () => void;
      onClick: (callback: () => void) => void;
    };
    viewportHeight: number;
    viewportStableHeight: number;
    isTelegramWebApp: boolean;
  }

  interface Window {
    Telegram: {
      WebApp: TelegramWebApp;
    };
  }
}
