import React from "react";
import ShareIcon from '@mui/icons-material/Share';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';


function Post({ title, fileName, tags }) {
  const handleOnClick = async () => {
    if (!navigator.share) {
      alert("Your browser does not support sharing");
      return;
    }

    const protocol = window.location.protocol;
    const hostname = window.location.hostname;
    const port = window.location.port;
    const url = `${protocol}//${hostname}:${port}/photos/${fileName}`;
    
    try {
      const rawContent = await fetch(url);
      const blob = await rawContent.blob();
      let mimeType = blob.type;

      // Default MIME type if it's not determined from the blob
      if (!mimeType) {
        mimeType = 'image/png'; // This is a default, might need adjustment based on your use case
      }

      const data = {
        files: [
          new File([blob], fileName, { type: mimeType }),
        ],
        title,
        text: title + "\n" + tags.map(tag => `#${tag}`).join(" "),
      };

      if (navigator.canShare && navigator.canShare({ files: data.files })) {
        try {
          await navigator.share(data);
        } catch (err) {
          console.error(err.name, err.message);
        }
      } else {
        alert("Can't share files");
      }
    } catch (error) {
      console.error("Error fetching the image:", error);
      alert("Error fetching the image.");
    }
  };

  const copyToClipboard = () => {
    const textToCopy = title + "\n" + tags.map(tag => `#${tag}`).join(" ");
    navigator.clipboard.writeText(textToCopy).then(() => {
      alert("Copied to clipboard!");
    }, (err) => {
      console.error('Could not copy text: ', err);
    });
  };

  return (
    <div className="post" style={{ borderRadius: "8px", background: "var(--background-panel-day, #FFF)", boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}>
      <img className="post__image" src={`/photos/${fileName}`} alt={title} />
      <h4 className="post__text"><strong>{title}</strong></h4>
      <h6>{tags.map((tag) => `#${tag} `)}</h6>

      <div style={{ display: "flex", margin: "15px" }}>
        {/* Icons */}
        <ShareIcon style={{ marginLeft: "5px" }} onClick={handleOnClick} />
          {/* Copy to Clipboard Icon */}
          <ContentCopyIcon style={{ marginLeft: "5px" }} onClick={copyToClipboard} />
      </div>
    </div>
  );
}

export default Post;
