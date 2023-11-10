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

const SocialMediaButtons = ({ quote, title, via, url, body, separator }) => {
  return (
    <>
      <FacebookShareButton url={url} quote={quote} hashtag="">
        <FacebookIcon size={36} round={true} />
      </FacebookShareButton>
      <EmailShareButton url={url} body={body}>
        <EmailIcon size={36} round={true} />
      </EmailShareButton>
      <TwitterShareButton title={title} via={via} url={url} hashtag="">
        <TwitterIcon size={36} round={true} />
      </TwitterShareButton>
      <WhatsappShareButton title={title} url={url} hashtag="">
        <WhatsappIcon size={36} round={true} />
      </WhatsappShareButton>
    </>
  );
};

export default SocialMediaButtons;
