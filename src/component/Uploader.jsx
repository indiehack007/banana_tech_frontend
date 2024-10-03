import { IKContext, IKImage, IKUpload } from "imagekitio-react";

function Uploader() {
  const publicKey = "public_dzJdiMzPbcGgLK52WqIHfQVo+p4=";
  const urlEndpoint = "https://ik.imagekit.io/k0gaattpk";
  const authenticator = async () => {
    try {
      // You can also pass headers and validate the request source in the backend, or you can use headers for any other use case.
      const headers = {
        Authorization: "Bearer your-access-token",
        CustomHeader: "CustomValue",
      };
      const response = await fetch("https://banana-tech.onrender.com/auth", {
        headers,
      });
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(
          `Request failed with status ${response.status}: ${errorText}`
        );
      }
      const data = await response.json();
      const { signature, expire, token } = data;
      console.log(data);
      console.log(signature, expire, token);
      return { signature, expire, token };
    } catch (error) {
      throw new Error(`Authentication request failed: ${error.message}`);
    }
  };
  const onError = (err) => {
    console.log("Error", err);
  };

  const onSuccess = (res) => {
    const { url } = res;
    console.log("Success", url);
  };

  return (
    <div className="App">
      <p>To use this funtionality please remember to setup the server</p>
      <IKContext
        publicKey={publicKey}
        urlEndpoint={urlEndpoint}
        authenticator={authenticator}
      >
        <IKImage
          src="https://ik.imagekit.io/demo/default-image.jpg"
          width="400"
        />
        <IKUpload
          useUniqueFileName={true}
          isPrivateFile={false}
          onError={onError}
          onSuccess={onSuccess}
        />
      </IKContext>
    </div>
  );
}

export default Uploader;
