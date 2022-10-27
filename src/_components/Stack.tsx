import { FC, useMemo, memo } from "react";

const Stack: FC<{ stack: string[]; className: string; limit?: number }> = ({ stack, className, limit }) => {
    const items = useMemo(
        () =>
            stack.map((item, i) => {
                if (limit) {
                    return (
                        i < limit && (
                            <li key={item + i} className={`${className}-item`}>
                                {item}
                            </li>
                        )
                    );
                } else {
                    return (
                        <li key={item + i} className={`${className}-item`}>
                            {item}
                        </li>
                    );
                }
            }),
        [stack]
    );

    return <ul className={className}>{items}</ul>;
};

export default memo(Stack);
