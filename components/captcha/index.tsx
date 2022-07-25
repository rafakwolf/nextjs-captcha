import React, { ForwardedRef, forwardRef } from 'react';
import Reaptcha from 'reaptcha';

type CaptchaSize = 'compact' | 'normal' | 'invisible';

const recaptchaPublicSiteKey = '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI';

interface ICaptchaProps {
  onValidate: (captchaCode: string) => void;
  size?: CaptchaSize;
}

function Captcha(props: ICaptchaProps, ref: ForwardedRef<Reaptcha>) {

  const onCaptchaVerify = async (captchaCode: string) => {
    props.onValidate(captchaCode);
  };

  return (
    <Reaptcha
      ref={ref}
      size={props.size ?? 'normal'}
      sitekey={recaptchaPublicSiteKey}
      onVerify={onCaptchaVerify}
    />
  );
}

export default forwardRef(Captcha);