import { Field, FieldProps } from "formik";
import { FC, ReactNode } from "react";

interface CheckboxProps {
    name: string;
    children: ReactNode;
    className?: string;
    id: string;
}

const Checkbox: FC<CheckboxProps> = ({ id, name, children, className }) => {
    return (
        <div className={`checkbox ${className || ""}`}>
            <Field name={name}>
                {({ field }: FieldProps) => (
                    <input
                        id={id}
                        {...field}
                        className="checkbox__input"
                        type="checkbox"
                        name={name}
                        checked={field.value}
                    />
                )}
            </Field>

            <label htmlFor={id} className="checkbox__label">
                <span className="checkbox__text">{children}</span>
            </label>
        </div>
    );
};

export default Checkbox;
