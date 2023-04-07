import React from "react";
interface SetState {
  fullname: string;
  email: string;
  subject: string;
  message: string;
}
type InputProps = {
  type: string;
  state: {
    fullname: string;
    email: string;
    subject: string;
    message: string;
  };
  name: any;
  placeholder: string;
  setContact: React.Dispatch<React.SetStateAction<SetState>>;
};
export const Input = ({
  type,
  state,
  placeholder,
  setContact,
  name,
}: InputProps) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={state[name as keyof typeof state]}
      onChange={(e) => setContact({ ...state, [name]: e.target.value })}
      name={name}
      required
    />
  );
};
