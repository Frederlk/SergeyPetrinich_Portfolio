import { FC, useMemo, memo } from "react";

const Stack: FC<{ stack: string[]; className: string }> = ({ stack, className }) => {
    const items = useMemo(
        () =>
            stack.map((item, i) => (
                <li key={item + i} className={`${className}-item`}>
                    {item}
                </li>
            )),
        [stack]
    );

    return <ul className={className}>{items}</ul>;
};

export default memo(Stack);
