import React, { useState } from "react";

type HelloWorldProps = {
  name: string;
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
};

export default function HelloWorld({ name, onSubmit }: HelloWorldProps) {
  const [count, setCount] = useState(1);
  return (
    <div>
      <h1>
        Hello {name} x{count}!
      </h1>
      <button type="button" onClick={() => setCount((c) => c + 1)}>
        Increment
      </button>
      <a href="/foobar">Navigate somewhere</a>
      <form onSubmit={onSubmit}>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
