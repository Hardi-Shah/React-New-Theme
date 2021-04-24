import React from "react";
import { Switch } from "@material-ui/core";

export interface ISwitchProps {
  className?: string;
  disabled?: boolean;
  checked?: boolean;
  required?: boolean;
  id?: any;
  inputProps?: Object;
  onChange?: void;
  name?: string;
  color?:string;
  leftlabel?: string;
  rightlabel?: string;
}

const DefaultSwitch: React.FC<ISwitchProps> = ({
  disabled = false,
  checked = false,
  required = false,
  id,
  className,
  leftlabel = '',
  color='',
  rightlabel = '',
  name,
  onChange,
  inputProps,
}: ISwitchProps) => {

  const [state, setState] = React.useState({
    name: checked,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <>
      <label className={"primary-switch"}>
        {leftlabel?.length > 0 && (
          <span
            className={"left-label " + (state.name.valueOf() === false && rightlabel?.length !== 0 ? 'active' : '')}>
            {leftlabel}
          </span>
        )}

        <Switch
          name="name"
          id={id}
          checked={state.name}
          disabled={disabled}
          color='primary'
          inputProps={inputProps}
          onChange={handleChange}
          required={required}
        />

        {rightlabel?.length > 0 && (
          <span className={"right-label " + (state.name.valueOf() === true && leftlabel?.length !== 0 ? 'active' : '')}>
            {rightlabel}
          </span>
        )}
      </label>
    </>
  );
};

export default DefaultSwitch;
