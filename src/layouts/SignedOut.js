import React from "react";
import { Button, Menu } from "semantic-ui-react";

export default function SignedOut({signIn}) {
  return (
    <div>
      <Menu.Item>
        <Button onClick={signIn} inverted color="green">
          Sign In
        </Button>
        <Button inverted color="red" style={{ marginLeft: "0.5em" }}>
          Sign Up
        </Button>
      </Menu.Item>
    </div>
  );
}