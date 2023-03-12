import { useState } from "react";
import Card from "react-bootstrap/Card";

import AuthContent from "./AuthContent";
import RegisterContent from "./RegisterContent";

const AuthCard = () => {
  const [showAuthContent, setShowAuthContent] = useState(true);

  const handleShowAuthContent = () => {
    setShowAuthContent((state) => !state);
  };

  return (
    <Card className="d-flex p-3 p-sm-5">
      {showAuthContent ? (
        <AuthContent onContentChange={handleShowAuthContent} />
      ) : (
        <RegisterContent onContentChange={handleShowAuthContent} />
      )}
    </Card>
  );
};

export default AuthCard;
