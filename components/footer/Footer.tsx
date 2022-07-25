import React, { useRef } from 'react';
import Reaptcha from 'reaptcha';
import Captcha from '../captcha';

function Footer() {
    const cref = useRef<Reaptcha | null>();

  const onCaptchaVerify = async (captchaCode: string) => {
    console.log('footer', captchaCode);
  };

  return (
    <div id='form2'>
    <form action="?" method="POST">
      <div>
        <Captcha onValidate={onCaptchaVerify} size='invisible' ref={e => (cref.current = e)} />
      </div>
      <br />
      <input type="submit" value="Submit" onClick={e => {
        e.preventDefault();
        cref.current?.execute();
      }} />
    </form>
  </div>
  );
}

export default Footer;