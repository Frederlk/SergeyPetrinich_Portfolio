import { FC, ChangeEvent, useState, useCallback, useEffect } from "react";
import { useActions } from "../../hooks";

const Quantity: FC<{ className?: string }> = ({ className }) => {
    const [quantity, setQuantity] = useState<any>(1);

    const handleQuantityChange = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
            const value = +e.target.value.replace(/\D/g, "");
            if (quantity > 100 || value > 100) return;
            if (quantity < 1 || value < 1) {
                setQuantity(1);
            } else {
                setQuantity(value);
            }
        },
        [quantity]
    );

    const handleMinus = useCallback(() => {
        quantity >= 1 && quantity <= 100
            ? quantity <= 1
                ? setQuantity(1)
                : setQuantity(+quantity - 1)
            : null;
    }, [quantity]);

    const handlePlus = useCallback(() => {
        quantity >= 1 && quantity < 100 ? setQuantity(+quantity + 1) : null;
    }, [quantity]);

    return (
        <div className={`${className || ""} quantity`}>
            <button type="button" onClick={handleMinus} className="quantity__button quantity__button_minus">
                {/* <img src={images.icons.icon_down} alt="-" /> */}
            </button>
            <div className="quantity__input">
                <input
                    autoComplete="off"
                    onChange={(e) => handleQuantityChange(e)}
                    type="text"
                    name="quantity"
                    value={quantity}
                />
            </div>
            <button type="button" onClick={handlePlus} className="quantity__button quantity__button_plus">
                {/* <img src={images.icons.icon_down} alt="+" /> */}
            </button>
        </div>
    );
};

export default Quantity;
