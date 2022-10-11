import { FC, ReactNode, useState } from "react";

interface CheckboxProps {
    name: string;
    id: string;
    children: ReactNode;
    className?: string;
}

const Checkbox: FC<CheckboxProps> = ({ id, name, children, className }) => {
    const [checked, setChecked] = useState(false);

    return (
        <div className={`checkbox ${className || ""}`}>
            <input
                id={id}
                className="checkbox__input"
                type="checkbox"
                name={name}
                checked={checked}
                onChange={() => setChecked(!checked)}
            />

            <label htmlFor={id} className="checkbox__label">
                <span className="checkbox__text">{children}</span>
            </label>
        </div>
    );
};

export default Checkbox;
