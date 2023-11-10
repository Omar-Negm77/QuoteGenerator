import {
  EmailShareButton,
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";

import {
  EmailIcon,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";

const SocialMediaButtons = ({ quote, url }) => {
  return (
    <>
      <FacebookShareButton url={url} quote={quote} hashtag="">
        <FacebookIcon size={36} round={true} />
      </FacebookShareButton>
      <EmailShareButton url={url} quote={quote} hashtag="">
        <EmailIcon size={36} round={true} />
      </EmailShareButton>
      <TwitterShareButton quote={quote} hashtag="">
        <TwitterIcon size={36} round={true} />
      </TwitterShareButton>
      <WhatsappShareButton url={url} quote={quote} hashtag="">
        <WhatsappIcon size={36} round={true} />
      </WhatsappShareButton>
    </>
  );
};

export default SocialMediaButtons;
