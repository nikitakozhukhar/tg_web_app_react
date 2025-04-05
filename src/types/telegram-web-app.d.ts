export {};

declare global {
  interface Window {
    Telegram: {
      WebApp: {
        initData: string;
        initDataUnsafe: object;
        version: string;
        platform: string;
        colorScheme: string;
        themeParams: object;
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
        themeParams: {
          bg_color: string;
          button_color: string;
          button_text_color: string;
          hint_color: string;
          link_color: string;
          secondary_bg_color: string;
          text_color: string;
        };
        viewportHeight: number;
        viewportStableHeight: number;
        version: string;
        platform: string;
        colorScheme: 'light' | 'dark';
        isTelegramWebApp: boolean;
      };
    };
  }
}
