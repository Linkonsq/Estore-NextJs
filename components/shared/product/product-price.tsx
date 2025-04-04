import { cn } from "@/lib/utils";

const ProductPrice = ({
  value,
  classNameProp,
}: {
  value: number;
  classNameProp?: string;
}) => {
  const stringValue = value.toFixed(2);
  const [intValue, floatValue] = stringValue.split(".");

  return (
    <p className={cn("text-2xl", classNameProp)}>
      <span className="text-xs align-super">$</span>
      {intValue}
      <span className="text-xs align-super">.{floatValue}</span>
    </p>
  );
};

export default ProductPrice;
