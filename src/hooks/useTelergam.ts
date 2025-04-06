const tg = window.Telegram.WebApp;

const useTelergam = () => {

  const onClose = () => {
    tg.close()
  }

  const onToggleButton = () => {
    if (tg.MainButton.isVisible) {
      tg.MainButton.show();
    }
  }

  return {
    onClose,
    onToggleButton,
    tg,
    user: tg.initDataUnsafe.user?.username
  };
};

export default useTelergam;