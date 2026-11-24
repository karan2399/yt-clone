import Button from "./Button";

const ButtonsList = () => {
  return (
    <div className="flex w-full min-w-0 flex-nowrap overflow-x-auto py-2">
      <Button name="All" />
      <Button name="Gaming" />
      <Button name="Shows" />
      <Button name="Songs" />
      <Button name="Travel" />
      <Button name="Cricket" />
      <Button name="Gym" />
      <Button name="Health" />
      <Button name="News" />
      <Button name="AI" />
      <Button name="Cooking" />
    </div>
  );
};

export default ButtonsList;
